import React, { useState } from 'react';
import Input from './Input';
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { useHistory } from 'react-router-dom';
import { AUTH } from "../../constants/actionTypes";
import { signin, signup } from "../../actions/auth";
import { FormLayout } from '../Form/styles';
import { ButtonElement } from "../PageStyles/Button";
import { FaGoogle } from "react-icons/fa";

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div>
            <FormLayout>
                <h3>
                    { isSignup ? 'Sign Up' : 'Log In' }
                </h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        { isSignup && (
                            <>
                                <Input type="text" name="firstName" placeholder="First Name" label="First Name" handleChange={handleChange} autoFocus />
                                <Input type="text" name="lastName" placeholder="Last Name" label="Last Name" handleChange={handleChange} />
                            </>
                        )}
                        <Input type="email" name="email" placeholder="Email" label="Email Address" handleChange={handleChange} />
                        <Input type="password" name="password" placeholder="Password" label="Password" handleChange={handleChange} />
                        { isSignup && <Input type="password" name="confirmPassword" placeholder="Confirm Password" label="Confirm Password" handleChange={handleChange} />}
                    </div>
                    <button type="submit">
                        { isSignup ? 'Sign Up' : 'Log In'}
                    </button>
                    <GoogleLogin
                        clientId="413566942607-1is7bd9pptvt5tge954i481egmiqpgje.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                                <FaGoogle /> Sign In with Google
                            </button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                    <div>
                        <button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign In' : "Don't have an account? SignUp" }
                        </button>
                    </div>
                </form>
            </FormLayout>
        </div>
    )
}

export default Auth;