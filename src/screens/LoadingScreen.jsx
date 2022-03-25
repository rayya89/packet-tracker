
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function LoadingScreen() {
  return (
    <div>
        <FontAwesomeIcon icon={faSpinner} />
        <p>The data is loading thank you for waiting..</p>
    </div>
  )
}
