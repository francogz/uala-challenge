import styled from "@emotion/styled";
import BtnGP from "@/assets/google-play-button.svg";
import BtnAS from "@/assets/app-store-button.svg";

const DownloadAppBtns = () => {
    return (
        <Wrapper>
            <p>Descargá la app desde</p>
            <Buttons>
                <a
                    href="https://play.google.com/store/apps/details?id=com.uala.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={BtnAS} alt="App Store" />
                </a>
                <a
                    href="https://play.google.com/store/apps/details?id=com.uala.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={BtnGP} alt="Google Play" />
                </a>
            </Buttons>
        </Wrapper>
    );
};

export default DownloadAppBtns;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.625rem;

    p {
        color: #3a3a3a;
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 24px;
        text-align: center;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

