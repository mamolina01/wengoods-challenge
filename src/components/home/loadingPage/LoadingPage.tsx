import styles from './LoadingPage.module.scss'

export const LoadingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner} />
      </div>
      <span className={styles.text}>Loading..</span>
    </div>
  )
}
