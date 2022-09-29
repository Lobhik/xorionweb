import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// const headerOption = {
// headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {

  url = "http://127.0.0.1:5000/users"
  // url = environment.SERVER_URL;

  constructor(private http: HttpClient) { }
  users() {
    return this.http.get(this.url);
  }

  getSingleUser(id: any) {
    return this.http.get(this.url + '/' + id);
  }

  saveUser(data: any) {
    return this.http.post(this.url, data);
  }
}
