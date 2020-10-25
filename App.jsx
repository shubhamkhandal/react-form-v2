import React, { useState } from 'react';

const App = () => {
    const  [fullName, setfullName] = useState({
        fname: "",
        lname:"",
        email: "",
        phone: ""
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // setfullName(event.target.value);

        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } = event.target;

        setfullName((preValue) => {
            // console.log(preValue)
            if(name === 'fname'){
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone
                };
            } else if (name === 'lname'){
                return{
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone
                };
            }else if (name === 'email'){
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone
                };
            }else if (name === 'phone'){
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value
                };
            }
        });
    };


    const onSubmit = (event) => {
        event.preventDefault();
        alert("form Submitted!😄");

    };

   
   return (
    <reactFragment>
    <form onSubmit={onSubmit}>
        <div>
            <h1>Hello {fullName.fname}{fullName.lname}</h1>
            <p>{fullName.phone}{fullName.email}</p>
            <input type="text" placeholder="enter your name" name="fname" onChange={inputEvent} value={fullName.fname} /><br/>
            <input type="text" placeholder="enter your Last name" name="lname" onChange={inputEvent} value={fullName.lname} /><br/>
            <input type="email" placeholder="enter your mail" name="email" onChange={inputEvent} value={fullName.email} /><br/>
            <input type="number" placeholder="enter your number" name="phone" onChange={inputEvent} value={fullName.phone} /><br/>
            <button type="submit" >Change above 👍</button>
        </div>
    </form>
    </reactFragment>
   );

};
export default App;