import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const assetPrefix = publicRuntimeConfig.assetPrefix;

const DND_FORMAT = 'tin';

interface Stage3Props {
  onBaseBake: () => void;
}

export default function Stage3({ onBaseBake }: Stage3Props) {
  const [isHover, setIsHover] = useState(false);
  // const [{ isDragging }, drag, dragPreview] = useDrag(
  //   () => ({
  //     type: DND_FORMAT,
  //     collect: (monitor) => ({
  //       isDragging: !!monitor.isDragging(),
  //     }),
  //   })
  // );

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: DND_FORMAT,
  //   drop: () => onBaseBake(),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));

  const {isOver, setNodeRef: setDropNodeRef} = useDroppable({
    id: 'droppable',
  });

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;
  
  useEffect(() => {
    if (isOver) {
      onBaseBake();
    }
  }, [isOver]);

  return (
    <div className="birthday__stage stage3">
      <h1>烘烤蛋糕胚</h1>
      <p>现在要把之前打好的面糊放到烤箱里. 找到下面那个模具了吗，长按把它拖到上面。</p>
      <div className={isOver ? 'oven hover' : 'oven'}>
        <Image
          width={290}
          height={282}
          draggable={false}
          src={`${assetPrefix}/oven.png`}
          alt="Oven"
        />
        <div className="over-real" ref={setDropNodeRef}></div>
      </div>
      <div className="tin" ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <Image
          width={90}
          height={70}
          draggable={false}
          {...style}
          src={`${assetPrefix}/tin.png`}
          alt="Tin"
        />
      </div>
    </div>
  );
}