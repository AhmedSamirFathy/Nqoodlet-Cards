import PropTypes from 'prop-types';
import physicalCardImage from '/src/assets/physicalCard.png';
import virtualCardImage from '/src/assets/virtualCard.png';
import mastercardLogo from '/src/assets/mastercardLogo.png';
import prepaidLogo from '/src/assets/prepaidBankLogo.png';
import { useState } from 'react';
import CardModal from './CardModal';

const Card = ({ card }) => {
  const [cardContent, setCardContent] = useState(null)
  const getStatusStyle = (status) => {
    switch (status) {
      case 'active':
        return 'bg-transparent';
      case 'inactive':
        return 'filter grayscale';
      case 'terminated':
        return 'bg-transparent blur-sm relative';
      default:
        return 'bg-transparent';
    }
  };

  const getCardContent = (CARD) => {
    setCardContent(CARD)
  }
  const handleCloseModal = () => {
    setCardContent(null);
  };

  return (
    <>
      <div className="relative flex justify-center items-center" onClick={() => getCardContent(card)}>
        <div className={`relative w-max ${getStatusStyle(card.status)}`}>
          {/* Card Background Image */}
          <img
            src={card.is_physical ? physicalCardImage : virtualCardImage}
            alt="Physical Card"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />

          {/* Mastercard Logo */}
          <div className="absolute bottom-[10%] right-[5%]">
            <img
              src={mastercardLogo}
              alt="Mastercard Logo"
              className="w-[100%]"
            />
          </div>

          {/* Prepaid Logo */}
          <div className="absolute top-[10%] right-[-9%]">
            <img
              src={prepaidLogo}
              alt="Prepaid Logo"
              className="w-[50%]"
            />
          </div>
        </div>
        {/* Card Number Layer */}
        <div className="absolute inset-0">
          <div className="absolute bottom-[5%] left-[5%] ">
            <p className="text-lg font-bold text-black">{card.last_four}</p>
          </div>
        </div>
        {/*Lock Icon*/}
        {card.status === 'terminated' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">&#x1F512;</span>
          </div>
        )}
      </div>

      {cardContent ? <CardModal card={cardContent} onClose={handleCloseModal} /> : ""}
    </>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    last_four: PropTypes.string.isRequired,
    is_physical: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
