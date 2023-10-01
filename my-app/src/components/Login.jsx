import React, { useState } from "react";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post("http://localhost/react/login.php", {
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response);
            if (response.data.status === "success") {
              sessionStorage.setItem("loggedIn", true);
              sessionStorage.setItem(
                "userData",
                JSON.stringify(response.data.data)
              );
    
              window.location.href = "/dashboard";
            } else {
              setError(response.data.message);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };

  return (
    <div>
      <div>
        <div>
            <div>
            <div>
            <div>
              <div>
                <h3>Login</h3>
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
                  <input type="button" className="button" name="submit" id="submit" value="Login" onClick={handleSubmit} />
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
  )
}

export default Login