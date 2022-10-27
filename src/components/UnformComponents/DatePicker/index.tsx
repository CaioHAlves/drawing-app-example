import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@unform/core';
import { KeyBoardDatePickerStyled } from './styles'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types';

interface Props {
  name: string;
  inputVariant?: "filled" | "outlined" | "standard";
  disabledPast?: boolean;
  placeholder?: string
  onChange?: (date: MaterialUiPickersDate, value?: string | null | undefined) => void
  dateValue?: ParsableDate
  minDate?: string | number | object | Date | null | undefined
  maxDate?: string | number | object | Date | null | undefined
  margincomponent?: string
}

export function DatePicker({ name, inputVariant, disabledPast, placeholder, onChange, dateValue, minDate, maxDate, margincomponent, ...rest }: Props) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'value',
      clearValue: () => {
        setDate(null);
      },
    })
  }, [fieldName, registerField]);

  return (
    <KeyBoardDatePickerStyled
      name={name}
      inputRef={datepickerRef}
      disablePast={disabledPast}
      margin="none"
      fullWidth
      mask='__/__/____'
      format='dd/MM/yyyy'
      placeholder={placeholder || 'dd/MM/yyyy'}
      value={dateValue || date}
      variant="dialog"
      size='small'
      inputVariant={inputVariant}
      cancelLabel="CANCELAR"
      okLabel="CONFIRMAR"
      minDate={minDate}
      maxDate={maxDate}
      onChange={onChange || setDate}
      margincomponent={margincomponent}
      {...rest}
    />
  )
}
