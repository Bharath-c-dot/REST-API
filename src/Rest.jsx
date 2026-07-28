import React, { useEffect, useState } from 'react'

const Rest = () => {

    const [data,setdata] = useState([])

    async function fetching(){

        const mydata = await fetch("https://jsonplaceholder.typicode.com/users")
        const fetchdata = await mydata.json();
        setdata(fetchdata)
        console.log(fetchdata)
    }

    useEffect(()=>{
        fetching()
    },[])

    console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default Rest
