import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from 'axios';
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState([]);
  // const [data, setData] = useState([]);

  // useEffect(()=>{
  //   axios.get("https://timbu-get-all-products.reavdev.workers.dev/products/?organization_id=f01ee1b13c65465997557d31e74b22ca&reverse_sort=false&page=1&size=12&Appid=DM3HJIFPM1GNJ07&Apikey=54e0da3ed447454d9d2a03899683243520240712125755954456")
  //   .then(response=>{
  //     setData(response.data.items)
  //   })
  //   .catch(error=>{
  //     console.error(error)
  //   })
  // }, [page])

  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex justify-between items-center text-xs">
        <button>Go to Page 1</button>

        <div className=" flex gap-2 items-center">
          {/* previous page */}
          <FontAwesomeIcon
            icon={faArrowLeft}
            className=" px-[2rem] py-[0.5rem] border rounded-lg border-black"
            onClick={() => setPage(page > 1 ? page - 1 : 1)}
          />

          {/* next page */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className=" px-[2rem] py-[0.5rem] border rounded-lg border-black"
            onClick={() => setPage(page + 1)}
          />
        </div>

        <div className=" flex items-center gap-1">
          Page
          <input
            type="text"
            className=" w-[1.5rem] focus:outline-none px-[1.5rem] py-[0.25rem] border rounded-md border-black placeholder:text-neutral"
            placeholder="20"
          />
          of 100
        </div>
      </div>

      <div>
        <p className=" text-xs text-neutral text-center">
          Can’t find what you are looking for? Use our filter option
        </p>
      </div>
    </div>
  );
};

export default Pagination;
