import NavBar from './components/NavBar/NavBar';
import DataTable from "components/DataTable/DataTable";
import Footer from "components/Footer/Footer";
import BarChart from 'components/BarChart/BarChart';
import DonutChart from './components/DonutChart/DonutChart';

const App = (): JSX.Element => (
  <>
    <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Taxa de vendas</h2>
        </div>
        <DataTable />
      </div>
    <Footer />
  </>
);

App.displayName = 'App';

export default App;
