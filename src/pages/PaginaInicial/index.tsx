import React from 'react';
import { Typography } from '@material-ui/core';
import { GridContainer, GridItem } from './styles.module'

export function PaginaInicial() {
  return (
    <GridContainer container>
      <GridItem item>
        <Typography variant="h2" color="secondary">
          Template React
        </Typography>
      </GridItem>
    </GridContainer>
  )
}

export default PaginaInicial
