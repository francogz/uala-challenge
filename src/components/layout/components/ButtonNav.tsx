import styled from "@emotion/styled";
import { useNavigate } from "react-router";

interface ButtonProps {
    children: React.ReactNode;
    btnText: string;
    colorText: string;
    pathName: string;
    handleShowMenu?: () => void;
}

interface ButtonStyleProps {
    colorText: string;
}

const ButtonNav = (props: ButtonProps) => {
    const {
        children,
        btnText,
        colorText,
        pathName,
        handleShowMenu = () => {},
    } = props;

    // Hooks
    const navigate = useNavigate();

    // Functions
    const handleNavigate = () => {
        handleShowMenu();
        navigate(pathName);
    };

    return (
        <Button onClick={handleNavigate} colorText={colorText}>
            {children}
            {btnText}
        </Button>
    );
};

export default ButtonNav;

const Button = styled.button<ButtonStyleProps>`
    background-color: #fefeff;
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    height: 48px;
    padding: 12px 20px;
    cursor: pointer;
    gap: 1rem;
    color: ${(props) => props.colorText};
    font-size: 0.875rem;
`;
