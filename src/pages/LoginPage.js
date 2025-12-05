import React from "react";

function LoginPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Page</h2>
      <form>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;