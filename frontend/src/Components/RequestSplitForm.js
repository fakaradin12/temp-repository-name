// Reference: https://bapunawarsaddam.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5
import React, { Component } from 'react'


export default class Split extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestSection: [{ username: "", itemPrice: [0]}],
            users: []                            // username has to be unique
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log('check')
        this.setState({
            users:['test1','test2']}); 
             {/* get the all the friend name of the user */}
        //fetchPosts().then(response => {                       // send get request from the server
            //this.setState({
                //posts: response.posts
            //});
            //});
    }

    handleChangeUsername(i, e) {
        let requestSectionHelp = this.state.requestSection;
        requestSectionHelp[i]['username'] = e.target.value;
        this.setState({
            requestSection: requestSectionHelp});
        console.log(this.state)
    }

    handleChangeItemPrice(i, e) {
        let requestSectionHelp = this.state.requestSection;
        requestSectionHelp[i]['itemPrice'] = e.target.value;
        this.setState({
            requestSection: requestSectionHelp
        });
    }

    removeRequestSection(i,e){
        let requestSectionHelp = this.state.requestSection;
        requestSectionHelp.splice(i, 1);
        this.setState({ 
            requestSection: requestSectionHelp
         });
    }

    addRequestSection(event){
        this.setState({
            requestSection: [...this.state.requestSection, { username: "", itemPrice :  0}]
          })
    }

    handleSubmit(event){
        event.preventDefault();
        const result = {
            requestSection: this.state.requestSection
        }
        console.log(result)                                             // send post request and use that number in Calculate
        alert(JSON.stringify(this.state.requestSection));
        fetch('')
    }


    render() {
        return (
            <div>
                <h3>fill out the form</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* loop through requestSection */}
                    {this.state.requestSection.map((element, index) => (
                        <div className='one-user-request' key={index}>

                            {/* username */}
                            <label>Username:</label>
                            <select 
                                required
                                key={index}
                                value={element.username}
                                onChange={e => this.handleChangeUsername(index, e)}
                                >
                                {/* loops through this.state.users */}
                                {
                                    this.state.users.map((user) =>
                                        <option
                                            key={user}
                                            value={user}
                                            >{user}
                                        </option>
                                    )
                                }
                            </select>

                            {/* item price input list */}
                            
                            <label>Item Price</label>
                                <input
                                    type='number'
                                    min='0'
                                    value={element.itemPrice || 0}
                                    onChange={e => this.handleChangeItemPrice(index,e)} />

                            
                            {/* press a add item button for adding more item input for the request section */}
                            <button className="button_add_price" type="button" onClick={() => this.addItem()}>Add Item</button>
                            
                            {/* press a remove button for each requestsection after the first one */}
                            {
                                index ?
                                    <button 
                                        type="button"  
                                        className="button_request_section" 
                                        onClick={() => this.removeRequestSection(index)}>Remove</button>
                                        : null
                            }
                            </div>
                    ))}


                    <div className="button-section">
                        <button className="button_add_user" type="button" onClick={() => this.addRequestSection()}>Add Friend</button>
                        <button className="button_submit" type="submit">Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}