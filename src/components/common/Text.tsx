import styled from "@emotion/styled";

interface TextStyleProps {
    fs: string;
    fw: string;
    color: string;
    textAlign?: string;
}

interface TextProps extends TextStyleProps {
    title: string;
}

const Text = (props: TextProps) => {
    const { fs, fw, color, title, textAlign } = props;

    return (
        <TextWrapper fs={fs} fw={fw} color={color} textAlign={textAlign}>
            {title}
        </TextWrapper>
    );
};

export default Text;

const TextWrapper = styled.p<TextStyleProps>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    text-align: ${(props) => props.textAlign || "left"};
`;
