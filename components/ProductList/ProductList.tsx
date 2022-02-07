import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/Language.Context';
import { productListText } from '../../contents/productList.content';
import * as Styled from './styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';

// Lists all given products
export default function ProductList({ products }) {
  const { language } = useContext(LanguageContext);
  const { addToCartTitle } = productListText[language];
  const [isActive, setIsActive] = useState(false);

  // toggles the favorite button
  const toggleFav = (state) => {
    setIsActive(!state);
  };

  const dispatch = useDispatch();

  return (
    <Styled.Wrapper>
      {products.map((product) => {
        return (
          <Styled.Product key={product.id}>
            <Styled.Icon onClick={toggleFav}>
              {isActive ? <FavoriteOutlinedIcon /> : <FavoriteBorderIcon />}
            </Styled.Icon>
            <Styled.TopContainer>
              <Styled.ImageContainer>
                <Link href={`/store/product/${product.id}`} passHref>
                  <Styled.Image
                    src={product.image}
                    alt={`Preview of ${product.title}`}
                  />
                </Link>
              </Styled.ImageContainer>
            </Styled.TopContainer>
            <Styled.BottomContainer>
              <Styled.Title>
                <Link href={`store/product/${product.id}`}>
                  {product.title}
                </Link>
              </Styled.Title>
              <Styled.BuyContainer>
                <Styled.Price>{product.price} €</Styled.Price>
                <Styled.Button onClick={() => dispatch(addToCart(product))}>
                  {addToCartTitle}
                </Styled.Button>
              </Styled.BuyContainer>
            </Styled.BottomContainer>
          </Styled.Product>
        );
      })}
    </Styled.Wrapper>
  );
}
