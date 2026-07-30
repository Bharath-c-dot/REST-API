import React, { useEffect, useState } from 'react'

const ErrorHandlingData = () => {

    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    
    async function fetchingUserData(){
           
        try{

            const fetchData = await fetch("https://jsonplaceholder.typicode.com/users");

            if( !fetchData.ok){
                throw new Error("Failed to fetch user data.");
            }

            const userData = await fetchData.json();

            setData(userData)
        }
        catch(error)
        {
            setError(error.message)
        }
        finally
        {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchingUserData()
    },[])

    console.log(data)


  return (
    <div>
      {
        (loading)?<h1>Loading userData..</h1>:<></>
      }
      {
        (error)?<h2>Error : {error} </h2>:<></>
      }
      <h1>Users </h1>
      {
        data.map((user)=>(

            <div>
            <h2>user id : {user.id}</h2>
            <h3>user name : {user.name}</h3>
            <p>user email : {user.email}</p>
            </div>

        )
        )
      }
    </div>
  )
}

export default ErrorHandlingData
