import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            firstname: '',
            lastname: '',
            email: '',
            id: 0
        };

        this.state = this.initialState;
        
    }

    handleChange = event => {
        
        const { name, value, id } = event.target;

        this.setState({
            [name] : value,
            [id]: value
        });
    }

    OnClikUp = () => {
        this.setState(prevState => ({
            id: prevState.id+1
        })); 

    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);

    }

    render() {
        const { firstname, lastname, email } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <button type="submit"
                onClick = {this.OnClikUp}
                >
                    Add user
                </button>
                <label f="firstname">FirstName</label>
                <input 
                    type="text" 
                    name="firstname" 
                    id="firstname"
                    value={firstname} 
                    onChange={this.handleChange} />
                <label f="lastname">Lastname</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname"
                    value={lastname} 
                    onChange={this.handleChange} />
              <label f="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
            </form>
        );
    }
}

export default Form;
