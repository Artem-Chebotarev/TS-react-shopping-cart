import { useState } from 'react';
import { useQuery } from 'react-query';
//Components
import Item from '../src/Components/Item/Item';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
//styles
import { Wrapper } from './StyledComponents/App.styles';
import { isNullishCoalesce } from 'typescript';
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

//fetch запрос вне компонента, тк нам не нужно каждый раз отправлять запрос при рендере компонента
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  function getTotalItems() {
    return null;
  }

  function handleAddToCart(clickedItem: CartItemType) {
    return null;
  }

  function handleRemoveFromCart() {
    return null;
  }

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
