import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./adminEditProduct";
import displayPKRCurrency from "../../helpers/displayCurrency";

const adminProductCard = ({ data, fetchData }) => {
  const [editProduct, setEditProduct] = useState(false);
  return (
    <div className="bg-white p-4 rounded ">
      <div className="w-40 h-[100%] flex flex-col justify-between">
        <div className="h-34 flex justify-center items-center">
          <img
            src={data?.productImage[0]}
            alt=""
            className="mx-auto object-fill h-full"
          />
        </div>
        <h1 className="text-ellipsis line-clamp-2">{data?.productName}</h1>

        <p className="font-semibold">{displayPKRCurrency(data?.price)}</p>

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
