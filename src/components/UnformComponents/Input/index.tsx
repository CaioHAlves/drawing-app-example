import React, { ReactNode, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputAdornment, TextField } from '@material-ui/core'
import { Container, ContainerErros, IconeErro, TextoErro } from './styles.module'

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  variant?: "standard" | "filled" | "outlined";
  type?: string;
  style?: object;
  onChange?: (event?: any) => void;
  hasIcon?: boolean;
  icon?: ReactNode;
  className?: string;
  defaultValue?: string | number | null;
  size?: "small" | "medium"
  margin?: string;
  disabled?: boolean;
  width?: string
}

export function Input({
  name,
  label,
  variant,
  type,
  style,
  onChange,
  hasIcon,
  icon,
  className,
  defaultValue,
  size,
  placeholder,
  margin,
  disabled,
  width,
  ...rest }: Props) {

  const inputRef = useRef<HTMLInputElement>(null)
  const materialInputRef = useRef<any | null>(null);

  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: any) {
        ref.value = value;
        materialInputRef.current
          .querySelector("label")
          .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");
      }
    })
  }, [fieldName, registerField])

  return (
    <Container margin={margin} width={width}>
      <TextField
        disabled={disabled}
        variant={variant}
        type={type}
        label={label}
        inputRef={inputRef}
        ref={materialInputRef}
        error={!!error}
        defaultValue={defaultValue}
        style={style}
        onChange={onChange}
        size={size}
        InputProps={{
          endAdornment: (
            hasIcon === true && (
              <InputAdornment position="end">
                {icon}
              </InputAdornment>
            )
          ),
        }}
        className={className}
        placeholder={placeholder}
        {...rest}
      />
      {error && (
        <ContainerErros>
          <IconeErro />
          <TextoErro>{error}</TextoErro>
        </ContainerErros>
      )}
    </Container>
  )
}

export default Input;
