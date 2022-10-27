import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Button, IconButton, MuiThemeProvider, Snackbar } from '@material-ui/core';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import pt from 'date-fns/locale/pt-BR'
import { store, persistor } from '../redux/store';
import Rotas from './routes';
import { theme } from '../theme';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Close } from '@material-ui/icons'
import { useServiceWorker } from '../hooks/useServiceWorker';

const App = () => {

  const { waitingWorker, showReload, reloadPage } = useServiceWorker()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (showReload && waitingWorker) {
      setOpen(true)
    }
  }, [waitingWorker, showReload, reloadPage])

  const install = () => {
    reloadPage()
    window.close()
  }

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <Rotas />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </MuiPickersUtilsProvider>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        message="Uma atualização está disponível, deseja instalar?"
        action={(
          <>
            <Button size="small" onClick={() => install()} className="btn-snackbar-att">
              Install
            </Button>
            <IconButton size="small" color="inherit" onClick={() => setOpen(false)}>
              <Close fontSize="small" />
            </IconButton>
          </>
        )}
      />
    </MuiThemeProvider>
  )
}

export default App;
