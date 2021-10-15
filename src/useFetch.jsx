import {useEffect} from 'react'

function useFetch(url,setdata,setisLoading) {
    useEffect(() => {
     setisLoading(false);
     fetch(url)
     .then((res)=>{
         return res.json()
     }).then((res)=>{
         setisLoading(true);
         setdata(res);
        //  console.log(res);
     })
        
    }, [url,setdata,setisLoading])
}

export default useFetch
