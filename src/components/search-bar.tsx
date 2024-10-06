// interface SearchBarProps {
//   search: string;
//   setSearch: (filterValue: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
//   return (
//     <input
//       value={search || ''}
//       onChange={(e) => setSearch(e.target.value || '')}
//       placeholder="Find your favorite player..."
//       className="w-[400px] font-bayon text-xs py-[8.5px] px-[15px] text-black placeholder-custom-gray tracking-widest"
//     />
//   );
// };

// export default SearchBar;

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Find your favorite player..."
      className="w-[400px] font-bayon text-xs py-[8.5px] px-[15px] text-black placeholder-custom-gray tracking-widest"
    />
  );
};

export default SearchBar;