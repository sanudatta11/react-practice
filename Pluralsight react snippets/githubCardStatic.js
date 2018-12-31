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

const data = [{
    name : "Soumyajit Dutta",
    company : "LPU",
    avatar_url : "https://avatars0.githubusercontent.com/u/10294608?v=4"
},{
    name : "Biswarup Banerjee",
    company : "LPU",
    avatar_url : "https://avatars1.githubusercontent.com/u/25161788?v=4"
}];

const CardList = (props) => {
    return(
        <div>
            {props.cards.map(card => <Card { ...card } />)}
        </div>
    );
};

ReactDOM.render(<CardList cards={data}/>,mountNode)