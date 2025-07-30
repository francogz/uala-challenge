import EmptyImage from "@/assets/empty.png";
import Text from "@/components/common/Text";
import styled from "@emotion/styled";

const NotFoundTransactions = () => {
    return (
        <Wrapper>
            <Image>
                <img src={EmptyImage} alt="No transactions found" />
            </Image>
            <CustomText
                fs="0.875"
                fw="100"
                color="#606882"
                title="No hay resultados que mostrar. Podés probar usando los filtros."
                textAlign="center"
            />
        </Wrapper>
    );
};

export default NotFoundTransactions;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Image = styled.div`
    width: 100%;
    max-width: 70px;

    img {
        width: 100%;
    }
`;

const CustomText = styled(Text)`
    line-height: 140%;
    pharagraph-spacing: 8px;
`;
