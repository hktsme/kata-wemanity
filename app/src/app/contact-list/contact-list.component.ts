import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../models/contact';
import { Subject, of } from 'rxjs';
import { debounceTime, catchError, switchMap } from 'rxjs/operators';
import { ContactService } from '../services/contact.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy, AfterViewInit {

  public search$: Subject<string>;
  public displayedColumns: string[];
  public isLoadingContacts: boolean;
  public data: Contact[] = [];

  public constructor(
    private contactService: ContactService,
    private snackBar: MatSnackBar) {

    this.search$ = new Subject<string>();
    this.isLoadingContacts = true;
    this.displayedColumns = [ 'lastname', 'firstname', 'phone', 'action' ];
  }

  public ngOnInit() {
    this.isLoadingContacts = true;
  }

  public ngAfterViewInit() {
    this.search$.pipe(
      // Debounce to avoid multiple request when user is typing in search input.
      debounceTime(250),
      switchMap(search => {
        return this.contactService.list(search).pipe(
          catchError(() => {
            this.snackBar.open('Error when loading contacts', null, {
              duration: 3000,
              panelClass: [ 'error-snackbar' ]
            });
            return of([]);
          })
        );
      })
    ).subscribe(contacts => {
      this.data = contacts;
      this.isLoadingContacts = false;
    });

    // Trigger first load.
    this.search$.next();
  }

  public ngOnDestroy() {
    this.search$.complete();
  }

  public applySearch(search: string) {
    this.search$.next(search.trim());
  }
}
