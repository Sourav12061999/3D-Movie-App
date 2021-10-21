import React from 'react'
import  "../../CSS/Header.css";
import { useQuery } from 'react-query'
import axios from 'axios'
function Header({searchfield,setsearchfield,setmovie}) {
    let search;
    const{data , refetch}=useQuery("Super Heros2",()=>{
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=84bd2ca964c1790070846809a1b4300b&query=${search}`)
       },{enabled:false})
    function Fetch(searchValue){
     search=searchValue;
     refetch();
    }
    let interval;
    return (
        <nav>
            <div className="logo"><img src="movie.png" alt=""/></div>
        <div className="search">
            <input placeholder="🔍 Search" id="input" type="text" onInput={(e)=>{
                if(searchfield===false){
                    setsearchfield(true);
                }
               clearTimeout(interval);
               interval=setTimeout(() => {
                   Fetch(e.target.value)
               }, 1000);
            }}/>
            {data && searchfield?(<div id="result">
                {
                data.data.results.map((element)=>{
                    let url;
                    if(element.poster_path===null){
                        url=`not.jfif`;
                    }else{
                        url=`https://image.tmdb.org/t/p/w500/${element.poster_path}`;
                    }
                  return (
                      <div key={element.id} className="card" onClick={()=>{setmovie(element);setsearchfield(false)}}>
                          <div style={{background:`url(${url})`,backgroundSize:"cover"}}></div>
                          <p>{element.title}</p>
                      </div>
                  )
                })}
            </div>):null}
        </div>
        </nav>
    )
}

export default Header
