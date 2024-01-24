// import React, { createContext, useState } from 'react';

// export const ConfirmContext = createContext(); // Export ConfirmContext here

// export const ConfirmProvider = ({ children }) => {
//   const [wasteData, setWasteData] = useState({});

//   return (
//     <ConfirmContext.Provider value={{ wasteData, setWasteData }}>
//       {children}
//     </ConfirmContext.Provider>
//   );
// };

// export const useConfirmContext = () => ConfirmContext(ConfirmContext);


import React, { createContext, useState, useContext } from 'react';

export const ConfirmContext = createContext();

const ConfirmProvider = ({ children }) => {
    const [wasteData, setWasteData] = useState({});

  return (
    <ConfirmContext.Provider value={{ wasteData, setWasteData }}>
      {children}
    </ConfirmContext.Provider>
  );
};

const useConfirmContext = () => useContext(ConfirmContext);

export { ConfirmProvider, useConfirmContext };