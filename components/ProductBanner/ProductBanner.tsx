import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../contexts/Language.Context';
import { productBannerText } from '../../contents/productBanner.content';
import axios from 'axios';
import * as Styled from './styles';
import Link from 'next/link';

export default function ProductBanner({ category }) {
  const { language } = useContext(LanguageContext);
  const { detailsTitle, showMore } = productBannerText[language];
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // converts the query string to api readable string
    const categoryPatch = (cat) => {
      if (cat === `womens-clothing`) {
        return `women's clothing`;
      }
      if (cat === `mens-clothing`) {
        return `men's clothing`;
      }
      return category;
    };
    // fetches data by category
    const fetchData = async () => {
      console.log('refresh', category);
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      const filtered = data.filter((x) => x.category === category);
      setProducts(filtered);
      setLoading(false);
    };
    fetchData();
  }, [category]);

  return (
    <Styled.Wrapper>
      <Styled.Slider>
        {products.map((product) => {
          return (
            <Link
              href={`/store/product/${product.id}`}
              key={product.id}
              passHref
            >
              <Styled.Slide>
                <Styled.Image src={product.image} />

                <Styled.Info>
                  <Styled.Title>{product.title}</Styled.Title>
                  <Styled.BottomInfo>
                    <Styled.Button>{detailsTitle}</Styled.Button>
                    <Styled.Price>{product.price}€</Styled.Price>
                  </Styled.BottomInfo>
                </Styled.Info>
              </Styled.Slide>
            </Link>
          );
        })}
        <Link href={`/store/category/${category}`} passHref>
          <Styled.More>
            <Styled.MoreLink>
              <Styled.MoreText>{showMore}</Styled.MoreText>
              <Styled.MoreText>👉</Styled.MoreText>
            </Styled.MoreLink>
          </Styled.More>
        </Link>
      </Styled.Slider>
    </Styled.Wrapper>
  );
}
