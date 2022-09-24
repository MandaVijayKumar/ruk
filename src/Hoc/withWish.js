import React, { Component } from 'react'

function WithMessage (OriginalMessage) {

    return class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {message:'vijay'}
        }
        goodMorning = () => {
            console.log('vijay kumar')
            this.setState({message:'goodmorning'})
        }
        render() {
            
            return(
                <OriginalMessage goodMorning = {this.goodMorning} message={this.state.message} {...this.props}/>
            )
        }
    }

}
export default WithMessage;