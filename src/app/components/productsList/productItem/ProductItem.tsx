'use client'
import { Row } from '@/types/products'
import styles from './ProductItem.module.scss'
import Image from 'next/image'
import notFound from '@/public/not-found.png'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { MdOutlineShare } from 'react-icons/md'

interface actionButtonsProps {
  icon: JSX.Element
  text: string
}

export const ProductItem = ({ product }: { product: Row }) => {
  const media = {
    src: product.media.images[0]?.url ? product.media.images[0].url : notFound,
    alt: product.media.images[0]?.key ? product.media.images[0].key : `${product.title}-notFound`
  }

  const actionButtons: actionButtonsProps[] = [
    {
      icon: <MdOutlineShare />,
      text: 'Share'
    },
    {
      icon: <FaRegEdit />,
      text: 'Edit'
    },
    {
      icon: <FaRegTrashAlt />,
      text: 'Delete'
    }
  ]

  const getShortDescription = (description: string) => {
    if (description.length > 100) {
      return `${description.substring(0, 100).trim()}...`
    }
    return description
  }

  if (product.hidden) return

  return (
    <div className={`${styles.container}`}>
      <div className={styles.image}>
        <Image src={media.src} alt={media.alt} fill />
      </div>
      <div className={`${styles.columnContainer} col-span-2`}>
        <p>{product.title}</p>
        <p className={styles.description}>
          {product.description ? getShortDescription(product.description) : 'No description'}
        </p>
      </div>
      <div className={`${styles.columnContainer} ${styles.center}`}>
        <span className={styles.views}>{product.views} views</span>
        <span>${product.price.toFixed(0)}</span>
        <span className={styles.stock}>{product.stock}u.</span>
      </div>
      <div className={`${styles.columnContainer} ${styles.alignEnd}`}>
        {actionButtons.map(button => (
          <div className={styles.actionButton}>
            {button.icon}
            <span className={styles.text}>{button.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
