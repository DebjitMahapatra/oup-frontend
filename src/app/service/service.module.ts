import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationService } from './registration.service';
import { AuthenticationService } from './authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    ],
  providers:[
    AuthenticationService,
    RegistrationService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorService, 
      multi: true
    }
  ]
})
export class ServiceModule {
  AuthenticationService : AuthenticationService;
  RegistrationService : RegistrationService;
}
