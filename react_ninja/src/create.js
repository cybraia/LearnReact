import { useState } from "react";
const Create = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userid, setUserid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { title, content, userid};
        
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            console.log("post was added")
        })
    }

    return ( 
        <div className="create">
            <h2>Create a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title: </label>
                <input type="text" required value={title} 
                onChange={(e) => setTitle(e.target.value)}/>
                <label>Post content: </label>
                <textarea required value={content} 
                onChange={(e)=>setContent(e.target.value)}></textarea>
                <label>UserId: </label><input type="number" required value={userid} 
                onChange={(e) => setUserid(e.target.value)}/><br />
                <button>Add Post</button>
            </form>
        </div>
     );
}
 
export default Create;
