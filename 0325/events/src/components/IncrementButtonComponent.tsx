interface Props {
    onIncrement: () => void;
}

const IncrementButtonComponent: React.FC<Props> = ({ onIncrement }) => {
    return (
        <>
            <button onClick={() => { onIncrement() }}>
                Increment
            </button>
            <button onClick={() => { onIncrement(); onIncrement() }}>
                Increment * 2
            </button>
        </>
    );
}

export default IncrementButtonComponent