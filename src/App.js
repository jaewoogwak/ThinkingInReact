import FilteableProductTable from "./components/FilterableProductTable";
import ProductCategoryRow from "./components/ProductCategoryRow";
import ProductRow from "./components/ProductRow";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <FilteableProductTable />
    </>
  );
}

export default App;

// FilteableProductTable
// SearchBar
// ProductTable
// ProductCategoryRow : 각 카테고리의 헤더
// ProductRow

// 유저가 입력한 검색어
// 체크박스의 값

/*
[
  {id : 1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {id : 2,category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {id : 3,category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {id : 4,category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {id : 5,category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {id : 6,category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
*/
