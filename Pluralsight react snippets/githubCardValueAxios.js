const Card = (props) => {
    return(
        <div margin = '1em'>
            <img width="75" src={props.avatar_url}/>
            <div style={{display : 'inline-block' , margin: 10}}>
                <div style={{ fontSize : '1.25em' , fontWeight: 'bold'}}>
                    {props.name}
                </div>
                {props.company}
            </div>
        </div>
    );
}

class Form extends React.Component {
		state = {userInput : ""};
    handleSubmit =(event) => {
        event.preventDefault();
        console.log('Form Submitted!' , this.state.userInput);
        console.log(`https://api.github.com/users/${this.state.userInput}`);
        axios.get(`https://api.github.com/users/${this.state.userInput}`)
        .then(resp => {
            console.log(resp);
            this.props.onSubmit(resp.data);
        });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"  
                value = {this.state.userInput}
                onChange = {(event) => {this.setState({
                	userInput : event.target.value
                })}}
                placeholder="Github Username" 
                required/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

const CardList = (props) => {
    return(
        <div>
            {props.cards.map(card => <Card key={card.id} { ...card } />)}
        </div>
    );
};

class App extends React.Component {
    state = {
        cards :  []
    }
    addNewCard = (cardInfo) => {
        this.setState((prevState) => ({
            cards : prevState.cards.concat(cardInfo)
        }))
    }
    render() {
        return(
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />,mountNode)