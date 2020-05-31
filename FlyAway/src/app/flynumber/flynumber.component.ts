import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-flynumber',
  templateUrl: './flynumber.component.html',
  styleUrls: ['./flynumber.component.scss'],
})
export class FlynumberComponent implements OnInit {

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {}


  backto()
  {
    this.router.navigateByUrl('research');
  }
}


