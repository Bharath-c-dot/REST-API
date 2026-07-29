import React from 'react'


const Display = ({userdata}) => {

  
  console.log(userdata);

 let data = userdata.map((user,index)=>{
    console.log(user.id)
  })
  

  return (
    <div>
      <h1> hello </h1>
      {
        userdata.map((user)=>(
          <div>
            <h1>{user.id}</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      }
      {/* {
        userdata.map((user)=>{
          return(
          <div>
            <h1>{user.id}</h1>
            <p>{}</p>

          </div>
        );
        })
        
      } */}
    </div>
  )
}

export default Display
