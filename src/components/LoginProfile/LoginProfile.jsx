import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginProfile.css";
import { useAuth0 } from '@auth0/auth0-react';
import image from '../../assets/image.webp';
import forest from '../../assets/forest.jpg';

const Authenticated = ({ user }) => {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const countdownTimer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
            clearInterval(countdownTimer);
          
            if (countdown === 0) {
                navigate('/ChooseProfile');
            }
        };
    }, [countdown, navigate]);

    return (
        <div className='authenticated'>
            <h1>Welcome</h1>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Please wait while we direct you to the profile center.</p>
            <p>Redirecting in {countdown} seconds...</p>
        </div>
    );
};

const LoginProfile = () => {
    const [cooldownActive, setCooldownActive] = useState(false);
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();  

    useEffect(() => {
        if (isAuthenticated && !cooldownActive) {
            setCooldownActive(true);

            const cooldownTimer = setTimeout(() => {
                navigate('/ChooseProfile', { replace: true });  
            }, 5000);

            return () => {
                clearTimeout(cooldownTimer);
            };
        }
    }, [isAuthenticated, cooldownActive, navigate]);

    if (isLoading) {
        return <div> Loading... </div>;
    }

    return (
        <div className='alllogin'>
            <div className='login-container'>
                <div className='bg-forest'>
                    <img src={forest} alt="" />
                </div>

                <div className={isAuthenticated ? 'authenticated-container hidden' : 'authenticated-container'}>
                    <div className='logo-login'>
                        <img src={image} alt="logoicon" />
                        <h1>Quantum</h1>
                    </div>

                    <h3>WATCH TV SHOWS & MOVIES ANYWHERE, ANYTIME.</h3>

                    {isAuthenticated ? (
                        <div>
                            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                        </div>
                    ) : (
                        <div>   
                            <button onClick={() => loginWithRedirect({ redirectUri: window.location.origin })}>CONTINUE</button>
                        </div>
                    )}
                </div>

                {isAuthenticated && <Authenticated user={user} />}
            </div>  
        </div>
    );
}

export default LoginProfile;
