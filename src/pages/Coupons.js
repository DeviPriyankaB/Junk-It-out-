// Coins.js

import React from 'react';
import PropTypes from 'prop-types';
//import CoinDisplay from '../components/CoinDisplay';

const Coins = () => {
  // Assume you get the number of coins from a user context or some state
  const numberOfCoins = 100;

  const CoinDisplay = ({ numberOfCoins }) => {
    return (
      <div className="coin-display">
        <div className="coin-icon">
          {/* You can replace this with an actual coin icon/image */}
          🪙
        </div>
        <div className="coin-text">
          <p>You have</p>
          <h2>{numberOfCoins} Coins</h2>
        </div>
      </div>
    );
  };
  
  CoinDisplay.propTypes = {
    numberOfCoins: PropTypes.number.isRequired,
  };

  return (
    <div className="coins-page">
      <h1>My Coins</h1>
      <CoinDisplay numberOfCoins={numberOfCoins} />
    </div>
  );
};

export default Coins;




// import React from "react";

// const Coupons=()=>{
//     return(
//         <div> Coupons Page </div>
//     );
// };

// export default Coupons;