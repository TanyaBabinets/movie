import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgFor, NgIf } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpService } from './http.service';
import { Movie } from './movie';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  providers: [HttpService]
,
})
export class AppComponent {
  title: string = 'movie';
  movieName: string = '';
  movie: Movie | null = null;
  error: string = '';
  isMovieFound: boolean = false;
  constructor(private httpService: HttpService) { }
  onSearchMovie() {
  
      this.httpService.searchMovie(this.movieName).subscribe({
        next: (data: any) => {
       
          if (data.Response === 'True') {
            console.log('Полученные данные:', data); 
            this.movie = new Movie(
              data.Title,
              data.Year,
              data.imdbRating,
              data.Runtime,
              data.Director,
              data.Actors,
              data.Plot,
              data.Poster
            );
            this.error = '';
            this.isMovieFound = true;
           
          } else {
            this.error = "Movie not found";
            this.movie = null;
            this.isMovieFound = false;
          }
        },
        error: (err: any) => {
          this.error = "Error on receiving data";
          this.movie = null;
          this.isMovieFound = false;
          console.error('Ошибка при получении данных:', err); 
        }
      });
    }

    reset() {
      this.movieName = '';
      this.movie = null;
      this.error = '';
      this.isMovieFound = false; // сброс
      
    }
  }
