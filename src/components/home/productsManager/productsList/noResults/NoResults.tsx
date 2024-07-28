import Image from 'next/image'
import noResults from '@/public/noResults.svg'
import styles from './NoResults.module.scss'
import { getShortText } from '@/utils/getShortText'

interface Props {
  filter: string
  clearFilter: () => void
}

export const NoResults = ({ filter, clearFilter }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={noResults} alt="noResults" />
      <p className={styles.noResults}>
        No results for {'"'}
        {getShortText(filter, 15)}
        {'"'}
      </p>
      <button className={styles.clearFilter} onClick={clearFilter}>
        Clear filter
      </button>
    </div>
  )
}
