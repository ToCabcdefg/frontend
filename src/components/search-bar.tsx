interface SearchBarProps {
    search: string;
    setSearch: (filterValue: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
    return (
      <input
        value={search || ''}
        onChange={(e) => setSearch(e.target.value || '')}
        placeholder="Search..."
        className="p-2 border rounded mb-4"
      />
    );
  };
  
  export default SearchBar;
  