import { TbDotsVertical } from 'react-icons/tb'
import styles from './ActionsMobileMenu.module.scss'
import { useRef, useState } from 'react'
import { MdOutlineShare } from 'react-icons/md'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { actionButtonsProps } from '@/types/actionButtons'
import { useOutsideClick } from '@/hooks'

export const ActionsMobileMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

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

  const closeMenu = () => {
    setShowMenu(false)
  }

  useOutsideClick(menuRef, closeMenu)

  return (
    <div className={styles.wrapper}>
      <TbDotsVertical className={styles.toggleMenuButton} onClick={() => setShowMenu(true)} />
      {showMenu && (
        <div className={styles.menuContainer} ref={menuRef}>
          {actionButtons.map(button => (
            <button className={styles.option} onClick={closeMenu}>
              {button.icon}
              <span className={styles.text}>{button.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
