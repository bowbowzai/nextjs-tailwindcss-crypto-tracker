import Item from "../Item/Item";
export default function List({ data }) {
  return (
    <ul>
      {data.map((value) => {
        return (
          <Item
            key={value.id}
            id={value.id}
            name={value.name}
            image={value.image}
            price_change_percentage_24h={value.price_change_percentage_24h}
            symbol={value.symbol}
            volume={value.total_volume}
            market_cap={value.market_cap}
            current_price={value.current_price}
          />
        );
      })}
    </ul>
  );
}
