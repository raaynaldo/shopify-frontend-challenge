const Results = () => {
    return (
        <div className='w-1/2 px-10 py-5 space-y-3 bg-white rounded-sm shadow-md'>
            <h4>Results for "Pirate"</h4>
            <ul className='ml-10 space-y-3 list-disc'>
                <li>
                    Rambo (1992) <button className='btn'>Nominate</button>
                </li>
                <li>
                    Spiderman (2002) <button className='btn'>Nominate</button>
                </li>
                <li>
                    Avatar <button className='btn'>Nominate</button>
                </li>
                <li>
                    Avatar <button className='btn'>Nominate</button>
                </li>
            </ul>
        </div>
    );
};

export default Results;
