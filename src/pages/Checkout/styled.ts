import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div<{ $margin?: string }>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.$margin || '0'};
`

export const InputGroup = styled.div<{ $maxWidth?: string }>`
  flex: auto;
  max-width: ${(props) => props.$maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    width: 100%;
  }
`

export const TabButton = styled.button<{ $isActive: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branca};
  background-color: ${(props) => (props.$isActive ? cores.verde : cores.preta)};
  height: 32px;
  border: none;
  border-radius: 8px;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
