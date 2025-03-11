import { useEffect, useState } from 'react';

const DataFetching = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
      })
      .catch(() => {
        setPost({});
        setLoading(false);
        setError(`There was an error fetching`);
      });
  }, []);

  console.log(post);

  return (
    <div>
      {loading ? 'Loading...' : post.title}
      {error ? error : null}
    </div>
  );
};
export default DataFetching;
