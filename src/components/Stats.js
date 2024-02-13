export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Add products that you are planning to buy</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numLeft = items.length - numPacked;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <div>
        {percentage === 100 ? (
          `That's all, you're ready to go!`
        ) : (
          <ul className="stats-to-buy">
            <li>Products: {numItems}</li>
            <li>Purchased: {numPacked}</li>
            <li>To buy: {numLeft}</li>
            <li>Progress: {percentage}%</li>
          </ul>
        )}
      </div>
    </footer>
  );
}
