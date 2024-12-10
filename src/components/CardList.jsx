import { useSelector } from 'react-redux';
import { selectCards } from '../store/cardsSlice';
import { selectFilters } from '../store/filterSlice';
import Card from './Card';

const CardList = () => {
  const cards = useSelector(selectCards);
  const { status, type } = useSelector(selectFilters);

  const filteredCards = cards.filter((card) => {
    return (
      (status === '' || card.status === status) &&
      (type === '' || (card.is_physical ? 'physical' : 'digital') === type)
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
