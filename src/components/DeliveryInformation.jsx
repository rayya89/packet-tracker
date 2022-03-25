

export default function DeliveryInformation({ eta, location_name, location_lat, location_long }) {

  const deliveryTime=new Date(eta).toString();

  return (
    <article>
      <h2>Delivery information</h2>
      <h3>Estimated delivery time</h3>
      <p>{deliveryTime}</p>
      <h3>Delivery address</h3>
        <p>
          {location_name}
        </p>
        <a href={`https://maps.google.com/?q=${location_lat},${location_long}`}>Delivery address</a>
    </article>
  )
}
