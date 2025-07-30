import styled from "@emotion/styled";
import LogoHorizontal from "@/assets/uala-isotipo-horizontal.svg";
import Nav from "./Nav";
import DownloadAppBtns from "./DownloadAppBtns";

const NavLayoutHorizontal = () => {
    return (
        <Wrapper>
            <Header>
                <Image>
                    <img src={LogoHorizontal} alt="Logo Uala" />
                </Image>
            </Header>
            <Body>
                <Nav />
                <DownloadAppBtns />
            </Body>
        </Wrapper>
    );
};

export default NavLayoutHorizontal;

const Wrapper = styled.div`
    width: 280px;
    height: 100vh;
    background-color: #fefefe;
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 10px 0px 31px 0px #e7eeff80;
    display: flex;
    flex-direction: column;
    padding: 18px 0;
    gap: 1.375rem;
`;

const Header = styled.div`
    padding: 0 20px;
`;

const Image = styled.div`
    width: 104.75px;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;
