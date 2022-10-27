import styled from 'styled-components'
import { Box } from '@material-ui/core'

export const Container = styled(Box)`
  &.MuiBox-root {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  input[type='radio'] {
    content: '';
    border: 2px solid #043D94;
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  input[type="radio"]:checked {
    background-color: #043D94;
    box-shadow: inset 0 0 0 3px white, inset 0 0 0 1px blue;
  }
`
export const Span = styled.span`
  display: flex;
  align-items: center;
  min-height: 56px;
  width: 100%;
  padding: 13.6px 24px;
  border-bottom: 1px solid #AEC3D2;
`
export const Input = styled.input`
  height: 24px;
  width: 24px;
`
export const Label = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 136%;
  color: #697788;
  margin: 0px 0px 0px 12.6px;
`
