import { useState } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig/firebaseConfig";

const Login = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify({ email: user.email }));
        console.log(user);
        window.location.href = "/";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    e.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <div className="body">
      <div className="contain my-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="username">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
