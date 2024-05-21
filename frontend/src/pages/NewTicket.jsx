import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const {isLoading, isError, isSuccess, message} = useSelector((state) => state.tickets)

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("Домашний телефон");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate('/tickets')
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  if (isLoading) {
    return <Spinner />
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({product, description}))
  };

  return (
    <>
    <BackButton url='/' />
      <section className="heading">
        <h1>Создать новую заявку</h1>
        <p>Пожалуйста заполните форму заявки</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Имя клиента</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email клиента</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Продукт</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="Домашний телефон">Домашний телефон</option>
              <option value="ID TV">ID TV</option>
              <option value="SIP телфония">SIP телфония</option>
              <option value="Altel/Tele2">Altel/Tele2</option>
              <option value="Домашний интернет">Домашний интернет</option>
              <option value="iPhone">iPhone</option>
              <option value="Телефон на Android">Телефон на Android</option>
              <option value="Macbook Pro">Macbook Pro</option>
              <option value="Роутер">Роутер</option>
              <option value="iMac">iMac</option>
              <option value="iPad">iPad</option>
              <option value="Другое">Другое</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Описание проблемы</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Отправить</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
