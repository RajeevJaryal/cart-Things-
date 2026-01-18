import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'MacBook Pro',
    price: 1200,
    description: 'Apple M1 laptop!'
  },
  {
    id: 'p2',
    title: 'iPhone 15',
    price: 999,
    description: 'Latest iPhone model.'
  },
  {
    id: 'p3',
    title: 'AirPods Pro',
    price: 249,
    description: 'Noise-cancelling earbuds.'
  },
  {
    id: 'p4',
    title: 'Gaming Chair',
    price: 199,
    description: 'Perfect comfort while coding.'
  }
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
