const Search = ({ searchInput, setSearchInput, fetchData }) => {
    return (
        <form
            className='w-3/4 px-10 py-5 space-y-2 bg-white rounded-sm shadow-md'
            onSubmit={(e) => fetchData(e)}
        >
            <div>Movie Title</div>
            <input
                type='text'
                className='w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-sm'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </form>
    );
};

export default Search;
