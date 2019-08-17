import { Component, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, catchError, switchMap } from 'rxjs/operators';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, AfterViewInit {

  public search$: Subject<string>;
  public displayedColumns: string[];
  public isLoadingContacts: boolean;
  public data: Contact[] = [];

  public constructor(
    private cdr: ChangeDetectorRef,
    private contactService: ContactService)
  {
    this.search$ = new Subject<string>();
    this.isLoadingContacts = true;
    this.displayedColumns = [ 'lastname', 'firstname', 'phone' ];
  }

  public ngOnInit() {
    this.isLoadingContacts = true;
  }

  public ngAfterViewInit() {
    this.search$.pipe(
      debounceTime(250),
      switchMap(search => {
        return this.contactService.list(search).pipe(
          catchError(() => of([]))
        );
      })
    ).subscribe(contacts => {
      this.data = contacts;
      this.isLoadingContacts = false;
    });

    this.search$.next();
  }

  public goToDetail(id: number) {

  }

  public applySearch(search: string) {
    this.search$.next(search);
  }
}
