import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import productCategory from "../../helpers/productCategory";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../../helpers/uploadImage";
import DisplayImage from "./displayImage";

const uploadproduct = ({ onClose }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    selling: "",
  });
  const [openFullScreenImage, setopenFullScreenImage] = useState(false);
  const [fullScreenImage, setfullScreenImage] = useState("");

  const handleOnChange = (e) => {};

  const handleUploadProductImg = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloudinary.url],
      };
    });
  };

  return (
    <div className="fixed w-full h-full bg-slate-200 bg-opacity-35  top-0 bottom-0 right-0 left-0 flex justify-center items-center">
      <div className="bg-white p-4 pb-14 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-2">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div
            className="text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>

        <form className="grid p-4 gap-2 overflow-y-auto h-full pb-5">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter Product Name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="p-1 bg-slate-100 border rounded"
          />

          <label htmlFor="brandName" className="mt-3">
            Brand Name:
          </label>
          <input
            type="text"
            id="brandName:"
            placeholder="Enter Brand"
            name="brandName"
            value={data.brandName}
            onChange={handleOnChange}
            className="p-1 bg-slate-100 border rounded"
          />

          <label htmlFor="category" className="mt-3">
            Category:
          </label>
          <select
            value={data.category}
            className="p-1 bg-slate-100 border rounded"
          >
            {productCategory.map((el, index) => {
              return (
                <option key={el.value + index} value={el.value}>
                  {el.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="productImage" className="mt-3">
            Product Image
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Product Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  onChange={handleUploadProductImg}
                />
              </div>
            </div>
          </label>
          <div className="flex items-center gap-2">
            {data?.productImage[0] ? (
              data.productImage.map((el) => {
                return (
                  <div className="w-20 h-20 cursor-pointer">
                    <img
                      src={el}
                      alt={el}
                      onClick={() => {
                        setopenFullScreenImage(true);
                        setfullScreenImage(el);
                      }}
                      className="w-full h-full object-cover bg-slate-100 border "
                    />
                  </div>
                );
              })
            ) : (
              <p className="text-red-600 text-xs">
                *Please Upload Product Image
              </p>
            )}
          </div>

          <button className="px-3 py-2 bg-red-600 text-white hover:bg-red-700">
            Upload Product
          </button>
        </form>
      </div>

      {/* DISPLAY IMAGE ON FULL SIZE */}
      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setopenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
};

export default uploadproduct;
