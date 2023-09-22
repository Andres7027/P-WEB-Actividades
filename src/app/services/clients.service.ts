import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ClientComponent } from '../modules/client/client.component';
//import {Observable} form 

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  apiUrl = "https://crudcrud.com/api1220cebb26d74f11ae63b1b6e2a1a13d";

  constructor(protected http:HttpClient) { 
  }
}
