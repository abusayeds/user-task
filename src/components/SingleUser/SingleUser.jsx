import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const SingleUser = () => {
const users = useLoaderData()
const [user , setuser] = useState([users])
    return (
        <div className='w-2/6 m-auto p-4'>
            {
            user.map( user => 
            <div className='border rounded relative'  key={user._id}>
             <div className='pb-20 px-4'>
             <p>Frist Name : {user.FristName}</p>
             <br />
             <p> Last Name : {user.LastName}</p>
             <br />
             <p>Email: {user.Email}</p>
             <br />
             <p>Avatar: {user.Avatar}</p>
             <br />
             <p>CompanyName : {user.CompanyName}</p>
             </div>
             
            </div>
                )
        }
        </div>
    );
};

export default SingleUser;