import Text from "@/components/common/Text";
import styled from "@emotion/styled";

interface SwitchFilterProps {
    Icon: React.ComponentType<{ color: string }>;
    label: string;
    activeFilters: { [key: string]: boolean };
    handleToggleFilter: (filter: string) => void;
    id: string;
}

interface ToggleButtonProps {
    active: boolean;
    bgColor: string;
}

const SwitchFilter = (props: SwitchFilterProps) => {
    const { Icon, label, activeFilters, id, handleToggleFilter } = props;

    return (
        <Wrapper>
            <Label>
                <IconWrapper>
                    <Icon color="#606882" />
                </IconWrapper>
                <Text fs="0.875rem" fw="600" color="#313643" title={label} />
            </Label>
            <ToggleButton
                onClick={() => handleToggleFilter(id)}
                active={activeFilters[id]}
                bgColor={
                    activeFilters[id] ? "#022A9A" : "#606882"
                }
            >
                <Ball />
            </ToggleButton>
        </Wrapper>
    );
};

export default SwitchFilter;

const Wrapper = styled.div`
    width: 100%;
    height: 48px;
    padding: 12px 8px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;
`;

const Label = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const IconWrapper = styled.div`
    width: 24px;
    height: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ToggleButton = styled.button`
    width: 44px;
    height: 24px;
    background-color: ${(props: ToggleButtonProps) => props.bgColor};
    border-radius: 16px;
    display: flex;
    justify-content: ${(props: ToggleButtonProps) =>
        props.active ? "flex-end" : "flex-start"};
    align-items: center;
    cursor: pointer;
    padding: 4px;

    transitions: all 0.3s ease-in-out;
`;
const Ball = styled.div`
    width: 16px;
    height: 16px;
    background-color: #fefffe;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    }
`;
