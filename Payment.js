import styles from "./Payment.module.css";
function Payment(){
    return(
        <>
        
<div className={styles.container}>
  <div className={styles.card}>
    <button className={styles.proceed}><svg className={styles.sendicon} width="24" height="24" viewBox="0 0 24 24">
  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
</svg></button>
   <img src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png" className={styles.logocard}/>
 <label>Card number:</label>
 <input id="user" type="text" maxLength={16}  className={styles.cardnumber}  placeholder="1234 5678 9101 1121" />
 <label>Name:</label>
 <input className={styles.iname} placeholder="Edgar Pérez" />
 <label className={styles.toleft}>CCV:</label>
 <input className={styles.ccv} maxLength={3} placeholder="321" />
  </div>
  <div className={styles.receipt}>
    <div className={styles.col}><p>Cost:</p>
    <h2 className={styles.cost}>$38.97</h2><br />
    <p>Name:</p>
    <h2 className={styles.seller}>abc</h2>
    </div>
    <div className={styles.col}>
      <p>Bought Items:</p>
      <h3 className={styles.boughtitems}>3  Courses</h3>
      {/* <p className= {styles.description}>Gaming mouse with shiny lights</p>
      <p className={styles.price}>$200 (50% discount)</p><br />
      <h3 className={styles.boughtitems}>Gaming keyboard</h3>
      <p className={styles.description}>Look mommmy, it has colors!</p> */}
      <p className={styles.price}>$200 (50% discount)</p><br />
    </div>
    <p className={styles.comprobe}>This information will be sended to your email</p>
  </div>
</div>

        </>
    )
}

export default Payment;