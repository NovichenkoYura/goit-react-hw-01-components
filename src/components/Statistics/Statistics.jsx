import PropTypes from "prop-types";
import styles from './Statistics.module.css'

export default function Statistics({ title, stats }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statlist}>
                    {stats.map(el => {
                        return <li key={el.id} className={styles.item}>
                                    <span>{el.label}</span>
                                    <span>{el.percentage}</span>
                                </li>
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
    label: PropTypes.string,
    percentage: PropTypes.number,
    id: PropTypes.string,
};