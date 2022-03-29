const UserInfo = ({ name, gender, email, picture }) => {
  const { title, first, last } = name;
  return (
    <article className="card">
      <img src={picture.large} alt={first} />
      <h4>{`${title} ${first}-${last}`}</h4>
      <h4>{gender}</h4>
      <p>{email}</p>
    </article>
  );
};

export default UserInfo;
