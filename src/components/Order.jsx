
export default function Order({ order }) {
const { id, status, user_name } = order;

  return (
    <li className="order">
        <b>id:</b> {id},
        <b>status:</b> {status},
        <b>User Name:</b> {user_name}
    </li>
  )
}
