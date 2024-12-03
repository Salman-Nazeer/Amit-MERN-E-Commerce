import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./adminEditProduct";
import displayPKRCurrency from "../../helpers/displayCurrency";

const adminProductCard = ({ data, fetchData }) => {
  const [editProduct, setEditProduct] = useState(false);
  return (
    <div className="bg-white p-4 rounded">
      <div className="w-40 ">
        <img
          src={data?.productImage[0]}
          alt=""
          width={200}
          height={200}
          className="w-fit mx-auto"
        />
        <h1>{data?.productName}</h1>

        {/* <div className="flex items-center gap-2 font-semibold text-lg">
          <p className="">
            Rs: <span className="line-through text-md text-red-600">{data?.price}</span>
          </p>
          <p className="font-bold text-xl flex items-center">{data?.sellingPrice}</p>
        </div> */}

        <p className="font-semibold">
          {displayPKRCurrency(data?.price)}
        </p>

        <div
          className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full cursor-pointer hover:text-white"
          onClick={() => setEditProduct(true)}
        >
          <MdModeEditOutline />
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default adminProductCard;
