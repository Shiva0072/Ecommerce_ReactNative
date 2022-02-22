export default getCategories = async () => {
  try {
    const res = await (
      await fetch(`https://fakestoreapi.com/products/categories`)
    ).json();
    return res;
  } catch (err) {
    const error = `Failed to fetch the categories and error is : ${err}`;
    return error;
  }
};
