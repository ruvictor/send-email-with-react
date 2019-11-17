import React, {Component} from 'react';

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    // handle the value
    handleCHange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // when submit btn is clicked
    submitForm = (e) => {
        const {email} = this.state;
        e.preventDefault();
    }

    render(){
        return(
            <div className="formBlock">
                <form>
                    <label>
                        <input type="text" onChange={this.handleCHange('name')} placeholder="Name" />
                    </label>
                    <label>
                        <input type="text" onChange={this.handleCHange('email')} placeholder="Email" />
                    </label>
                    <label>
                        <textarea type="text" onChange={this.handleCHange('message')} placeholder="Message"></textarea>
                    </label>
                    <label>
                        <button className="submitBtn" onClick={this.submitForm}>Submit</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default Form;