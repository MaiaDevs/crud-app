import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamObject } from './Models/TeamObject';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {
    console.log('service working..');
   }
   getTeam(){
   
    return this.http.get<TeamObject[]>('http://localhost:4200/assets/movies.json')
    
  }
}
