interface MenuIconProps {
    color: string;
}

const MenuIcon = (props: MenuIconProps) => {
    const { color } = props;

    return (
        <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 1.75H15C15.41 1.75 15.75 1.41 15.75 1C15.75 0.59 15.41 0.25 15 0.25H1C0.59 0.25 0.25 0.59 0.25 1C0.25 1.41 0.59 1.75 1 1.75Z"
                fill={color}
            />
            <path
                d="M15 6.25H1C0.59 6.25 0.25 6.59 0.25 7C0.25 7.41 0.59 7.75 1 7.75H15C15.41 7.75 15.75 7.41 15.75 7C15.75 6.59 15.41 6.25 15 6.25Z"
                fill={color}
            />
            <path
                d="M15 12.25H1C0.59 12.25 0.25 12.59 0.25 13C0.25 13.41 0.59 13.75 1 13.75H15C15.41 13.75 15.75 13.41 15.75 13C15.75 12.59 15.41 12.25 15 12.25Z"
                fill={color}
            />
        </svg>
    );
};

export default MenuIcon;
