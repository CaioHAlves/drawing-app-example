import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core'
import { Delete, GetApp } from '@material-ui/icons'
import { Drawing, clearDrawing, getImage } from 'drawing-react'
import { Header } from '../../components/Header';
import { FooterComponent } from '../../components/Footer';
import * as S from './styles.module'
import { IconButton } from '@material-ui/core';

export function InitialPage() {

  const theme = useTheme()
  const display = useMediaQuery(theme.breakpoints.up('lg'))

  const getImageDrawing = () => {
    const ancor = document.createElement('a')
    ancor.setAttribute("download", "img.png")
    ancor.href = getImage()
    ancor.download = "image_drawing"
    ancor.click()
    ancor.remove()
  }

  return (
    <S.Content>
      <Header />
      <S.Content>
        <Drawing
          penColor={theme.palette.primary.main}
          drawingHeight="100%"
          drawingWidth="100%"
          backgroundColor='transparent'
        />
        <S.AreaButtons>
          <IconButton onClick={clearDrawing} color="primary">
            <Delete fontSize='large' />
          </IconButton>
          <IconButton onClick={getImageDrawing} color="primary">
            <GetApp fontSize='large' />
          </IconButton>
        </S.AreaButtons>
      </S.Content>
      <FooterComponent
        height={display ? '150px' : '100'}
        iconSize={display ? 'large' : 'medium'}
        padding={display ? '' : '16px 0px'}
      />
    </S.Content>
  )
}
