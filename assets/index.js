"use strict";

// React
// ReactDOM

class Counter extends React.Component{

constructor(props){
super(props);
this.state = {
  counter: 0
}
}

increment(){
alert('+')
}

decrement(){
  alert('+')
}

  render(){
    const {counter} = this.state;
    return React.createElement(React.Fragment, null,
        React.createElement('h1', null, counter),
        React.createElement('button',{
          onClick: this.increment}, '+'),
        React.createElement('button',{
          onClick: this.decrement}, '-'),
    );
  }
}

const reactCounterElement = React.createElement(Counter, {});

ReactDOM.render(reactCounterElement, document.getElementById('root'));


