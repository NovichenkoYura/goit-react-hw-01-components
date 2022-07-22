import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    const { id, type, amount, currency } = item;
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>                                    
                            )
                        })}                
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
  id: PropTypes.string,
  type: PropTypes.string,  
amount: PropTypes.string,
  currency: PropTypes.string,
}
