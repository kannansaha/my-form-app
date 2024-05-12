"use client";
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import "./form.css";


const form = () => {

   const router = useRouter();
    
    const [formData,setFormData]=useState({
      name:"",
      email:"",
      message:""
    })
  
    const handleChange=(e)=>{
      const {name, value}=e.target;
      setFormData(preveState=>({
        ...preveState,
        [name] :value
      }))
    }
  
     const handleSubmit=(e)=>{
      e.preventDefault();
      router.push({
        pathname:"/submitted",
        query:formData });
    }

  return (
    <div className='forms'>

        <h1 className='header'>Contact</h1>

     <form onSubmit={handleSubmit} >

        {/* name */}
        <div>
        <label for="name">Name :</label>
        <input id="name" type="text"  name='name' value={formData.name} placeholder="Enter Your Name" required onChange={handleChange}/>
        </div>

        {/* E-mail */}
        <div>
        <label for="email">E-mail address :</label>
        <input id="email" type="text" name='email' value={formData.email} placeholder="Enter Your E-mail" required onChange={handleChange}/>
        </div>

      {/* Message */}
        <div>
        <label for="message">Message :</label>
        <input id="message" type="text" name='message' value={formData.message} placeholder="Enter Your Message" required onChange={handleChange}/>
        </div>

        {/* Submit button */}
        <button  type='submit'>Submit</button>
        </form>
    </div>


  )
}

export default form;