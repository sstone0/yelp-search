import Head from "next/head";
import BusinessList from "../components/businesslist";
import SearchBar from "../components/searchBar";
import Layout from "../components/Layout/layout";

export default function Home(props) {
  return (
    <Layout>
      <SearchBar />
      <BusinessList />
    </Layout>
  );
}
