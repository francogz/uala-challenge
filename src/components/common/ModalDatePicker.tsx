import CalendarIcon from "@/assets/icons/CalendarIcon";
import styled from "@emotion/styled";
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/style.css";
import ReactModal from "react-modal";
import CustomButton from "./CustomButton";

interface ModalDatePickerProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const ModalDatePicker = (props: ModalDatePickerProps) => {
    const { isOpen = true, onRequestClose } = props;

    const [range, setRange] = useState<DateRange | undefined>();

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: "transparent",
                },
            }}
        >
            <Header>
                <CalendarIcon color="#606882" />
                <Title>Elegí las fechas que querés descargar</Title>
            </Header>
            <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={1}
                locale={es}
                captionLayout="dropdown"
                endMonth={new Date(2025, 11, 31)}
                startMonth={new Date(2025, 0, 1)}
            />
            <Footer>
                <CustomButton
                    title="Cerrar"
                    variant="secondary"
                    onClick={onRequestClose}
                />
                <CustomButton
                    title="Descargar"
                    variant="primary"
                    onClick={() => {
                        console.log("di click");
                    }}
                />
            </Footer>
        </Modal>
    );
};

export default ModalDatePicker;

const Modal = styled(ReactModal)`
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    width: 500px;
    margin: auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 2px 24px 0px rgba(85, 85, 85, 0.08);
    transition: all 0.3s ease-in-out;
    border: none;
    outline: none;
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 768px) {
        width: 90%;
        margin: auto;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Title = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: #313643;
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    justify-content: flex-end;
`;
