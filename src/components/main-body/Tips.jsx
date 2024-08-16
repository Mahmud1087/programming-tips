/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight, Layers3 } from 'lucide-react';
import { useState } from 'react';

const Tips = ({ data }) => {
  //   const colorVariant = {
  //     python: 'text-languages-python',
  //     html: 'text-languages-html',
  //     css: 'text-languages-css',
  //     js: 'text-languages-js',
  //     java: 'text-languages-java',
  //     cplus: 'text-languages-cplus',
  //     ruby: 'text-languages-ruby',
  //   };
  const [page, setPage] = useState(1);

  const perPage = (page) => {
    const startIndex = page * 10;
    const endIndex = startIndex + 10;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div className='w-3/4 relative'>
      <section className='h-full w-full shadow-md rounded-xl border px-8 flex flex-col gap-10 py-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-medium sm:text-2xl'>Programming Tips</h1>
          <article className='flex items-center gap-2'>
            <p className='text-gray-400'>
              showing page {page + 1} of {Math.round(data.length / 10)} results
            </p>
            <aside className='flex items-center gap-5'>
              <button
                className='px-3 py-1 rounded-md text-white bg-sec hover:bg-sec/70 transition-all'
                onClick={() => setPage(page !== 0 ? page - 1 : page)}
              >
                <ArrowLeft size={20} />
              </button>
              <button
                className='px-3 py-1 rounded-md text-white bg-sec hover:bg-sec/70 transition-all'
                onClick={() =>
                  setPage(
                    page !== Math.round(data.length / 10) - 1 ? page + 1 : page
                  )
                }
              >
                <ArrowRight size={20} />
              </button>
            </aside>
          </article>
        </div>

        <ul className='grid grid-cols-2 gap-6'>
          {perPage(page).map((item) => {
            const { description, id, programming_language, tags, title } = item;
            return (
              <li key={id} className='p-5 bg-bg-color rounded-lg shadow border'>
                <h1 className='text-xl font-semibold mb-4'>{title}</h1>
                <p className='mb-6 text-gray-500'>{description}</p>
                <p
                  className={`mb-4 flex items-center gap-3 text-red font-semibold text-lg`}
                >
                  <Layers3 color='#007bff' />
                  {programming_language}
                </p>
                <div className='flex items-center gap-5'>
                  {tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className='px-3 py-1 rounded-full bg-dark-gray/75 text-white'
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default Tips;
