const Nominations = ({ nominations }) => {
    return (
        <div className='w-1/2 px-10 py-5 space-y-3 bg-white rounded-sm shadow-md'>
            <h4>Nominations</h4>
            <ul className='ml-10 space-y-3 list-disc'>
                {nominations.map((nomination) => (
                    <li key={`nomination-${nomination.imdbID}`}>
                        {nomination.Title} ({nomination.Year}){' '}
                        <button className='btn'>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nominations;
