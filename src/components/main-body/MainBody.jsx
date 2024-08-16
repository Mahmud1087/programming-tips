import { useState } from 'react';
import WidthContainer from '../WidthContainer';
import Filter from './Filter';
import Tips from './Tips';
import { tips } from '../../../data';

const MainBody = () => {
  const [data, setData] = useState(tips);

  return (
    <WidthContainer>
      <div className='flex relative top-24 gap-24 pt-8'>
        <Filter data={data} setData={setData} />
        <Tips data={data} setData={setData} />
      </div>
    </WidthContainer>
  );
};
export default MainBody;
