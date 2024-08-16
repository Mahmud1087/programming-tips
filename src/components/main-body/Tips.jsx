import { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { Layers3, SearchX } from 'lucide-react';

const Tips = () => {
  const { data } = useContext(DataContext);

  return (
    <div className='w-full relative lg:w-3/4'>
      <section className='h-full w-full shadow-md rounded-xl border px-5 flex flex-col gap-10 py-4 lg:px-8'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-medium sm:text-2xl'>Programming Tips</h1>
        </div>

        <ul className='w-full h-full flex flex-col  sm:grid sm:grid-cols-2 gap-6'>
          {data.length === 0 ? (
            <p className='w-full h-full flex flex-col items-center justify-center text-center text-3xl italic font-semibold sm:w-[60vw]'>
              <SearchX size={150} strokeWidth={1} color='red' />
              Not found
            </p>
          ) : (
            data.map((item) => {
              const { description, id, programming_language, tags, title } =
                item;
              return (
                <li
                  key={id}
                  className='p-5 bg-bg-color rounded-lg shadow border'
                >
                  <h1 className='text-xl font-semibold mb-4'>{title}</h1>
                  <p className='mb-6 text-gray-500'>{description}</p>
                  <p
                    className={`mb-4 flex items-center gap-3 text-red font-semibold text-lg`}
                  >
                    <Layers3 color='#007bff' />
                    {programming_language}
                  </p>
                  <div className='flex flex-wrap items-center gap-2 w-fit sm:flex-row sm:flex-nowrap sm:w-full lg:gap-5'>
                    {tags.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className='px-3 py-1 rounded-full bg-dark-gray/75 text-white w-fit'
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </section>
    </div>
  );
};
export default Tips;
