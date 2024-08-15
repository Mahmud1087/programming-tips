import { Moon, Search } from 'lucide-react';
import WidthContainer from '../WidthContainer';

const Navbar = () => {
  return (
    <nav className='shadow-md py-4'>
      <WidthContainer>
        <div className='flex items-center justify-between'>
          <h1 className='w-14 h-14 rounded-full flex items-center justify-center bg-prim text-white font-medium text-2xl'>
            pT
          </h1>
          <section className='flex items-center gap-20'>
            <form className='w-[32rem] h-14 flex items-center '>
              <label
                htmlFor='search'
                className='flex items-center gap-5 w-full h-full px-3 border-2 shadow border-gray-300 rounded-md'
              >
                <aside className='flex items-center gap-5 w-full h-full'>
                  <Search color='#aeaeae' />
                  <input
                    type='text'
                    placeholder='Search by keywords, language, or tags...'
                    className='w-full h-full border-none rounded-md bg-transparent focus:outline-none'
                  />
                </aside>
                <button
                  type='submit'
                  className='bg-sec px-5 text-white font-medium text-lg py-1 rounded-md'
                >
                  Search
                </button>
              </label>
            </form>
            <button type='button'>
              <Moon />
            </button>
          </section>
        </div>
      </WidthContainer>
    </nav>
  );
};
export default Navbar;
