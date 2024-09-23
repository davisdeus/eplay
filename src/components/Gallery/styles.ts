import styled from 'styled-components'
import { cores } from '../../stylesGlobal'

export const Item = styled.ul`
  display: flex;
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const ListItems = styled.li`
  position: relative;
  margin-right: 16px;

  > img {
    width: 150px;
    height: 150px;
    border: 2px solid ${cores.branco};
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`
export const Modal = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;
  max-height: 539px;
  header {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }
  img,
  iframe {
    max-width: 100%;
  }
  iframe {
    width: 100%;
    height: 480px;
  }
`
