import React from 'react'
import { ArrowForwardIos } from '@material-ui/icons'
import * as S from './styles'

export function Header() {

  const returnToSite = () => {
    window.open("https://caiohalves.vercel.app")
  }

  return (
    <S.HeaderComponent>
      <S.MyName>
        Caio
        <div className='rotate-words'>
          <span>Alves</span>
        </div>
      </S.MyName>
      <S.OptionsDiv>
        <S.StyledButton onClick={() => returnToSite()}>
          <p>Site principal</p>
          <ArrowForwardIos />
        </S.StyledButton>
      </S.OptionsDiv>
    </S.HeaderComponent>
  )
}
