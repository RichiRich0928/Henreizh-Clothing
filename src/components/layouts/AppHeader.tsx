import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Grid } from "antd";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../images/henreizh_favicon.png";
import wholeLogo from "../../assets/logoimg.png";
// import "antd/dist/reset.css";
import "../styles/utilities/AppHeader.css";
import profileImg from "../../assets/pants.png";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const isActive = (path: string) =>
    location.pathname === path ? "ant-menu-item-selected" : "";

  const MenuItems = [
    { key: "/home", label: "Home" },
    { key: "/shop", label: "Shop" },
    { key: "/collections", label: "Collections" },
    { key: "/about", label: "About Us" },
    { key: "/contact", label: "Contact" },
    { key: "/cart", label: "Cart" },
    { key: "/signup", label: "Create an Account" },
  ];

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        height: 80,
        display: "flex",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Left: Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ height: 40, objectFit: "contain" }}
        />
      </div>

      {/* Desktop Menu */}
      {!isMobile && (
        <div className="header-buttons">
          <div className="header-left-buttons">
            {MenuItems.slice(0, 5).map((item) => (
              <button
                key={item.key}
                className={isActive(item.key)}
                onClick={() => navigate(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="header-right-buttons">
            <div className="cart-button" onClick={() => navigate("/cart")}>
              <ShoppingCartOutlined style={{ margin: 0, padding: 0 }} />
            </div>

            
<div className="profile-section" onClick={() => navigate("/profile")} 
style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#e5e5e5",
                justifyContent: "space-between",
                borderRadius: "9999px",
                minWidth: "150px",
                padding: "4px 8px 4px 16px",
                cursor: "pointer",
              }}>  
              <span style={{ fontWeight: 500, color: "#000", fontSize:"14", lineHeight:'1' }}>Nathan Aruta</span>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      border: "2px solid #fff",
      overflow: "hidden",
      marginLeft: "8px",
    }}
  >
    <img
      src={profileImg}
      alt="Profile"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
  </div>
            </div>
            <button
              className="signin-button"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </button>

            <button
              className="signup-button"
              onClick={() => navigate("/signup")}
            >
              Create an Account
            </button>
          </div>

          {/* <div className="header-right-buttons">
            {MenuItems.slice(5).map((item) => (
              <button
                key={item.key}
                className={isActive(item.key)}
                onClick={() => navigate(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div> */}
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {isMobile && (
        <>
          <div
            className="mobile-header"
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 100,
            }}
          >
            <div className="logo-container" onClick={() => navigate("/home")}>
              <img
                src={wholeLogo}
                alt="Henreizh Logo"
                style={{ height: 120, objectFit: "inherit" }}
              />
            </div>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 22 }} />}
              onClick={() => setOpen(true)}
              className="menu-button"
            />
            <Drawer
              title={<img src={Logo} alt="Logo" style={{ height: 40 }} />}
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
              closable={false}
            >
              <Menu
                mode="vertical"
                selectedKeys={[location.pathname]}
                items={MenuItems.map((item) => ({
                  ...item,
                  onClick: () => {
                    navigate(item.key);
                    setOpen(false);
                  },
                }))}
                style={{
                  borderRight: "none",
                }}
              />
            </Drawer>
          </div>
        </>
      )}
    </Header>
  );
};

export default AppHeader;
