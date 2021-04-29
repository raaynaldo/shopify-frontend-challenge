import Nominations from 'components/Nominations/Nominations';
import Results from 'components/Results/Results';
import Search from 'components/Search/Search';

const App = () => {
    return (
        <>
            <div className='flex flex-col items-center h-screen p-10 space-y-6 bg-gray-100'>
                <div className='w-3/4'>
                    <h3>The Shopies</h3>
                </div>
                <Search />
                <div className='flex w-3/4 space-x-6'>
                    <Results />
                    <Nominations />
                </div>
            </div>
        </>
    );
};

export default App;
