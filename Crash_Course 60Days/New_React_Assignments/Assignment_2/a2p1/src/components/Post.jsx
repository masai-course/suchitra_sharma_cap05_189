function Post({ id, email, first_name, last_name, avatar }) {
  return (
    <div>
      {/* <p>Title : {title}</p>
      <p>Body : {body}</p> */}
 <img src={avatar} alt="" />
   <p>Id: {id}</p>
  
 <h3>{first_name} {last_name}</h3>
 

 <a href="">{email}</a> 
    </div>
  );
}

export default Post;
