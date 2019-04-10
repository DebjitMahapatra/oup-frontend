import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/service/registration.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userRegistrationForm : FormGroup;
  errorMassege : string;

  constructor(private registrationService : RegistrationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.userRegistrationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      gender: ['male', Validators.required],
      group: ['', Validators.required]
  });
  }

  RegisterUser(){
    this.registrationService.registerUser(this.userRegistrationForm).subscribe(
      (response : any)=>{
        if(response){
          console.log(response);
          this.setToken(response);
        }
      },
      (error : any)=>{
        console.log(error);
      },
      ()=>{
        console.log("completed");
      }
    )
  }

  private setToken(response){
    localStorage.setItem('tokenId',response.token);
    console.log(localStorage.getItem('tokenId'));
  }

}
