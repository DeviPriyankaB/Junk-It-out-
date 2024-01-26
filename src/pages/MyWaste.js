import React, { useContext } from 'react';
import { ConfirmContext ,useConfirmContext} from '../ConfirmContext';


const MyWaste = () => {
  const { wasteData } = useContext(ConfirmContext);
  const { totalCoins } = useConfirmContext();

  if (!wasteData || !wasteData.category || wasteData.weight === 0) {
    return <div>you didn't placed any pickup till now</div>;
  }

  const categoryItems = wasteData.category.split(' ');
  const categoryList = categoryItems.map((item, index) => {
    const categoryName = item.split(':')[0];
    const categoryItemsText = item.split(':')[1];

    const isLastItem = index === categoryItems.length - 1;
    return (
      <div key={index}>
        <strong>{categoryName} </strong>{!isLastItem && " - - - "} {categoryItemsText}
      </div>
    );
  });

  return (
    <div>
      <br></br>
      <h1>My Waste</h1>
      {categoryList}
      <div>
        <br></br>
        <strong>Total Weight:</strong> {wasteData.weight} Kg
        <h2>Total Coins: {totalCoins}</h2>
      </div>
    </div>
  );
};
export default MyWaste;




