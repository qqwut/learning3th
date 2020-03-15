export interface TransactionData {
    customer?: Customer;
    transactionId?: string;
    role?: string;
}

export interface Customer {
    id?: string;
    name?: string;
    address?: string;
}