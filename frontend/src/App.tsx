import NavBar from './components/NavBar/NavBar';
import DataTable from "components/DataTable/DataTable";
import Footer from "components/Footer/Footer";

const App = (): JSX.Element => (
  <>
    <NavBar />
    <DataTable />
    <Footer />
  </>
);

App.displayName = 'App';

export default App;
