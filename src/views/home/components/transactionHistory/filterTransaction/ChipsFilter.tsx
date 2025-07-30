import CloseIcon from "@/assets/icons/CloseIcon";
import type { FiltersState } from "@/models/filters.model";
import type { CardElement } from "@/models/transaction.model";
import styled from "@emotion/styled";

interface ChipsFilterProps {
    options: CardElement[];
    filterKey: string;
    filters: FiltersState;
    handleFilterChange: (value: string | number, filterKey: string) => void;
}

interface ChipProps {
    isActive: boolean;
}

const ChipsFilter = (props: ChipsFilterProps) => {
    const { options, filterKey, filters, handleFilterChange } = props;

    return (
        <Wrapper id={filterKey}>
            {options.map((item: CardElement) => (
                <Chip
                    isActive={
                        Array.isArray(filters[filterKey]) &&
                        (filters[filterKey] as Array<string | number>).includes(
                            item.value
                        )
                    }
                    onClick={() => {
                        handleFilterChange(item.value, filterKey);
                    }}
                    key={item.value}
                >
                    {item.label}
                    {Array.isArray(filters[filterKey]) &&
                        (filters[filterKey] as Array<string | number>).includes(
                            item.value
                        ) && <CloseIcon color="#002066" />}
                </Chip>
            ))}
        </Wrapper>
    );
};

export default ChipsFilter;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
    align-items: center;
    // justify-content: center;
    gap: 12px;
    padding: 0 20px 24px 20px;
`;

const Chip = styled.div<ChipProps>`
    height: 32px;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 16px;
    color: ${(props) => (props.isActive ? "#002066" : "#022A9A")};
    background-color: ${(props) =>
        props.isActive ? "#E0ECFE" : "transparent"};
    border: 1px solid #022a9a;
    border: 1px solid ${(props) => (props.isActive ? "#022A9A" : "#002066")};
    font-size: 0.675rem;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    cursor: pointer;
    gap: 4px;
`;
