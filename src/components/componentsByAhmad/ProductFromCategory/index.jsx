import React from "react";
import "../../../Styles/CategoryPage.css"
import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 2,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 3,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 4,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 5,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 6,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 7,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 8,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
];
function ProductFromCategory() {
  return (
<<<<<<< HEAD:src/components/componentsByAhmad/ProductFromCategory/index.jsx
    <div className="width-100 categoryPageMain">
      <div className="res-1440-in-heavy">
=======
    <div className="res-1440-40 productFromCategoryMain">
      <div className="res-1440-in productFromCategorySec">
>>>>>>> 0c0222f8f1cb9efb2c8ca31b1207c29a72f58e40:src/components/componentsByAhmad/ProductFromCategory/index.js
        <div className="navPath">
          <p className="navPathText">Home</p>
          <p className="navPathText">{">"}</p>
          <p className="navPathText">Products</p>
          <p className="navPathText">{">"}</p>
          <p className="navPathText">Categories</p>
          <p className="navPathText">{">"}</p>
          <p className="navPathText">Name</p>
        </div>
        <div className="categoryHeadAndSortDiv">
          <div className="categoryHeaderView">
            <h1 className="categoryProductsFromH">Products From:</h1>
            <h1 className="categoryNameH">Dental Devices</h1>
          </div>

        </div>
        <div className="productListView">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductFromCategory;