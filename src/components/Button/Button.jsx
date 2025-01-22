import React from "react";
import styles from './Button.module.scss';
import SearchIcon from '../../../public/search.svg';

const Button = ({ variant = 'default', disabled = false, children }) => {
    return (
      <button
      disabled={`${disabled ? styles.disabled : ''}`} className={`${disabled ? styles.disabled : ''} ${styles.button} ${styles[variant]}`}
      >
        {variant === 'icon' ? <span className={`${styles.button}__icon`}>
          <img src={SearchIcon} alt="Search Icon" />
        </span> : ''}
        {children}
      </button>
    );
  };

  export default Button;