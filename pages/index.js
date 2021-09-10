import Head from "next/head";
import Search from "../components/Search/Search";
import List from "../components/List/List";
import { useState } from "react";

export default function Home(props) {
  // console.log(props.data);
  const [search, setSearch] = useState("");
  const filterCoins = props.data.filter((value) => {
    return value.name.toLowerCase().includes(search.toLowerCase());
  });
  const inputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(filterCoins);
  };
  return (
    <>
      <Head>
        <title>CRYPTO TRACKER</title>
      </Head>
      <Search inputChange={inputChange} />
      <List data={filterCoins} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
