import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </S.Hamburger>
            <Link to={'/'}>
              <img src={logo} alt="Logo Eplay" />
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a página de categorias"
                    to={'/categories'}
                  >
                    Categorias
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a seção de Em breve"
                    to={'/#coming-soon'}
                  >
                    Em breve
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a seção de promoções"
                    to={'/#on-sale'}
                  >
                    Promoções
                  </HashLink>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.CartButton onClick={openCart}>
            {items.length} <span>- produto(s)</span>{' '}
            <img src={cartIcon} alt="Carrinho de compras" />
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a página de categorias"
                to={'/categories'}
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a seção de Em breve"
                to={'/#coming-soon'}
                onClick={() => setIsMenuOpen(false)}
              >
                Em breve
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a seção de promoções"
                to={'/#on-sale'}
                onClick={() => setIsMenuOpen(false)}
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </>
  )
}

export default Header
