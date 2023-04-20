import React from "react";

class Fruit extends React.Component{
  constructor(props) {
    super(props);

    this.state={};
  }
  
  render() {
    return(
      <h1><span>가장 좋아하는 과일은?{this.props.message}</span></h1>
    );
  }
}

export default Fruit;




