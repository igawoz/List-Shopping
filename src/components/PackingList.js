import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  if (sortBy === "quantityA")
    sortedItems = items.slice().sort((a, b) => {
      return a.quantity - b.quantity;
    });
  if (sortBy === "quantityD")
    sortedItems = items.slice().sort((a, b) => {
      return b.quantity - a.quantity;
    });

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id} />
        ))}
      </ul>

      <div className="actions">
        Sort by
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">input order</option>
          <option value="description">description</option>
          <option value="packed">packed status</option>
          <option value="quantityA">quantity ⯅</option>
          <option value="quantityD">quantity ⯆</option>
        </select>
      </div>
      <div>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
