import { useForm } from "react-hook-form";
import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState(null);

  return (    
        <div className="col offset-md-0 custom-width text-center">
          <div className="card">
            <div className="card-body">
              <div className="in-card ">
              <img className="logo-image" src="/eru.png" alt="Açıklama" />
              <h1>Giriş Yap</h1>              
              <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div className="mb-3" >
                  <label className="form-label p-2" htmlFor="userType1">
                    Öğrenci
                  </label>
                  <input
                    type="radio"
                    id="userType1"
                    name="userType1"
                    value="student"
                    {...register("userType")}
                  />
                  <label className="form-label p-2" htmlFor="userType2">
                    Akademisyen
                  </label>
                  <input
                    type="radio"
                    id="userType2"
                    name="userType2"
                    value="academician"
                    {...register("userType")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="userNumber">
                    Kullanıcı numarası
                  </label>
                  <input
                    className="form-control"
                    {...register("userNumber")}
                    placeholder="userNumber"
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="password">
                    Şifre
                  </label>
                  <input
                    className="form-control"
                    {...register("password")}
                    placeholder="password"
                  />
                </div>
                <div className="m-4">
                <input type="submit" className="btn btn-primary" />
                </div>
              </form>
            </div>
            </div>
          
          <div>{data}</div>
        </div>
        </div> 
        
      
  );
}

export default LoginForm;
