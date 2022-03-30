import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilteableProductTable(props) {
  let products = [
    {
      id: 1,
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      id: 2,
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      id: 3,
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      id: 4,
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      id: 5,
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      id: 6,
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];
  const category = ["Sporting Goods", "Electronics"];
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const onTextChange = (e) => {
    setFilterText(e.target.value);
    console.log(e.target.value);
  };
  const onCheckBoxChange = (e) => {
    setInStockOnly((prev) => !prev);
    console.log("set!", inStockOnly);
  };
  return (
    <div>
      <p>FilteableProductTable</p>
      <SearchBar
        text={filterText}
        show={inStockOnly}
        textHandler={onTextChange}
        checkBoxHandler={onCheckBoxChange}
      />
      <ProductTable
        category={category}
        products={products}
        text={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilteableProductTable;
