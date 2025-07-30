import styled from "@emotion/styled";
import Avatar from "@/assets/avatar.png";

const HeaderLayout = () => {
    return (
        <Wrapper>
            <Image>
                <img src={Avatar} alt="Avatar" />
            </Image>
            <UserName>Name</UserName>
        </Wrapper>
    );
};

export default HeaderLayout;

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fefefe;
    box-shadow: 0px 8px 20px 0px #e7eeff80;
    padding: 20px 24px;
    display: flex;
    gap: 2rem;
    align-items: center;
`;

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
    }
`;

const UserName = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: #3a3a3a;
    `;