
import React, { useContext } from 'react';
import { ConfirmContext } from '../ConfirmContext';


const MyWaste = () => {
  const { wasteData } = useContext(ConfirmContext);

  if (!wasteData) {
    return <div>No waste data available</div>;
  }


  const categoryItems = wasteData.category.split(' ');
  const categoryList = categoryItems.map((item, index) => {
    const categoryName = item.split(':')[0];
    const categoryItemsText = item.split(':')[1];
    return (
      <div key={index}>
        <strong>{categoryName} </strong> {categoryItemsText}
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
      </div>
    </div>
  );
};

export default MyWaste;
