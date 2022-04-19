import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Backpack } from 'src/app/shared/model/backpack';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackpackService {
  constructor(public http: HttpClient) {}

  getBackpacks(): Observable<Backpack[]> {
    return this.http.get<any>(`${environment.backpackUrl}`);
  }
}
