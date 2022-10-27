import styled from 'styled-components'
import { Box, Typography } from '@material-ui/core'
import { ErrorOutline, VisibilityOutlined, VisibilityOffOutlined } from '@material-ui/icons'
import { StyledProps } from '../../../theme/styledProps'

export const Container = styled(Box) <StyledProps>`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
`

export const ContainerErros = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0.5px;
`

export const IconeErro = styled(ErrorOutline)`
  &.MuiSvgIcon-root {
    color: #BB0A30;
    height: 20px;
    width: 20px;
  }
`
export const TextoErro = styled(Typography)`
  &.MuiTypography-root {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 136%;
    color: #BB0A30;
    margin: 0px 0px 0px 2px;
  }
`

export const IconeVerSenha = styled(VisibilityOutlined) <StyledProps>`
  &.MuiSvgIcon-root {
    color: ${props => (props.error !== undefined ? '#BB0A30' : 'rgba(0, 0, 0, 0.54)')};
  }
`
export const IconeNaoVerSenha = styled(VisibilityOffOutlined) <StyledProps>`
  &.MuiSvgIcon-root {
    color: ${props => (props.error !== undefined ? '#BB0A30' : 'rgba(0, 0, 0, 0.54)')};
  }
`
