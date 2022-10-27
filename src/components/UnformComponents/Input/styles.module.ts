import styled from 'styled-components'
import { Box, Typography } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import { StyledProps } from '../../../theme/styledProps'

export const Container = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
  width: ${props => props.width};
`

export const ContainerErros = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0.5px;
`

export const IconeErro = styled(ErrorOutlineIcon)`
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
