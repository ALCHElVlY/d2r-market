/**
 * A hook to handle constructing the Battle.net OAuth url.
 * @returns {String} bnet oauth url
 */
const useBnetOauth = () => {
  const BNET_AUTH_ENDPOINT = process.env.REACT_APP_BNET_AUTH_ENDPOINT;
  const BNET_CLIENT_ID = process.env.REACT_APP_BNET_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  const scopes = ["openid"];
  const scopesString = encodeURIComponent(scopes.join(" "));
  const redirectUriString = encodeURIComponent(redirectUri);
  const constructAuthURL = (endpoint, clientID, scope, redirectURI) => {
    return `${endpoint}?client_id=${clientID}&scope=${scope}&redirect_uri=${redirectURI}&response_type=code`;
  };
  const BNET_AUTHORIZATION_URL = constructAuthURL(
    BNET_AUTH_ENDPOINT,
    BNET_CLIENT_ID,
    scopesString,
    redirectUriString,
  );

  return BNET_AUTHORIZATION_URL;
};

export default useBnetOauth;
