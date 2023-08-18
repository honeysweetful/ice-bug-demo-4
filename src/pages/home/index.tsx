import { Button } from 'antd';
import usePageStore from './store';

const Home = () => {
  const {
    count,
    add,
    cut,
  } = usePageStore();
  return (<>
    count: {count}
    <Button onClick={add}>+1</Button>
    <Button onClick={cut}>-1</Button>
  </>);
};

export default Home;
