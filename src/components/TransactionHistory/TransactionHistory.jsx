import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.header}>
                <tr>
                <th className={styles.column}>Type</th>
                <th className={styles.column}>Amount</th>
                <th className={styles.column}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    const { id, type, amount, currency } = item;
                    return (
                        <tr className={styles.row} key={id}>
                            <td className={styles.column}>{type}</td>
                            <td className={styles.column}>{amount}</td>
                            <td className={styles.column}>{currency}</td>
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
