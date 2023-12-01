import React, { useEffect, useState } from 'react';
import "./RowPost.css"
import axios from '../../constants/axios'
import {API_KEY,imageUrl} from '../../constants/constants'
const RowPost = (props) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios
        .get(props.url)
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
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies.map((obj)=>{
                         return <img alt="poster" className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`}/>
                    })
                }
            </div>
        </div>
    )
}


export default RowPost;