export default function Search({ inputChange }) {
  return (
    <input
      onChange={inputChange}
      type="text"
      className="my-10 h-10 w-1/2 px-5 py-1 bg-search-bg text-white rounded outline-none"
      placeholder="Search"
    />
  );
}
