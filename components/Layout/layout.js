import Head from "next/head";
import Grid from "./Grid";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Yelp Search</title>
      </Head>
      <Grid className="this_is-the-grid">
        <Navbar />
        {children}
      </Grid>
    </div>
  );
};

export default Layout;
