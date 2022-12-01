/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { TextArea, DivTextArea, ContadorTexto, ContainerErros, IconeErro, TextoErro } from './styles'

type Props = {
  name: string,
  label?: string;
  maxLength?: number;
  defaultValue?: string;
  margin?: string;
  minRows?: number;
  text?: string;
  heightTextArea?: string;
  onChange?: (e: { target: { value: string } }) => void
}
export function InputTextArea({ label, name, maxLength, defaultValue, margin, minRows, text, onChange, heightTextArea, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const materialInputRef = useRef<any | null>(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.value = value;
        materialInputRef.current
          .querySelector("label")
          .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");
      }
    })
  }, [fieldName, registerField])

  return (
    <DivTextArea margin={margin} border={error ? "#BB0A30" : undefined}>
      <TextArea
        label={label}
        variant="outlined"
        name={name}
        inputProps={{
          maxLength,
        }}
        defaultValue={defaultValue}
        multiline
        minRows={minRows}
        ref={materialInputRef}
        inputRef={inputRef}
        onChange={onChange}
        heighttextarea={heightTextArea}
      />
      {error && (
        <ContainerErros>
          <IconeErro />
          <TextoErro>{error}</TextoErro>
        </ContainerErros>
      )}
      <ContadorTexto>{text ? text.length : 0}/{maxLength}</ContadorTexto>
    </DivTextArea>

  );
}

export default InputTextArea;
