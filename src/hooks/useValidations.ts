export function useValidations() {
  const validateEmail = (email: string) => {
    if (process.env.REACT_APP_AMBIENTE === "production") {
      const regex = /^([0-9a-zA-Z]+[_.-]?[0-9a-zA-Z]+)*@madtrat.com.br/
      return regex.test(email)
    } else {
      return email
    }
  }


  const validateTelefone = (telefone: string) => {
    const regex = /^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$/
    return regex.test(telefone)
  }

  const isLoggedIn = (token: string, name: string) => {
    return token !== '' && name !== '' ? true : false
  }

  const isAdmin = (token: string, type: string) => {
    return token !== '' && type !== '' && type === 'admin' ? true : false
  }

  const logout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return {
    validateTelefone,
    validateEmail,
    isLoggedIn,
    logout,
    isAdmin
  }
}