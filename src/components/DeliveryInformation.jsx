

export default function DeliveryInformation({ deliveryTime, location_name, locationCoordinates }) {

  const[location_lat,location_long]=locationCoordinates;

  const deliveryTimeFormatted=new Date(deliveryTime).toString();

  return (
    <article className="details-article">
      <h2>Delivery information</h2>
      <h3>Estimated delivery time</h3>
      <p>{deliveryTimeFormatted}</p>
      <h3>Delivery address</h3>
        <p className="location-name">
          {location_name}
        </p>
        <a className="item-link" href={`https://maps.google.com/?q=${location_lat},${location_long}`}>Delivery address location</a>
    </article>
  )
}
