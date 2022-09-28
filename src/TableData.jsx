import { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!data) return;
    const fetchData = async () => {
      const result = await axios('https://plovput.li-st.net/getObjekti/');

      setData(result.data.features);
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper} sx={{maxHeight: '800px'}}>
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
          {data.map((d, i) => (
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
