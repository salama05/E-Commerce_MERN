import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Dell Laptop",
      image:
        "https://www.hardsoftcomputers.co.uk/wp-content/uploads/2021/11/Dell-Latitude-5520-master-gallery-5.jpg",
      price: 14000,
      stock: 90,
    },
  ];

  const existingProducts = await getAllProducts();

  if (existingProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
