import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../../lib/withApollo';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router'



const Profile = () => {
  const router = useRouter()
  const { userId } = router.query

  const USER_QUERY = gql`
    query UserQuery{
      user(id:"${userId}") {
        firstName,
        lastName,
        _id,
        ownedVideos {
          title
        },
        playlistComments{
          content
        }
      }
    }
  `;

  const { loading, data } = useQuery(USER_QUERY);

  if (loading || !data) {
    return <h1>loading...</h1>;
  }

  return (
    <Layout>
      <section id="user-info">
        <h2>{data.user.firstName} {data.user.lastName}</h2>
        {/* {data.user.map(video => (
          <h3 key={video.id}>{video.title}</h3>
        ))} */}
      </section>
    </Layout>
  )
}

export default withApollo(Profile);