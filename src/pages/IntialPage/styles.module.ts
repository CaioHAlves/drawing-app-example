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
    height: 35px;
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
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
