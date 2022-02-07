import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import axios from 'axios';
// import products from '../products.json';

import ProductList from '../../components/ProductList';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';
import styled from 'styled-components';
import { Spinner } from '../../components/Spinner/styles';

const StoreContainer = styled.div`
  display: flex;
`;

export default function Store() {
  // const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const baseURL = 'https://fakestoreapi.com/products/';
  const getData = () => {
    axios.get(baseURL).then((response) => {
      const productsAPI = response.data;
      setProducts(productsAPI);
      setLoading(false);
    });
  };

  useEffect(() => getData(), []);

  const getCatData = (cat) => {
    axios.get(`${baseURL}${cat}`).then((response) => {
      const productsAPI = response.data;
      setProducts(productsAPI);
    });
  };

  // const filteredProducts = !search
  //   ? products
  //   : products.filter((product) =>
  //       product.title.toLowerCase().includes(search.toLowerCase())
  //     );

  return (
    <main className={styles.main}>
      {isLoading ? (
        <Spinner />
      ) : (
        <StoreContainer>
          <Sidebar filter={getCatData} />
          <ProductList products={products} />
        </StoreContainer>
      )}
    </main>
  );
}
