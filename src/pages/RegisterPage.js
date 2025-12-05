import React from "react";

function RegisterPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Register Page</h2>
      <form>
        <input type="text" placeholder="Username" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="button">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;