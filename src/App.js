import React from 'react';

export default class Clock extends React.Component {
    state = {
        dateTime: new Date(),
        format: 'eu', // 'en-US'
    }

    setFormat = (format) => {
        this.setState({
            format: format,
        })
    }

    componentDidMount = () => {
        this.timer = setInterval(() => {
            this.setState({
                dateTime: new Date(),
            })
        }, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    render() {
        let {dateTime} = this.state;

        return (
            <div className="App">
                <span>Time:</span>
                {' '}
                <span>{dateTime.toLocaleTimeString(this.state.format)}</span>
                <div>
                    <button onClick={() => this.setFormat('eu')}>24</button>
                    <button onClick={() => this.setFormat('en-US')}>12</button>
                </div>
            </div>
        );
    }
}
