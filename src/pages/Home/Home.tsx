import { Button } from '../../components/Button';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button>Full</Button>{' '}
      <Button variant="outlined">Outlined</Button>{' '}
      <Button variant="link">Link</Button>
    </div>
  );
};

export default Home;
