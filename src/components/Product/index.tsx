import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.it/222x250" alt="#" />
      <Titulo>Nome do Jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Plataforma</Tag>
      <Descricao>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel amet
        expedita cumque iste tenetur in, odio molestias veniam nam non cum
        accusamus cupiditate voluptates repellendus totam. Error corporis sint
        sit.
      </Descricao>
    </Card>
  )
}

export default Product
