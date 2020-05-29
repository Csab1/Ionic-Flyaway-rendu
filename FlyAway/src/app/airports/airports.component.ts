import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss'],
})

export class AirportsComponent implements OnInit  {
map: GoogleMap;
  constructor(public router: Router, public afAuth: AngularFireAuth,public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform) { if (this.platform.is('cordova')) {
      this.loadMap();
    }}

  ngOnInit() {

}
loadMap() {
	Environment.setEnv({
		API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCIuTC9iJjmSX7HYMJZ6ZJVNYOEtFd5ums',
		API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCIuTC9iJjmSX7HYMJZ6ZJVNYOEtFd5ums'
	});
	this.map = GoogleMaps.create('map_canvas', {
		camera: {
			target: {
				lat: 43.610769,
				lng: 3.876716
			},
			zoom: 12,
			tilt: 30
		}
	});
}
}