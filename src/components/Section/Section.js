import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h1 className={styles.section__title}>{title}</h1>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;