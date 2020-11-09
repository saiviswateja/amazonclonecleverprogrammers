import { Link,useHistory } from 'react-router-dom';
import React,{useState} from 'react';
import './Login.css';
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/')
            })
            .catch(error=>alert(error.message))
    }
    const register = e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth=>{
                if(auth){
                    history.push('/');
                }
            })
            .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
            <img 
            className="login__logo"
            src="data:image/png;base64,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"/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's comditions of use & Sale. Please see our Privacy Notice, our cookies Notice and our interests-based ads Notice
                </p>
                <button onClick={register} className="login__registerButton" type="submit">Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login
