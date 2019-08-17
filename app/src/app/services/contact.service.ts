import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

const CONTACT_URI = '/api/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public constructor(private http: HttpClient) { }

  public list(search?: string) {
    const url: string = search && search.length ? `${CONTACT_URI}?search=${encodeURIComponent(search)}` : CONTACT_URI;

    return this.http.get<any>(url).pipe(
      map(res => res.data)
    );
  }

  public save(data: any, id?: number) {
    const method: string = !!id ? 'put' : 'post';
    const url: string = !!id ? `${CONTACT_URI}/${id}` : CONTACT_URI;

    return this.http[method](url, data).pipe(
      map((res: any) => res.data)
    );
  }
}
