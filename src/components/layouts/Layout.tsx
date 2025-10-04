import React from "react";
import Footer from "./Footer";
import AppHeader from "./AppHeader";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          paddingLeft: "20px",
          paddingRight: "20px",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
