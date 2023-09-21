import { useState } from 'react';
import '../Assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'


function Signup() {
    const navigate = useNavigate();
    const [error,setError]=useState({})
    const [signup,setSignup] = useState(
      {
        username : "",
        name: "",
        mail: "",
        password : ""
      }
    )

    const handleChange = (e) => {
      setSignup({...signup,[e.target.id]:e.target.value})
    };

    const handleClick = (e) => {
      e.preventDefault();
      setError({});
      let validationErrors={}
      if(!signup.name.trim())
      {
        validationErrors.name="Name is required";
      }
      if(!signup.mail.trim())
      {
        validationErrors.mail="Email is required";
      }
      else if(!/\S+@\S+\.\S+/.test(signup.mail))
      {
        validationErrors.mail="Email is invalid";
      }
      if(!signup.password.trim())
      {
        validationErrors.password="Password is required";
      }

     setError(validationErrors);
     if(Object.keys(validationErrors).length===0){
        navigate('/')
        toast.success('Login Successful');
     }
    }

    
    
    return (
      <div className="SignupBorder">
        <div className='SignupBox'>
          <div className='SignupBoxTop'>
            <div className='SignupBoxTitle'>
           <h2>New Profile</h2>
              <p>For a New Beginning</p>
            </div>
            <form className="SignupForm" onSubmit={handleClick}>
              <input
                onChange={handleChange}
                type="text"
                name="yourname"
                id="name"
                placeholder="Enter Name"
              />
                {error.name && <span className='ErrorMsg'>{error.name}</span>}
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="mail"
                placeholder="Enter E-mail"
              />
              {error.mail && <span className='ErrorMsg'>{error.mail}</span>}
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
                {error.password && <span className='ErrorMsg'>{error.password}</span>}
              <button type="submit"  onClick={handleClick} >Signup</button>
            </form>
          </div>
          <div className='SignupBoxBottom'>
          <div className='SignupBoxBottomText1'>
          <p>Already have an account?</p>
          </div>
          <div className='SignupBoxBottomText2'>
          <p><span onClick={()=>navigate("/")}>Login</span></p>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;