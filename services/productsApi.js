export default getProducts = async category => {
  try {
    const res = await (
      await fetch(`https://fakestoreapi.com/products/category/${category}`)
    ).json();
    return res;
  } catch (err) {
    const error = `Failed to fetch the products of the ${category} and error : ${err}`;
    return error;
  }
};
