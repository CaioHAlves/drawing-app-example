import styled from 'styled-components'
import { theme } from '../../theme'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${theme.palette.secondary.main};
  overflow: auto;
  position: relative;

  input[type="color"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 35px;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }

  input[type="color"]::-webkit-color-swatch {
    border-radius: 4px;
    border: 2px solid #FFFFFF;
  }
  input[type="color"]::-moz-color-swatch {
    border-radius: 4px;
    border: 2px solid #FFFFFF;
  }
`
export const AreaButtons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 8px;
  bottom: 5%;

  .MuiIconButton-root {
    padding: 8px;
  }
`
