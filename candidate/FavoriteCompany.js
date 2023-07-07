import React, { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import { getFavEmployers } from "../../../api/authCandidate";
import { useSelector } from "react-redux";

const FavoriteCompany = () => {

  const { userDetails } = useSelector((state) => state.flightReducer)

  const [resData , setResData] = useState([])

  const getFavEmps = async () => {
    try {
      const response = await getFavEmployers(userDetails._id)
      setResData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getFavEmps()
  },[])
  const jobData = [
    {
      id: 1,
      logourl: "/assets/images/logo1.png",
      jobs: "20+",
      post: "Baldota Group",
      reviews: "4 | 274 reviews",
      industry1: "Corporte",
      industry2: "Industrial Equipment/Machinery",
    },
    {
      id: 2,
      logourl: "/assets/images/logo2.png",
      jobs: "20+",
      post: "Baldota Group",
      reviews: "4 | 274 reviews",
      industry1: "Corporte",
      industry2: "Industrial Equipment/Machinery",
    },
    {
      id: 3,
      logourl: "/assets/images/logo3.png",
      jobs: "20+",
      post: "Baldota Group",
      reviews: "4 | 274 reviews",
      industry1: "Corporte",
      industry2: "Industrial Equipment/Machinery",
    },
    {
      id: 4,
      logourl: "/assets/images/logo5.png",
      jobs: "20+",
      post: "Baldota Group",
      reviews: "4 | 274 reviews",
      industry1: "Corporte",
      industry2: "Industrial Equipment/Machinery",
    },
    {
      id: 5,
      logourl: "/assets/images/logo6.png",
      jobs: "20+",
      post: "Baldota Group",
      reviews: "4 | 274 reviews",
      industry1: "Corporte",
      industry2: "Industrial Equipment/Machinery",
    },
    {
      id: 6,
      logourl: "/assets/images/logo2.png",
      jobs: "20+",
      post: "Baldota Group",
      reviews: "4 | 274 reviews",
      industry1: "Corporte",
      industry2: "Industrial Equipment/Machinery",
    },
  ];
  return (
    <div>
      <div className="bg-inputcolor py-16 ">
        <div className="mx-auto max-w-[1150px] bg-[#fff]  rounded-2xl">
          <div className="flex items-center  font-s-medium text-secondary text-lg bg-inputcolor">
            <BiChevronLeft className="text-3xl" /> Favorite Company
          </div>
        </div>
        <div className="bg-white my-4 rounded-md mx-10">
          <div className="px-8  rounded-2xl">
            <div className="flex py-4 items-center text-[#000] space-x-4 ">
              <BsBuilding className="text-secondary " size={20} />
              <div className="descri"><h6 className="font-s-medium text-2xl">Favorite Company</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non quam commodo, dictum justo a, varius nisl.</p>
              </div>
              
            </div>
            <hr className="mb-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:px-10 px-5 pt-8 pb-12">
            {resData && resData.map((item, id) => {
              return (
                <>
                  <div className="">
                    <div
                      className="bg-white box-shadow  rounded-xl relative  pb-7"
                      key={id}
                    >
                      <AiFillStar
                        className="absolute top-4 right-4 text-secondary"
                        size={28}
                      />
                      <div className="grid md:grid-cols-12 gap-4">
                     
                        <div className="md:col-span-2">
                        
                        
                          <div className="absolute flex md:p-4 bg-white box-shadow1 rounded-xl lg:left-[2%] left-[5%] lg:my-0 my-3 lg:-bottom-2   md:left-2">
                          
                            <img
                              src={item.employerId.image}
                              alt="/"
                              width={100}
                              height={100}
                            />
                          </div>
                         
                          
                        </div>
                        
                        <div className="col-span-10 lg:pl-20 lg:pt-4 pt-28 pl-3">
                       
                          <h3 className="font-s-bold">{item.employerId.companyName}</h3>

                          <div className="flex py-3">
                            {/* <AiFillStar
                              className="text-yellow-400 "
                              size={28}
                            /> */}
                            <div className="text-sm"><a>{item.employerId.website}</a></div>
                            
                          </div>
                          <div className="flex space-x-3">
                            <h4 className="border border-gray-400 text-xs rounded-md px-3 py-1">
                              {item.employerId.industryId?.name}
                            </h4>
                            <h4 className="border border-gray-400 text-xs rounded-md px-3 py-1">
                              {item.employerId.industryId?.name}
                            </h4>
                          </div>
                          {/* <div className="">
                            <AiFillStar
                              className="text-secondary absolute lg:bottom-28 bottom-56 right-2 "
                              size={28}
                            />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCompany;
