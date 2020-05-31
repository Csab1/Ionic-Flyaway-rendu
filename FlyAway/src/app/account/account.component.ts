import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {}

  backto()
  {
    this.router.navigateByUrl('vols');
  }

}
