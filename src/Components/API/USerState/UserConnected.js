import React from 'react'

const UserConnected = ({ userName , userStat}) => {
    if(userStat===true){
     return (
    <div>
        Welcome {userName} Connected
    </div>
  )   
    }
    else{
        return (
            <div>
                Welcome {userName} not Connected
            </div>
          )
    }
  
}

export default UserConnected