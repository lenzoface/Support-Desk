import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, reset, closeTicket } from "../features/tickets/ticketSlice";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

function Ticket() {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const params = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    // eslint-disable-next-line
  }, [isError, message, ticketId]);

  // Close ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
    toast.success('Ticket Closed')

    navigate('/tickets')
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          Ticket Id: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString("ru-RU")}
        </h3>
          <h3>Device: <i>{ticket.product}</i></h3>
        <hr />
        <div className="ticket-desc">
          <h3>Issue Description</h3>
          <p>{ticket.description}</p>
        </div>
      </header>

      {ticket.status !== 'closed' && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">Close Ticket</button>
      )}
    </div>
  );
}

export default Ticket;
