// react hooks
import React, {useState, useEffect} from 'react';
//useState 

const State = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
        <button onClick = {() =>setCount(count + 1)}>Click</button>
        <p>{count}</p>
        </div>
    )
}

//useReducer - replacement to more than one useState

const reducerfun = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText};
        case "toggleShowText":
            return {count: state.count, showText: !state.showText};
        default:
            return state;
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducerfun, {count: 0, showText: true});

    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick = {() =>{
                dispatch ({type: "INCREMENT"});
                dispatch({type: "toggleShowText"});
            }}>Click</button>
        </div>
    )
}

//useEffect 

function Effect(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(res => {
                setData(res.data[0].email);
                console.log(res.data);
            });
        },[]);

        return(
            <div>
                <h5>{data}</h5>
            </div>
        )
    }

//useRef

function Ref(){
    const inputRef = useRef(null);
    
}
