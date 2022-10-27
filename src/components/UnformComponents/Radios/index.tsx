import React, { useEffect, useRef, InputHTMLAttributes, RefObject } from 'react'
import { useField } from '@unform/core'
import { Container, Span, Input, Label } from './styles.module'

interface Props {
  name: string
  valueDefault?: string | number
  options: {
    id: string
    value: string | number
    label: string
  }[]
}

type RefInputEl = RefObject<HTMLInputElement[] | any>

type InputProps = InputHTMLAttributes<HTMLInputElement | any> & Props

export function RadioUnform({ name, options, valueDefault, ...rest }: InputProps) {
  const inputRefs: RefInputEl = useRef([])
  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: (refs: RefInputEl) => refs?.current?.find((input: { checked: boolean }) => input?.checked)?.value,
      setValue: (refs: RefInputEl, id: string) => {
        const inputRef = refs?.current?.find((ref: { id: string }) => ref.id === id)
        if (inputRef) inputRef.checked = true
      },
      clearValue: (refs: RefInputEl) => {
        const inputRef = refs?.current?.find((ref: { checked: boolean }) => ref.checked === true)
        if (inputRef) inputRef.checked = false
      },
    })
  }, [fieldName, registerField])

  return (
    <Container>
      {options.map((option, index) => (
        <Span key={option.id}>
          <Input
            type="radio"
            ref={ref => {
              inputRefs.current[index] = ref
            }}
            id={option.id}
            name={name}
            defaultChecked={option.value === valueDefault}
            value={option.value}
            {...rest}
          />

          <Label htmlFor={option.id} key={option.id}>
            {option.label}
          </Label>
        </Span>
      ))}
      {error && <span>{error}</span>}
    </Container>
  )
}

export default RadioUnform
