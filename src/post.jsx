import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Post extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <li>
                <div>
                    <small>{this.props.orderDate}</small>
                    <h3>{this.props.authorName}</h3>
                    <p>{this.props.messageBody}</p>
                </div>
            </li>
        );
    }
}