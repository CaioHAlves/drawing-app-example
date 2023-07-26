import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '../components/globalComponents';
import { InitialPage } from '../pages';

const Rotas = () => {

  return (
    <Container>
      <Switch>
        <Route exact path="/" component={InitialPage} />
      </Switch>
    </Container>
  )
}

export default Rotas;
