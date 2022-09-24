import React, {Component} from 'react';
import WithMessage from './withWish';

class Message extends Component {
    render() {

        return(
            <div>
               <div>my wishes: {this.props.message} {this.props.name} and {this.props.age}</div>
               <button onClick={this.props.goodMorning}>good morning</button>
            </div>
            

        )
    }
}
export default WithMessage(Message);