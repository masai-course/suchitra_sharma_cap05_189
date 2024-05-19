function Post({ avatar, first_name, last_name, email }) {
  return (
    <div>
     
      <img src={avatar} alt="" />
      <h3>{first_name}{last_name}</h3>
      <a href="">{email}</a>
      

    </div>
  );
}

export default Post;
