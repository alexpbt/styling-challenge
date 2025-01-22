import React from 'react';
import styles from './FirmFactCard.module.scss';
import Button from '../Button/Button';

const FirmFactCard = ({ variant = 'default', button = 'default', height = 'half', disable, buttonText, children }) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[height]}`}>
        <Button variant={button} disabled={disable} children={buttonText} />
    </div>
  );
};

export default FirmFactCard;
