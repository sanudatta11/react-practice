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
    handleSubmit =(event) => {
        event.preventDefault();
        console.log('Form Submitted!' , this.userInput.value);
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"  
                ref = {(input) => this.userInput = input} 
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
            {props.cards.map(card => <Card { ...card } />)}
        </div>
    );
};

class App extends React.Component {
    state = {
        cards :  [{
            name : "Soumyajit Dutta",
            company : "LPU",
            avatar_url : "https://avatars0.githubusercontent.com/u/10294608?v=4"
        },{
            name : "Biswarup Banerjee",
            company : "LPU",
            avatar_url : "https://avatars1.githubusercontent.com/u/25161788?v=4"
        }]
    }

    render() {
        return(
            <div>
                <Form />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />,mountNode)