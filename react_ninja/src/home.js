import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {

    const { data, isPending, error} = useFetch("https://jsonplaceholder.typicode.com/posts")

    return ( 
        <div className="home">
            {/* <p>{name}</p> <br /> */}
            {/* <button onClick={handleClick}>Click Me</button> */}
            { error && <p>{error}</p>}
            { isPending && <div>Loading...</div> }
            {data && <Bloglist data={data} title="All User's Posts"/>}
            {/* <Bloglist blogs={blogs.filter((blogs)=>blogs.author === "Krishna")} title="Krishna's Blogs"/> */}
            {/* <button onClick = {() => setName("Krishna")}>Change Name</button> */}
        </div>
     );
}
 
export default Home;  