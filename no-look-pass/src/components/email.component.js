import React, { Component } from 'react';
export default class Email extends Component {
	constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            consent:'',
            created_on: null
        }
		this.timeStamp = this.timeStamp.bind(this);
	    this.onChangeFirstName = this.onChangeFirstName.bind(this); 
        this.onChangeLastName = this.onChangeLastName.bind(this);   
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeConsent = this.onChangeConsent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);       
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Email me maybe.</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.first_name}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.last_name}
                                onChange={this.onChangeLastName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>                    
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="consentOptions" 
                                    id="consentNo" 
                                    value="No" 
                                    checked={this.state.consent==='No'} 
                                    onChange={this.onChangeConsent}
                                    />
                            <label className="form-check-label">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="consentOptions" 
                                    id="consentYes" 
                                    value="Yes"
                                    checked={this.state.consent==='Yes'} 
                                    onChange={this.onChangeConsent}
                                    />
                            <label className="form-check-label">Yes</label>
                        </div>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
    /**
 * Return a timestamp with the format "m/d/yy h:MM:ss TT"
 * @type {Date}
 */
 	onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }
 	onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }
 	onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
 	onChangeConsent(e) {
        this.setState({
            consent: e.target.value
        });
    }    
 	onSubmit(e) {
 		e.preventDefault();
        console.log(`Form submitted:`);
        console.log(`First name: ${this.state.first_name}`);
        console.log(`Last name: ${this.state.last_name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Consent: ${this.state.consent}`);
        console.log(`Created_on: ${this.timeStamp()}`);
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            consent: null,
            created_on: null
        }); 		

    }        
	timeStamp() {
	// Create a date object with the current time
	var now = new Date();

	// Create an array with the current month, day and time
	var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

	// Create an array with the current hour, minute and second
	var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

	// Determine AM or PM suffix based on the hour
	var suffix = ( time[0] < 12 ) ? "AM" : "PM";

	// Convert hour from military time
	time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

	// If hour is 0, set it to 12
	time[0] = time[0] || 12;

	// If seconds and minutes are less than 10, add a zero
	for ( var i = 1; i < 3; i++ ) {
	if ( time[i] < 10 ) {
	  time[i] = "0" + time[i];
	}
	}

	// Return the formatted string
	return date.join("/") + " " + time.join(":") + " " + suffix;
	}
}
