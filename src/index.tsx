import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { CircularProgress } from '@material-ui/core';
import App from './app/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Suspense fallback={
    <div
      className="Index-Suspense"
    >
      <CircularProgress
        size={50}
        variant="indeterminate"
        className="Progresso-Circular"
      />
    </div>
  }>
    <App />
  </Suspense>
)

serviceWorkerRegistration.register()
