import React, { useEffect, useState } from "react";
// import P1 from "../Assets/Image 1.png";
// import P2 from "../Assets/Image 2.png";
// import P3 from "../Assets/Image 3.png";
// import P4 from "../Assets/Image 4.png";
// import P5 from "../Assets/Image 5.png";
// import P6 from "../Assets/Image 6.png";
// import P7 from "../Assets/Image 7.png";
// import P8 from "../Assets/Image 8.png";
// import P9 from "../Assets/Image 9.png";
// import P10 from "../Assets/Image 10.png";
// import P11 from "../Assets/Image 11.png";
// import P12 from "../Assets/Image 12.png";
import axios from "axios";

const ProductsList = () => {
  // const products = [
  //   {
  //     img: P1,
  //     name: "Unbranded Puffer Jacket High Quality",
  //     price: "$300",
  //   },
  //   {
  //     img: P2,
  //     name: "Unbranded Summer Jacket Hoodie",
  //     price: "$300",
  //   },
  //   {
  //     img: P3,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P4,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P5,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P6,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P7,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P8,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P9,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P10,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P11,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  //   {
  //     img: P12,
  //     name: "Unbranded Turtle-Neck",
  //     price: "$300",
  //   },
  // ];

  // const product = products.map((single) => (
  //   <div className=" w-[32%] rounded-xl overflow-hidden h-auto p-3 border-[0.5px] border-ash text-xs flex flex-col gap-2 lg:w-[48%] sm:w-full">
  //     {/* image */}
  //     <div className=" rounded-lg overflow-hidden sm:w-full">
  //       <img src={single.img} alt={single.name} className="w-full" />
  //     </div>
  //     {/* name and price */}
  //     <div className=" flex justify-between items-center">
  //       <p>{single.name}</p>
  //       <p className=" font-extrabold">{single.price}</p>
  //     </div>
  //     {/* colours */}
  //     <div className=" flex gap-1">
  //       <div className=" w-[1rem] h-[1rem] rounded-full bg-blue border border-ash"></div>
  //       <div className=" w-[1rem] h-[1rem] rounded-full bg-orange border border-ash"></div>
  //       <div className=" w-[1rem] h-[1rem] rounded-full bg-white border border-ash"></div>
  //       <div className=" w-[1rem] h-[1rem] rounded-full bg-grey border border-ash"></div>
  //       <div className=" w-[1rem] h-[1rem] rounded-full bg-ash border border-ash"></div>
  //       <div className=" w-[1rem] h-[1rem] rounded-full bg-black border border-ash"></div>
  //     </div>
  //   </div>
  // ));

  // using api

  // useEffect(() => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://timbu-get-all-products.reavdev.workers.dev/products/?organization_id=f01ee1b13c65465997557d31e74b22ca&reverse_sort=false&page=1&size=12&Appid=DM3HJIFPM1GNJ07&Apikey=54e0da3ed447454d9d2a03899683243520240712125755954456"
      )
      .then((response) => {
        setData(response.data.items);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    const productList = data.map((single) => (
    <div className=" w-[32%] rounded-xl overflow-hidden h-auto p-3 border-[0.5px] border-ash text-xs flex flex-col gap-2 lg:w-[48%] sm:w-full" key={single.key}>
      {/* image */}
      <div className=" rounded-lg overflow-hidden sm:w-full">
        <img src={`https://api.timbu.cloud/images/${single?.photos[0]?.url}`} alt={single.name} className="w-full" />
      </div>
      {/* name and price */}
      <div className=" flex justify-between items-center">
        <p>{single.name}</p>
        <p className=" font-extrabold">{`${single?.current_price[0]?.LRD[0]}`}</p>
      </div>
      {/* colours */}
      <div className=" flex gap-1">
        <div className=" w-[1rem] h-[1rem] rounded-full bg-blue border border-ash"></div>
        <div className=" w-[1rem] h-[1rem] rounded-full bg-orange border border-ash"></div>
        <div className=" w-[1rem] h-[1rem] rounded-full bg-white border border-ash"></div>
        <div className=" w-[1rem] h-[1rem] rounded-full bg-grey border border-ash"></div>
        <div className=" w-[1rem] h-[1rem] rounded-full bg-ash border border-ash"></div>
        <div className=" w-[1rem] h-[1rem] rounded-full bg-black border border-ash"></div>
      </div>
    </div>
  ));

  //   axios.get('https://api.example.com/data')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className=" flex flex-wrap justify-between w-[75%] p-5 gap-4 sm:flex-col sm:w-full">
      {/* {product} */}
      {productList}
    </div>
  );
};

export default ProductsList;
