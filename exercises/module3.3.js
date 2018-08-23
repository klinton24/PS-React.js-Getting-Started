const Card = (props) => {
    return (
     <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
       <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
        {props.name}
       </div>
       <div>{props.company}</div>
      </div>
     </div>
    );
   };
   const CardList = (props) => {
    return (
     <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
     </div>
    );
   };
   
   {/* new class based compontent that manages state 
   {/*instead introduce state element for the input value of userName
   ref={(input) => this.userNameInput = input} */}
   class Form extends React.Component {
    state = { userName: '' }
    handleSubmit = (event) => {
     event.preventDefault();
     {/* uses the axios library rather than ajax to fetch information */}
     axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
       this.props.onSubmit(resp.data);
       this.setState({ userName: '' });
      });
    };
    render() {
     return (
      <form onSubmit={this.handleSubmit}>
       <input type="text"
        value={this.state.userName}
        onChange={(event) => this.setState({ userName: event.target.value })}
        placeholder="Github username" required />
       <button type="submit">Add card</button>
      </form>
     );
    }
   }
   {/*parent compontent to render form and cardlist as siblings */}
   class App extends React.Component {
    state = {
     cards: []
    };
    addNewCard = (cardInfo) => {
     this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
     }));
    };
    render() {
     return (
      <div>
       <Form onSubmit={this.addNewCard} />
       <CardList cards={this.state.cards} />
      </div>
     );
    }
   }
   ReactDOM.render(<App />, mountNode);
   
   {/*to see a compontent in the preview area, or at all,  need to mount it with the reactdom render method.
   but we don't want to see card, we want to see whats holding the cards >> cardlist
   Form component can't access the card's state element directly. React components have a one-way flow of data.
 Components can't change the state of its parent, but the App component can pass properties to the Form component */}