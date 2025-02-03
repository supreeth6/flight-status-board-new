import React from "react";

interface ErrorProps {
    message: string;
  }
  
  const Error: React.FC<ErrorProps> = ({ message }) => <div>{message}</div>;
  
  export default Error;
  