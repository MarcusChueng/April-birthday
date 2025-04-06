import Image from "next/image"
import styles from './index.module.scss'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const assetPrefix = publicRuntimeConfig.assetPrefix;


interface ModalProps {
  imgUrl: string
  title: string
  content: string
  btnText: string

  onConfirm: () => void
}
export default function Modal({ imgUrl, title, content, btnText, onConfirm}: ModalProps) {
  return <div className={styles['ls-modal']}>
    <div className="ls-modal__image">
      <Image width={100} height={102}
       src={`${assetPrefix}/${imgUrl}`} alt={title} />
    </div>
    <div className="ls-modal__content">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={onConfirm}>{btnText}</button>
    </div>
  </div>
}