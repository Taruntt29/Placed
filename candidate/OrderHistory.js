import React, { useEffect , useState} from "react";
import { FaDownload } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrderHistory } from "../../../api/authCandidate";
const OrderHistory = () => {
  const data = [
    {
      id: "1",
      name: "Adobe Photoshop",
      medium: "$613",
      status: "Complete",
      duration: "1 Hour",
      price: "$613.00",
    },
    {
      id: "2",
      name: "Adobe Photoshop",
      medium: "$613",
      status: "Cancalled",
      duration: "1 Hour",
      price: "$613.00",
    },
    {
      id: "3",
      name: "Adobe Photoshop",
      medium: "$613",
      status: "Upcoming",
      duration: "1 Hour",
      price: "$613.00",
    },
    {
      id: "4",
      name: "Adobe Photoshop",
      medium: "$613",
      status: "Complete",
      duration: "1 Hour",
      price: "$613.00",
    },
    {
      id: "5",
      name: "Adobe Photoshop",
      medium: "$613",
      status: "Complete",
      duration: "1 Hour",
      price: "$613.00",
    },
    {
      id: "6",
      name: "Adobe Photoshop",
      medium: "$613",
      status: "Cancalled",
      duration: "1 Hour",
      price: "$613.00",
    },
    {
      id: "7",
      name: "Adobe Photoshop",
      medium: "$613",
      status: "Upcoming",
      duration: "1 Hour",
      price: "$613.00",
    },
  ];

  const  { userDetails } = useSelector((state) => state.flightReducer)

  const [resData , setResData] = useState([]);

  const getOrderHistoryOfCandy = async () => {
    try {
      const response = await getOrderHistory(userDetails._id)
      setResData(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOrderHistoryOfCandy()
  } , [])

  return (
    <div className="bg-inputcolor">
      <div className="container mx-auto py-10  ">
        <Link to="/candidate/recommended-coaches">
          <div className="flex space-x-2 items-center pb-6  ">
            {" "}
            <RiArrowLeftSLine className="text-secondary w-5 h-5 " />{" "}
            <p className="text-secondary font-s-medium text-base">
              {" "}
              Order History{" "}
            </p>{" "}
          </div>
        </Link>
        <div className="bg-white rounded-md ">
          <div className="flex items-center space-x-2 justify-between px-5 py-4 ">
            <div className="flex space-x-2">
              {" "}
              <img
                alt="Password"
                src="../assets/images/password-code.png"
                className="w-6 h-6"
              />
              <div className="text-xl font-s-medium">View Order History</div>
            </div>
            <div className="px-4 py-2">
              {" "}
              <select className="bg-primary rounded-md px-5 py-2">
                <option value="1">Sort by Date</option>
                <option value="dummy">dummy</option>
                <option value="dummy">dummy</option>
              </select>
            </div>
          </div>
          <hr className="w-full h-[0.10rem] bg-inputcolor" />
          <div className="pt-5 ">
            <div className="overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 pl-20">
                <thead className=" text-gray-700 uppercase bg-gray-50   ">
                  <tr className=" text-sm font-s-medium ">
                    <th className="py-6 lg:pl-6 px-5 lg:px-0">Services Name</th>
                    <th className="px-5 lg:px-0"> Medium</th>
                    <th className="px-5 lg:px-0">Status</th>
                    <th className="px-5 lg:px-0">Duration </th>
                    <th className="px-5 lg:px-0">Price</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody className="">
                  {resData  &&  resData.map((item , index) => (
                    <tr
                      key={index}
                      className={` border-b ${
                        item.index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <td  className="py-5 lg:px-6 px-5 text-secondary font-s-medium">
                        <Link to={`/candidate/upcoming-detail-service/${userDetails._id}/${item.serviceId._id}`}>
                        {item.serviceId.serviceName}
                        </Link>
                      </td>
                      <td className="py-3  ">{item.serviceId.medium.toString()} </td>
                      <td
                        className={`{ text-black font-s-medium text-sm px-5 lg:px-0 
                                        ${
                                          item.transactionStatus === "Complete"
                                            ? "text-[#17BB05]"
                                            : item.transactionStatus === "Cancalled"
                                            ? "text-[#FF0707]"
                                            : "text-[#EBB400]"
                                        }`}
                      >
                        {item.transactionStatus}
                      </td>
                      <td className="py-3 px-5 ">{item.serviceId.serviceduration}</td>
                      <td className="py-3  px-5 lg:px-0">{item.serviceId.enterPrice}</td>
                      <td className="px-5 lg:px-0">
                        <div className="">
                          <FaDownload className="w-4 h-4 mt-[0.15rem]  text-secondary" />
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

export default OrderHistory;
