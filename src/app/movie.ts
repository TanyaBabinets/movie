export class Movie {
    Title: string;
    Year: string;
    imdbRating: string;
    Runtime: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
    constructor(title: string, year: string, imdbRating: string,
        runtime: string,
        director: string,
        actors: string,
        plot: string,
        poster: string)
    {
        this.Title = title;
        this.Year = year;
        this.imdbRating = imdbRating;
        this.Runtime = runtime;
        this.Director = director;
        this.Actors = actors;
        this.Plot = plot;
        this.Poster = poster;
      
    }
}