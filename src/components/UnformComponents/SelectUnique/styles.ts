import styled from 'styled-components'
import { theme } from '../../../theme'
import { StyledProps } from '../../../theme/styledProps'

export const Container = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin: ${props => props.margin};
  width: ${props => props.width};

  .Input-Select {
    width: 100%;
  }

  .react-select__single-value {
    color: ${theme.palette.primary.main};
  }

  .react-select__control {
    min-height: 50px;
    background-color: transparent;
  }

  .css-1pahdxg-control:hover {
    background-color: #EEEEEE;
  }
  .css-1pahdxg-control {
    background-color: #EEEEEE;
    border: none;
    box-shadow: 0 0 0 1px #02226A;
  }

  .css-1rhbuit-multiValue {
    display: flex;
    align-items: center;
    background-color: ${theme.palette.primary.light};
    color: #fff;
    border-radius: 20px;
    padding: 1px;
  }
  .css-xb97g8:hover {
    background-color: ${theme.palette.primary.main};
    border-radius: 30px;
    color: #fff;
  }

  .css-12jo7m5 {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;
    display: flex;
    align-items: center;
    letter-spacing: 0.4px;
    color: #FFFFFF;
  }

  .Icone-Busca-Select.MuiSvgIcon-root {
    color: #043D94
  }

  .Input-Select-Divisao-Erros {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    .MuiSvgIcon-root {
      color: #BB0A30;
      height: 20px;
      width: 20px;
    }
  }

  .Input-Select-Error {
    display: flex;
    justify-content: flex-start;
    color: #BB0A30;
    font-weight: 300;
    font-size: 14px;
    line-height: 136%;
    margin-top: 3px;
  }

  .react-select__menu  {
    z-index: 10000;
  }

  .react-select__menu-list {
    background: #08944d7a;
  }
  .react-select__menu-list::-webkit-scrollbar {
    display: none;
  }

  .react-select__option {
    border-bottom: 1px solid ${theme.palette.primary.main};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.4px;
    color: ${theme.palette.primary.main};
    /* background: #08944d7a; */
  }

  .react-select__option--is-selected {
    background: ${theme.palette.secondary.light};
  }
`
