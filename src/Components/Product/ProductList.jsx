import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { fetchproducts, setFilters } from "../../redux/Product_Action";
import Loader from "../Loader";
import { BiDownArrow } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, filters } = useSelector((state) => state.productState);
  const [loader, setLoader] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    setLoader(true);
    dispatch(fetchproducts()).finally(() => setLoader(false));
  }, [dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setFilters({ searchQuery: e.target.value }));
  };

  const handleCategoryChange = (e) => {
    dispatch(setFilters({ category: e.target.value }));
  };

  const handleSortChange = (e) => {
    dispatch(setFilters({ sortbyprice: e.target.value }));
  };

  const handleshowFilters = () => {
    setShowFilters(!showFilters);
  };
  const getFilteredAndSortedProducts = () => {
    let filteredProducts = products.filter(
      (product) =>
        product.title
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) &&
        (filters.category === "" || product.category === filters.category)
    );

    if (filters.sortbyprice) {
      filteredProducts = [...filteredProducts];
      switch (filters.sortbyprice) {
        case "lowToHigh":
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "highToLow":
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "az":
          filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "za":
          filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
    }

    return filteredProducts;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  return (
    <>
      <div
        className="flex md:flex-row flex-col justify-between mx-auto py-4 px-4 items-start md:gap-10 gap-5 w-full mt-[5%]"
        id="product"
      >
        {/* Filters */}
        <div className="md:w-[30%] w-full md:sticky top-[10%]">
          <div
            className="flex justify-between  items-center"
            onClick={handleshowFilters}
          >
            <h1 className="text-xl md:text-2xl text-start font-bold md:py-10 ">
              Filter
            </h1>
            {showFilters ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          <motion.div
            className="flex flex-col gap-2 my-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: showFilters ? 1 : 0, y: showFilters ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            {showFilters && (
              <>
                <div className="flex flex-col gap-2 mb-4">
                  <h1 className="text-lg md:text-xl text-start text-black font-bold">
                    Select Category
                  </h1>
                  <select
                    className="border-1 border-gray-500 rounded-lg px-4 py-2 h-fit md:max-w-md w-full outline-none"
                    value={filters.category}
                    onChange={handleCategoryChange}
                  >
                    <option value="">All Categories</option>
                    {[
                      ...new Set(products.map((product) => product.category)),
                    ].map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <h1 className="text-lg md:text-xl text-start text-black font-bold">
                    Sort
                  </h1>
                  <select
                    className="border-1 border-gray-500 rounded-lg px-4 py-2 h-fit md:max-w-md  w-full outline-none"
                    value={filters.sortbyprice}
                    onChange={handleSortChange}
                  >
                    <option value="">Select Sort Option</option>
                    <option value="lowToHigh">Price Low to High</option>
                    <option value="highToLow">Price High to Low</option>
                    <option value="az">Alphabetical A-Z</option>
                    <option value="za">Alphabetical Z-A</option>
                  </select>
                </div>
              </>
            )}
          </motion.div>
        </div>

        <div className="md:w-[70%]">
          <div className="flex flex-row justify-between items-center md:py-10 flex-wrap gap-2">
            <h1 className="text-2xl sm:text-32xl md:text-3xl text-start font-bold ">
              Our Products
            </h1>
            <input
              type="text"
              placeholder="Search products..."
              value={filters.searchQuery}
              onChange={handleSearchChange}
              className="border-1 border-gray-500 rounded-lg px-4 py-2 h-fit md:max-w-md w-full outline-none mb-3 md:mb-0"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all delay-300 justify-center items-center">
            {loader ? (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Loader />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="flex items-center justify-center">
                <p className="text-gray-500">No products found.</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
