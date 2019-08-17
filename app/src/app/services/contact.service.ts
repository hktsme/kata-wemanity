import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

const CONTACT_URI = '/api/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public constructor(private http: HttpClient) { }

  /**
   * @description Call API to retrieve all contacts.
   * @author Houtekiet Yves
   * @param [search] search parameters to filter contacts.
   */
  public list(search?: string): Observable<Contact[]> {
    const url: string = search && search.length ? `${CONTACT_URI}?search=${encodeURIComponent(search)}` : CONTACT_URI;

    return this.http.get<{ data: Contact[] }>(url).pipe(
      map(res => res.data)
    );
  }

  /**
   * @description Call API to retrieve a contact by his ID.
   * @author Houtekiet Yves
   * @param id ID of the asked contact.
   */
  public get(id: number): Observable<Contact> {
    return this.http.get<{ data: Contact }>(`${CONTACT_URI}/${id}`).pipe(
      map(res => res.data)
    );
  }

  /**
   * @description Save the new contact data.
   * @author Houtekiet Yves
   * @param data New data to save for the contact.
   * @param [id] If an ID is specified we are doing an update of an existing if not we do a new record.
   */
  public save(data: any, id?: number): Observable<Contact> {
    const method: string = !!id ? 'put' : 'post';
    const url: string = !!id ? `${CONTACT_URI}/${id}` : CONTACT_URI;

    return this.http[method](url, data).pipe(
      map((res: { data: Contact }) => res.data)
    );
  }
}
