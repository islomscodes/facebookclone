import { signin } from 'next-auth/client';
import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
      <div className="grid place-items-center">
            <img
                className=" my-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          width={300}
          height={400}
                layout="fixed"
                
            />
            

            <h1 onClick={signin} className="p-5 bg-blue-500 text-white font-bold rounded-full cursor-pointer" >Login with Facebook</h1>
    
      </div>
    );
}

export default Login
