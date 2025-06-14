"use client";

import { TripItem } from "@/lib/interfaces/trip-planner";
import { useDraggable } from "@dnd-kit/core";

interface DraggableItemProps {
  id: string;
  item: TripItem;
  children: React.ReactNode;
}

export default function DraggableItem({
  id,
  item,
  children,
}: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      data: {
        item,
      },
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`${isDragging ? "opacity-50 z-50" : ""} transition-opacity`}
    >
      {children}
    </div>
  );
}
