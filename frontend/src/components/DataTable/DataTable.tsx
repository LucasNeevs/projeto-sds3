import axios from 'axios';
import Pagination from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { formatLocalDate } from 'utils/formatLocalDate';
import { BASE_URL } from 'utils/requests';
import { SalePage } from '../../types/SalePage';

const DataTable = (): JSX.Element => {
  const [activePage, setActivePage] = useState<number>(0);

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect((): void => {
    axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
      .then((response): void => {
        setPage(response.data);
      })
      .catch((error): void => {
        console.log(error);
      });
  }, [activePage]);

  const changePage = (index: number): void => {
    setActivePage(index);
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Data</th>
              <th style={{ textAlign: 'center' }}>Vendedor</th>
              <th style={{ textAlign: 'center' }}>Clientes visitados</th>
              <th style={{ textAlign: 'center' }}>Negócios fechados</th>
              <th style={{ textAlign: 'center' }}>Valor</th>
            </tr>
          </thead>
          <tbody>
            {
              (page) && page.content?.map((item): JSX.Element => (
                <tr key={item.id}>
                  <td style={{ textAlign: 'center' }}>{formatLocalDate(item.date, 'dd/MM/yyyy')}</td>
                  <td style={{ textAlign: 'center' }}>{item.seller.name}</td>
                  <td style={{ textAlign: 'center' }}>{item.visited}</td>
                  <td style={{ textAlign: 'center' }}>{item.deals}</td>
                  <td style={{ textAlign: 'center' }}>{`R$ ${item.amountDouble?.toFixed(2)}`}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Pagination page={page} onPageChange={changePage} />
    </>
  );
};

DataTable.displayName = 'DataTable';

export default DataTable;