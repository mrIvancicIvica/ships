import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import location from './assets/location.svg';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/system';
import Searchbox from './Searchbox';
import List from './ListItems';
import axios from 'axios';

const Maps = () => {
  const position = [43.508133, 16.440193];
  const [markerPosition, setMarkerPosition] = useState([]);

  useEffect(() => {
    if (!markerPosition) return;
    const fetchData = async () => {
      const result = await axios('https://plovput.li-st.net/getObjekti/');

      setMarkerPosition(result.data.features);
    };

    fetchData();
  }, []);

  const icon = L.icon({
    iconUrl: location,
    iconSize: [40, 40],
  });

  //   const iconMarkup = renderToStaticMarkup(
  //     <LocationOnIcon/>
  //   )

  //   const customMarkerIcon = L.divIcon({
  //     html: iconMarkup,
  //     iconSize: [35,35]
  //   })

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '70vw',
        height: '90vh',
      }}
    >
      <Box sx={{ width: '70vw', height: '100%' }}>
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Ivica Ivancic</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {markerPosition.map((pos, i) => (
            // console.log(pos.properties.ps_br)

            <Marker key={i} position={pos.geometry.coordinates} icon={icon}>
              <Popup>
                Naziv objekta: {pos.properties.naziv_objekta} <br /> 
                PS Broj: {pos.properties.ps_br} <br /> 
                E Broj: {pos.properties.e_br} <br /> 
                Tip Objerkta: {pos.properties.tip_objekta} <br />
                Lučka kapetanija: {pos.properties.lucka_kapetanija}
              </Popup>
            </Marker>
          ))}
          Maps
        </MapContainer>
      </Box>
      <Box sx={{ width: '40vw', marginLeft: '15px' }}>
        <Searchbox />
        <List />
      </Box>
    </Box>
  );
};

export default Maps;
