
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Star() {
    return (
        <div>
            <FontAwesomeIcon icon={faStar} className="star" />
        </div>
    )
}