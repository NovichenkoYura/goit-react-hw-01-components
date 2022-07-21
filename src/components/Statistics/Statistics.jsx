import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

  <ul class="stat-list">
                {stats.map(el => {
                    return <li key={el.id}>
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