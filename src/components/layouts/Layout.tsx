import React from "react";
import Footer from "./Footer";
import AppHeader from "./AppHeader";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
