// pages/index.js
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';
// import { getDataFromTree } from '@apollo/react-ssr';

const QUERY = gql`
  query VideosQuery{
    videos {
      title
    }
  }
`;

const Index = () => {
  const { loading, data } = useQuery(QUERY);

  if (loading || !data) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      {data.videos.map(video => (
        <h3>{video.title}</h3>
      ))}
    </div>
  )
};

export default withApollo(Index);

// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });