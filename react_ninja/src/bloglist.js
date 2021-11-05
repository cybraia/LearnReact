import {Link} from 'react-router-dom';

const Bloglist = ({data, title}) => {
    return ( 
        <div className="bloglist">
            <h2>{title}</h2>
             {data.map((user)=>(
                <div className="blog-preview" key={user.id}>
                    <h3>Id: {user.id}</h3>
                    <Link to={ `/posts/${user.userId}` }>
                    <h2>{user.title}</h2>
                    {/* <p>{user.body}</p> */}
                    </Link>
                </div>
            ))}
        </div>
     );
}

//functions can be passed as props to components - example handleDelete function

export default Bloglist;