import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  private contactId: number;
  public contactForm: FormGroup;
  public isLoadingContact: boolean;

  public constructor(
    private contactService: ContactService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {

    this.isLoadingContact = true;
  }

  public ngOnInit() {
    this.isLoadingContact = true;
    this.contactId = null;
    this.contactForm = this.fb.group({
      lastname: [ '', [ Validators.required, Validators.maxLength(255) ] ],
      firstname: [ '', [ Validators.required, Validators.maxLength(255) ] ],
      phone: [ '', [ Validators.required, Validators.maxLength(25), Validators.pattern(/^[+][1-9][\d][\s][\d]{2}[\s][\d]{6,}$/) ] ]
    });

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id: string = params.get('id');

        return isNaN(+id) ? of(null) : this.contactService.get(+id);
      })
    ).subscribe((contact: Contact) => {
      if (contact) {
        this.contactForm.patchValue(contact);
        this.contactId = contact.id;
      }
      this.isLoadingContact = false;
    });
  }

  public save() {
    if (this.contactForm.valid) {
      this.contactService.save(this.contactForm.value, this.contactId).pipe(
        catchError(err => {
          this.snackBar.open('Error : Contact has not been saved !', null, {
            duration: 3000,
            panelClass: [ 'error-snackbar' ]
          });
          return of(null);
        })
      ).subscribe((data: Contact) => {
        if (data) {
          this.snackBar.open('Contact has been saved !', null, {
            duration: 3000,
            panelClass: [ 'success-snackbar' ]
          });
          this.router.navigate(['/']);
        }
      });
    }
  }

  public get lastname(): FormControl {
    return this.contactForm.get('lastname') as FormControl;
  }

  public get firstname(): FormControl {
    return this.contactForm.get('firstname') as FormControl;
  }

  public get phone(): FormControl {
    return this.contactForm.get('phone') as FormControl;
  }
}
