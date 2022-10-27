import React, { useRef, useEffect } from 'react'
import ReactSelect, {
  components,
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select'
import { useField } from '@unform/core'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Typography } from '@material-ui/core';
import { Container } from './styles'

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  width?: string
  margin?: string
  onChange?: (value: OptionTypeBase | null) => void
  placeholder?: string
}

export function Select({ name, options, hasIcon, icon, width, margin, onChange, placeholder, ...rest }: Props) {

  const selectRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const IndicatorSeparator = ({ innerProps }: any) => <span style={{ width: "0.1px" }} {...innerProps} />

  const DropdownIndicator = (props: any) => (
    <>
      {hasIcon === true ? (
        <components.DropdownIndicator {...props}>
          {icon}
        </components.DropdownIndicator>
      )
        :
        ""}
    </>
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return []
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value)
        }
        if (!ref.state.value) {
          return ''
        }
        return ref.state.value.value
      },
      clearValue(ref) {
        ref.state.value = ''
        return ref
      },
    })
  }, [fieldName, registerField, rest.isMulti])

  return (
    <Container width={width} margin={margin}>
      <ReactSelect
        ref={selectRef}
        defaultValue={
          defaultValue && options?.find((option) => option.value === defaultValue)
        }
        components={{ DropdownIndicator, IndicatorSeparator }}
        options={options}
        hasIcon={hasIcon}
        icon={icon}
        classNamePrefix="react-select"
        className="Input-Select"
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && (
        <div className="Input-Select-Divisao-Erros">
          <ErrorOutlineIcon className="Icone-Input-Error" />
          <Typography className="Input-Select-Error">{error}</Typography>
        </div>
      )}
    </Container>
  )
}

export default Select
