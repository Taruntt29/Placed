import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllPackages } from "../../../api/coachFunctions";
const PackageStatusPage = () => {
  const data = [
    {
      id: "1",
      name: "Gold",
      date: "12 Jan 2023",
      trans_id: "#34568900477",
      status: "Active",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "2",
      name: "Platinum",
      date: "12 Jan 2023",
      trans_id: "#34568900477",
      status: "Expired",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "3",
      name: "Gold",
      date: "12 Jan 2023",
      trans_id: "#34568900477",
      status: "Renew",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "4",
      name: "Silver",
      date: "12 Jan 2023",
      trans_id: "#34568900477",
      status: "Active",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "5",
      name: "Platinum",
      date: "12 Jan 2023",
      trans_id: "#34568900477",
      status: "Active",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "6",
      name: "Gold",
      date: "12 Jan 2023",
      trans_id: "#34568900477",
      status: "Expired",
      expired: "28-11-2022",
      amount: "$33.00",
    },
    {
      id: "7",
      name: "Gold",
      date: "12 Jan 2023",
      trans_id: "#34568900477",
      status: "Renew",
      expired: "28-11-2022",
      amount: "$33.00",
    },
  ];
  const [packageData, setPackageData] = useState();
  const getAllPackageData = async () => {
    const { data, message, status } = await getAllPackages();
    if (status) {
      setPackageData(data);
    } else {
      toast(message);
    }
  };
  useEffect(() => {
    getAllPackageData();
  }, []);
  console.log("packageData", packageData);
  return (
    <div className="bg-inputcolor lg:px-0 px-5">
    <div className="container mx-auto py-20  ">
    <div className="flex items-center mb-4 font-s-medium text-secondary text-lg">
        <Link to="/coach/my-profile">  <BiChevronLeft className="text-3xl" /> </Link>
        Package Status
        </div>
        
        <div className="bg-white rounded-md border">
          <div className="flex items-center space-x-2  lg:px-10 px-4 py-4 ">
            <img
              alt="status"
              src="../assets/images/password-code.png"
              className="w-6 h-6"
            />
            <div className="text-xl font-s-medium">View Packages Status</div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="pt-5 ">
            <div className="overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className=" text-gray-700 uppercase bg-gray-50   ">
                  <tr className=" text-sm font-s-medium mx-10 whitespace-nowrap">
                    <th className="py-6 lg:px-10 px-4 ">Package Name</th>
                    <th className="px-3 "> Transaction ID</th>
                    <th className="px-5 ">Status</th>
                    <th className="px-5 ">Expired </th>
                    <th className="px-5 lg:px-0">Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="">
                  {packageData?.map((item, index) => (
                    <tr
                      key={index}
                      className={` border-b  ${
                        (index + 1) % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <td className="py-5 lg:px-10 px-4 text-secondary font-s-medium">
                        {item.packageName}
                        <br />
                        <p className="text-gray-500">
                          {" "}
                          {item.createdAt.substring(0, 10)}
                        </p>
                      </td>
                      <td className="py-3 px-4">{item.transactionId} </td>
                      <td
                        className={`{ text-black font-s-medium text-sm px-5
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
                      <td className="py-3 px-5 whitespace-nowrap">
                        {item.expired}
                      </td>
                      <td className="py-3  px-5">{item.amount}</td>
                      <td className="px-5">
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

export default PackageStatusPage;
