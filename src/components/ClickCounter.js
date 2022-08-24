import withCounter from './HOC/withCounter';

function ClickCounter(props) {
    const { incrementCount, count } = props;
    return (
        <button type="button" onClick={incrementCount}>
            Clicked {count} times
        </button>
    );
}

export default withCounter(ClickCounter);
