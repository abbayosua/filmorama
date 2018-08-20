
import React from "react";
import "./movies.css";
import MovieListItem from "../movielist"

class Movies extends React.Component {
  state = {
    movies: []
    
  }

  generateNumber() {
    const maxnumber = 100;
    let theNumbers =  Math.floor(Math.random() * maxnumber);
    return theNumbers;
  }

  componentDidMount() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=d92a5f89191929c27c28135283e365e8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.generateNumber()}`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => this.storeMovies(data))
      .catch(error => console.log(error))
  }

  storeMovies = data => {
    const movies = data.results.map( result => {
      return result;
    });

    this.setState({ movies })
  }

  render() {
    return (
      <section>
        <ul className="movies">
          {

            this.state.movies.map( movie => (
              <MovieListItem key={movie.id} movie={movie} />
            ))
          }
        </ul>
      </section>
    )
  }
}

export default Movies;