function SearchBar(props) {
  return (
    <>
      <input
        type="text"
        onChange={props.textHandler}
        value={props.text}
        placeholder="Search..."
      />
      <input
        type="checkbox"
        value={props.show}
        onChange={props.checkBoxHandler}
      />
      <span>Only show products in stock</span>
    </>
  );
}

export default SearchBar;
