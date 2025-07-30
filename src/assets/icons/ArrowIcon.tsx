interface ArrowIconProps {
    color: string;
}

const ArrowIcon = (props: ArrowIconProps) => {
    const { color = "#3564FD" } = props;

    return (
        <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.00447 15.2499C7.81436 15.2499 7.62424 15.1799 7.47414 15.0299L0.970077 8.52994C0.679896 8.23994 0.679896 7.75994 0.970077 7.46994L7.47414 0.969941C7.76432 0.679941 8.24462 0.679941 8.53481 0.969941C8.82499 1.25994 8.82499 1.73994 8.53481 2.02994L2.56107 7.99994L8.53481 13.9699C8.82499 14.2599 8.82499 14.7399 8.53481 15.0299C8.38471 15.1799 8.19459 15.2499 8.00447 15.2499Z"
                fill={color}
            />
        </svg>
    );
};

export default ArrowIcon;
