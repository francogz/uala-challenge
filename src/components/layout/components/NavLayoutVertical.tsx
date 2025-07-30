import styled from "@emotion/styled";
import MenuIcon from "@/assets/icons/MenuIcon";
import LogoSimple from "@/assets/logo-uala.svg";
import { useState } from "react";
import Nav from "./Nav";
import DownloadAppBtns from "./DownloadAppBtns";

interface stylesProps {
    showMenu: boolean;
}

const NavLayoutVertical = () => {
    // States
    const [showMenu, setShowMenu] = useState<boolean>(false);

    // Functions
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Wrapper showMenu={showMenu}>
            <Header>
                <ExpandButton onClick={handleShowMenu}>
                    <MenuIcon color="#606882" />
                </ExpandButton>
                <Image>
                    <img src={LogoSimple} alt="Logo Uala" />
                </Image>
            </Header>
            <NavWrapper showMenu={showMenu}>
                <Nav handleShowMenu={handleShowMenu} />
            </NavWrapper>
            <DownloadWrapper showMenu={showMenu}>
                <DownloadAppBtns />
            </DownloadWrapper>
        </Wrapper>
    );
};

export default NavLayoutVertical;

const Wrapper = styled.div<stylesProps>`
    width: 100%;
    height: ${(props) => (props.showMenu ? "100vh" : "56px")};
    background-color: #fefefe;
    padding: 1rem 1rem 43px 1rem;
    box-shadow: 10px 0px 31px 0px #e7eeff80;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 0;
    border-bottom-left-radius: 32px;
    border-bottom: 1px solid #dee2ed;
    position: fixed;
    top: 0;
    z-index: 1001;
    transition: height 0.3s ease-in-out;
    gap: 2rem;
    &:before {
        display: ${(props) => (props.showMenu ? "none" : "block")};
        content: "";
        width: 32px;
        height: 32px;
        background-color: #fefefe;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 2;
    }

    :after {
        display: ${(props) => (props.showMenu ? "none" : "block")};
        content: "";
        width: 32px;
        height: 32px;
        background-color: #fafafb;
        border-top-right-radius: 32px;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 2;
        border-top: 1px solid #dee2ed;
    }
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ExpandButton = styled.button`
    position: absolute;
    left: 8px;
    top: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    &:hover {
        background-color: #f0f0f0;
        border-radius: 50%;
    }
`;

const Image = styled.div`
    width: 61.14px;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

const NavWrapper = styled.div<stylesProps>`
    width: 100%;
    height: ${(props) => (props.showMenu ? "calc(100vh - 56px)" : "0")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
`;

const DownloadWrapper = styled.div<stylesProps>`
    height: ${(props) => (props.showMenu ? "100%" : "0")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    place-content: end;
    margin-bottom: 20px;
`;
