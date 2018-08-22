/*one component into two, the button into just the incrementer
and a new Result component to display the value of the counter.
The need to invoke a function handler that uses a prop on the compontent
is enough reason to use the class compontent synxtax over the function compontent syntax. */

class Button extends React.Component {
    handleClick = () => {
      this.props.onClickFunction(this.props.incrementValue);
    };
  
  /*Wrapped the action that we want to happen with a function for but 
  this wrapper method actually creates a new function for every rendered button, 
  and that can be avoided, so using handleClick function instead
  onClick={()=>this.props.onClickFunction(this.props.incrementValue)}> */
  
    render() {
      return (
        <button onClick={this.handleClick}>
          +{this.props.incrementValue}
        </button>
      );
    }
  }
  
  const Result = (props) => {
    return (
      <div>{props.counter}</div>
    );
  };
  
  class App extends React.Component {
    state = { counter: 0 };
  
    incrementCounter = (incrementValue) => {
      this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
      }));
    };
  
      render() {
      return (
        <div>
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Button incrementValue={100} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter} />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, mountNode);
    
  //CTRL + / will toggle commenting on highlighted lines
  //parent div groups up compontents for button
  //The Syntax to access properties of a class compontent is this.props.
  