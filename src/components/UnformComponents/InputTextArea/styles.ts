import styled from 'styled-components'
import { TextField, Box, Typography } from '@material-ui/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import { StyledProps } from '../../../theme/styledProps'

export const TextArea = styled(TextField) <StyledProps>`
  .MuiInputBase-root {
    display: flex;
    background: #FFFFFF;
    color: #8794A5;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 136%;
    border-radius: 4px;
    min-height: ${props => props.heighttextarea};
    resize: none;
    overflow: auto;
  }

  `
export const DivTextArea = styled.div <StyledProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin};
  .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.border};
  }
`
export const ContadorTexto = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;

  margin: 5px 0px 0px auto;
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
