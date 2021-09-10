import Link from "next/link";
export default function Item({
  id,
  name,
  image,
  price_change_percentage_24h,
  symbol,
  volume,
  market_cap,
  current_price,
}) {
  return (
    <Link href={`/coin/${id}`}>
      <a href="">
        <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-1 text-black gap-x-1 lg:gap-x-10 border-b-1 border-gray-400 items-center text-center lg:text-left text-white py-3 px-2 hover:bg-gray-800">
          <div className="flex justify-start items-center">
            <div className="w-6 h-6 mr-1.5">
              <img src={image} alt="" className="w-full align-middle h-full" />
            </div>
            <h2>{name}</h2>
          </div>
          <p className="hidden lg:block">{symbol}</p>
          <div>${current_price}</div>
          <div className="hidden lg:block">{volume.toLocaleString()}</div>
          {price_change_percentage_24h > 0 ? (
            <div className="text-green-500">
              {price_change_percentage_24h.toFixed(2)}%
            </div>
          ) : (
            <div className="text-red-500">
              {price_change_percentage_24h.toFixed(2)}%
            </div>
          )}
          <div className="hidden lg:block">
            Mkt Cap: ${market_cap.toLocaleString()}
          </div>
        </div>
      </a>
    </Link>
  );
}
