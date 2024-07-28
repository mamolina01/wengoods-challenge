'use client'
import { Row } from '@/types/products'
import styles from './ProductItem.module.scss'
import Image from 'next/image'
import notFound from '@/public/not-found.png'
import noAvailable from '@/public/noAvailable.png'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { MdOutlineShare } from 'react-icons/md'
import { actionButtonsProps } from '@/types/actionButtons'
import { ActionsMobileMenu } from './actionsMobileMenu/ActionsMobileMenu'
import { getShortText } from '@/utils/getShortText'
import { useState } from 'react'

export const ProductItem = ({ product }: { product: Row }) => {
  const media = {
    src: product.media.images[0]?.url ? product.media.images[0].url : notFound,
    alt: product.media.images[0]?.key ? product.media.images[0].key : `${product.title}-notFound`
  }
  const [imgSrc, setImgSrc] = useState(media.src)

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

  if (product.hidden) return

  return (
    <div className={`${styles.container}`}>
      <ActionsMobileMenu />
      <div className={styles.image}>
        <Image src={imgSrc} alt={media.alt} onError={() => setImgSrc(noAvailable)} fill />
      </div>
      <div className={`${styles.columnContainer} ${styles.titleContainer}`}>
        <p>{product.title}</p>
        <p className={styles.description}>
          {product.description ? getShortText(product.description, 100) : 'No description'}
        </p>
      </div>
      <div className={`${styles.columnContainer} ${styles.detailsContainer}`}>
        <span className={styles.views}>{product.views} views</span>
        <span>{product.price.toFixed(0)} points</span>
        <span className={styles.stock}>{product.stock}u.</span>
      </div>
      <div className={`${styles.columnContainer} ${styles.actionButtonsContainer}`}>
        {actionButtons.map(button => (
          <div className={styles.actionButton} key={button.text}>
            <span className={styles.text}>{button.text}</span>
            {button.icon}
          </div>
        ))}
      </div>
    </div>
  )
}
