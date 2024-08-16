import WidthContainer from '../WidthContainer';
import Filter from './Filter';
import Tips from './Tips';

const MainBody = () => {
  return (
    <WidthContainer>
      <div className='flex flex-col relative top-24 gap-10 pt-8 lg:flex-row lg:gap-24'>
        <Filter />
        <Tips />
      </div>
    </WidthContainer>
  );
};
export default MainBody;
