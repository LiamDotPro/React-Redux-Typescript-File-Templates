import * as React from 'react';

interface I$NAME {
    countBy?: number;
}

interface IState$NAME {
    count: number;
}

class $NAME extends React.Component<I$NAME, IState$NAME> {

    public static defaultProps: Partial<I$NAME> = {
        countBy: 1,
    };

    public state: IState$NAME = {
        count: 0,
    };

    public increase = () => {
        const countBy: number = this.props.countBy!;
        const count = this.state.count + countBy;
        this.setState({count});
    };

    public render() {
        return (
            <div>
                <p>My favorite number is {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default $NAME;