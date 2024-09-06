import { useTransactions } from "../../contexts/TransactionsContext";
import { SearchForm } from "./SearchForm";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
    const { transactions } = useTransactions();

    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        ))}
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )
}
