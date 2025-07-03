import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: "Dell Laptop",
        image:
          "https://www.hardsoftcomputers.co.uk/wp-content/uploads/2021/11/Dell-Latitude-5520-master-gallery-5.jpg",
        price: 14000,
        stock: 90,
      },
      {
        title: "Asus Laptop",
        image:
          "https://hardsoft.dz/images/articles/1453/1698743473-ASUS-X515EP-1.png",
        price: 13500,
        stock: 70,
      },
      {
        title: "HP Laptop",
        image:
          "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08428581.png",
        price: 14500,
        stock: 96,
      },
    ];

    const existingProducts = await getAllProducts();

    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot see database", err);
  }
};
