// import module.css here;

// "id": 1,
//       "avatar": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
//       "first_name": "Chrisse",
//       "last_name": "Duddy",
//       "address": "4018 Sachs Trail",
//       "karma": 79073,
//       "followers": 66868,
//       "posts": 1841,
const UserDetails = ({avatar,first_name,last_name,address,karma,followers,posts,is_following}) => {
  return (
    <>
      <div data-testid="user-container">
        {/* user image */}
        <img src={avatar} alt="avatar" />
        <div>
          <div>
            <h3 data-testid="user-fname">{first_name}</h3>
            <h3 data-testid="user-lname">{last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{posts}</h3>
        </div>
        <button data-testid="follow-btn">{is_following ? "Unfollow" : "Follow"}</button>
      </div>
    </>
  );
};
export default UserDetails;
