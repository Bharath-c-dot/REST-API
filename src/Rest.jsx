import React, { useEffect, useState } from 'react'
import Display from './Display'

const Rest = () => {

    const [data,setdata] = useState([])

    useEffect(()=>{
      
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((fetchdata)=> fetchdata.json())
        .then((data)=>{
            setdata(data)
            console.log(data)
        })
        
    },[])

    // async function fetching(){

    //     const mydata = await fetch("https://jsonplaceholder.typicode.com/users")
    //     const fetchdata = await mydata.json();
    //     setdata(fetchdata)
    //     console.log(fetchdata)
    // }

    // useEffect(()=>{
    //     fetching()
    // },[])

    console.log(data)

  return (

    <div>
      <Display userdata={data}/>
    </div>
  )
}

export default Rest
