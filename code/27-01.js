//higher order components
import React, { Component } from 'react';

//a higher order component is a pattern where a function takes a component as an argument and returns a new component.
//const NewComponent = higherOrderComponent(ComponentToWrap)

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }
        render(){
            return <OriginalComponent count = {this.state.count} incrementCount = {this.state.incrementCount}/>
        }
    }
    return NewComponent
}
export default UpdatedComponent

//clickcounter.js
import React, { Component } from 'react';
import UpdatedComponent from "./higher-order-component";
class ClickCounter extends Component {
    
    render(){
        const {count, incrementCount} = this.props
        return <button onClick={incrementCount}> Clicked {count} times</button>
    }
}
export default UpdatedComponent(ClickCounter);
//similar counter based on hover property using onMouseOver
import React, { Component } from 'react';
import UpdatedComponent from "./higher-order-component";
class HoverCounter extends Component {
    render(){
        const {count, incrementCount} = this.props
        return <button onMouseOver={incrementCount}> Clicked {count} times</button>
    }
}
export default UpdatedComponent(HoverCounter);

//HOC is used to reduce duplicated code
