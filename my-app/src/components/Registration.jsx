import React, {useState} from 'react'
import axios from 'axios';
import '../Style.css'

const Registration = () => {

    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
   
    const handleSubmit = () => {
      if(email.length === 0){
        alert("Email has left Blank!");
      }
      else if(password.length === 0){
        alert("Password has left Blank!");
      }
      else{
        const url = 'http://localhost/react/registration.php';
        let fData = new FormData();
        fData.append('email', email);
        fData.append('password', password);
        axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
      }
    }
    

  return (
    <>
        <div>
      <div>
        <div>
            <div>
            <div>
            <div>
              <div>
                <h3>Register</h3>
                <form className='form'>

                  <div>
                  <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div>
                  <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  <div>
                  <input type="button" className="button" name="submit" id="submit" value="Register" onClick={handleSubmit} />
                  </div>
 
                  <p>Have already an account? <a href="#!"><u>Login here</u></a></p>
 
                </form>
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Registration