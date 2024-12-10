import PropTypes from 'prop-types';

const CardModal = ({ card, onClose }) => {
  const handleOutSideClickClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOutSideClickClose}>
      <div className="bg-white p-8 rounded-lg w-[400px]" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">Card Details</h2>
        <p><strong>Card ID:</strong> {card.id}</p>
        <p><strong>Status:</strong> {card.status}</p>
        <p><strong>Type:</strong> {card.is_physical ? 'Physical' : 'Digital'}</p>
        <p><strong>Last 4 Digits:</strong> **** {card.last_four}</p>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

CardModal.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['active', 'inactive', 'terminated']).isRequired,
    is_physical: PropTypes.bool.isRequired,
    last_four: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CardModal;
