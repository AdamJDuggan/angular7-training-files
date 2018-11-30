
import { Injectable } from '@angular/core';

// Use Angulars built-in service for doing AJAX calls
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor( private http:HttpClient ) {}

  getData = path => this.http.get( path );

}

