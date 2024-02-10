import React, { useContext, useEffect, useState } from 'react';
import './alluser.css'
import { Link } from 'react-router-dom';
import useAllUser from '../../hook/useAllUser';
import { AuthContext } from '../../Context/Context';

const Alluser = () => {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    console.log(filter);
    const [users, setUsers] = useState([])
    const [u, setU] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    useEffect(() => {
        const searchItem = users.filter((item) => item?.FristName.toLowerCase().includes(search));
        setU(searchItem);

       if(filter==='email'){
        const filtreEmail = users.filter((item) => item?.Email?.toLowerCase().includes(search));
        setU(filtreEmail)

       }
      else if(filter==='company'){
            const filtreCompany = users.filter((item) => item?.CompanyName?.toLowerCase().includes(search));
            setU(filtreCompany)
           }
    }, [users, search])


console.log(filter);


return (
    <div>
        <div className='flex items-center justify-between px-3 md:justify-center Lg:justify-center m-auto mt-5 gap-3'>
            <input onChange={() => setSearch(event.target.value)} className='w-36 md:w-64 lg:w-96 p-2 rounded bg-teal-600 border border-teal-50 focus:outline-none border-spacing-4 placeholder-white' type="text" placeholder='Seach' />
            <div>
                <select onChange={() => setFilter(event.target.value)} className='input border border-black p-3 rounded-md w-32 md:w-auto lg:w-auto ' name="" id="">
                    <option selected disabled >sort here</option>
                    <option value='name'>Name</option>
                    <option value='email'>email</option>
                    <option value='company'>Company</option>
                </select>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 '>
            {
              u.length > 0 &&  u.map(user =>
                <div className='border rounded relative' key={user._id}>
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
                    <button ><Link to={`/user/${user?._id}`} className='bg-teal-500 p-2 hover:bg-teal-700 hover:font-bold text-white w-full absolute bottom-0'> see single user</Link></button>
                </div>
                )
            }

        </div>
        {
             u.length <= 0 && <h2 className='text-2xl font-bold text-center my-7'>No User Available Here!</h2>
        }
    </div>

);
};

export default Alluser;