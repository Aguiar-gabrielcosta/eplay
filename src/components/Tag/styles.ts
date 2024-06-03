import styled from 'styled-components'
import { colors } from '../../styles'

export const TagContainer = styled.div<{ $size: string }>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.$size === 'small' ? '10px' : '16px')};
  font-weight: bold;
  padding: ${(props) => (props.$size === 'small' ? '4px 6px' : '8px 16px')};
  border-radius: 8px;
  display: inline-block;
`
