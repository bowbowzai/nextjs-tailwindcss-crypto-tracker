import Head from "next/head";
export default function detail({ data }) {
  return (
    <div className="container mx-auto border-1 border-transparent lg:border-green-300 p-10 rounded">
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
          <img src={data.image.large} alt="" className="w-auto" />
        </div>
        <h1 className="mt-10 text-3xl lg:text-5xl text-white font-bold">
          {data.name}
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 grid-rows-auto mt-10">
          {Object.keys(data.market_data.current_price).map((value) => {
            return (
              <div
                key={value.name}
                className="px-5 py-3 text-white text-lg rounded border-2 border-green-300 border-collapse m-1"
              >
                <span>{value}</span>:{" "}
                <span>
                  ${data.market_data.current_price[value].toLocaleString()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  return {
    props: { data: data },
  };
}
