import styled from "@emotion/styled";

interface CustomButtonProps {
    title: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "tertiary";
    fullWidth?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
    const { title, onClick, disabled = false, variant = "primary", fullWidth } = props;

    return (
        <Button onClick={onClick} disabled={disabled} variant={variant} fullWidth={fullWidth}>
            {title}
        </Button>
    );
};

export default CustomButton;

const Button = styled.button<{ variant: string, fullWidth?: boolean }>`
    background-color: ${(props) =>
        props.variant === "primary" ? "#022A9A" : "transparent"};
    color: ${(props) => (props.variant === "primary" ? "#FFFFFF" : "#022A9A")};
    border-radius: 24px;
    outline: ${(props) =>
        props.variant === "secondary" ? "1px solid #022A9A" : "none"};
    padding: ${(props) => (props.fullWidth) ? "12px 24px" : "9px 16px"};
    width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};

    :hover {
        background-color: #0147c7;
        outline: none;
        color: #fff;
    }
`;
