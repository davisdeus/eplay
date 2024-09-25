import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../stylesGlobal'
import { Card } from '../Product/styles'

export const ListContainer = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.cinza : cores.preto};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.preto : cores.cinza};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
