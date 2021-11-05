import { useParams } from "react-router";
import useFetch from "./useFetch";

const PostDetails = ({data, title}) => {

    const {userId} = useParams();
    const { data: user, error, isPending} = useFetch("http://localhost:3000/posts/" + userId)

    return ( 
        <div className="blog-details">
            { isPending && <p>Loading...</p> }
            { error && <div> {error} </div>}
            { user && (
                <article>
                <h2>{user.title}</h2>
                <p>{user.body}</p>
                </article>
            )}
        </div>
     );
}
export default PostDetails;
