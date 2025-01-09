import React, { useEffect ,useState} from 'react'
import  './UseFetch.module.css'


const UseFetch = () => {
    const nbr = 5;
    const [apiData , setApiData]= useState([]);
    const getData = async (url) => {
        const response = await fetch(url);
        const convertedData = await response.json();
        setApiData(convertedData.data_1h);
        console.log(convertedData);
    }
    useEffect(()=>{
        // getData(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${nbr}&offset=${nbr}`)
        // getData(`https://google.serper.dev/images`)
        getData(`https://my.meteoblue.com/packages/basic-1h_basic-day?apikey=Qfv4mAu3VOS2YZnP&lat=12.65&lon=-8&asl=338&format=json`)

    },[])
    
  return (
    <div>
      {
        apiData.map((e) => {
          return(
            <div>{e.metadata.time}
              <h1>{e.title}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default UseFetch