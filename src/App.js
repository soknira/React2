import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import $ from 'jquery';
import 'magnific-popup';

import Header from './component/header';
import Footer from './component/footer';
import Content from './component/content';
// import Cart from './components/cart';
import Product from './component/Products';
import ContactPage from './component/contact';
import Cart from './component/cart';
import AboutPage from './component/about';
import BlogPage from './component/blog';
import BlogDetail from './component/blog-detail';
import ProductDetail from './component/ProductDetail';
import CartTable from './component/CartTable';
import SignUpForm from './component/Sigup';
import LoginForm from './component/Login';
import MyAccount from './component/Myaccount';
import CheckoutPage from './component/checkout';
import MyOrdersPage from './component/Myorder';
import OrderDetailsPage from './component/Myorder';
import Dashboard from './component/Myorder';
function App() {
  return (
    <Router>
      <Header/>
      <Cart/>
      <Switch>

        <Route exact path="/" component={Content}/>
        <Route path="/shop" component={Product}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/blog" component={BlogPage}/>
        <Route path="/blog-detail" component={BlogDetail}/>
        <Route path="/shipping" component={CartTable}/>
        <Route path="/signup" component={LoginForm}/>
        <Route path="/order-details/:orderId" component={OrderDetailsPage} />



        {/* <Route path="/detail/:productId" component={ProductDetail}/> */}
        <Route path="/detail/:productId" render={(props) => {
              const { productId } = props.match.params;
              return <ProductDetail productId={productId} />;
            }} />


      </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
