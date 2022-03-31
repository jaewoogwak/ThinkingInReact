import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  return (
    <article>
      <header>Product list</header>
      {props.inStockOnly ? (
        <article>
          <ProductCategoryRow text={props.category[0]} />
          {props.products
            .filter((product) => product.category == "Sporting Goods")
            .filter((product) => product.stocked)
            .filter((product) => product.name.includes(props.text))
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
          <ProductCategoryRow text={props.category[1]} />{" "}
          {props.products
            .filter((product) => product.category == "Electronics")
            .filter((product) => product.stocked)
            .filter((product) => product.name.includes(props.text))
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
        </article>
      ) : (
        <article>
          <ProductCategoryRow text={props.category[0]} />
          {props.products
            .filter((product) => product.category == "Sporting Goods")
            .filter((product) => product.name.includes(props.text))
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
          <ProductCategoryRow text={props.category[1]} />
          {props.products
            .filter((product) => product.category == "Electronics")
            .filter((product) => product.name.includes(props.text))
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
        </article>
      )}
    </article>
  );
}

export default ProductTable;
