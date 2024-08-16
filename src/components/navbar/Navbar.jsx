import WidthContainer from '../WidthContainer';
import { useContext, useState } from 'react';
import { tips } from '../../../data';
import { DataContext } from '../../context/dataContext';
import { Search } from 'lucide-react';

const Navbar = () => {
  const { setData } = useContext(DataContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (searchQuery === '') {
      setData(tips);
      return;
    }
    const filterBySearch = tips.filter((item) => {
      if (
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.programming_language
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item.tags[0].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags[1].toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return item;
      }
    });
    setData(filterBySearch);
  };

  return (
    <nav className='fixed z-50 bg-white w-full shadow-md h-24 flex items-center'>
      <WidthContainer>
        <div className='h-full w-full flex items-center justify-between'>
          <h1 className='hidden w-14 h-14 rounded-full sm:flex items-center justify-center bg-prim text-white font-medium text-2xl'>
            pT
          </h1>
          <section className='w-full flex items-center gap-20 sm:w-fit'>
            <div className='w-full h-14 flex items-center sm:w-[32rem]'>
              <label
                htmlFor='search'
                className='w-full h-full px-3 border-2 shadow border-gray-300 rounded-full sm:px-6'
              >
                <aside className='flex items-center gap-4 w-full h-full sm:gap-5'>
                  <Search color='#aeaeae' />
                  <input
                    type='text'
                    name={searchQuery}
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder='Search by keywords, language, or tags...'
                    className='w-full h-full border-none rounded-full bg-transparent focus:outline-none'
                  />
                </aside>
              </label>
            </div>
          </section>
        </div>
      </WidthContainer>
    </nav>
  );
};
export default Navbar;
