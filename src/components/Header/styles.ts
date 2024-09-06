import styled from 'styled-components'
import { cores } from '../../stylesGlobal'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: ${cores.branco};
    text-decoration: none;
  }
  div {
    display: flex;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
