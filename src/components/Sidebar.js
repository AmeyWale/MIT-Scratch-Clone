import React from "react";
import Icon from "./Icon";
import Sprites from "./Sprites";

export default function Sidebar() {

  const handleDragStart = (event) => {
    event.dataTransfer.setData("elementID", event.currentTarget.id)
  }

  return (
    <div className="w-60 bg-sidebarColour flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Motion"} </div>
      <div id={3} draggable onDragStart={handleDragStart} className="flex flex-row flex-wrap rounded bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div id={4} draggable onDragStart={handleDragStart} className="flex flex-row flex-wrap rounded bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div id={5} draggable onDragStart={handleDragStart} className="flex flex-row flex-wrap rounded bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div id={6} draggable onDragStart={handleDragStart} className="flex flex-row flex-wrap rounded bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Repeat "}
        <Icon name="circle" size={15} className="text-white mx-2" />
        {"forever"}
      </div>

      <Sprites/>
    </div>
  );
}
