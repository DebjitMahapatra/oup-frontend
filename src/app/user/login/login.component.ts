import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userAuthenticationForm: FormGroup;
  errorMassege: string;

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userAuthenticationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  doAuthentication() {
    if (this.userAuthenticationForm.status == "VALID") {
      this.authenticationService.userAuthentication(this.userAuthenticationForm).subscribe(
        (response: any) => {
          if (response) {
            console.log(response.token);
            this.setToken(response);
          }
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          console.log("completed");
        }
      );
    }
    else {
      this.errorMassege = "Error";
    }


  }

  private setToken(response) {
    localStorage.setItem('tokenId', response.token);
    console.log(localStorage.getItem('tokenId'));
  }
}
