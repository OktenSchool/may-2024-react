import './App.css';
import React, {Component} from 'react';

type PropsType = {}
type StateType = {
    users: any[];
    posts: any[];
    comments: any[];
}


class App extends Component<PropsType, StateType> {

    constructor(props: any) {
        super(props);
        this.state = {users: [], posts: [], comments: []};
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value});
            });
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => (<div>{user.name}</div>))
                }

            </div>
        );
    }
}

export default App;
