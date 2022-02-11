import Grid from "./Grid";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Grid className='this_is-the-grid'>
        <Navbar />
        {children}
      </Grid>
    </div>
  );
};

export default Layout;
