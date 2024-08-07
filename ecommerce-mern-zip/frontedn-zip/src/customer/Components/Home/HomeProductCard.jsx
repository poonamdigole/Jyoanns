import React from "react";
import { useNavigate, Link } from "react-router-dom";


const HomeProductCard = ({ product , link }) => {
  const navigate = useNavigate();
  
  return (
    <div
    onClick={() => navigate(`${product.link}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
     <Link to={link}> 
     <div>
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title} {product?.URI}</p>

      </div>
    </div></Link>
    </div>
  );
};

export default HomeProductCard;
