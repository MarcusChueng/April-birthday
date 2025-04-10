import Image from 'next/image'
import LSButton from "@/components/common/LSButton"
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const assetPrefix = publicRuntimeConfig.assetPrefix;


interface Stage1Props {
  onStart: () => void
}
export default function Stage1({ onStart } : Stage1Props) {
  return <div className="birthday__stage stage1">
    <Image width={300} height={370}
      src={`${assetPrefix}/cake.png`} alt="Birth Cake" />
    {/* <LSButton className="start" onClick={onStart}>Let’s make a cake!</LSButton> */}
    <LSButton className="start" onClick={onStart}>璇璇姐，生日快乐！</LSButton>
  </div>
}