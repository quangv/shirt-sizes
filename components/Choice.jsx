import React from 'react';

class Choice extends React.Component {
  render(){
    let input;

    if(this.props.isSelected){
      input = <input type="radio" checked readOnly />
      
    }else {
      input = <input type="radio" />
    }

    return  <label onClick={(e)=>{this.props.onSelect(this.props.size)}}>{input} {this.props.title}</label>
  }
}

Choice.propTypes = {
  title: React.PropTypes.string,
  isSelected: React.PropTypes.bool,
  onSelect: React.PropTypes.func
}

//export default Choice
module.exports = Choice
