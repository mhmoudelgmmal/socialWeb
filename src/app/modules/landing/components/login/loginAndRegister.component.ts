import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './loginAndRegister.component.html',
  styleUrls: ['./loginAndRegister.component.css']
})
export class loginAndRegisterComponent {
  isLogin!:boolean
  loginAndRegisterForm!:FormGroup
  constructor(private auth:AuthService,
              private _Router:Router){
                if (this._Router.url.includes('login')){
                  this.isLogin = true
                }else{
                  this.isLogin = false
                }

              }
  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(){
    this.loginAndRegisterForm = new FormGroup({
    email :new FormControl(null,[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(6)])
  })
  }

  onSubmit(form:FormGroup){
    if (form.valid) {
      let email = form.controls['email'].value
      let password = form.controls['password'].value
      if (this.isLogin) {
        this.auth.login(email,password)
      }else{
        this.auth.register(email,password)
      }
    }
  }
}
