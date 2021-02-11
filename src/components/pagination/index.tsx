import React from "react";
import Pagination from '@material-ui/lab/Pagination';
import PaginationProps from "./pagination.props";

export default function UxPaginate(props: PaginationProps) {
    const {data, paginationSize, className, handleChange, page} = props;
    let totalrows = Math.floor(data.size/paginationSize);
      if ((data.size % paginationSize) !== 0) {
        totalrows++;
      }
      return (
        <div style={{display: "inline"}}> 
          {data.size > paginationSize ? <div className={className} style={{float: "right", marginRight: 30}}>
          <Pagination page={page} onChange={handleChange} count={totalrows} variant="outlined" shape="rounded" />
        </div> : null}
        {data.values.length > 0 ? <span style={{float: "right", fontFamily: "Roboto", fontWeight: 400, fontSize: "14px", marginTop: 5, marginRight: data.size <=50 ? 43 : 20}}> Viewing Records {((data.page - 1)*paginationSize)+1} - {((data.page - 1)*paginationSize)+data.values.length} of {data.size}</span> : null }
        </div>
      );
}