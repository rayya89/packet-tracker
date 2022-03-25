
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
        <FontAwesomeIcon icon={faSpinner} />
        <h1>The data is loading thank you for waiting..</h1>
    </div>
  )
}
