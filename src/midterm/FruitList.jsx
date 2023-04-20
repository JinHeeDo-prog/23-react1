import React from "react";
import Fruit from "./Fruit";
 
const SelectFruit =[
  {
    id : 1,
    message : "사과",
  },
  {
    id : 2,
    message : "오렌지",
  },
  {
    id : 3,
    message : "바나나",
  },
];


class FruitList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fruitselect: [],
    };
  }
  componentDidMount() {
    const{fruitselect} = this.state
    if(SelectFruit.message !== fruitselect.message){
      
      this.setState({
        fruitselect : fruitselect
      })

    }
  }
  render() {
    return (
        <div>
          <h1>어떤과일을 좋아하나여? </h1>
            {this.state.fruitselect.map((fruitselect) => {
                return (
                    <Fruit
                        message={fruitselect.message}
                    />
                );
            })}
            <button onClick={this.componentDidMount}>사과</button> <button onClick={this.componentDidMount}>오렌지</button> <button onClick={this.componentDidMount}>바나나</button>

        </div>
    );
  }
}

export default FruitList;