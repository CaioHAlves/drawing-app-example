import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from '../components/globalComponents';
import { useHooks } from '../hooks/useHooks';
import { useRedux } from '../hooks/useRedux';
import { useValidations } from '../hooks/useValidations';
import { PaginaInicial } from '../pages';

interface PrivateRouteProps {
  component: any
  path?: string
  exact?: boolean
}

const PrivateRouteForAdmins = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props
  const { isAdmin } = useValidations()
  const { useAppSelect } = useRedux()

  const { token, type } = useAppSelect.user

  return (
    <Route
      {...rest}
      render={(routerProps) => (isAdmin(token, type) ?
        <Component {...routerProps} />
        : <Redirect to='/home' />)}
    />
  )
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props
  const { isLoggedIn } = useValidations()
  const { useAppSelect } = useRedux()

  const { token, name } = useAppSelect.user

  return (
    <Route
      {...rest}
      render={(routerProps) => (isLoggedIn(token, name) ?
        <Component {...routerProps} />
        : <Redirect to='/' />)}
    />
  )
}

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
        <Route exact path="/" component={PaginaInicial} />
      </Switch>
    </Container>
  )
}

export default Rotas;
