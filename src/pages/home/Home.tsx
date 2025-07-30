import HomeView from "@/views/home/HomeView";
import styled from "@emotion/styled";

const Home = () => {
    return (
        <Wrapper className="main">
            <HomeView />
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div``;
