import React ,{Component} from "react";

export default class App extends Component {
  render() {

    const
      name = this.props.name,
      age = this.props.age;
    return (
       <div>
             <h1>My Name : {name}</h1>
             <h2>My Age : {age} years</h2>
             

          </div>
    )
  }
}                   

App.defaultProps = {
  
  age : 20
}                                                                                                                                                                                                                                                                                                   