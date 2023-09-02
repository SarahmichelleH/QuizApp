import React from 'react';
import styles from './appritem.module.css';

const ApprItem = ({ mentor, handleApprove, handleDiscard, approved, discarded }) => {
  const handleApproveClick = () => {
    handleApprove(mentor.id);
  };

  const handleDiscardClick = () => {
    handleDiscard(mentor.id);
  };

  return (
    <div className={styles.container}>
      <p className={styles.mentorName}>{mentor.name}</p>
      {approved ? (
        <div className={styles.statusContainer}>
          <span role="img" aria-label="Tick" className={styles.icon}>
            &#10004;
          </span>
          <button disabled className={styles.statusButton}>
            Approved
          </button>
        </div>
      ) : discarded ? (
        <div className={styles.statusContainer}>
          <span role="img" aria-label="Cross" className={styles.icon}>
            &#10006;
          </span>
          <button disabled className={styles.statusButton}>
            Discarded
          </button>
        </div>
      ) : (
        <div className={styles.actionsContainer}>
          <button onClick={handleApproveClick} className={styles.actionButton}>
            <span role="img" aria-label="Tick" className={styles.icon}>
              &#10004;
            </span>
          </button>
          <button onClick={handleDiscardClick} className={styles.actionButton}>
            <span role="img" aria-label="Cross" className={styles.icon}>
              &#10006;
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ApprItem;
