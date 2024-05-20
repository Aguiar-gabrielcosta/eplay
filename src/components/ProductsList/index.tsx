import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  backgorund: 'gray' | 'black'
}

const ProductsList = ({ backgorund, title }: Props) => {
  return (
    <Container $background={backgorund}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <li>
            <Product
              category="Ação"
              description="teste"
              image="//placehold.it/222x250"
              infos={['-10%', 'R$150']}
              title="Teste"
              system="Windows"
            />
          </li>
          <li>
            <Product
              category="Ação"
              description="teste"
              image="//placehold.it/222x250"
              infos={['-10%', 'R$150']}
              title="Teste"
              system="Windows"
            />
          </li>
          <li>
            <Product
              category="Ação"
              description="teste"
              image="//placehold.it/222x250"
              infos={['-10%', 'R$150']}
              title="Teste"
              system="Windows"
            />
          </li>
          <li>
            <Product
              category="Ação"
              description="teste"
              image="//placehold.it/222x250"
              infos={['-10%', 'R$150']}
              title="Teste"
              system="Windows"
            />
          </li>
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
