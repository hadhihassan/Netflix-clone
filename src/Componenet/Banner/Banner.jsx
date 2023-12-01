import React from 'react';
import { useEffect } from 'react';
import "./Banner.css"
import axios from '../../constants/axios'
import { API_KEY, baseUrl, imageUrl } from '../../constants/constants'
import { useState } from 'react';
const Banner = () => {
    const getRandomNumberBelow20 = () => Math.floor(Math.random() * 20);
    const randomNum = getRandomNumberBelow20();
    const [movie, setMovie] = useState({})
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((responce) => {
                setMovie(responce.data.results[randomNum])
            })
    }, [])
    return (<div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : 'Loading...'}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : "Loading..."}</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>)
}
export default Banner;