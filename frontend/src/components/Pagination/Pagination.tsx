import { SalePage } from '../../types/SalePage';

interface PaginationProps {
  page: SalePage;
  onPageChange: (index: number) => void;
}

const Pagination = (props: PaginationProps): JSX.Element => {
  const { page, onPageChange } = props;

  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first ? 'disabled' : ''}`}>
            <button className="page-link" onClick={(): void => { onPageChange(page.number - 1); }}>Anterior</button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
          </li>
          <li className={`page-item ${page.last ? 'disabled' : ''}`}>
            <button className="page-link" onClick={(): void => { onPageChange(page.number + 1); }}>Próxima</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;