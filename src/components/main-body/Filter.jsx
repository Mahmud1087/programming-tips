import { ChevronDown, Circle, CircleCheckBig } from 'lucide-react';
import { useContext, useState } from 'react';
import { tips } from '../../../data';
import { DataContext } from '../../context/dataContext';

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

const Filter = () => {
  const { setData } = useContext(DataContext);
  const [language, setLanguage] = useState('All');

  const filteredTips = (lang) => {
    if (lang === 'All') {
      setData(tips);
      return;
    } else {
      const newdata = tips.filter((item) => item.programming_language === lang);
      setData(newdata);
    }
  };

  return (
    <div className='w-full lg:relative lg:h-[calc(100vh-6rem)] lg:w-1/4'>
      <aside className='relative w-2/5 lg:hidden'>
        <select
          name={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            filteredTips(e.target.value);
          }}
          className='appearance-none w-full border shadow-lg text-lg font-medium rounded-lg px-5 py-6 focus:outline-none'
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <div className='absolute right-5 bottom-1/2 translate-y-1/2'>
          <ChevronDown color='blue' />
        </div>
      </aside>

      <section className='hidden lg:fixed h-fit w-[inherit] border-2 shadow rounded-xl py-4 px-8 lg:flex flex-col gap-6 bg-bg-color'>
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
                  filteredTips(lang);
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
