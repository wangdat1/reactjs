import Footer from 'component/footer';
import Header from 'component/header';
import ProductFeatures from 'features/Product';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import productApi from './api/productsApi';
import NotFound from './component/NotFound';
import AlbumFeatures from './features/Album';
import CounterFeatures from './features/Counter';
import TodoFeature from './features/Todo';

function App(props) {
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" component={ProductFeatures} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/products" component={ProductFeatures} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
