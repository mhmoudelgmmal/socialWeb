import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth,
              private _router:Router) { }
  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{

      localStorage.setItem("auth","true")

        this._router.navigate(['/panel'])

    })
  }
  register(email:string,password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{

        this._router.navigate(['/landing/login'])

    },err=>{
      alert(err.message)
      console.log('Error', err.message);
      return;
    })
  }
  signOut(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem("auth")
      this._router.navigate(['/login'])
    })
  }
}
