import { useContext } from 'react';
import LocationContext from './LocationContext';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const TableData = () => {
  const { markerPosition } = useContext(LocationContext);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '800px' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Naziv objekta</TableCell>
            <TableCell>PS Broj</TableCell>
            <TableCell>E Broj</TableCell>
            <TableCell>Tip Objekta</TableCell>
            <TableCell>Lucka Kapetanija</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {markerPosition?.map((d, i) => (
            <TableRow key={i}>
              <TableCell>{d.properties.naziv_objekta}</TableCell>
              <TableCell>{d.properties.ps_br}</TableCell>
              <TableCell>{d.properties.e_br}</TableCell>
              <TableCell>{d.properties.tip_objekta}</TableCell>
              <TableCell>{d.properties.lucka_kapetanija}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
