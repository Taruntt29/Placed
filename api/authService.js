import { data } from "autoprefixer";
import http from "./http";

export const employerLoginAPI = async (data) => {
  return http.post("/employer/Employerlogin", data);
};

export const candidateLoginAPI = async (data) => {
  return http.post("/candidate/login", data);
};

export const coachLoginAPI = async (data) => {
  return http.post("/coach/login", data);
};

export const employerSignupAPI = async (data) => {
  return http.post("/employer/EmployersignUp", data);
};

export const putEmployerSignupOtpAPI = async (data) => {
  return http.put("/employer/signUpverifyOTP", data);
};

export const putForgotPasswordAPI = async (data) => {
  return http.put("/employer/forgotOtp", data);
};

export const putChangePasswordAPI = async (data) => {
  return http.put("/employer/changepassword", data);
};

// forgot otp
export const putForgotVerfiyOtpAPI = async (data) => {
  return http.put("/employer/verifyOTP", data);
};

export const employerCreateProfileAPI = async (data) => {
  return http.put("/employer/updateEmployerProfile", data);
};

export const deleteEmployerProfileAPI = async (id) => {
  return http.delete(`/employer/deleteEmployerProfilebyId?id=${id}`);
};

export const getEmployerEditProfileAPI = async (id) => {
  return http.get(`/employer/getemployerProfilebyId?id=${id}`);
};
export const getPreviewProfileByJobId = async (id) => {
  return http.get(
    `/employerpostedjob/getAllpublishPostjobEmployerById?id=${id}`
  );
};

export const putUpdateProfileAPI = async (data) => {
  return http.put("/employer/updateEmployerProfile", data);
};

// put banner api
export const putupdateBannerImage = async (data) => {
  return http.put("/employer/updateBannerImage", data);
};

// trash email
export const deletetrashEmail = async (id) => {
  return http.delete(`/EmailLog/deletetrashmailsbyEmail?id=${id}`);
};

// get banner api
export const getbannerImageAPI = async (id) => {
  return http.get(`/employer/getbannerImagebyId?id=${id}`);
};

export const employerPostaJobAPI = async (data) => {
  return http.post(`/employerpostedjob/addPostjobEmployer`, data);
};

export const getEmployerPostedJobAPI = async (id) => {
  return http.get(`/employerpostedjob/getpostedjobEmployerbyid?id=${id}`);
};

export const getAllEmployerPostedJobAPI = async (
  pageNo,
  pageSize,
  jobType = "All",
  employerId,
  searchText
  // date
) => {
  return http.get(
    `/employerpostedjob/getpostedjobEmployer?pageSize=${pageSize}&pageNo=${pageNo}&jobType=${jobType}&employerId=${employerId}&search=${searchText}`
  );
};

export const putupdatePostjobEmployer = async (data) => {
  return http.put("/employerpostedjob/updatePostjobEmployer", data);
};

export const deletePostJobEmployerAPI = async (id) => {
  return http.delete(`/employerpostedjob/deletepostedjobEmployerbyid?id=${id}`);
};

export const getAllApplicantsAPI = async (
  jobId,
  pageNo,
  pageSize
  // status,
  // date
) => {
  return http.get(
    `/employerpostedjob/allApplicants?jobId=${jobId}&pageNo=${pageNo}&pageSize=${pageSize}`
  );
};
export const getAllApplicantsAPIWithStatus = async (
  jobId,
  pageNo,
  pageSize,
  status
  // date
) => {
  return http.get(
    `/employerpostedjob/allApplicants?jobId=${jobId}&pageNo=${pageNo}&pageSize=${pageSize}&status=${status}`
  );
};
export const getAllApplicantsAPIWithSearch = async (
  jobId,
  pageNo,
  pageSize,
  search
  // date
) => {
  return http.get(
    `/employerpostedjob/allApplicants?jobId=${jobId}&pageNo=${pageNo}&pageSize=${pageSize}&search=${search}`
  );
};
export const getAllApplicantsAPIWithDate = async (
  jobId,
  pageNo,
  pageSize,
  date
) => {
  return http.get(
    `/employerpostedjob/allApplicants?jobId=${jobId}&pageNo=${pageNo}&pageSize=${pageSize}&date=${date}`
  );
};

// delete candidate
export const deletecandidateAPI = async (id) => {
  return http.delete(`/employerpostedjob/deleteApplicantsbyId?id=${id}`);
};

export const getAllCountriesAPI = async (data) => {
  return http.get("/country/getAllCountry", data);
};

export const getAllStatesAPI = async (country) => {
  return http.get(`/state/getAllState?country=${country}`);
};

export const getAllCitiesAPI = async (country, state) => {
  return http.get(`/city/getAllCity?country=${country}&state=${state}`);
};

export const putResetPasswordAPI = async (data) => {
  return http.put("/employer/resetpassword", data);
};

// export const getAllCandidatesAPI = async (
//   pageSize = 10,
//   pageNo = 1,
//   companyName = "",
//   candidateId = "",
//   location = "",
//   employmentType = "",
//   categoryId = ""
// ) => {
//   return http.get(
//     `/employer/getallcandidate?pageSize=${pageSize}&pageNo=${pageNo}&companyName=${companyName}&candidateId=${candidateId}&location=${location}&employmentType=${employmentType}&categoryId=${categoryId}`
//   );
// };

export const getAllCandidatesAPI = async (
  location,
  employmentType,
  categoryId,
  industryId
) => {
  return http.get(
    `/employer/getallcandidate?location=${location}&employmentType=${employmentType}&categoryId=${categoryId}&industryId=${industryId}`
  );
};

export const getAllPackagesAPI = async (data) => {
  return http.get("/packages/getpackages", data);
};

export const getCandidateByIdAPI = async (id) => {
  return http.get(`/employer/getcandidatebyId?id=${id}`);
};

// email api
export const getEmailEmployer = async (To) => {
  return http.get(`/EmailLog/getEmailLogEmployer?To=${To}`);
};

export const getEmailSentEmployer = async (from) => {
  return http.get(`/EmailLog/getEmailLogEmployer?from=${from}`);
};

export const postComposeEmailAPI = async (data) => {
  return http.post("/EmailLog/addEmailLog", data);
};

export const gettrashEmailAPI = async (To, from) => {
  return http.get(`/EmailLog/getTrashmailsEmailLog?To=${To}&from=${from}`);
};

export const deleteEmailAPI = async (id) => {
  return http.delete(`/EmailLog/deleteEmailLog?id=${id}`);
};

// industry master
export const getAllIndustryAPI = async (data) => {
  return http.get("/industryMaster/getAllIndustryMaster", data);
};

// notification api
export const getAllNotificationAPI = async (entryform) => {
  return http.get(`/notification/getnotification?entryform=${entryform}`);
};

// post a job page
export const getCategoryAPI = async (data) => {
  return http.get("/categorymaster/getAllcategory", data);
};

// skill master
export const getAllSkillsAPI = async (data) => {
  return http.get("skillMaster/getSkill", data);
};

// delete notification
export const deleteNotificationAPI = async (id) => {
  return http.delete(`/notification/deletenotificationbyId?id=${id}`);
};

// supplemental master
export const getSupplementAPI = async (data) => {
  return http.get("/supplementalpayMaster/getAllsupplementalpayMaster", data);
};

export const getAllbenefitsAPI = async (data) => {
  return http.get("/benefitsMaster/getAllbenefitsMaster", data);
};

// assistant email api
export const getInboxAssistantEmailAPI = async (To) => {
  return http.get(`/assistantEmail/getAssistantEmailEmployer?To=${To}`);
};

export const getSentAssistantEmailAPI = async (from) => {
  return http.get(`/assistantEmail/getAssistantEmailEmployer?from=${from}`);
};

export const postreplyAssistantMail = async (data) => {
  return http.post("/assistantEmail/addAssistantEmails", data);
};

export const getAssistantMailDetailById = async (mailId) => {
  return http.get(`/assistantEmail/getAssistantEmailById?id=${mailId}`);
};

// activate and deactivate account api
export const putActivateAccountAPI = async (data) => {
  return http.put("/employer/updateAcountStatusEmployer", data);
};

// favorite
export const putfavoriteCandidateAPI = async (data) => {
  return http.put("/employer/updateFavoritecandidate", data);
};

export const getfavoriteCandidateAPI = async (data) => {
  return http.get("/employer/getcandidatefavorite", data);
};

// candidate
export const candidateSignupAPI = async (data) => {
  return http.post("/candidate/signUp", data);
};

export const candidateCreateProfileAPI = async (data) => {
  return http.put("/candidate/createProfile", data);
};

export const candidateEducationAPI = async (data) => {
  return http.put("/candidate/createProfileEducation", data);
};
export const candidateExperienceAPI = async (data) => {
  return http.put("/candidate/addWorkExperience", data);
};
//edit work ex
export const candidateExperienceArrayAPI = async (data) => {
  return http.put("/candidate/addWorkExperienceArray", data);
};
//coach api
export const coachSignupAPI = async (data) => {
  return http.post("/coach/signUp", data);
};
export const coachCreateProfile = async (data) => {
  return http.put("/coach/updatecoach", data);
};
export const coachUpdateEducation = async (data) => {
  return http.put("/coach/updateEducation", data);
};
export const getPreviewJobDataById = async (data) => {
  return http.get("/employerpostedjob/getAllpublishPostjobEmployer", data);
};
export const getApplicantsById = async (id) => {
  return http.get(`/employerpostedjob/getapplicantsbyId?id=${id}`);
};
export const updateStatusApplicant = async (data) => {
  return http.put("/employerpostedjob/updatePostjobStatus", data);
};


export const getJobViews = async (id) => {
  return http.get("/jobViewAll/getJobViewAllbyId" , {params : { id : id}})
}
export const postJobViews = async (body) => {
  return http.post("/jobViewAll/addJobViewAll" , body)
}

export const deleteEmployerProfileImage = async (id, url) => {
  return http.delete(
    `/employer/deleteImagesEmployer?id=${id}&url=${url}&type=otherImages`
  );
};

