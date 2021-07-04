import React from 'react'
import pet from '../images/pet.svg'
import pet2 from '../images/pet2.svg'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'

function Login() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
     const [show,setShow] = useState(true) 
     
    //   useEffect(()=>{
    //     console.log(sign_in_btn)
    //   },)
    // sign_up_btn.addEventListener("click", () => {
    //   container.classList.add("sign-up-mode");
    // });
  
    // sign_in_btn.addEventListener("click", () => {
    //   container.classList.remove("sign-up-mode");
    // });
    return (
        <div  className={"container "+ (show ?  "":"sign-up-mode")}>

            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <Link to="/Home"><input type="button" value="Login" className="btn solid" /></Link>
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>

                    <form action="" className="sign-up-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <Link to="/Home"><input type="button" value="Sign up" className="btn solid"  /></Link>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button class="btn transparent" id="sign-up-btn" onClick={()=>setShow(!show)}>
                            Sign up
                        </button>
                    </div>
                    <img src={pet} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button class="btn transparent" id="sign-in-btn" onClick={()=>setShow(!show)}> Sign in</button>
                    </div>
                    <img src={pet2} className="image" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
