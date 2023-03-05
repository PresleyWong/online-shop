import ReactPaginate from "react-paginate";

const Paginate = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="<"
      pageClassName="page-link"
      pageLinkClassName="page-link waves-effect"
      previousClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-link"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-link"
      breakLinkClassName="page-link"
      containerClassName="flex justify-center"
      activeClassName="page-link-active"
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
