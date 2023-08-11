import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { StyledProps } from '../theme/styledProps'
import { theme } from '../theme'

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.width || "100%"};
  padding: ${props => props.padding};
  height: 100%;
  overflow: hidden;
  background: ${props => props.background};
  justify-content: ${props => props.justifyContent};
`
export const Content = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  padding: ${props => props.padding};
  overflow: ${props => props.overflow};
  margin: ${props => props.margin};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.background};
`

export const StyledButton = styled(Button) <StyledProps>`
  &.MuiButtonBase-root {
    color: ${props => props.textcolor || '#FFFFFF'};
    background-color: ${props => props.backgroundcolor || theme.palette.primary.main};
    border: 1px solid ${props => props.bordercolor || theme.palette.primary.main};
    text-transform: none;
    padding: ${props => props.padding || "16px 24px"};
    height: ${props => props.height || "50px"};
    width: ${props => props.width || "312px"};
    margin: ${props => props.margin};
  }
  &.Mui-disabled,
  &.MuiButton-root.Mui-disabled {
    color: #878787;
    background-color: #444444;
    border: none;
  }

  &.MuiButtonBase-root:hover {
    background-color: ${props => props.backgroundcolor || theme.palette.primary.light};
  }
`

export const ButtonTransparent = styled(Button) <StyledProps>`
  &.MuiButtonBase-root {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: ${props => props.textcolor || "#FFFFFF"};
    padding: 0px;
    background: transparent;
    margin: ${props => props.margin};
    text-transform: none;
    width: ${props => props.width};
  }

  .edit.MuiSvgIcon-root {
    color: ${theme.palette.primary.main};
  }

  .MuiSvgIcon-root {
    margin: 0px 5px 0px 0px;
  }
`
