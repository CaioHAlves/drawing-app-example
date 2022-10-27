import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import {
  InputLabel,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput
} from '@material-ui/core'
import { Container, ContainerErros, IconeErro, TextoErro, IconeVerSenha, IconeNaoVerSenha } from './styles.module'

type PropsInput = {
  name: string,
  label?: string,
  style?: object,
  margin?: string
  width?: string
}

interface State {
  password: string;
  showPassword: boolean;
}

export function InputPassword({ name, label, margin, width, ...rest }: PropsInput) {

  const inputRef = useRef<any | null>(null)
  const materialInputRef = useRef<any | null>(null);

  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const { fieldName, registerField, defaultValue, error } = useField(name)

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

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container margin={margin} width={width}>
      <FormControl variant="outlined" className={error ? 'Alterar-Cor-Senha' : ""}>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          inputRef={inputRef}
          ref={materialInputRef}
          error={!!error}
          name={fieldName}
          defaultValue={defaultValue}
          labelWidth={label !== undefined && label?.length > 5 ? 94 : 70}
          onChange={handleChange('password')}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ?
                  <IconeVerSenha error={error} /> :
                  <IconeNaoVerSenha error={error} />}
              </IconButton>
            </InputAdornment>
          )}
          {...rest}
        />
      </FormControl>
      {error && (
        <ContainerErros>
          <IconeErro />
          <TextoErro>{error}</TextoErro>
        </ContainerErros>
      )}
    </Container>
  )
}

export default InputPassword
