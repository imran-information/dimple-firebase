import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.init';
const Login = () => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {

                setUser(result.user)
            }).catch(error => {
                console.log(error);

            })
    }

    const handleGitHubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
                console.log(result);

            }).catch(error => {
                console.log('ERROR', error);

            })
    }
    const handleTwitterLogin = () => {

    }
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Logout successful')
                setUser(null)

            }).catch(error => {
                console.log(error)

            })
    }
    return (
        <div className='flex justify-center my-36'>
            {
                user && <>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </>
            }

            {
                user ?
                    <button onClick={handleLogOut} className='btn bg-slate-400 '>Logout</button>
                    :
                    <>
                        <button onClick={handleGoogleLogin} className='btn bg-slate-400 '>Login With Google</button>
                        <button onClick={handleGitHubLogin} className='btn bg-slate-400 '>Login With GitHub</button>
                        <button onClick={handleTwitterLogin} className='btn bg-slate-400 '>Login With Twitter</button>
                    </>
            }

        </div>
    );
};

export default Login;