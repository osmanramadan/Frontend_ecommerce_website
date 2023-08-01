import ReactPaginate from 'react-paginate';

const PaginationComponent = ({ pageCount }) => {
  const handlePageClick = (data) => {
    //getPage(data.selected + 1)
  };
  return (
    <ReactPaginate
      pageCount={pageCount}
      containerClassName={'custom-pagination justify-content-center p-3'}
      breakLabel="...."
      previousLabel="السابق"
      nextLabel="التالى"
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      // main buttons
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      // sub-buttons

      previousLinkClassName={'page-link btn-prev'}
      nextLinkClassName={'page-link btn-next'}
      // actions
      activeLinkClassName={'selected'}
      activeClassName={'selected'}
      breakLinkClassName={'page-link'}
      breakClassName={'break'}
    />
  );
};

export default PaginationComponent;
