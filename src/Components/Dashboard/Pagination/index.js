import React, { useState } from "react";
import Pagination from '@mui/material/Pagination';
import "./style.css";

// {page, pageHandleChange}
export default function PaginationComponent({page, handlePageChange}){
   
    return(
        <div className="pagination-components">
            <Pagination count={10} 
            page={page} 
            onChange={(event, value) => handlePageChange(event, value)}
            sx={{
                color: "var(--white) !important",
                "& .Mui-selected": {
                backgroundColor: "var(--blue) !important",
                color: "#fff !important",
                borderColor: "var(--blue) !important",
                },
                "& .MuiPaginationItem-ellipsis": {
                    border: "1px solid var(--grey) !important",
                },
                "& .MuiPaginationItem-text": {
                color: "var(--white)",
                border: "1px solid var(--grey)",      
                }
            }}
            />
        </div>
    )
}

 


