const Results = ({ results, AddToNominations }) => {
    return (
        <div className='w-1/2 px-10 py-5 space-y-3 bg-white rounded-sm shadow-md'>
            <h4>Results for "{results.searchInput}"</h4>
            <ul className='ml-10 space-y-3 list-disc'>
                {results.data.map((result) => (
                    <li key={`result-${result.imdbID}`}>
                        {result.Title} ({result.Year}){' '}
                        <button
                            className='btn'
                            onClick={() => AddToNominations(result)}
                        >
                            Nominate
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
