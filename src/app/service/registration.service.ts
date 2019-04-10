import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private appService: AppService) { }

  registerUser(userRegistrationForm: any) {
    debugger;

    const requsetBody = {
      firstname: userRegistrationForm.value.firstname,
      lastname: userRegistrationForm.value.lastname,
      email: userRegistrationForm.value.email,
      password: userRegistrationForm.value.password,
      mobilenumber: userRegistrationForm.value.mobilenumber,
      gender: userRegistrationForm.value.gender,
      group: userRegistrationForm.value.group
    }
    return this.appService.post(`${environment.url_registration}`, requsetBody);
  }
}
