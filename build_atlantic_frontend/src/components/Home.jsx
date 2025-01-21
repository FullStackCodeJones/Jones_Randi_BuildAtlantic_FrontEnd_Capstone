import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        position: "relative",
      }}
    >
      <header style={{ position: "sticky", top: 0 }}>
        <div className="logo-left"></div>
      </header>

      <img
        src="/public/images/homelessprevention.jpg"
        alt="Homeless Prevention Image"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "300px" /* Optional: Adjust the height if necessary */,
          marginBottom: "1rem",
        }}
      />

      <h1> Welcome To Build Atlantic!</h1>
      <p> Everyone Deserves a Home. It Should NOT be a Privilege!</p>
      <p>Join Us Today and Start Your Journey Home!</p>
    </div>
  );
};

export default Home;
