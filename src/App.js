import React, { useState,useEffect } from "react";
import './App.css';
import Movie from './components/Movie';

const YOUR_API_KEY =process.env.REACT_APP_API_KEY;

console.log(YOUR_API_KEY)

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${YOUR_API_KEY}`;

 
  const search_api = `https://api.themoviedb.org/3/search/movie?api_key=${YOUR_API_KEY}&query=`;
 



function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  useEffect(() =>{
   
   getMovies(FEATURED_API);

    },[]);

    const getMovies =(API) =>{

      fetch(API).then(movieResp => movieResp.json()).then  (data=>{
      
    
        setMovies(data.results)});
  

    }

  const handleOnSubmit= (e) =>{
        e.preventDefault();

        if(searchTerm)
        {

          getMovies(search_api+searchTerm);
        
      setSearchTerm('');
        }
   };

    const handleChange = (e) =>{
      setSearchTerm(e.target.value);
    }
  
  return (
    <>
    <div className="header1">
    
    <form onSubmit={handleOnSubmit}>
    <header  >
    <h2>Search Movies</h2>
    <input type="search" className="search" placeholder="Search.." value={searchTerm} onChange={handleChange} />
  </header>
    </form>
    </div>
   
    <div className="movie-container">
  
     {movies.length > 0 && movies.map(movie=><Movie key={movie.id} {...movie} />)}
     
    </div>
    </>
  );
}

export default App;
