import "./styles.css"

export const Input = ({ handleChange, searchValue }) => {
  return (
    <input
      onChange={handleChange}
      value={searchValue}
      className="search"
      type="search"
      placeholder="Search"
    />
  );
};
