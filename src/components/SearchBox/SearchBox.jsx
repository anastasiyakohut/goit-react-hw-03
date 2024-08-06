import css from './SearchBox.module.css';
import { useId } from 'react';

export default function SearchBox({ filter, onFilterChange }) {
  const id = useId();

  return (
    <div className={css.container}>
      <label htmlFor={`name-${id}`}>Find contacts by name</label>
      <input
        name="search"
        type="text"
        id={`name-${id}`}
        value={filter}
        onChange={onFilterChange}
        className={css.input}
      />
    </div>
  );
}
