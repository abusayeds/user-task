import React from 'react';

const Dashbord = () => {
    const addUser = (e) => {
        e.preventDefault()
        const form = e.target;

        const Avatar = form.Avatar.value;
        const FristName = form.FirstName.value;
        const LastName = form.LastName.value;
        const Email = form.Email.value;
        const Address= form.Address.value;
        const CompanyName = form.CompanyName.value;
        const user = {Avatar, FristName,LastName,Email,Address,CompanyName}
        console.log(user);


        fetch("http://localhost:5000/user", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(user)
    })
    form.reset()
    }
    return (
        <div className='w-4/6 m-auto'>
            <div>
             <form onSubmit={addUser} className='p-4'>
                <label className='flex flex-col mb-5' >
                    <span className='capitalize mb-2'>Avatar *</span>
                    <input name='Avatar' className='border-2 p-2 rounded' type="text"  placeholder='Product name'/>
                </label>
                <label className='flex flex-col mb-5' >
                    <span className='capitalize mb-2'>First Name *</span>
                    <input name='FirstName' className='border-2 p-2 rounded' type="text"  placeholder='Product name'/>
                </label>
                <label className='flex flex-col mb-5' >
                    <span className='capitalize mb-2'> Last Name *</span>
                    <input name='LastName' className='border-2 p-2 rounded' type="text"  placeholder='Product name'/>
                    <input type="email" name="" id="" />
                </label>
                <label className='flex flex-col mb-5' >
                    <span className='capitalize mb-2'>Email*</span>
                    <input name='Email' className='border-2 p-2 rounded' type="email"  placeholder='Product name'/>
                </label>
                <label className='flex flex-col mb-5' >
                    <span className='capitalize mb-2'>Address *</span>
                    <input name='Address' className='border-2 p-2 rounded' type="text"  placeholder='Product name'/>
                </label>
                <label className='flex flex-col mb-5' >
                    <span className='capitalize mb-2'>Company Name*</span>
                    <input name='CompanyName' className='border-2 p-2 rounded' type="text"  placeholder='Product name'/>
                </label>
                <input className='w-full cursor-pointer text-center bg-blue-600 p-2 rounded text-white' type="submit" value="Add user" />
             </form>
        </div>
        </div>
    );
};

export default Dashbord;