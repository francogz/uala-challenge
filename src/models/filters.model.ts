export interface FiltersState {
    card?: string | null;
    quotes?: number[] | null;
    paymentMethods?: string[] | null;
    [key: string]: unknown;
}
