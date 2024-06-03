import styled from 'styled-components'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<{ $background: string }>`
  background-color: ${(props) =>
    props.$background === 'gray' ? colors.black : colors.black};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.$background === 'gray' ? colors.black : colors.black};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-wieght: bold;
  margin-bottom: 40px;
`
