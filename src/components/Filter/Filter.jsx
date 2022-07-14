import { nanoid } from 'nanoid';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onInputChange, filter }) => {
  const inputFilterId = nanoid();

  return (
    <div className={s.filterWrapper}>
      <label className={s.label} htmlFor={inputFilterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        id={inputFilterId}
        value={filter}
        type="text"
        name="filter"
        title="Find contacts by name"
        required
        onChange={onInputChange}
      />
    </div>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
