import ReactPaginate from "react-paginate";
import { Pagination } from "../types/common";

const CustomPagination = ({ pageCount, pageNumber, changePage }: Pagination): JSX.Element => {
    return (
        <>
            <ReactPaginate
                breakLabel=""
                previousLabel={<i className="fa-solid fa-chevron-left"></i>}
                nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
                forcePage={pageNumber}
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default CustomPagination;