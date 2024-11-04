import React, { useState } from "react";
import Sprites from "./Sprites";

export default function Sidebar() {
  const [repeatCount, setRepeatCount] = useState(10);
  const [movesCount, setMovesCount] = useState(10);
  const [gotoCount, setGotoCount] = useState({ x: 0, y: 0 });
  const [rotationCount, setRotationCount] = useState(15);

  const handleDragStart = (event) => {
    let elementID = event.currentTarget.id;

    event.dataTransfer.setData("elementID", elementID);
    event.dataTransfer.effectAllowed = "copy";

    switch (elementID) {
      case "1":
        event.dataTransfer.setData("value", movesCount);
        break;
      case "2":
        event.dataTransfer.setData("value", rotationCount);
        break;
      case "3":
        event.dataTransfer.setData("value", JSON.stringify(gotoCount));
        break;
      case "4":
        event.dataTransfer.setData("value", repeatCount);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-60 bg-sidebarColour flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Motion"} </div>
      <div
        id={1}
        draggable
        onDragStart={handleDragStart}
        className="flex gap-2 flex-row flex-wrap rounded bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Move"}
        <input
          type="number"
          className="block text-black w-12 rounded-sm"
          id="movescount"
          defaultValue={movesCount}
          onChange={(e) => setMovesCount(e.target.value)}
        />
        {"steps"}
      </div>
      <div
        id={2}
        draggable
        onDragStart={handleDragStart}
        className="flex gap-2 flex-row flex-wrap rounded bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}

        <input
          type="number"
          className="block text-black w-12 rounded-sm"
          id="turncount"
          min={1}
          max={360}
          defaultValue={rotationCount}
          onChange={(e) => setRotationCount(e.target.value)}
        />
        {"degrees"}
      </div>
      <div
        id={3}
        draggable
        onDragStart={handleDragStart}
        className="flex gap-2 flex-row flex-wrap rounded bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Goto "}

        <div className="flex gap-2">
          {"X"}{" "}
          <input
            type="number"
            className="block text-black w-12 rounded-sm"
            id="xcount"
            defaultValue={gotoCount.x}
            onChange={(e) =>
              setGotoCount((prev) => ({ ...prev, x: e.target.value }))
            }
          />
        </div>
        <div className="flex gap-2">
          {"Y"}{" "}
          <input
            type="number"
            className="block text-black w-12 rounded-sm"
            id="ycount"
            defaultValue={gotoCount.y}
            onChange={(e) =>
              setGotoCount((prev) => ({ ...prev, y: e.target.value }))
            }
          />
        </div>
      </div>
      <div
        id={4}
        draggable
        onDragStart={handleDragStart}
        className="flex gap-2 flex-row flex-wrap rounded bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Repeat "}

        <input
          type="number"
          className="block text-black w-12 rounded-sm"
          id="repeatcount"
          defaultValue={repeatCount}
          onChange={(e) => setRepeatCount(e.target.value)}
        />
        {"times"}
      </div>

      <Sprites />
    </div>
  );
}
