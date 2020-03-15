export interface TransactionData {
    url: string,
    customer?: Customer;
    transactionId?: string;
    role?: string;
}

export interface Customer {
    id?: string;
    name?: string;
    address?: string;
}