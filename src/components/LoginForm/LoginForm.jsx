import { useForm } from "react-hook-form";
import { useState } from "react";

import "./LoginForm.css";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState(null);
  return (
    <>
      <div className="my-form">
        <h1>Giriş Yap</h1>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="mb-3">
            <label className="form-label" htmlFor="userType1">
              Student
            </label>
            <input
              type="radio"
              id="userType1"
              name="userType1"
              value="student"
              {...register("userType")}
            />
            <label className="form-label" htmlFor="userType2">
              Academician
            </label>
            <input
              type="radio"
              id="userType2"
              name="userType2"
              value="academician"
              {...register("userType")}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="userNumber">
              User Number
            </label>
            <input
              className="form-control"
              {...register("userNumber")}
              placeholder="userNumber"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              {...register("password")}
              placeholder="password"
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
      <div>{data}</div>
    </>
  );
}

export default LoginForm;
