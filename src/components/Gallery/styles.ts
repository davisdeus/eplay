import styled from 'styled-components'
import { cores } from '../../stylesGlobal'

export const Item = styled.ul`
  display: flex;
`

export const ListItems = styled.li`
  img {
    width: 150px;
    height: 150px;
    border: 2px solid ${cores.branco};
    border-radius: 8px;
    margin-right: 16px;
    object-fit: cover;
  }
`
