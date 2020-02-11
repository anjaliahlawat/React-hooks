import React, {useState, useEffect} from 'react';
import axios from 'axios'
function DataFetching() {
    const [post, setPost] = useState([])
    const [id, setId]  = useState(1)
    const [id2, setId2] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id2}`)
           .then(res => {
               console.log(res)
               setPost(res.data)
           })
           .catch(err => {
               console.log(err)
           })
    },[id2]) // dependency variable here it depends on id but for one time call give empty array
   
   const handleClick = () => {
       setId2(id)
   }
   
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default DataFetching;