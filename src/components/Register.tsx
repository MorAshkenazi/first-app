// React Two way data binding
import { FormEvent, FunctionComponent, useState } from "react";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");

  let handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="display-3">REGISTER</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-success mt-3">Register</button>
      </form>
    </>
  );
};

export default Register;
