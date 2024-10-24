import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    searchMovie(movieName: string): Observable<any> {
        const apiKey = '6576219c';  
        return this.http.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`);
    }
}




    

