import React from 'react'
// import { useState } from 'react';

// export default function ErrorBoundary(props) {
//     const [hasError,setHasError] = useState(false)
//     const [message,setMessage] = useState("")

//     const getDerivedStateFromError = (error)=>{
//         setHasError(true)
//     }
//   return (
//     <div>
//         {props.children}
//     </div>
//   )
// }

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false,message:"" };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
        //   logErrorToMyService(error, errorInfo);
      console.log(error,errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary
