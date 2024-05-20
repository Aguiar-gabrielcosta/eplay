import styled from 'styled-components'
import { cores } from '../../styles'

export const TagContainer = styled.div<{ $size: string }>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.$size === 'small' ? '10px' : '16px')};
  font-weight: bold;
  padding: ${(props) => (props.$size === 'small' ? '4px 6px' : '8px 16px')};
  border-radius: 8px;
  display: inline-block;
`
