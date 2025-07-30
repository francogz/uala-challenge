import ArrowIcon from "@/assets/icons/ArrowIcon";
import CustomButton from "@/components/common/CustomButton";
import Text from "@/components/common/Text";
import styled from "@emotion/styled";
import SwitchFilter from "./SwitchFilter";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import CardIcon from "@/assets/icons/CardIcon";
import QuotesIcon from "@/assets/icons/QuotesIcon";
import CurrencyIcon from "@/assets/icons/CurrencyIcon";
import WalletIcon from "@/assets/icons/WalletIcon";
import ChipsFilter from "./ChipsFilter";
import useFilters from "@/views/home/hooks/useFilters";
import { useTransactionsContext } from "@/context/transactionsContext/useTransactionsContext";
import RangeFilter from "./RangeFilter";
import { useFiltersContext } from "@/context/filtersContext/useFiltersContext";
import DateFilter from "./DateFilter";

interface FiltersTransactionsProps {
    showFilters: boolean;
    handleShowFilters: () => void;
}

interface FiltersStyleProps {
    showFilters: boolean;
}

const FiltersTransactions = (props: FiltersTransactionsProps) => {
    const { showFilters, handleShowFilters } = props;

    // Context
    const { cardData, paymentMethods } = useTransactionsContext();
    const {
        filters,
        activeFilters,
        setActiveFilters,
        setRangeDate,
    } = useFiltersContext();


    // Hooks
    const { handleFilterChange, clearChipFilters, handleRangeFilter } =
        useFilters();

    // States

    // Functions
    const handleToggleFilter = (filter: string) => {
        setActiveFilters((prev) => ({
            ...prev,
            [filter]: !prev[filter],
        }));
    };

    const clearActiveFilters = () => {
        clearChipFilters();
        setRangeDate(undefined);
        setActiveFilters((prev) => {
            const cleared: { [key: string]: boolean } = {};
            Object.keys(prev).forEach((key) => {
                cleared[key] = false;
            });
            return cleared;
        });
    };

    return (
        <Container showFilters={showFilters}>
            <Wrapper showFilters={showFilters}>
                <div>
                    <BackButton onClick={handleShowFilters}>
                        <ArrowIcon color="#022A9A" />
                        Filtros
                    </BackButton>
                </div>
                <Body>
                    <HeaderBody>
                        <Text
                            fs="1rem"
                            fw="600"
                            color="#3A3A3A"
                            title="Todos los filtros"
                        />
                        <CustomButton
                            title="Limpiar"
                            variant="tertiary"
                            onClick={clearActiveFilters}
                        />
                    </HeaderBody>
                    <SwitchWrapper>
                        <SwitchFilter
                            id="date"
                            activeFilters={activeFilters}
                            handleToggleFilter={handleToggleFilter}
                            Icon={CalendarIcon}
                            label="Fecha"
                        />
                        {activeFilters.date && <DateFilter />}
                        <SwitchFilter
                            id="card"
                            activeFilters={activeFilters}
                            handleToggleFilter={handleToggleFilter}
                            Icon={CardIcon}
                            label="Tarjeta"
                        />
                        {activeFilters.card && (
                            <ChipsFilter
                                options={[
                                    { label: "Todas", value: "all" },
                                    ...cardData,
                                ]}
                                filterKey="card"
                                handleFilterChange={
                                    handleFilterChange as (
                                        value: string | number,
                                        filterKey: string
                                    ) => void
                                }
                                filters={filters}
                            />
                        )}
                        <SwitchFilter
                            id="quotes"
                            activeFilters={activeFilters}
                            handleToggleFilter={handleToggleFilter}
                            Icon={QuotesIcon}
                            label="Cuotas"
                        />
                        {activeFilters.quotes && (
                            <ChipsFilter
                                options={[
                                    { label: "Todas", value: "all" },
                                    { label: "1", value: 1 },
                                    { label: "2", value: 2 },
                                    { label: "3", value: 3 },
                                    { label: "6", value: 6 },
                                    { label: "12", value: 12 },
                                ]}
                                filterKey="quotes"
                                filters={filters}
                                handleFilterChange={
                                    handleFilterChange as (
                                        value: string | number,
                                        filterKey: string
                                    ) => void
                                }
                            />
                        )}
                        <SwitchFilter
                            id="amount"
                            activeFilters={activeFilters}
                            handleToggleFilter={handleToggleFilter}
                            Icon={CurrencyIcon}
                            label="Monto"
                        />
                        {activeFilters.amount && (
                            <RangeFilter
                                min={0}
                                max={2000}
                                onChange={(values) => {
                                    handleRangeFilter({
                                        min: values.min,
                                        max: values.max,
                                    });
                                }}
                            />
                        )}
                        <SwitchFilter
                            id="paymentMethods"
                            activeFilters={activeFilters}
                            handleToggleFilter={handleToggleFilter}
                            Icon={WalletIcon}
                            label="Métodos de cobro"
                        />
                        {activeFilters.paymentMethods && (
                            <ChipsFilter
                                options={[
                                    { label: "Todos", value: "all" },
                                    ...paymentMethods,
                                ]}
                                filterKey="paymentMethods"
                                handleFilterChange={
                                    handleFilterChange as (
                                        value: string | number,
                                        filterKey: string
                                    ) => void
                                }
                                filters={filters}
                            />
                        )}
                    </SwitchWrapper>
                </Body>
            </Wrapper>
            <Footer>
                <CustomButton
                    title="Aplicar filtros"
                    variant="primary"
                    onClick={handleShowFilters}
                    fullWidth
                />
            </Footer>
        </Container>
    );
};

export default FiltersTransactions;

const Container = styled.div<FiltersStyleProps>`
    position: fixed;
    top: 0;
    // left: 0;
    right: ${(props) => (props.showFilters ? "0" : "-100vw")};
    width: 100vw;
    height: 100vh;
    background-color: #ffffff60;
    z-index: 1000;
    display: flex;
    justify-content: flex-end;

    transition: all 0.3s ease-in-out;
`;

const Wrapper = styled.div<FiltersStyleProps>`
    height: 100%;
    width: ${(props) => (props.showFilters ? "542px" : "0")};
    background-color: #fafbfb;
    box-shadow: 0px 4px 16px 0px #31364333;
    padding: 49px 49px 55px 49px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    overflow-y: auto;

    @media (max-width: 768px) {
        margin-top: 70px;
        padding: 20px 20px 105px 20px;
        width: ${(props) => (props.showFilters ? "100%" : "0")};
        box-shadow: none;
        height: 100%;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: transparent;
    border: none;
    color: #3a3a3a;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
`;

const HeaderBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const SwitchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    height: 100%;
    overflow-y: auto;

    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

const Footer = styled.div`
    width: 542px;
    position: absolute;
    bottom: 0;
    lef: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35.5px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
        box-shadow: none;
    }
`;
