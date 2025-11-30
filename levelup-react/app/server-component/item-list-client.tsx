"use client";

import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state";
import React, { useState } from "react";

function ItemList({ initialItems }: { initialItems: string[] }) {
  const [items, setItems] = useState(initialItems);
  const [inputValue, setInputValue] = React.useState<string>("");

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <ul id="itemList" className="listdisc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="항목 추가"
      />
      <button onClick={addItem}>항목 추가</button>
    </div>
  );
}

export default ItemList;
