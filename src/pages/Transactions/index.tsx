import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Projeto</td>
                            <td>02/09/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburger</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 59,90
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>02/09/2024</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )
}
