import { Component, OnInit ,AfterViewInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit ,AfterViewInit {
    email   : string;
  password  : string;
 

  constructor(public afAuth : AngularFireAuth, public router: Router) { }

  ngOnInit() {}

  register()
  {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {
      this.router.navigateByUrl('');
    }, (err) => {
      alert(err);
    });
  }

    back()
    {
      this.router.navigateByUrl('login');
    }



    ngAfterViewInit(){

      document.querySelector('ion-tab-bar').style.display = 'none';
    }
    

}
