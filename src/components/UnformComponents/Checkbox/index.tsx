import React, { useEffect, useRef } from 'react'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { useField } from '@unform/core'

interface Props extends CheckboxProps {
  name: string
  label?: string
  value?: string
  style?: object
  className?: string
}

export function CheckBox({ name, value, label, style, className, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => ref.current.checked,
      clearValue: ref => {
        ref.current.checked = defaultChecked
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
    })
  }, [defaultValue, fieldName, registerField, defaultChecked])

  return (
    <div>
      <Checkbox
        className={className}
        defaultChecked={defaultChecked}
        inputRef={inputRef}
        value={value}
        id={fieldName}
        style={style}
        {...rest}
      />

      <label htmlFor={fieldName} key={fieldName}>
        {label}
      </label>
    </div>
  )
}

export default CheckBox
