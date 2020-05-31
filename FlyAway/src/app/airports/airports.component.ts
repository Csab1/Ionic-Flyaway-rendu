import { Component, OnInit,AfterViewInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import * as L from 'Leaflet';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss'],
})


export class AirportsComponent implements OnInit, AfterViewInit{
 


  constructor(public router: Router, public afAuth: AngularFireAuth,){}
 
  
  ngOnInit() { 
    
}


ngAfterViewInit(){

  
  
 
  var map = L.map('map').setView([51.505, -0.09], 13);
 
   
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWl6dXRha2kiLCJhIjoiY2thdWlpcHJxMHNnajJ5bzN2azNzcXdibyJ9.sHQJGFLWZWB2luZKH3gI7w'
}).addTo(map);
 map.locate({setView: true});
console.log(map)
function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
  
}

map.on('locationfound', onLocationFound);
function onLocationError(e) {
alert(e.message);
}

map.on('locationerror', onLocationError);
} 



}



