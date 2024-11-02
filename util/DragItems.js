const dragItems = [
    {
      id: 1,
      text: "When ",
      color: "bg-yellow-500",
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
      text: "Move ",
      suffix:" steps",
      color: "bg-blue-500",
      
    },
    {
      id: 4,
      type: "rotate", 
      value: 15,
      text: "Turn ",
      color: "bg-blue-500",
      suffix: " degrees",
      
    },
    {
      id: 5,
      type: "goto", 
      Xvalue: 0,
      Yvalue: 0,
      text: "Goto ",
      color: "bg-blue-500"
    },
    {
      id: 6,
      type: "repeat", 
      text: "Repeat ",
      color: "bg-blue-500",
      suffix: " forever",
    },
  ];

export default dragItems;