import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';

const Header = () => {
    // const {value} = useContext(AuthContext)
    // const [search, setSearch] = useState('')
    // console.log(search);


    return (
        <div className="navbar bg-base-300 md:p-5  top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
                        <NavLink
                            to='/' className={({ isActive }) =>
                                isActive
                                    ? "text-purple-500" : ""
                            }
                        >
                            All User
                        </NavLink>
                        <NavLink
                            to='/dashbord' className={({ isActive }) =>
                                isActive
                                    ? "text-purple-500" : ""
                            }
                        >
                          Dashbord/add user
                        </NavLink>
                       
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Task</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                       <NavLink
                            to='/' className={({ isActive }) =>
                                isActive
                                    ? "text-purple-500" : ""
                            }
                        >
                            All User
                        </NavLink>
                        <NavLink
                            to='/dashbord' className={({ isActive }) =>
                                isActive
                                    ? "text-purple-500" : ""
                            }
                        >
                          Dashbord/add user
                        </NavLink>
                       
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://play-lh.googleusercontent.com/sObgz02QVCJzhEn8xNyP0NpBbe_ydHlA8f2f2Kb_jfnjBTz2uWYNxQwCx4cXfKb6X_c" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        // <div className='flex justify-around items-center p-4 bg-teal-600 text-white'>
        //     <div>
        //         <p className='text-3xl'>Task</p>
        //     </div>

        //     <div className='flex gap-5'>


        //          <Link to= '/'> <p>All User</p></Link>
        //          <Link to='/dashbord'>  <p>Dashbord/add user</p></Link>
        //     </div>
        // </div>
    );
};

export default Header;