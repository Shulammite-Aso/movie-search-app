import React, {useState} from 'react';
import MovieCard from './movieCard'

export default function SearchMovies() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
     e.preventDefault();
     console.log('submitting');

     const url = `https://api.themoviedb.org/3/search/movie?api_key=49f4c5caa134eb133b6cedd7e36378b0&language=en-US&query=${query}&page=1&include_adult=false`;

     try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
     }catch(err) {
       console.log(err);
     }

  }


    return (
      <>
        <form className="form" onSubmit={searchMovies}>
          <label className="label" htmlFor="query">Movie name</label>
          <input type="text" name="queury" className="input" placeholder="search a movie.."
          value={query} onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">Submit</button>
        </form>
        <div className="card-list">
          {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie}  key={movie.id}/>
          ))}
        </div>
          </>
    );

}