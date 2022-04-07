import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(state =>
          <li className={s.item} style={{backgroundColor: getRandomHexColor()}} key={state.id}>
            <span className={s.label}>{state.label}</span>
            <span className={s.percentage}>{state.percentage}%</span>
          </li>)
        }
      </ul>
    </section>
  )
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
}