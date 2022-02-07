import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../../styles/Home.module.css';
// import products from '../products.json';
import ProductList from '../../../components/ProductList';
import Sidebar from '../../../components/Sidebar';
import * as Styled from '../../../styles/category.styles';
import Spinner from '../../../components/Spinner';
import { QueryConvert } from '../../../helper/queryConvert';

// Lists all products filtered by category
const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    // fetches data by category
    const fetchData = async () => {
      console.log('refresh', category);
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      const filtered = data.filter(
        (x) => x.category === QueryConvert(category)
      );
      setProducts(filtered);
      setLoading(false);
    };
    fetchData();
  }, [category]);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Styled.StoreContainer>
          <Sidebar />
          <ProductList products={products} />
        </Styled.StoreContainer>
      )}
    </main>
  );
};

export default CategoryList;
