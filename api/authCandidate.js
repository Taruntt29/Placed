import { data } from "autoprefixer";
import http from "./http";
// candidate
export const candidateSignupAPI = async (data) => {
  return http.post("/candidate/signUp", data);
};
export const candidateVerifyOtp = async (data) => {
  return http.put("/candidate/signUpverifyOTP", data);
};
export const candidateCreateProfileAPI = async (data) => {
  return http.put("/candidate/createProfile", data);
};
export const candidateEducationAPI = async (data) => {
  return http.put("/candidate/createProfileEducation", data);
};
export const candidateExperienceAPI = async (data) => {
  return http.put("/candidate/createProfileworkexperience", data);
};
export const candidateProfileGetAPI = async (candidateId) => {
  return http.get(`/candidate/getcandidateProfileById?id=${candidateId}`);
};
export const candidateCategoryAPI = async () => {
  return http.get(`/categorymaster/getAllcategory`);
};
export const candidateSkillAPI = async () => {
  return http.get(`/skillMaster/getSkill`);
};
export const candidateJobListAPI = async (CatgoryId) => {
  return http.get(`candidate/alljobs`, { params: { categoryId: CatgoryId } });
};
export const candidateJobDetailsAPI = async (jobid) => {
  return http.get(`candidate/getJobById?id=${jobid}`);
};
export const ApplyJobData = async (data) => {
  return http.post(`candidate/applyToJob`, data);
};
export const AddFavouriteJob = async (data) => {
  return http.post(`candidate/favoritejob`, data);
};
export const candidateFavouriteJobListAPI = async (CandidateId) => {
  return http.get(`candidate/getFavoriteJobs?candidateId=${CandidateId}`);
};
export const candidateAppliedJobListAPI = async (CandidateId) => {
  return http.get(`/candidate/getCanidateappliedjob?id=${CandidateId}`);
};
export const candidateIndustryAPI = async () => {
  return http.get(`industryMaster/getAllIndustryMaster`);
};
export const candidateJobSearchAPI = async (params) => {
  // console.log(parameters);
  return http.get(`candidate/alljobs` , params);
};
export const updateCandidateBanner = async (data) => {
  return http.put("candidate/updateBannerImage", data);
};
export const getBannerImageById = async (id) => {
  return http.get(`candidate/getbannerImagebyId?id=${id}`);
};
export const candidateEmployeeJobSearchAPI = async (parameterEmployee) => {
  console.log(parameterEmployee);
  return http.get(`candidate/getAllEmployers`, { params: parameterEmployee });
};
export const candidatEmpDetailsAPI = async (EmplyeId) => {
  return http.get(`candidate/employerbyId?id=${EmplyeId}`);
};

export const candidateCoachListAPI = async () => {
  return http.get(`candidate/getCoaches`);
};

export const postComposeCandidateEmailAPI = async (data) => {
  return http.post("/emailLog/addEmailLog", data);
};

// activate account
export const activatecandidateAPI = async (id) => {
  return http.put(`candidate/activateCandidate?id=${id}`);
};

// deactivate account
export const deactivatecandidateAPI = async (id) => {
  return http.put(`candidate/deactivateCandidate?id=${id}`);
};

// delete account
export const deletecandidateAPI = async (id) => {
  return http.put(`candidate/deleteAccount?id=${id}`);
};

// notify candidate
export const postaddContactAPI = async (data) => {
  return http.post("/contact/addcontact", data);
};

// notification api
export const getCandidateNotificationAPI = async (entryform) => {
  return http.get(`/notification/getnotification?entryform=${entryform}`);
};

// change password
export const putCandidateChangePasswordAPI = async (data) => {
  return http.put("/candidate/changepassword", data);
};

// delete notification
export const deleteCandidateNotificationAPI = async (id) => {
  return http.delete(`/notification/deletenotificationbyId?id=${id}`);
};

// all inbox
export const getAllInboxCandidateAPI = async (To) => {
  return http.get(`/emailLog/getEmailLogCandidate?To=${To}`);
};

// all sent
export const getEmailSentCandidateAPI = async (from) => {
  return http.get(`/emailLog/getEmailLogCandidate?from=${from}`);
};

// trash
export const gettrashCandidateEmailAPI = async (To, from) => {
  return http.get(`/emailLog/getTrashmailsEmailLog?To=${To}&from=${from}`);
};

//get coach with filter
export const candidateCoachList = async (params) => {
  return http.get(`candidate/getCoaches`, { params  });
};
//get coaches from serviceId
export const candidateCoachListService = async (serviceId) => {
  return http.get(`candidate/getCoachesByService`, { params : {id : serviceId}  });
};

// get coach details
export const getCoachDetails = async (id) => {
  return http.get(`/candidate/getCoachById`, { params: { id: id } });
};
// get coach services details
export const getCoachServicesById = async (id) => {
  return http.get(`/candidate/servicesOfCoach`, { params: { coachId: id } });
};

// get all services
export const getAllServices = async () => {
  return http.get("/candidate/getAllServicesByCategory");
};

// set fav coach
export const setFavCoach = async (params) => {
  return http.post("/candidate/favouriteCoach", params);
};
// get upcoming services
export const getUpcomingServiceDetail = async (id) => {
  return http.get("/candidate/ServiceDeliveryDetail", {
    params: { id: id },
  });
};
// get upcoming services by id
export const getUpcomingServices = async (candidateId , serviceId) => {
  return http.get("/candidate/upcomingServiceDelivery", { params: { candidateId: candidateId , serviceId : serviceId } });
};
// get completed services by id
export const getCompletedServiceById = async (id) => {
  return http.get("/candidate/completeServiceDelivery", { params: { id: id } });
};
// ask question
export const askQuestion = async (body) => {
  return http.post("/candidate/candidateQuestion", body);
};

//get admin services
export const getMasterServices = async () => {
  return http.get("/admin/getService");
};
//get purchased services
export const getPurchasedServices = async (id) => {
  return http.get("/candidate/candidatePurchasedServices" , {params : {candidateId : id}});
};
//get purchased services detail
export const getPurchasedServicesDetail = async (id) => {
  return http.get("/candidate/getcandidateServiceById" , {params : {id : id}});
};
//get candidate services 
export const getCandidateServices = async (id) => {
  return http.get("/candidate/getcandidateServices" , {params : {candidateId : id}});
};
//get coach response 
export const getCoachResponse = async (id) => {
  return http.get("/candidate/coachResponse" , {params : {candidateId : id}});
};

//get fav coaches
export async function getCandidateFavCoach(id){
  return http.get("/candidate//getFavouriteCoach"  ,{params : {candidateId : id}})
}

//get coaches which are filtered by service model ... 
export async function getCoachWhichFilterFromService(parameters){
  return http.get("/candidate/coachWithServiceFilters" , {params : parameters})
}

//get admin services
export async function getAdminServiceForCoachpage(){
  return http.get("/admin/getService")
}
//get admin industry
export async function getIndustrymasterForCoach(){
  return http.get("/industryMaster/getAllIndustryMaster")
}

// set fav employer
export async function setFavEmployer(body){
  return http.post("/candidate/favoriteEmployer" , body)
}

//get fav employer
export async function  getFavEmployers(candidateId){
  return http.get("/candidate/getfavoriteEmployer" , {params : {candidateId : candidateId}})
}

//get candy order history
export async function getOrderHistory(id){
  return http.get("/candidate/getcandidateServices" , {params : { candidateId : id }})
}

// get email by id
export async function getE(id){
  return http.get("/emailLog/getEmailLogById" , {params : { id : id}})
}

//get assessment test
export async function getTest(x){
  return http.get("assessementTest/getAssessementTest" , {params : x})
}
//post assessment test
export async function postTest(body){
  return http.post("candidateAssessmentRecord/postCandidateAssessmentRecord" , body)
}

//get recommended profile
export async function getProfiles(){
  return http.get("assessementProfile//getAllassessementProfile")
}

//get share profile
export async function getShareLink(id){
  return http.get("candidate/getCopylinkcandidatebyId" , {params : {candidateId : id}})
}

//get job applicants
export async function getApplicants(id){
  return http.get("/candidate/getApplicants" , {params : {id : id}})
}
//get faq
export async function getFaQuestions(){
  return http.get("/CMS/getQuesAnswer" )
}