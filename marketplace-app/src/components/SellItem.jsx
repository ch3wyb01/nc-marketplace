const SellItem = ({ setItems }) => {
  return (
    <form action="submit">
      <label for="name">Item name:</label>
      <input type="text" id="name" name="name" required /><br />
      <label for="img_url">Image URL:</label>
      <input type="text" id="img_url" name="img_url" required /><br />
      <label for="price">Price in pence:</label>
      <input type="text" id="price" name="price" required /><br />
      <label for="description">Description:</label>
      <input type="text" id="description" name="description" /><br />
      <label for="category_name">Category:</label>
      <input type="text" id="category_name" name="category_name" /><br />
      <button>List item</button>
    </form>
  );
};

export default SellItem;
