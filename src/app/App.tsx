import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import pt from 'date-fns/locale/pt-BR'
import Rotas from './routes';
import { theme } from '../theme';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}

export default App;
