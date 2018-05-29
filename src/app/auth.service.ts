import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface registerResponse {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getUserDetails(username, password) {
    //post thes details to API server user info if correct
    return this.http.post('/api/auth', {
      username,
      password
    }).subscribe(data => console.log(data, ' is what we got from the server'));
  }

  registerUser(username, password) {
    return this.http.post<registerResponse>('/api/register', {
      username,
      password
    });
  }
}
