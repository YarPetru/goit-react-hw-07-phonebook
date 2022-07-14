import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={s.section} title={title}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
