const Search = ({ searchInput, setSearchInput }) => {
    return (
        <div className='w-3/4 px-10 py-5 bg-white rounded-sm shadow-md'>
            <div>Movie Title</div>
            <input
                type='text'
                className='w-full border-2 border-gray-200 rounded-sm'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className='btn'>Search</button>
        </div>
    );
};

export default Search;
