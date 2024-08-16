/* eslint-disable react/prop-types */
import { Circle, CircleCheckBig } from 'lucide-react';
import { useState } from 'react';
import { tips } from '../../../data';

const languages = [
  'All',
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'Ruby',
];

const Filter = ({ setData }) => {
  const [language, setLanguage] = useState('All');

  const filtereTips = (lang) => {
    if (lang === 'All') {
      setData(tips);
    } else {
      const newdata = tips.filter((item) => item.programming_language === lang);
      setData(newdata);
    }
  };

  return (
    <div className='w-1/4 relative h-[calc(100vh-6rem)]'>
      <section className='fixed h-3/4 w-[inherit] border-2 shadow rounded-xl py-4 px-8 flex flex-col gap-6 bg-bg-color'>
        <h1 className='text-xl font-medium sm:text-2xl'>Filter by language</h1>

        <ul className='flex flex-col gap-5'>
          {languages.map((lang) => {
            return (
              <li
                key={lang}
                className={`px-5 py-[4.5px] ${
                  language === lang
                    ? 'bg-prim text-white'
                    : 'bg-neutral-gray/60'
                } rounded-full hover:bg-prim hover:text-white cursor-pointer transition-all flex items-center gap-5`}
                onClick={() => {
                  setLanguage(lang);
                  filtereTips(lang);
                }}
              >
                {lang === language ? (
                  <CircleCheckBig size={20} />
                ) : (
                  <Circle size={20} />
                )}
                {lang}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default Filter;
