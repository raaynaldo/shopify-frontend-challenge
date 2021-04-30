import { useState } from 'react';
import Nominations from 'components/Nominations/Nominations';
import Results from 'components/Results/Results';
import Search from 'components/Search/Search';
import axios from 'axios';

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    // const [loading, setLoading] = useState('false');
    const [results, setResults] = useState({ searchInput: '', data: [] });
    const [nominations, setNominations] = useState([]);

    const fetchData = (event) => {
        event.preventDefault();
        axios
            .get(`?s=${searchInput}`)
            .then((response) => {
                setResults({
                    searchInput: searchInput,
                    data: response.data.Search,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const AddToNominations = (movie) => {
        setNominations((prevNominations) => [...prevNominations, movie]);
    };

    return (
        <>
            <div className='flex flex-col items-center h-screen p-10 space-y-6 bg-gray-100'>
                <div className='w-3/4'>
                    <h3>The Shopies</h3>
                </div>
                <Search
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    fetchData={fetchData}
                />
                <div className='flex w-3/4 space-x-6'>
                    <Results
                        results={results}
                        AddToNominations={AddToNominations}
                    />
                    <Nominations nominations={nominations} />
                </div>
            </div>
        </>
    );
};

export default App;
