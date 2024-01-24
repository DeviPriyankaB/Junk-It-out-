import { useAppContext } from '../../AppContext';
import {useState} from 'react'; 
import { useConfirmContext } from '../../ConfirmContext';

const Placepickup = () => {
  const { plasticData, paperData, clothesData, ewasteData, woodData } = useAppContext();
  const [pickupConfirmed, setPickupConfirmed] = useState(false);
  const { setWasteData } = useConfirmContext();

  const renderDetails = () => {
    const renderCategory = (data, category) => {
      if (data && data.items && data.weight) {
        const items = data.items.split(',').map(item => item.trim());
        const categoryText = (
          <>
            <strong>{category}:</strong> {items.join(', ')}
          </>
        );
        const weightText = `Weight(in Kg): ${data.weight}`;

        return (
          <div key={category}>
            <p>{categoryText}</p>
            <p>{weightText}</p>
          </div>
        );
      } else {
        return null; // Render nothing if data is missing or incomplete
      }
    };

    // const handlePickupConfirm = () => {
    //   setPickupConfirmed(true);
      
    // };

const handleConfirmPickup = () => {
  // Save logic (you can send data to backend or store in local storage)
  const data = {
    category: '',
    weight: 0,
  };

  const categories = [plasticData, paperData, clothesData, ewasteData, woodData];
  let totalWeight = 0;

  categories.forEach((categoryData, index) => {
    if (categoryData && categoryData.items && categoryData.weight) {
      const items = (categoryData.items || '').split(',').map(item => item.trim());
      const categoryText = `${Object.keys(categoryData)[0]}:`;
      const weightText = `Weight(in Kg): ${categoryData.weight}`;

      data.category += categoryText;
      if (items.length > 0) {
        items.forEach((item, index) => {
          if (index > 0) {
            data.category += `,${item}`;
          } else {
            data.category += `${item}`;
          }
        });
      }
      data.category += ' ';
      totalWeight += parseFloat(categoryData.weight);
    }
  });

  data.weight = totalWeight;

  setWasteData(data);
  setPickupConfirmed(true);
};




    
    
    return (
      <div className="border border-dark rounded p-4 mb-4">
        <h2 className="mb-3">Pickup Details</h2>
        {renderCategory(plasticData, 'Plastic')}
        {renderCategory(paperData, 'Paper')}
        {renderCategory(clothesData, 'Clothes')}
        {renderCategory(ewasteData, 'Ewaste')}
        {renderCategory(woodData, 'Wood')}
        {pickupConfirmed && <p className="success-message mb-4">Pickup confirmed successfully!</p>}
        <button className="btn btn-primary confirmpickup " id="pp" onClick={handleConfirmPickup}>Confirm Pickup</button>
      </div>
    );

  };
  return (
    <div>
      {renderDetails()}
    </div>
  );
};



export default Placepickup;