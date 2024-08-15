import WidthContainer from '../WidthContainer';

const Navbar = () => {
  return (
    <nav className='shadow-md py-4'>
      <WidthContainer>
        <div className='flex items-center justify-between'>
          <h1 className='w-16 h-16 rounded-full flex items-center justify-center bg-prim text-white font-medium text-2xl'>
            pT
          </h1>
          <form>
            <label htmlFor='search'>
              <input
                type='text'
                placeholder='Search for tips...'
                className='w-full pl-4 pr-8 text-sm border-none rounded-md focus:outline-none focus:border-gray-300'
              />
              <button type='submit'>Search</button>
            </label>
          </form>
        </div>
      </WidthContainer>
    </nav>
  );
};
export default Navbar;
