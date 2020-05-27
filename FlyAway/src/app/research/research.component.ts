import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
})
export class ResearchComponent implements OnInit {

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {}
  
  airports()
  {
      this.router.navigateByUrl('airports');
   
  }

    flynumber()
    {
      this.router.navigateByUrl('flynumber');
    }

    destination()
    {
      this.router.navigateByUrl('destination');
    }



  }

