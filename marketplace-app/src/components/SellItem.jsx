import { postItem } from "../utils/api";

const SellItem = ({ setItems }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = event.target;
    postItem(
      newItem[0].value,
      newItem[1].value,
      newItem[2].value,
      newItem[3].value,
      newItem[4].value
    ).then((listedItem) => {
      setItems((currItems) => [...currItems, listedItem]);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Item name:
        <input type="text" id="name" name="name" required />
      </label>
      <label htmlFor="img_url">
        Image URL:
        <input type="text" id="img_url" name="img_url" required />
      </label>
      <label htmlFor="price">
        Price in pence:
        <input type="text" id="price" name="price" required />
      </label>
      <label htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <label htmlFor="category_name">
        Category:
        <input type="text" id="category_name" name="category_name" />
      </label>
      <button>List item</button>
    </form>
  );
};

export default SellItem;
