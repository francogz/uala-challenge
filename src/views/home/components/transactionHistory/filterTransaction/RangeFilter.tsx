import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Text from "@/components/common/Text";

interface RangeSliderProps {
    min?: number;
    max?: number;
    onChange: (values: { min: number; max: number }) => void;
}

interface FiltersStyleProps {
    minVal?: number;
}

const RangeFilter = ({ min = 0, max = 2000, onChange }: RangeSliderProps) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const rangeRef = useRef<HTMLDivElement>(null);

    // Convertir a porcentaje
    const getPercent = (value: number) =>
        Math.round(((value - min) / (max - min)) * 100);

    // Efecto para actualizar el rango de color entre los dos controles
    useEffect(() => {
        if (rangeRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(maxVal);

            rangeRef.current.style.left = `${minPercent}%`;
            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
        // eslint-disable-next-line
    }, [minVal, maxVal]);

    // Manejar cambio en el control mínimo
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxVal - 1);
        setMinVal(value);
        onChange({ min: value, max: maxVal });
    };

    // Manejar cambio en el control máximo
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minVal + 1);
        setMaxVal(value);
        onChange({ min: minVal, max: value });
    };

    return (
        <Wrapper>
            <SliderContainer>
                <InputWrapper>
                    <RangeInput
                        type="range"
                        min={min}
                        max={max}
                        value={minVal}
                        onChange={handleMinChange}
                        style={{ zIndex: minVal > max - 100 ? 5 : 4 }}
                        minVal={minVal}
                    />
                    <RangeInput
                        type="range"
                        min={min}
                        max={max}
                        value={maxVal}
                        onChange={handleMaxChange}
                        style={{ zIndex: maxVal < min + 100 ? 5 : 4 }}
                    />
                </InputWrapper>

                <SliderTrack>
                    <SliderRange ref={rangeRef} />
                </SliderTrack>
            </SliderContainer>
            <CardsContainer>
                <Card>
                    <Text
                        fs="10px"
                        fw="100"
                        color="#606882"
                        title="Monto mínimo"
                    />
                    <Text
                        fs="14px"
                        fw="400"
                        color="#313643"
                        title={`$${minVal}`}
                    />
                </Card>
                <Card>
                    <Text
                        fs="10px"
                        fw="100"
                        color="#606882"
                        title="Monto máximo"
                    />
                    <Text
                        fs="14px"
                        fw="400"
                        color="#313643"
                        title={`$${maxVal}`}
                    />
                </Card>
            </CardsContainer>
        </Wrapper>
    );
};

export default RangeFilter;

const Wrapper = styled.div`
    width: 100%;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
`;

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 30px 0;
`;

const InputWrapper = styled.div`
    position: relative;
`;

const RangeInput = styled.input<FiltersStyleProps>`
    position: absolute;
    width: 100%;
    height: 2px;
    -webkit-appearance: none;
    background: none;
    pointer-events: none;

    &::-webkit-slider-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #022a9a;
        pointer-events: auto;
        -webkit-appearance: none;
        cursor: pointer;
        position: relative;
    }

    &::-moz-range-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #022a9a;
        pointer-events: auto;
        cursor: pointer;
    }
`;

const SliderTrack = styled.div`
    position: absolute;
    width: 100%;
    height: 4px;
    background: #e0edff;
    border-radius: 5px;
    top: 50%;
    transform: translateY(-50%);
`;

const SliderRange = styled.div`
    position: absolute;
    height: 5px;
    background: #022a9a;
    border-radius: 5px;
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Card = styled.div`
    width: 97px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4px 12px;
    border: solid 1px #022a9a;
    border-radius: 8px;
`;
