import React, { ChangeEvent } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core'
import { Delete, GetApp } from '@material-ui/icons'
import { Signature, useActions } from 'signature-component'
import { Header } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import * as S from './styles.module'
import { IconButton } from '@material-ui/core';

export function InitialPage() {

  const theme = useTheme()
  const display = useMediaQuery(theme.breakpoints.up('lg'))
  const { clearSignature, getImageSignature, changeBackgroundColor } = useActions()

  const getImageDrawing = () => {
    const ancor = document.createElement('a')
    ancor.setAttribute("download", "img.png")
    ancor.href = getImageSignature()
    ancor.download = "image_drawing"
    ancor.click()
    ancor.remove()
  }

  const getColor = (event: ChangeEvent<HTMLInputElement>) => {
    changeBackgroundColor(event.target.value)
  }

  return (
    <S.Content>
      <Header />
      <S.Content>
        <Signature
          penColor={theme.palette.primary.main}
          styles={{
            width: '100%',
            height: '100%'
          }}
        />
        <S.AreaButtons>
          <IconButton color="primary" onClick={clearSignature}>
            <Delete fontSize='large' />
          </IconButton>
          <IconButton onClick={getImageDrawing} color="primary">
            <GetApp fontSize='large' />
          </IconButton>
          <input type="color" onBlur={getColor} defaultValue={theme.palette.secondary.main} />
        </S.AreaButtons>
      </S.Content>
      <FooterComponent
        height={display ? '150px' : '100px'}
        iconSize={display ? 'large' : 'medium'}
        padding={display ? '' : '16px 0px'}
      />
    </S.Content>
  )
}
