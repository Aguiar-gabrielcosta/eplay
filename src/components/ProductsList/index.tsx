import Game from '../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  backgorund: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ backgorund, title, games }: Props) => {
  return (
    <Container $background={backgorund}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                category={game.category}
                description={game.description}
                image={game.image}
                infos={game.infos}
                system={game.system}
                title={game.title}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
