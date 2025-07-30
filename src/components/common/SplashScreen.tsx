import styled from "@emotion/styled";
import Simbolo from "@/assets/simbolo.svg";
const SplashScreen = () => {
    return (
        <Wrapper>
            <img src={Simbolo} alt="Uala Logo" />
        </Wrapper>
    );
};

export default SplashScreen;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
