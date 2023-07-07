import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfiles, getTest, postTest } from "../../api/authCandidate";
import { useNavigate } from "react-router-dom";

const AssessmentTest = () => {
  const [isDisabled, setDisabled] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const [arrLength, setArrLength] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [pageNo, setPageno] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const getTotalQuestions = async () => {
    try {
      const response = await getTest();
      setTotalQuestions(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  const getThatTest = async (pageNo) => {
    try {
      const response = await getTest({ pageNo: pageNo, pageSize: 1 });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [recomend, setRecomend] = useState("");
  const [proData, setProData] = useState([]);
  const getPros = async () => {
    try {
      const res = await getProfiles();
      setProData(res.data);
      // setTrigger(false)
      for (let i = 0; i < res.data.length; i++) {
        console.log(res.data);
        console.log("zzz", res.data[i].percentage.slice(0, 2));
        if (res.data[i].percentage.replace("%", "") <= percentScore * 100) {
          setRecomend(res.data[i].profileName);
          console.log(res.data[i].profileName);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => { getPros() } , [trigger])

  const { userDetails } = useSelector((state) => state.flightReducer);

  const [response, setResponse] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  //  var [percentScore, setpercentScore] = useState(0)
  var percentScore = 0;

  const NextQuestion = async () => {
    setPageno(pageNo + 1);
    setCheck(false);
    setResponse([
      ...response,
      {
        questionId: data?.[0]?._id,
        correctResponse: data?.[0].answer,
        selectedResponse: selectedAnswer,
      },
    ]);
    if (selectedAnswer === data?.[0]?.answer) {
      setTotalScore(totalScore + 1);
    }
  };

  const submitTest = async () => {
    setResponse([
      ...response,
      {
        questionId: data?.[0]?._id,
        correctResponse: data?.[0].answer,
        selectedResponse: selectedAnswer,
      },
    ]);
    percentScore = (totalScore / totalQuestions) * 100;
    navigate("/assessment-certificate", {
      state: { score: percentScore },
    });
    if (selectedAnswer === data?.[0]?.answer) {
      setTotalScore(totalScore + 1);
    }
    try {
      if(userDetails._id){

      
      await postTest({
        candidateId: userDetails._id,
        score: totalScore,
        response: response,
      });

      getPros();
    }
    } catch (error) {
      console.log(error);
    }
  };

  const [check, setCheck] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    getThatTest(pageNo);
  }, [pageNo]);

  useEffect(() => {
    getTotalQuestions();
    getThatTest();
  }, []);
  return (
    <>
      <div className="pt-5 pb-10">
        <div className="container mx-auto">
          <div className="bg-[#fff] rounded-2xl pb-10">
            <div className="md:px-10 px-4 flex items-center  gap-x-3 font-s-medium text-[18px] md:text-lg pt-10 pb-5">
              <img alt="" src="/assets/images/photoshop.png" className="w-14" />
              Candidate Profile Assessment Test
            </div>
            <hr />

            <div className="md:pl-16 py-10 pl-4">
              {/* {data &&
                data.map((item, index_i) => { */}
              {/* return (
                    <> */}
              <div>
                <span className="font-bold">Question {pageNo}</span>
                <p className="md:w-[80%] text-[17px]">
                  {data?.[0]?.questionName}
                </p>
                <div className="space-y-8">
                  <div className="md:pl-16 pl-4 py-3 duration-500 space-x-3 font-s-medium hover:bg-[#F5F7F9]">
                    <ul>
                      {data?.[0]?.options &&
                        data?.[0]?.options.map((option, index_j) => {
                          return (
                            <>
                              <li>
                                <input
                                  py-3
                                  type="radio"
                                  value={option}
                                  name={pageNo}
                                  id={index_j}
                                  isChecked={check}
                                  onClick={(e) => {
                                    setSelectedAnswer(e.target.value);
                                    setCheck(true);
                                  }}
                                />
                                <label className="p-4" for={index_j}>
                                  {option}
                                </label>
                              </li>
                            </>
                          );
                        })}
                    </ul>
                    <div>
                      {pageNo !== totalQuestions ? (
                        <>
                          <button
                            onClick={NextQuestion}
                            className="p-10 py-2 text-white bg-secondary font-s-medium rounded-xl"
                          >
                            "Next Question"
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={submitTest}
                            className="p-10 py-2 text-white bg-secondary font-s-medium rounded-xl"
                          >
                            "Submit Test"
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* </>
                  );
                })} */}
            </div>
            {/* <div className="flex justify-center">
                  <button  onClick={NextQuestion} className="px-10 py-2 text-white bg-secondary font-s-medium rounded-xl">
                    {startIndex === arrLength - 1 ? "Submit Test" : "next Question"}
                  </button>
                </div> */}
            {/* <div className="flex justify-center">
                  <button disabled={isDisabled} onClick={submit} className="px-10 py-2 text-white bg-secondary font-s-medium rounded-xl">
                    Submit Test
                  </button>
                </div>
                <div className="flex justify-center">
                  <div>

                  Your score is  : {displayScore * 100 + "%"} 
                  </div>
                  <div>

                  Your recommended profile is : {recomend}
                  </div>
                </div> */}

            {/* <div className="space-y-8">
              <div className="md:pl-16 pl-4 py-3 duration-500 space-x-3 font-s-medium hover:bg-[#F5F7F9]">
                <input type="radio" name="format" />
                <label>JPEG</label>
              </div>

              <div className="space-x-3 font-s-medium md:pl-16 pl-4 py-3 duration-500 hover:bg-[#F5F7F9]">
                <input type="radio" name="format" />
                <label>PNG</label>
              </div>

              <div className="space-x-3 font-s-medium md:pl-16 pl-4 py-3 duration-500 hover:bg-[#F5F7F9]">
                <input type="radio" name="format" />
                <label>SVG</label>
              </div>

              <div className="space-x-3 font-s-medium md:pl-16 pl-4 py-3 duration-500 hover:bg-[#F5F7F9]">
                <inp
                ut type="radio" name="format" />
                <label>PDF</label>
              </div>
            </div> */}

            <div className="mt-20 space-y-10">
              <div className="h-[15px] bg-[#F5F7F9] block">
                <span className="w-[10%] bg-secondary block h-[15px]"></span>
              </div>

              <div className="flex justify-between items-center px-10">
                <div className=" space-x-6">
                  <span>
                    Q{pageNo} / Q{totalQuestions}
                  </span>
                  <span className="text-secondary">1:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const AssessmentTest = () => {

//   const [index , setIndex] = useState(0);
//   const [length , setLength] = useState(0)

//   const [data , setData] = useState([])

//   const [response , setResponse] = useState({})

//   const getThatTest = async () => {
//         try {
//           const response = await getTest();
//           setData(response.data);
//           // setmaxper(response.data.length);
//           setLength(response.data.length);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//   useEffect(() => {
//     getThatTest()
//   }, [])
//   return (
//     <>
//       <div className="pt-5 pb-10">
//         <div className="container mx-auto">
//           <div className="bg-[#fff] rounded-2xl pb-10">
//             <div className="md:px-10 px-4 flex items-center  gap-x-3 font-s-medium text-[18px] md:text-lg pt-10 pb-5">
//               <img alt="" src="/assets/images/photoshop.png" className="w-14" />
//               Candidate Career Assessments
//             </div>
//             <hr />

//             <div className="md:pl-16 py-10 pl-4">
//               <p className="md:w-[80%] text-[17px]">
//                 Question {" "} {index + 1}{" : "}{data?.[index]?.questionName}
//               </p>
//             </div>

//             <div className="space-y-8" >

//               <div  className="md:pl-16 pl-4 py-3 duration-500 space-x-3 font-s-medium hover:bg-[#F5F7F9]">
//                 <input type="radio" name={data?.[index]?._id} value={data?.[index]?.options?.[0]} id="1" />
//                 <label for="1">{data?.[index]?.options?.[0]}</label>
//               </div>
//               <div  className="md:pl-16 pl-4 py-3 duration-500 space-x-3 font-s-medium hover:bg-[#F5F7F9]">
//                 <input type="radio" name={data?.[index]?._id} value={data?.[index]?.options?.[1]} id="2" />
//                 <label for="2">{data?.[index]?.options?.[1]}</label>
//               </div>
//               <div  className="md:pl-16 pl-4 py-3 duration-500 space-x-3 font-s-medium hover:bg-[#F5F7F9]">
//                 <input type="radio" name={data?.[index]?._id} value={data?.[index]?.options?.[2]} id="3" />
//                 <label for="3" >{data?.[index]?.options?.[2]}</label>
//               </div>
//               <div  className="md:pl-16 pl-4 py-3 duration-500 space-x-3 font-s-medium hover:bg-[#F5F7F9]">
//                 <input type="radio" name={data?.[index]?._id} value={data?.[index]?.options?.[3]} id="4" />
//                 <label for="4">{data?.[index]?.options?.[3]}</label>
//               </div>

//             </div>

//             <div className="mt-20 space-y-10">
//               <div className="h-[15px] bg-[#F5F7F9] block">
//                 <span className="w-[10%] bg-secondary block h-[15px]"></span>
//               </div>

//               <div className="flex justify-between items-center px-10">
//                 <div className=" space-x-6">
//                   <span>Q{index + 1} / Q{length}</span>
//                   <span className="text-secondary">1:30</span>
//                 </div>

//                 <div>
//                   <button onClick={(e) =>  {setIndex(index + 1)}} className="px-10 py-2 text-white bg-secondary font-s-medium rounded-xl">
//                     Next
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default AssessmentTest;
