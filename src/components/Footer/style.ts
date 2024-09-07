import styled from 'styled-components'
import { cores } from '../../stylesGlobal'

export const FooterContainer = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`
export const SectionTitle = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`
export const Link = styled.a`
  color: ${cores.cinzaClaro};
  font-weight: 400;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
