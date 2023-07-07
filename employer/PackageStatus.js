import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { getAllPackagesAPI } from "../../../api/authService";
const PackageStatus = () => {
  // API
  const [packagesTableData, setPackagesTableData] = useState([]);

  const getPackages = async () => {
    try {
      const { data, status, message } = await getAllPackagesAPI();
      if (status) {
        setPackagesTableData(data);
        console.log("packagesData", data);
        // toast(message);
      } else {
        toast(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackages();
  }, []);

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <div className="flex space-x-2 items-center pb-6 lg:px-0 px-5 ">
          {" "}
          <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
          <p className="text-secondary font-s-medium text-base">
            {" "}
            Package Status{" "}
          </p>{" "}
        </div>
        <div className="bg-white rounded-md ">
          <div className="flex items-center space-x-2  px-10 py-4 ">
            <img
              alt="password"
              src="../assets/images/password-code.png"
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-s-medium">View Packages Status</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non quam commodo, dictum justo a, varius nisl.
              </p>
            </div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="pt-5 ">
            <div className="overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 pl-20">
                <thead className=" text-gray-700 uppercase bg-gray-50   ">
                  <tr className=" text-sm font-s-medium ">
                    <th className="py-6 lg:pl-6 px-5 lg:px-0">Package Name</th>
                    <th className="px-5 lg:px-0"> Transaction ID</th>
                    <th className="px-5 lg:px-0">Status</th>
                    <th className="px-5 lg:px-0">Expired </th>
                    <th className="px-5 lg:px-0">Amount</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody className="">
                  {packagesTableData.map((item) => (
                    <tr
                      key={item.id}
                      className={` border-b ${
                        item.id % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <td className="py-5 lg:px-6 px-5 text-secondary font-s-medium">
                        {item.packageName}
                      </td>
                      <td className="py-3 px-5 lg:px-0">
                        {item.transactionId}{" "}
                      </td>
                      <td
                        className={`{ text-black font-s-medium text-sm px-5 lg:px-0 
                                        ${
                                          item.status === "Active"
                                            ? "text-[#17BB05]"
                                            : item.status === "Expired"
                                            ? "text-[#FF0707]"
                                            : "text-[#EBB400]"
                                        }`}
                      >
                        {item.status}
                      </td>
                      <td className="py-3 px-5 lg:px-0">{item.expired}</td>
                      <td className="py-3  px-5 lg:px-0">{item.amount}</td>
                      <td className="px-5 lg:px-0">
                        <div className="">
                          <FaDownload className="w-4 h-4 mx-auto mt-[0.15rem]  text-secondary" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageStatus;
