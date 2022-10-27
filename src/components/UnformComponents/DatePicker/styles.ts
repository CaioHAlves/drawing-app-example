import styled from 'styled-components'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { theme } from '../../../theme/index'
import { StyledProps } from '../../../theme/styledProps'

export const KeyBoardDatePickerStyled = styled(KeyboardDatePicker) <StyledProps>`
  .MuiOutlinedInput-root{
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
    /* height: 44px; */
    font-size: 12px;
    padding: 15px;
  }
  .MuiSvgIcon-root {
    color: ${theme.palette.primary.main};
  }
  .MuiOutlinedInput-input {
    padding: 0px;
    font-weight: 300;
    font-size: 14px;
    line-height: 136%;
    color: ${theme.palette.primary.main};
  }

  .MuiInput-underline:before,
  .MuiInput-underline:after {
    border-bottom: 1px solid #AEC3D2;
  }

  .MuiInputBase-input,
  .MuiInputBase-input.Mui-disabled{
    font-weight: 300;
    font-size: 14px;
    line-height: 136%;
    color: ${theme.palette.primary.main};
    padding: 6px 0 5px 0px;
  }
  .MuiInputAdornment-root {
    width: 100%;
    height: max-content;
    max-height: max-content;
    position: absolute;
    z-index: 1;
    left: 0;

    .MuiButtonBase-root {
      width: 100%;
      height: 100%;
      border-radius: 0;
      justify-content: flex-end;
    }
    .MuiIconButton-root{
      padding: 0px 10px;
    }
  }
  .MuiInputAdornment-positionEnd {
    margin: 0px;
    height: 100%;
  }
  &.MuiFormControl-fullWidth {
    width: ${props => props.width};
    margin: ${props => props.margincomponent};
  }
`
