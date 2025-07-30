interface CardIconProps {
    color: string;
}

const CardIcon = (props: CardIconProps) => {
    const { color = "#3564FD" } = props;

    return (
        <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.75 0H3.75C1.68 0 0 1.68 0 3.75V10.75C0 12.82 1.68 14.5 3.75 14.5H15.75C17.82 14.5 19.5 12.82 19.5 10.75V3.75C19.5 1.68 17.82 0 15.75 0ZM3.75 1.5H15.75C16.82 1.5 17.71 2.25 17.94 3.25H1.56C1.79 2.25 2.68 1.5 3.75 1.5ZM15.75 13H3.75C2.51 13 1.5 11.99 1.5 10.75V6.25H18V10.75C18 11.99 16.99 13 15.75 13Z"
                fill={color}
            />
        </svg>
    );
};

export default CardIcon;
