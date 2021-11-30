import React from 'react';
import icon1 from '../../Images/icon/google-icon.png';
import icon2 from '../../Images/icon/facebook-icon.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Login = () => {
    const { allContext } = useAuth();
    const {
        getEmail,
        getPassword,
        setUser,
        setError,
        setIsLoading,
        loginUsingGoogle,
        loginUsingFacebook,
        handleLogin,
        error } = allContext;

    /* Redirect */
    const location = useLocation();
    console.log('came from', location.state?.from);
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';

    /* Google Login & Redirect */
    const handleGoogleLogin = () => {
        loginUsingGoogle()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /* Facebook Login & Redirect */
    const handleFacebookLogin = () => {
        loginUsingFacebook()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /* Email+Password Login & Redirect */
    const login = (e) => {
        e.preventDefault();
        handleLogin()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="container row mx-auto align-items-center g-4 mt-5">
            <div className="col-md-7">
                <img className="img-fluid" src="https://disin-react.hibootstrap.com/images/login-bg.jpg" alt="" />
            </div>
            <div className=" col-md-5">
                <h1>Login Account</h1>
                {/* On Submit */}
                <form onSubmit={login} className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="validationDefault02" className="form-label">Email</label>
                        {/* On Blur */}
                        <input onBlur={getEmail} type="email" className="form-control" id="validationDefault02"
                            placeholder="Email" aria-label="Email"
                            autoComplete="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationDefault03" className="form-label">Password</label>
                        {/* On Blur */}
                        <input onBlur={getPassword} type="password" className="form-control" id="validationDefault03"
                            placeholder="Password"
                            autoComplete="current-password" aria-label="Password" required />
                        <div className="text-danger">
                            {error}
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" />
                            <label className="form-check-label" htmlFor="invalidCheck2">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <h6>Don’t have an account? <Link to='/register'>Register</Link></h6>
                    <div className="d-grid col-12 mt-3">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
                <div className="text-center mt-2">
                    <h6>Or</h6>
                    <h6>Continue With</h6>
                    {/* On Click */}
                    <button onClick={handleGoogleLogin} className="btn">
                        <img width="40px" src={icon1} alt="" />
                    </button>
                    {/* On Click */}
                    <button onClick={handleFacebookLogin} className="btn">
                        <img width="40px" src={icon2} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;