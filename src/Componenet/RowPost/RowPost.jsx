import React, { useEffect, useState } from 'react';
import "./RowPost.css"
import axios from '../../constants/axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import Youtube from "react-youtube"
const RowPost = (props) => {
    const [movies, setMovies] = useState([])
    const [url, setUrlId] = useState("")
    useEffect(() => {
        axios
            .get(props.url)
            .then((responce) => {
                console.log(responce.data);
                setMovies(responce.data.results)
            })
            .catch((error) => {
                // alert("that was a network error check you net")
            })
    }, [])

    const opts = {
        height: "389",
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }
    const handleMovieVideo = (id) => {
        console.log(id);
        axios
          .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
          .then((response) => {
            console.log(response.data);
            if(response.data.results.length !== 0){
                setUrlId(response.data.results[0])
            }
          })
          .catch((error) => {
            console.error('Error fetching movie videos:', error);
          });
      };
      const handleClickClose = () => {
        setUrlId("")
      }
      
    return (

        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies.map((obj) => {
                        return <> <img onClick={() => handleMovieVideo(obj.id)} alt="poster" className={props.isSmall ? 'small_poster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} />         
                    </>
                    })
                }
            </div>
            { url && <button className='close_btn' onClick={()=>handleClickClose()}> X</button>}
           { url &&  <Youtube  opts={opts} videoId={url.key}/>}
        </div>
    )
}


export default RowPost;