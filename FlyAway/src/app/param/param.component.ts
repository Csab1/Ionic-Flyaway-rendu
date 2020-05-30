import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.scss'],
})
export class ParamComponent implements OnInit {

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {

 
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
      this.router.navigateByUrl('');
    })
  }
}




  


