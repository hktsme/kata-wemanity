import { Component, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, of } from 'rxjs';
import { debounceTime, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, AfterViewInit {

  public contacts$: Observable<Contact[]>;
  public displayedColumns: string[];
  public isLoadingContacts: boolean;
  public data: Contact[] = [];

  public constructor(private cdr: ChangeDetectorRef) {
    this.isLoadingContacts = true;
    this.displayedColumns = [ 'lastname', 'firstname', 'phone' ];
    // MOCK
    this.contacts$ = of([
      { id: 1, lastname: 'Doe', firstname: 'John', phone: '+32 03 1234567' },
      { id: 2, lastname: 'Doe', firstname: 'Melissa', phone: '+32 06 12345671' },
      { id: 3, lastname: 'Dupont', firstname: 'Albert', phone: '+36 06 1334567' },
      { id: 4, lastname: 'Dupont', firstname: 'Sarah', phone: '+53 04 12342567' }
    ]);
  }

  public ngOnInit() {
    this.isLoadingContacts = true;
  }

  public goToDetail(id: number) {

  }

  public ngAfterViewInit() {
    this.contacts$.pipe(
      debounceTime(5000),
      catchError(() => of([]))
    ).subscribe(contacts => {
      this.data = contacts;
      this.isLoadingContacts = false;
      this.cdr.detectChanges();
    });
  }
}
