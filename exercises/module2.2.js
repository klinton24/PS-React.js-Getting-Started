//Title case so Button can be distinguished from button
class Button extends React.Component {
        /*constructor(props) {
  	super(props);
    this.state = { counter: 0 };
    }*/

        state = { counter: 0 };

        //asynchronous
        handleClick = () => {
            // this === component instance
            // To avoid race condition?
            this.setState((prevState) => {
                return {
                    //counter: this.state.counter + 1
                    counter: prevState.counter + 1
                };
            });
        };
        //React.createElement("button", null, "Go")
        render() {
            return ( <button onClick = { this.handleClick } > { this.state.counter } </button>    );
            }
        }

        //two arguments, first is the component to render, second is element the component should be rendered
        ReactDOM.render( < Button /> , mountNode);

        /*Component re-renders itself every time the counter changes. property can't be used because compontent
         properties are immutable. function components cannot have state, so a class compontent must be used. */