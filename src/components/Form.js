import React, {Component} from 'react';

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        emailStatus: ''
    };

    // handle the value
    handleCHange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // when submit btn is clicked
    submitForm = (e) => {
        const {name, email, message} = this.state;


        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            this.setState ({
                emailStatus: xhr.responseText
            });
        });
        // open the request with the verb and the url
        xhr.open('GET', 'http://api.ruvictor.com/sendemail/index.php?sendto=' + email + 
                                '&name=' + name + 
                                '&message=' + message);
        // send the request
        xhr.send();

        // reset the fields
        this.setState({
            name: '',
            email: '',
            message: ''
        });
        e.preventDefault();
    }

    render(){
        const {name, email, message, emailStatus} = this.state;
        return(
            <div className="formBlock" onSubmit={this.submitForm}>
                {emailStatus ? emailStatus : null}
                <form>
                    <label>
                        <input type="text" value={name} onChange={this.handleCHange('name')} placeholder="Name" />
                    </label>
                    <label>
                        <input type="text" value={email} onChange={this.handleCHange('email')} placeholder="Email" />
                    </label>
                    <label>
                        <textarea type="text" value={message} onChange={this.handleCHange('message')} placeholder="Message"></textarea>
                    </label>
                    <label>
                        <input type="submit" className="submitBtn" value="Submit" />
                    </label>
                </form>
            </div>
        );
    }
}

export default Form;