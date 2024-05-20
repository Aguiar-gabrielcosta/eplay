import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  backgorund: 'gray' | 'black'
}

const ProductsList = ({ backgorund, title }: Props) => {
  return (
    <Container className="container">
      <h2>Nome da seção</h2>
      <List>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
        <li>
          <Product />
        </li>
      </List>
    </Container>
  )
}

export default ProductsList
