import React, { useState } from 'react';
import styles from './FirmFacts.module.scss';
import FirmFactCard from '../FirmFactCard/FirmFactCard';

const FirmFacts = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(true);


  const handleClose = () => {
    setIsVisible(false); // Hide the container
  };

  if(!isVisible) return null;

  return (
    <div className={styles.container}>
      <span className={styles.close} onClick={handleClose}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Close" fill-rule="evenodd" clip-rule="evenodd" d="M1.0808 0L0 1.08227L20.9192 22.0299L0.0597062 42.9177L1.14051 44L22 23.1122L42.8595 44L43.9403 42.9177L23.0808 22.0299L44 1.08227L42.9192 0L22 20.9476L1.0808 0Z" fill="white"/>
        </svg></span>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.grid}>
        <FirmFactCard height="full" button="icon" buttonText="This is a two line button
that terminates with...">Default FirmFactCard</FirmFactCard>
        <FirmFactCard button="icon" buttonText="This is a two line button
that terminates with...">Default FirmFactCard</FirmFactCard>
        <FirmFactCard buttonText="This is a one line button">Default FirmFactCard</FirmFactCard>
        <FirmFactCard button="icon" buttonText="This is a two line button
that terminates with...">Default FirmFactCard</FirmFactCard>
        <FirmFactCard button="icon" buttonText="This is a two line button
that terminates with..." variant="border">Border FirmFactCard</FirmFactCard>
        <FirmFactCard button="icon" buttonText="This is a two line button
that terminates with..." variant="border" disable={true}>Border FirmFactCard</FirmFactCard>
        <FirmFactCard button="icon" buttonText="This is a two line button
that terminates with..." variant="border">Border FirmFactCard</FirmFactCard>
      </div>
    </div>
  );
};

export default FirmFacts;
