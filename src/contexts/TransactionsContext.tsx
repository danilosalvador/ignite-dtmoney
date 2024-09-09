import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

//type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // OR...
type TransactionInput = Pick<Transaction, 'description' | 'price' | 'type' | 'category'>

interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: TransactionInput) => Promise<void>
}

interface TransactionProviderProps {
    children: ReactNode
}


export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    async function fetchTransactions(query?: string) {
        const { data } = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setTransactions(data)
    }

    async function createTransaction({ description, price, category, type }: TransactionInput) {
        const { data } = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        })

        setTransactions(prev => [data, ...prev])
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions,
            createTransaction,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}
