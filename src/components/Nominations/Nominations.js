const Nominations = () => {
    return (
        <div className='w-1/2 px-10 py-5 space-y-3 bg-white rounded-sm shadow-md'>
            <h4>Nominations</h4>
            <ul className='ml-10 space-y-3 list-disc'>
                <li>
                    Rambo (1992) <button className='btn'>Remove</button>
                </li>
                <li>
                    Spiderman (2002) <button className='btn'>Remove</button>
                </li>
                <li>
                    Avatar <button className='btn'>Remove</button>
                </li>
                <li>
                    Avatar <button className='btn'>Remove</button>
                </li>
            </ul>
        </div>
    );
};

export default Nominations;
