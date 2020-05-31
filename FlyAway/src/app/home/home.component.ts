import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit,AfterViewInit {
  user:string;
  constructor(public router: Router, public afAuth: AngularFireAuth, ) { }
  ngOnInit()
  {
  
   
    let user = localStorage.getItem('user');
    console.log(user);
    if (!user)
    {
      this.router.navigateByUrl('login');
    }
    
    
  }
  
  
  logOut()
  {
    this.afAuth.auth.signOut().then((user) => {
      localStorage.clear();
      this.router.navigateByUrl('login');
    })
    


  }


  ngAfterViewInit(){

    document.querySelector('ion-tab-bar').style.display = 'visible';
  }

  vols()
  {
      this.router.navigateByUrl('vols');
   
  }

  profil()
  {
    this.router.navigateByUrl('account');
  }
}
 


