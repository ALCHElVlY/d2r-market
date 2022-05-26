// Builtin imports
import { useEffect } from "react";

const Messages = () => {
  // REact hook to handle setting the page title
  useEffect(() => {
    document.title = "Chats";
  }, []);

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
};

export default Messages;
