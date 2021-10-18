import React from 'react';
import icon1 from '../../Images/icon/google-icon.png';
import icon2 from '../../Images/icon/facebook-icon.png';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase/useFirebase';

const Login = () => {
    const { loginUsingGoogle } = useFirebase();

    const handleLoginFacebook = () => {
        console.log('clicked');
    }
    return (
        <div className="container row mx-auto align-items-center g-4 mt-5">
            <div className="col-md-7">
                <img className="img-fluid" src="https://disin-react.hibootstrap.com/images/login-bg.jpg" alt="" />
            </div>
            <div className=" col-md-5">
                <h1>Login Account</h1>
                <form class="mt-5">
                    <div class="mb-3">
                        <label for="validationDefault02" class="form-label">Email</label>
                        <input type="email" class="form-control" id="validationDefault02"
                            placeholder="Email" aria-label="Email" required />
                    </div>
                    <div class="mb-3">
                        <label for="validationDefault03" class="form-label">Password</label>
                        <input type="password" class="form-control" id="validationDefault03"
                            placeholder="Password" aria-label="Password" required />
                    </div>
                    <div class="col-12 mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" />
                            <label class="form-check-label" for="invalidCheck2">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <h6>Don’t have an account? <Link to='/register'>Register</Link></h6>
                    <div class="d-grid col-12 mt-3">
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
                <div className="text-center mt-2">
                    <h6>Or</h6>
                    <h6>Continue With</h6>
                    <button onClick={loginUsingGoogle} className="btn">
                        <img width="40px" src={icon1} alt="" />
                    </button>
                    <button onClick={loginUsingGoogle} className="btn">
                        <img width="40px" src={icon2} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;