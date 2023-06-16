import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/landing/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private auth:AuthService){}

signOut(){
this.auth.signOut()
}

}
