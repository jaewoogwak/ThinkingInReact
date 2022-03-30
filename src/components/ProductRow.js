function ProductRow(props) {
  return (
    <div>
      {/* <span class="category">{props.category}</span> */}
      <span className="name">{props.name}</span>
      {"    "}
      <span className="price">{props.price}</span>
    </div>
  );
}

export default ProductRow;
