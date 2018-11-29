import { Component, OnInit } from '@angular/core';
import { TeamService } from './../team.service';
import { TeamObject } from '../Models/TeamObject';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   
   TeamObject;
   
  constructor(private _servicio:TeamService) { 
     this._servicio.getTeam().subscribe(data => {
    console.log(data);
    this.TeamObject = data;
  });
 }
  
  
  ngOnInit() {
  }

  getTeam()
  {
  
}
}