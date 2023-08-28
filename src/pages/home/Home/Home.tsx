import { Button } from 'common/components';
import { useAuth } from 'modules/auth';

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Hello {user}</h1>
      <Button>Full</Button> <Button variant="link">Link</Button>
    </div>
  );
};

export default Home;
