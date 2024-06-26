import { Link } from "react-router-dom"


function TicketItem({ticket}) {
  return (
    <div className="ticket">
        <div>{new Date(ticket.createdAt).toLocaleString('ru-RU')}</div>
        <div>{ticket.product}</div>
        <div className={`status status-${ticket.status}`}>
            {ticket.status}
        </div>
        <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
            Просмотреть
        </Link>
    </div>
  )
}

export default TicketItem