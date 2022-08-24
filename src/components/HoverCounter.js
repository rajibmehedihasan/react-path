import withCounter from './HOC/withCounter';

function HoverCounter(props) {
    const { incrementCount, count } = props;
    return (
        <h2 type="button" onMouseOver={incrementCount} onFocus={incrementCount}>
            Hovered {count} times
        </h2>
    );
}

export default withCounter(HoverCounter);
