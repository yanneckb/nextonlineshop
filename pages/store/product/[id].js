import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../../contexts/Language.Context';
import { productPageText } from '../../../contents/productPage.content';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as Styled from '../../../styles/product.styles';
import Spinner from '../../../components/Spinner';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart.slice';
import ProductBanner from '../../../components/ProductBanner';
import { randCategory } from '../../../helper/randCategory';
import { categoryConvert } from '../../../helper/categoryConverter';

// shows single product page
const Product = () => {
  const { language } = useContext(LanguageContext);
  const { freeShippingText, ReturnRight, invoice, alsoLike } =
    productPageText[language];
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    // fetches single product data
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const category = product.category;

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Styled.Wrapper>
            <Styled.ProductPicture>
              <Styled.Image src={product.image} />
            </Styled.ProductPicture>
            <Styled.ProductInfo>
              <Link href={`/store/category/${category}`} passHref>
                <Styled.Category>{categoryConvert(category)}</Styled.Category>
              </Link>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <Styled.BuySection>
                <h2>{product.price}€</h2>
                <Styled.Button onClick={() => dispatch(addToCart(product))}>
                  In den Warenkorb
                </Styled.Button>
              </Styled.BuySection>
              <Styled.Notes>
                <p>{freeShippingText}</p>
                <p>{ReturnRight}</p>
                <p>{invoice}</p>
              </Styled.Notes>
            </Styled.ProductInfo>
          </Styled.Wrapper>
          <Styled.Slider>
            <Styled.SliderTitle>
              <h2>{alsoLike}</h2>
            </Styled.SliderTitle>
            <ProductBanner category={randCategory()} />
          </Styled.Slider>
        </div>
      )}
    </div>
  );
};

export default Product;
