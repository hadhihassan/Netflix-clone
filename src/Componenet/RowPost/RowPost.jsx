import React, { useEffect, useState } from 'react';
import "./RowPost.css"
import axios from '../../constants/axios'
import {API_KEY,imageUrl} from '../../constants/constants'
const RowPost = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios
        .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
        .then((responce)=>{
            console.log(responce.data);
            setMovies(responce.data.results)
        })
        .catch((error)=>{
            // alert("that was a network error check you net")
        })
    }, [])
    return (

        <div className='row'>
            <h2>Netflix Orginals</h2>
            <div className='posters'>
                {
                    movies.map((obj)=>{
                         return <img alt="poster" className='poster' src={`${imageUrl+obj.backdrop_path}`}/>
                    })
                }
            </div>
        </div>
    )
}


export default RowPost;