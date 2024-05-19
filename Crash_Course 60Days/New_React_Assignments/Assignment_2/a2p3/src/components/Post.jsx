function Post({ title, body, id }) {
  return (
    <div>
      <p> ID: {id}</p>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
