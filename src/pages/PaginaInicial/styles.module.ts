import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const GridContainer = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
`

export const GridItem = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
`
