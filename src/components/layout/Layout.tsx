import styled from "@emotion/styled";
import { Outlet } from "react-router";
import HeaderLayout from "./components/HeaderLayout";
import NavLayoutHorizontal from "./components/NavLayoutHorizontal";
import NavLayoutVertical from "./components/NavLayoutVertical";
import { useEffect, useState } from "react";

const Layout = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    return (
        <Container>
            {isMobile ? <NavLayoutVertical /> : <NavLayoutHorizontal />}
            <Body>
                <HeaderContainer>
                    <HeaderLayout />
                </HeaderContainer>
                <Main>
                    <Outlet />
                </Main>
            </Body>
        </Container>
    );
};

export default Layout;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    max-height: calc(100vh - 1rem - 60px);
    overflow: auto;
`;

const HeaderContainer = styled.div`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;
