import sample_data from './MOCK_DATA.json';
import TwitterFollowCard from './TwitterFollowCard';

const TwitterCardsExample = () => {
  console.log(sample_data);
  return (
    <>
    {sample_data.map((user, index) => (
        <TwitterFollowCard
          key={index} // Siempre añade una key única al iterar
          username={user.username}
          name={user.name}
          initialIsFollowing={user.isFollowing}
          userImage={user.imgProfile}
        />
      ))}
    </>
  )
}

export default TwitterCardsExample