import { useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {

      setLoading(true)
    try {
      {
          let res=await axios({
            method:"get",
            url:"https://reqres.in/api/users"
          }) 
        
        setPosts(res.data.data)
        setLoading(false)
        
        }
    } catch (error) {
      {
       setError(true)
       setLoading(false) 
      }
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      <button onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>
<div style={{margin:"auto", width:"70%", border:"1px solid black", display:"grid", gridTemplateColumns:" repeat(3, 1fr)", textAlign:"center" , gap:"20px" }}>
{
        posts?.map((post)=>(
          <Post {...post} key={post.id}/>
        ))
        }

</div>
     
        
    </div>
      )}

export default Posts;
