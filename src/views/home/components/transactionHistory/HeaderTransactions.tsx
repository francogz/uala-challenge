import DownloadIcon from "@/assets/icons/DownloadIcon";
import FilterIcon from "@/assets/icons/FilterIcon";
import ModalDatePicker from "@/components/common/ModalDatePicker";
import styled from "@emotion/styled";
import { useState } from "react";
import FiltersTransactions from "./filterTransaction/FiltersTransactions";

const HeaderTransactions = () => {
    // States
    const [isOpenModalDatePicker, setIsOpenModalDatePicker] =
        useState<boolean>(false);
    const [showFilters, setShowFilters] = useState<boolean>(false);

    // Functions
    const onRequestClose = () => {
        setIsOpenModalDatePicker(false);
    };

    const handleShowFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <>
            <FiltersTransactions
                showFilters={showFilters}
                handleShowFilters={handleShowFilters}
            />
            <ModalDatePicker
                isOpen={isOpenModalDatePicker}
                onRequestClose={onRequestClose}
            />
            <Wrapper>
                <Title>Historial de transacciones</Title>
                <Buttons>
                    <Button onClick={handleShowFilters}>
                        <FilterIcon color="#022A9A" />
                    </Button>
                    <Button onClick={() => setIsOpenModalDatePicker(true)}>
                        <DownloadIcon color="#022A9A" />
                    </Button>
                </Buttons>
            </Wrapper>
        </>
    );
};

export default HeaderTransactions;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11.5px 8px;
`;

const Title = styled.h2`
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-dark);
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;

    &:hover {
        background-color: #f0f0f0;
        border-radius: 50%;
    }
`;
