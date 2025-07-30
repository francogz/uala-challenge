import styled from "@emotion/styled";
import ButtonNav from "./ButtonNav";
import Homeicon from "@/assets/icons/HomeIcon";
import MetricsIcon from "@/assets/icons/MetricsIcon";

interface NavProps {
    handleShowMenu?: () => void;
}

const Nav = (props: NavProps) => {
    const { handleShowMenu = () => {} } = props;

    const path = window.location.pathname;

    return (
        <Wrapper>
            <ButtonNav
                handleShowMenu={handleShowMenu}
                children={
                    <Homeicon color={path === "/" ? "#3564FD" : "#737373"} />
                }
                btnText="Inicio"
                colorText={path === "/" ? "#3564FD" : "#737373"}
                pathName="/"
            />
            <ButtonNav
                handleShowMenu={handleShowMenu}
                children={
                    <MetricsIcon
                        color={path === "/metrics" ? "#3564FD" : "#737373"}
                    />
                }
                btnText="Métricas"
                colorText={path === "/metrics" ? "#3564FD" : "#737373"}
                pathName="/metrics"
            />
        </Wrapper>
    );
};

export default Nav;

const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
