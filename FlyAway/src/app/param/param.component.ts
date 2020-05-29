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

  ngOnInit() {}

}
