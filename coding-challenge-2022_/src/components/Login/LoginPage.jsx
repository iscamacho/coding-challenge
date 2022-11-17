import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";
import { useForm } from "./hooks/useForm";

export const LoginPage = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formState;
  const [formHasError, setformHasError] = useState(false);
  const [invalidCredential, setInvalidCredential] = useState(false);
  const { isLogged, user, pswd } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();

    if (username.trim().length <= 0 || password.trim().length <= 0) {
      setformHasError(true);
      setInvalidCredential(false);
    } else if (username != user || password != pswd) {
      setformHasError(false);
      setInvalidCredential(true);
    } else {
      setInvalidCredential(false);
      setformHasError(false);
      dispatch(login());
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="m-3 row justify-content-center">
      <div className="card col-lg-4 col-md-4 col-sm-12  center">
        <div className="card-title d-flex justify-content-center">
          <h3>Iniciar sesión</h3>
          <hr></hr>
        </div>
        <div className="card-body">
          <form className="form" onSubmit={onLogin}>
            <input
              type="text"
              className="form-control m-1"
              placeholder="Usuario"
              value={username}
              name="username"
              onChange={onInputChange}
            ></input>
            <input
              type="password"
              className="form-control m-1"
              placeholder="Contraseña"
              value={password}
              name="password"
              onChange={onInputChange}
            ></input>
            {formHasError && (
               <div className="alert alert-warning" role="alert">
               Usuario y contraseña son requeridos
             </div>
            )}
            {invalidCredential && (
              <div className="alert alert-danger" role="alert">
                Usuario y/o contraseña incorrecto
              </div>
            )}
            <div className="d-flex justify-content-end my-1">
              <button className="btn btn-primary  justify-alignself-">
                {" "}
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
