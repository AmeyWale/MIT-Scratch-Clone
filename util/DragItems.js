const dragItems = [
    {
      id: 1,
      text: "When ",
      color: "bg-yellow-500",
      icon: { name: "flag", color: "text-green-600" },
      suffix: "clicked",
    },
    {
      id: 2,
      text: "When this sprite clicked",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      type: "move", 
      value: 10,
      text: "Move 10 steps",
      color: "bg-blue-500",
      
    },
    {
      id: 4,
      type: "rotate", 
      value: 15,
      text: "Turn ",
      color: "bg-blue-500",
      icon: { name: "undo", color: "text-white" },
      suffix: "15 degrees",
      
    },
    {
      id: 5,
      type: "rotate", 
      value: -15,
      text: "Turn ",
      color: "bg-blue-500",
      icon: { name: "redo", color: "text-white" },
      suffix: "15 degrees",
    },
    {
      id: 6,
      type: "repeat", 
      text: "Repeat ",
      color: "bg-blue-500",
      icon: { name: "circle", color: "text-white" },
      suffix: "forever",
    },
  ];

export default dragItems;