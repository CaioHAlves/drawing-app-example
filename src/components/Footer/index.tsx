import React from 'react'
import { IconButton } from '@material-ui/core'
import { Footer, DivIconsSocialNetwork, Copyright } from './styles'
import { Instagram, GitHub, WhatsApp, LinkedIn } from '@material-ui/icons'

interface Props {
  height: string
  iconSize?: "small" | "inherit" | "default" | "large" | "medium"
  padding?: string
}

export function FooterComponent({ iconSize, height, padding }: Props) {

  const socialNetworkData = [
    { social: "LinkedIn", icon: <LinkedIn fontSize={iconSize} />, url: "https://www.linkedin.com/in/caio-henrique-alves/" },
    { social: "GitHub", icon: <GitHub fontSize={iconSize} />, url: "https://github.com/CaioHalves" },
    { social: "Instagram", icon: <Instagram fontSize={iconSize} />, url: "https://www.instagram.com/caio_damiao/" },
    { social: "WhatsApp", icon: <WhatsApp fontSize={iconSize} />, url: "https://api.whatsapp.com/send?phone=5519999672886" },
  ]

  const goTo = (link: string) => {
    window.open(link)
  }

  return (
    <Footer
      height={height}
      padding={padding}
    >
      <DivIconsSocialNetwork>
        {socialNetworkData.map((item, index) => (
          <IconButton key={index} onClick={() => goTo(item.url)} color="primary">
            {item.icon}
          </IconButton>
        ))}
      </DivIconsSocialNetwork>
      <Copyright>&copy; 2022 Caio Alves</Copyright>
    </Footer>
  )
}
