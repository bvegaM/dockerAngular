import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Persona } from './persona';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient){}

    createPersona (persona: Persona){
        return this.http.post("http://localhost:8080/docker/v1/docker/crear",persona);
    }
}