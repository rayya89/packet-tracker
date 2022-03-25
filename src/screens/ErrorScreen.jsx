//Project files
import ErrorImage from "../assests/Error.png"

export default function ErrorScreen() {
  return (
    <div>
      <img src={ErrorImage} alt="404 error"/>
      <p>An error occured while loading data.. Please try to refresh the page or try again in awhile..</p>
      </div>
  )
}
