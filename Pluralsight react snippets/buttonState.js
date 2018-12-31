// Write JavaScript here and press Ctrl+Enter to execute;

class Button extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.state = {
    //         counter : 1
    //       };
    
    //     }
      state = { counter: 0 };
      handleClick = () => {
          this.setState( (prevState) => ( {
                counter : prevState.counter + 1
            }
        ));
      };
        render() {
              return (
            // React.createElement("button","null","Go")
            <button onClick={this.handleClick}>{this.state.counter}</button>
          );
      }
    }
    ReactDOM.render(<Button />, mountNode);