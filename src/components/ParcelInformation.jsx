
export default function ParcelInformation({ sender, parcel_id, verification_required}) {

  //Properties
    const verfication_Yes= "You need an identity verification to collect this parcel";
    const verfication_No="No identity verfication is required to collect this parcel";

  return (
    <article className="details-article">
      <h2>Parcel information</h2>
      <h3>From</h3><p>{sender}</p>
      <h3>Parcel ID</h3><p>{parcel_id}</p>
      <h3>Identity verification</h3><p>{verification_required ? verfication_Yes : verfication_No}</p>
      
      </article>
  )
}
