import React from "react";
import Footer from "./Footer";
import AppHeader from "./AppHeader";
import "../styles/utilities/Layout.css";
interface LayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <>
      <AppHeader />

      <div className="main-layout" style={style}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
