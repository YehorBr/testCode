import { useState, useRef } from "react";

const gridSize = 60; // розмір клітинки

export const RoomPlanner = () => {
  const [items, setItems] = useState([
    { id: 1, x: 0, y: 0, label: "🛏️" },
    { id: 2, x: 2, y: 1, label: "🪑" },
  ]);

  const dragItem = useRef(null);

  const handleMouseDown = (e, id) => {
    dragItem.current = { id, offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const { id, offsetX, offsetY } = dragItem.current;
    const container = document.getElementById("grid");

    const rect = container.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left - offsetX) / gridSize);
    const y = Math.floor((e.clientY - rect.top - offsetY) / gridSize);

    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, x: Math.max(0, Math.min(x, 5)), y: Math.max(0, Math.min(y, 5)) } : item
      )
    );
  };

  const handleMouseUp = () => {
    dragItem.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      id="grid"
      style={{
        position: "relative",
        width: gridSize * 6,
        height: gridSize * 6,
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        border: "2px solid #ccc",
        background: "#f9f9f9",
      }}
    >
      {/* Сітка (для візуального поділу) */}
      {[...Array(36)].map((_, i) => (
        <div
          key={i}
          style={{
            border: "1px dashed #ddd",
            boxSizing: "border-box",
          }}
        />
      ))}

      {/* Меблі */}
      {items.map((item) => (
        <div
          key={item.id}
          onMouseDown={(e) => handleMouseDown(e, item.id)}
          style={{
            position: "absolute",
            left: item.x * gridSize,
            top: item.y * gridSize,
            width: gridSize,
            height: gridSize,
            background: "#fff8",
            border: "1px solid #999",
            cursor: "grab",
            fontSize: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}