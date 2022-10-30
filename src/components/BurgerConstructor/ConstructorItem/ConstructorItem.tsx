import { useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import {TIngredient} from '../../../utils/types'

import styles from "./ConstructorItem.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

type TConstructorItemProps = {
  item:TIngredient;
  handleDelete:(id:string|undefined)=>void;
  index:number;
  id:string|undefined;
  moveCard:(dragIndex:number,hoverIndex:number)=>void;
}

export const ConstructorItem = ({
  item,
  handleDelete,
  index,
  id,
  moveCard,
}:TConstructorItemProps) => {
  const ref:any = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "constructorItem",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item:any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset:any = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "constructorItem",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li
      className={styles.item}
      key={item.uid}
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}
    >
      <div className="mr-1">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        type = {undefined}
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => handleDelete(item.uid)}
      />
    </li>
  );
};
