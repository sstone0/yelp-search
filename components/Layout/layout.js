import Head from "next/head";
import Grid from "./Grid";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Yelp Search</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Readex+Pro:wght@200;400;500;700&family=Roboto:wght@400;700&display=swap');
        </style>
      </Head>
      <Grid className="this_is-the-grid">
        <Navbar />
        {children}
      </Grid>
    </div>
  );
};

export default Layout;
