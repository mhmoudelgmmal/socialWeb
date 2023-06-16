import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!:FormGroup
  constructor(private auth:AuthService){}
  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.registerForm = new FormGroup({
    email :new FormControl(null,[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(6)])
  })
  }

  onSubmit(form:FormGroup){
    if (form.valid) {
      let email = form.controls['email'].value
      let password = form.controls['password'].value
      this.auth.register(email,password)
    }
  }

}
