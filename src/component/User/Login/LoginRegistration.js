import React, {useState} from "react";
import useAuth from "../../../hook/useAuth";

const LoginRegistration = () => {
  const {signInUsingGoogle, signInUsingEmailPassword, registerNewUser} =
    useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNamedChanged = (e) => {
    setName(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleLoginRegistration = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contains a Upper case latter");
      return;
    }

    isLogin
      ? signInUsingEmailPassword(email, password)
      : registerNewUser(name, email, password);
  };

  return (
    <div>
      <form
        onSubmit={handleLoginRegistration}
        className=" bg-success bg-opacity-75 w-75 border mx-auto m-5 p-5 rounded shadow-sm"
      >
        <h3 className="text-white">Please {isLogin ? "Login" : "Register"}</h3>
        {!isLogin && (
          <div className="row mb-3">
            <label
              htmlFor="inputName"
              className="col-sm-2 col-form-label text-white"
            >
              Name:{" "}
            </label>
            <div onBlur={handleNamedChanged} className="col-sm-10">
              <input
                // onBlur={handleNamedChanged}
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
        )}
        <div className="row mb-3">
          <label
            htmlFor="inputEmail3"
            className="col-sm-2 col-form-label text-white "
          >
            Email:{" "}
          </label>
          <div onBlur={handleEmailChange} className="col-sm-10">
            <input
              type="email"
              className="form-control"
              placeholder="  @gmail.com"
              id="inputEmail3"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="inputPassword3"
            className="col-sm-2 col-form-label text-white"
          >
            Password:{" "}
          </label>
          <div onBlur={handlePasswordChange} className="col-sm-10">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label
                className="form-check-label text-white"
                htmlFor="gridCheck1"
              >
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-danger">
          {isLogin ? "Login" : "Register"}
        </button>
        <br />
        <br />
      </form>
      <br />
      <button onClick={signInUsingGoogle} className="btn btn-danger mb-5">
        Google Sign In
      </button>
    </div>
  );
};

export default LoginRegistration;
