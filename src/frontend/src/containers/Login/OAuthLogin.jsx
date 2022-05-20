// Built-in imports
import { useEffect, useState } from 'react';

// External imports
import { useDispatch, useSelector } from 'react-redux';

// Internal imports
import {
    useBnetOauth,
    setCookie,
} from '../../app/hooks/index';
import { getBnetCredentials } from '../../app/reducers/oauth/oauthSlice';

const OAUTH_LOGIN_BNET = () => {
    const dispatch = useDispatch();
    const bnetOauth = useBnetOauth();

    // State variables
    const [loaded, setLoaded] = useState(false);
    const [hasBnetCreds, setHasBnetCreds] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const { linkedAccounts } = useSelector((state) => state.oauth);
    
    // React hook to set when the page loads
    useEffect(() => {
        setLoaded(true);
        (() => {
            if (linkedAccounts.length > 0 &&
                linkedAccounts.some(key => key === 'bnet')) {
                setHasBnetCreds(true);
            }
            else {
                setHasBnetCreds(false);
            }
        })();

        return () => setLoaded(false);
    }, [linkedAccounts]);

    // React hook to handle checking if any oauth credentials have been stored
    // Redirects to bnets oauth page if no credentials are found
    useEffect(() => {
        // Check if any credentials are stored
        dispatch(getBnetCredentials( user.id ));

        // Validate the users credentials
        if (loaded && hasBnetCreds) {
            console.log('Credentials found');
        }
        else {
            // Create an oauth cookie
            setCookie('oauth', {
                id: user.id,
                token: user.token,
            });
            console.log(setCookie('oauth', {
                id: user.id,
                token: user.token,
            }));

            // Redirect to bnet oauth page
            window.location.href = bnetOauth;
        }
    }, [loaded,
        // Data
        bnetOauth, user, hasBnetCreds,
        // Functions
        dispatch, setLoaded, setHasBnetCreds,
    ]);

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Battle.net Oauth Flow</h1>
        </div>
    );
}

const OAuthLogin = (props) => {
    switch (props.target) {
        case 'bnet':
            return <OAUTH_LOGIN_BNET />;
        default:
            break;
    }
}

export default OAuthLogin;