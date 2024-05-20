import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Как мы можем вам помочь?</h1>\
        <p>Пожалуйста выберите одну из опции ниже</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Создать новую заявку
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> Смотреть мои заявки
      </Link>
    </>
  );
}

export default Home;
