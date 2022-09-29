import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [markerPosition, setMarkerPosition] = useState([]);

  const [filteredPosition, setFilteredPosition] = useState([]);
  console.log(
    '🚀 ~ file: LocationContext.jsx ~ line 10 ~ LocationProvider ~ filteredPosition',
    filteredPosition
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://plovput.li-st.net/getObjekti/');

      setMarkerPosition(result.data.features);
    };
    fetchData();
  }, []);

  const searchLocation = (value) => {
    setFilteredPosition(value);

    if (filteredPosition !== null) {
      const filteredData = markerPosition.properties.naziv_objekta.filter((item) => {
        return Object.values(item)
          .join('')
          .toLocaleLowerCase()
          .includes(filteredPosition.toLocaleString());
      });
      setFilteredPosition(filteredData);
    } else {
      setFilteredPosition(markerPosition);
    }
  };

  const items = { item: 'sara', markerPosition, filteredPosition, searchLocation };

  return (
    <LocationContext.Provider value={items}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
