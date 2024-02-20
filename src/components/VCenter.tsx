import React from "react";

const VCenter = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ 
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    
   }}>{children}</div>;
};

export default VCenter;
