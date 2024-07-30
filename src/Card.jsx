import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

function Card({card}){
  console.log(card)
    return(
    <div className="col">
      <div className="background-image: var(--bs-gradient)"/>
    <div className={`card mb-2 rounded-3 shadow-sm ${card.plan == 'PRO' && 'border-primary'}`}>
      <div className={`card-header py-3 ${card.plan == 'PRO' && 'text-bg-primary border-primary' }`}> 
        <h4 className="my-0 fw-normal">{card.plan}</h4>
      </div>
      
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${card.price}
          <small className="text-body-secondary fw-light">/mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {card.features.map((feature, index) => {
            return (
              <li key={index}>
                {feature.enable ? (
                  <span>
                    <FontAwesomeIcon icon={faCheck} /> {feature.name}
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faXmark} />
                    {feature.name}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className={`w-100 btn btn-lg btn-primary  ${
            card.plan == "Free" && "btn-outline-primary"
          } ${card.plan == "plus" && "btn-primary"}
           ${card.plan == "pro" && "btn-primary"}`}
        >
          Button
        </button>
      </div>
    </div>
  </div>
);
}
/*Card.propTypes = {
    card: {
      plan: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      features: {
        users: PropTypes.number.isRequired,
        storage: PropTypes.number.isRequired,
        publicprojects: PropTypes.string.isRequired,
          access: PropTypes.string.isRequired,
          privateprojects: PropTypes.string.isRequired,
          support: PropTypes.string.isRequired,
          subdomain: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
        }
    }
}*/
export default Card;