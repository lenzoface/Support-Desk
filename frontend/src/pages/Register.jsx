import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  // Dispatching actions to Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Bring properties from state coming out of authSlice using useSelector()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
        navigate('/')
    }

    // Activating reset in authSlice.js
    dispatch(reset)
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match!");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      // Dispatching 'register' from authSlice, so the 'userData' will be used for 'user' in async function, so our form hooks to async thunk in authSlice
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />
}

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Зарегистрироваться
        </h1>
        <p>Пожалуйста создайте аккаунт</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Введите ваше имя"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Введите ваш email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Введите ваш пароль"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Подтвердите ваш пароль"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Отправить</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
