import CustomButton from "@/components/common/CustomButton";
import { useFiltersContext } from "@/context/filtersContext/useFiltersContext";
import styled from "@emotion/styled";
// import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";

const DateFilter = () => {
    // Context
    const { rangeDate, setRangeDate } = useFiltersContext();

    // Functions
    const clearRangeDate = () => {
        setRangeDate(undefined);
    };

    return (
        <Container>
            <DayPicker
                mode="range"
                selected={rangeDate}
                onSelect={setRangeDate}
                numberOfMonths={1}
                locale={es}
                captionLayout="dropdown"
                endMonth={new Date(2025, 11, 31)}
                startMonth={new Date(2025, 0, 1)}
            />
            <Footer>
                <CustomButton
                    title="Borrar"
                    variant="secondary"
                    onClick={clearRangeDate}
                />
            </Footer>
        </Container>
    );
};

export default DateFilter;

const Container = styled.div`
padding: 16px 20px;
background-color: #fff;
border-radius: 8px;
box-shadow: 0px 2px 24px 0px #55555514;
display: flex;
justify-content: center;
flex-direction: column;
width: fit-content;
margin: 0 auto;
align-items: center;
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    justify-content: flex-end;
`;
