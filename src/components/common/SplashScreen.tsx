import styled from "@emotion/styled";

const SplashScreen = () => {
    return (
        <Wrapper>
            <h1>Loading...</h1>
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
    background-color: #f0f0f0;

    h1 {
        font-size: 2rem;
        color: #333;
    }
`;
