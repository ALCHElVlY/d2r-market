// Built-in imports
import { Component } from 'react';

// External imports
import { toast } from 'react-toastify';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    return (
      this.hasError
        ? toast.error('An error has occured!', {
          position: "top-center",
        })
        : this.props.children
    );
  }
}

export default ErrorBoundary;