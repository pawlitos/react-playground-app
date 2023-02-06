type Props = {
  title: string;
  userId: number;
};

const Album = ({ title, userId }: Props) => {
  return (
    <div style={{ border: '1px solid', width: '200px' }}>
      <div>{title}</div>
      <div>Created by: {userId}</div>
    </div>
  );
};

export default Album;
