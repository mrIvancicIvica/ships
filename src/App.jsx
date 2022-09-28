import './App.css';
import { Box, Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Maps from './Maps';
import Searchbox from './Searchbox';
import List from './ListItems';
import Header from './Header';
import Routing from './Routing';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Routing /> 
      </Container>
    </ThemeProvider>
  );
};

export default App;
