// Write JavaScript here and press Ctrl+Enter to execute;

class Button extends React.Component {
      handleClick = () => {
          this.props.onClickFunction(this.props.butValue);
      };
        render() {
              return (
            // React.createElement("button","null","Go")
            <button onClick={this.handleClick}>+{this.props.butValue}</button>
          );
      }
    }
    const Result = (props) => {
        return(
            <div>{props.counter}</div>
      );
    };
    
    class App extends React.Component {
      state = { counter: 0 };
        
      incrementValue = (incr) => {
        this.setState( (prevState) => ( {
              counter : prevState.counter + incr
            }
          ));
      };
      
        render() {
          return (
            <div>
              <Button butValue = {1} onClickFunction = {this.incrementValue} />
            <Button butValue = {10} onClickFunction = {this.incrementValue} />
            <Button butValue = {50} onClickFunction = {this.incrementValue} />
            <Button butValue = {100} onClickFunction = {this.incrementValue} />
            <Result counter={this.state.counter} />
          </div>
        )
      }
    }
    ReactDOM.render(<App />, mountNode);