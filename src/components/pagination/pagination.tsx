import React from 'react'
import { PaginationContent, PaginationButton, PaginationCurrentPage, PaginationCountPage } from './pagination.styled';

const PaginationComponent = ({
    activePage,
    count,
    rowsPerPage,
    totalPages,
    setActivePage,
    totalItems
}: any) => {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

    return (
        <PaginationContent>
            <PaginationCountPage>
                Register: <>
                    {
                        totalItems < 10
                            ?
                            <>{beginning === end ? end : `${beginning} - ${totalItems}`} of {totalItems}</>
                            :
                            <>{beginning === end ? end : `${beginning} - ${end}`} of {count}</>
                    }
                </>
            </PaginationCountPage>
            <PaginationCurrentPage>
                Page <>
                    {
                        totalItems < 10
                            ?
                            <>1 of 1</>
                            :
                            <>{activePage} of {totalPages}</>
                    }
                </>
            </PaginationCurrentPage>
            <PaginationButton>
                <button
                    disabled={activePage === 1 || totalItems < 10}
                    onClick={() => setActivePage(activePage - 1)}
                >
                    Previous page
                </button>
                <button
                    disabled={activePage === totalPages || totalItems < 10}
                    onClick={() => setActivePage(activePage + 1)}
                >
                    Next page
                </button>
            </PaginationButton>
        </PaginationContent>
    )
}

export default PaginationComponent