import React from 'react';
import icon1 from '../../Images/icon/google-icon.png';
import icon2 from '../../Images/icon/facebook-icon.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Register = () => {
    const { allContext } = useAuth();
    const {
        getName,
        getEmail,
        getPassword,
        setUser,
        setUserName,
        setIsLoading,
        loginUsingGoogle,
        loginUsingFacebook,
        handleRegistration,
        error,
        setError } = allContext;

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

    /* Email+Password Registration & Redirect */
    const register = (e) => {
        e.preventDefault();
        handleRegistration()
            .then(result => {
                setUser(result.user);
                setUserName();
                setError('');
                history.push(redirect_url);
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="container row mx-auto align-items-center g-4 mt-5">
            <div className="col-md-7">
                <img className="img-fluid" src="https://disin-react.hibootstrap.com/images/signup-bg.jpg" alt="" />
            </div>
            <div className=" col-md-5">
                <h1>Register an Account</h1>
                {/* On Submit */}
                <form onSubmit={register} className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="validationDefault01" className="form-label">Name</label>
                        {/* On Blur */}
                        <input onBlur={getName} type="text" className="form-control" id="validationDefault01" placeholder="Name" aria-label="Name"
                            required />
                    </div>
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
                            placeholder="Password" aria-label="Password"
                            autoComplete="current-password" required />
                        <div className="text-danger">
                            {error}
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label className="form-check-label" htmlFor="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <h6>Already have an account? <Link to='/login'>Login</Link></h6>
                    <div className="d-grid col-12 mt-3">
                        <button className="btn btn-primary" type="submit">Register</button>
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

export default Register;