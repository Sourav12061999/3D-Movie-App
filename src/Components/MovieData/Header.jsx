import React,{useState} from 'react'
import  "../../CSS/Header.css";
function Header({searchfield,setsearchfield,setmovie}) {
    const [data,setdata]=useState([]);
    function Fetch(searchValue){
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=84bd2ca964c1790070846809a1b4300b&query=${searchValue}`)
     .then((res)=>{
         return res.json()
     })
     .then((res)=>{
         setdata(res.results);
     })
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
            {searchfield?(<div id="result">
                {
                data.map((element)=>{
                    let url=`https://image.tmdb.org/t/p/w500/${element.poster_path}`;
                    if(element.poster_path===null){
                        url=`not.jfif`;
                    }
                  return (
                      <div key={element.id} className="card" onClick={()=>{setmovie(element)}}>
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
