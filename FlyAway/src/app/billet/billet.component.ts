import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";


@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.scss'],
})
export class BilletComponent implements OnInit {

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {}


  backto()
  {
    this.router.navigateByUrl('vols');
  }



}
