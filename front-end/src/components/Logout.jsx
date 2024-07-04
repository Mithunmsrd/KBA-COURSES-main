import React from 'react'

const Logout = () => {

    const logout = async()=>{
        try{
        const res = await fetch('api/logout')
        if(res,ok){
            toast.success('Logout success') 
             navigate('/')
        }
    }catch(error){
         toast.error('Something went wrong') 
        }
    }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout
