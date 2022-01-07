const Basket = ({basketItems, setBasketItems}) => {

  return (
    <main>
      <ul>
        {basketItems.map((item) => {
          return (
            <li key={item.item_id}>
              <p>{item.item_name}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Basket;