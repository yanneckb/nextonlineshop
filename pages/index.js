import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/Language.Context';
import { index } from '../contents/index.content';
import styles from '../styles/Home.module.css';
import * as Styled from '../styles/index.styles';
import Carousel from '../components/Carousel';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductBanner from '../components/ProductBanner';
import { randCategory } from '../helper/randCategory';

const client = new QueryClient();

export default function Home() {
  const { language } = useContext(LanguageContext);
  const { sliderTitle } = index[language];

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <Carousel />
        <Styled.Slider>
          <Styled.SliderTitle>
            <h2>{sliderTitle}</h2>
          </Styled.SliderTitle>
          <ProductBanner category={randCategory()} />
        </Styled.Slider>
        <Styled.Slider>
          <Styled.SliderTitle>
            <h2>{sliderTitle}</h2>
          </Styled.SliderTitle>
          <ProductBanner category={randCategory()} />
        </Styled.Slider>
      </main>
    </QueryClientProvider>
  );
}
