import { useHistory, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { theme } from '../theme'

export function useHooks() {

  const formatDate = (date: string) => {
    if (date !== '') {
      const newDate = date.split("T")[0].split("-").reverse().join("/")
      return newDate
    } else {
      return date
    }
  }

  return {
    history: useHistory(),
    notify: toast,
    local: useLocation(),
    theme,
    formatDate
  }
}