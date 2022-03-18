// Import React
import React, { useEffect } from 'react';

// Import hooks from react-redux
import { useSelector } from 'react-redux';

// Import link & navlink to navigate between pages in the navbar
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  // Declare the navigate variable
  const navigate = useNavigate();

  // Get the user from state
  const { user } = useSelector((state) => state.auth);

  // Create a hook to load the font awesome icons into the css
  useEffect(() => {
    // If the user is not logged in, redirect to the home page
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1>This is the user messages page!</h1>
      </center>
    </div>
  );
}

export default Messages;