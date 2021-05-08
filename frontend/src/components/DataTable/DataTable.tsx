import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatLocalDate } from 'utils/formatLocalDate';
import { BASE_URL } from 'utils/requests';
import { SalePage } from '../../types/SalePage';

const DataTable = (): JSX.Element => {
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect((): void => {
    axios.get(`${BASE_URL}/sales?page=1&size=20&sort=date,desc`)
      .then((response): void => {
        setPage(response.data);
      })
      .catch((error): void => {
        console.log(error);
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            (page) && page.content?.map((item): JSX.Element => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, 'dd/MM/yyyy')}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount?.toFixed(2)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

DataTable.displayName = 'DataTable';

export default DataTable;