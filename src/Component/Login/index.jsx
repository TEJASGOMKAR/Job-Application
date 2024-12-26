import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login =()=> {

    const [allValues , setValues] = useState({

        username : "",
        password : "",
        errorMsg : ""
    });

    const navigate = useNavigate();

    const token = Cookies.get("jwtToken");
    
    const onSubmitUserData = async(e)=>{

       

        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const UserDetails ={

            username : allValues.username,
            password : allValues.password
        }

        const options ={
            method : "Post",
            body : JSON.stringify(UserDetails)

        }

        try{

        
            const response = await fetch(api,options);
    
            const data = await response.json();
    
           
    
            if(response.ok === true){
    
                setValues({...allValues , errorMsg: ""});

                Cookies.set("jwtToken", data.jwt_token);

                navigate("/");

                
            }
    
            else{
    
                setValues({...allValues , errorMsg: data.error_msg});
    
            }
    
            
         }catch( error ){
    
    
    
         }
       

    }

    useEffect(()=>{

        if( token !== undefined){
            navigate("/");
        }



    },[]);
     



    return(

        <div className='login-cont'>
            <form onSubmit={onSubmitUserData}>

            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input onChange={(e)=>{setValues({...allValues, username : e.target.value})}} type="text" className="form-control border-primary" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
        </div>
             <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={(e)=>{setValues({...allValues, password : e.target.value})}} type="password" className="form-control border-primary" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-success w-100">Submit</button>
        

        </form>
        <br /><br />

                    <p className='text-danger'>{allValues.errorMsg}</p>
            



        </div>
    )
}








export default Login;