// Write JavaScript here and press Ctrl+Enter to execute;

class Button extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.state = {
    //         counter : 1
    //       };
    
    //     }
      // handleClick = () => {
      // 	this.setState( (prevState) => ( {
      //   		counter : prevState.counter + 1
      //   	}
      //   ));
      // };
        render() {
              return (
            // React.createElement("button","null","Go")
            <button onClick={this.props.onClickFunction}>+1</button>
          );
      }
    }
    const Result = (props) => {
        return(
            <div>{props.counter}</div>
      );
    };
    
    class App extends React.Component {
      state = { counter: 1 };
        
      incrementValue = () => {
        this.setState( (prevState) => ( {
              counter : prevState.counter + 1
            }
          ));
      };
      
        render() {
          return (
            <div>
              <Button onClickFunction = {this.incrementValue} />
            <Result counter={this.state.counter} />
          </div>
        )
      }
    }
    ReactDOM.render(<App />, mountNode);