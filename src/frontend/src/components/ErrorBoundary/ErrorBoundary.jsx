// Built-in imports
import { Component } from "react";

// External imports
import { toast } from "react-toastify";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: "",
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    return this.hasError
      ? toast.error(`An error has occured!\n${this.state.message}`, {
          position: "top-center",
        })
      : this.props.children;
  }
}

export default ErrorBoundary;
