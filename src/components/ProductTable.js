import ProductRow from "./ProductRow";

function ProductTable(props) {
  return (
    <>
      <p>product table</p>

      {props.inStockOnly ? (
        <>
          <strong>{props.category[0]}</strong>
          {props.products
            .filter((product) => product.category == "Sporting Goods")
            .filter((product) => product.stocked)
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
          <strong>{props.category[1]}</strong>
          {props.products
            .filter((product) => product.category == "Electronics")
            .filter((product) => product.stocked)
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
        </>
      ) : (
        <>
          <strong>{props.category[0]}</strong>
          {props.products
            .filter((product) => product.category == "Sporting Goods")
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
          <strong>{props.category[1]}</strong>
          {props.products
            .filter((product) => product.category == "Electronics")
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                stocked={product.stocked}
                name={product.name}
              />
            ))}
        </>
      )}
    </>
  );
}

export default ProductTable;
