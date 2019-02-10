import * as React from 'react';

interface I$NAME {
    name?: string;
}

const $NAME: React.FunctionComponent<I$NAME> = (props: I$NAME) => (
    <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>
);

$NAME .defaultProps = {
    name: 'world',
};

export default $NAME;