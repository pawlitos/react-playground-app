import { Button } from '../../components/Button';
import { useAuth } from '../../modules/auth/hooks';

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Hello {user}</h1>
      <Button>Full</Button> <Button variant="outlined">Outlined</Button>{' '}
      <Button variant="link">Link</Button>
    </div>
  );
};

export default Home;
