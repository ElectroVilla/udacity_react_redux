import '../App.css';
import React from 'react';
import Todos from './Todos';
import Goals from './Goals';
import {handleInitialData } from '../actions/shared';


class App extends React.Component {
    componentDidMount() {
        const { store } = this.props
        store.dispatch(handleInitialData())
        store.subscribe(() => this.forceUpdate())
    }
    render() {
        const { store } = this.props
        const { todos, goals, loading } = store.getState()
        if (loading) {
            return <h2>Loading...</h2>
        }
        return (
            <div>
                <Todos todos={todos} store={this.props.store}/>
                <Goals goals={goals} store={this.props.store} />
            </div>
        )
    }
}

export default App;
