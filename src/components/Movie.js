import React from 'react'


const image_api = "https://image.tmdb.org/t/p/w500/";
const Movie = ({title,poster_path,overview,vote_average}) => {

  const setVoteAverage = (vote) =>{
    if(vote >= 8)
    {
    return "green";
    }
    else if (vote>=6)
    {
        return "orange";
    }
    else{
      return "red";
    }
  }

    return (
        <div className="movie">
         
          <img src={ (poster_path ?  image_api + poster_path : "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg")} alt={title} />
         <div className="movie-info">
         <h3>{title}</h3>
         <span style={{backgroundColor:setVoteAverage(vote_average)}} className="tag">{vote_average}</span>
         </div>
              
          <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
        </div>
    )
}  

export default Movie;