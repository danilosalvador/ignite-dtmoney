import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface TransactionContextType {
    transactions: Transaction[]
}

interface TransactionProviderProps {
    children: ReactNode
}

const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{
            transactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}