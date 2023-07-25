import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '../components/globalComponents';
import { useHooks } from '../hooks/useHooks';
import { useRedux } from '../hooks/useRedux';
import { useValidations } from '../hooks/useValidations';
import { InitialPage } from '../pages';

const Rotas = () => {

  const { isLoggedIn, logout } = useValidations()
  const { useAppSelect } = useRedux()
  const { history, local } = useHooks()

  const { token, name } = useAppSelect.user
  const dataDeExpiracao = Number(sessionStorage.getItem("data_exp")) > new Date().getTime()

  const authenticated = isLoggedIn(token, name)

  useEffect(() => {
    authenticated && local.pathname === "/" && history.push("/home")

    if (authenticated && dataDeExpiracao === false) {
      logout()
    }
  }, [])

  return (
    <Container>
      <Switch>
        <Route exact path="/" component={InitialPage} />
      </Switch>
    </Container>
  )
}

export default Rotas;
