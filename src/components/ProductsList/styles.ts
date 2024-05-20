import styled from 'styled-components'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<{ $background: string }>`
  background-color: ${(props) =>
    props.$background === 'gray' ? cores.cinza : cores.preta};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.$background === 'gray' ? cores.preta : cores.cinza};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-wieght: bold;
`
