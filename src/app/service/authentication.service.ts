import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private appService: AppService) { }

  userAuthentication(userAuthenticationForm: any) {

    const requsetBody = {
      username: userAuthenticationForm.value.username,
      password: userAuthenticationForm.value.password
    }
    return this.appService.post(`${environment.url_login}`, requsetBody);
  }
}
