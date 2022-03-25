

export default function DeliveryInformation({ location_name, location_lat, location_long }) {
  return (
    <article>
      <h2>Delivery information</h2>
      <h3>Delivery address</h3>
        <p>
          {location_name}
        </p>
        <a href={`https://maps.google.com/?q=${location_lat},${location_long}`}>Delivery address</a>
    </article>
  )
}
