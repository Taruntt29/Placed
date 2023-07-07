import http from "./http";

export const verifyCoachOtp = async (data) => {
  return http.put("/coach/signUpverifyOTP", data);
};

export const proceedCoachStatus = async (data) => {
  return http.put("/coach/proceed", data);
};
export const createCoachProfile = async (data, token) => {
  return http.put("/coach/updatecoach", data, {
    headers: {
      Authorization: "Barear " + token,
    },
  });
};
export const createCoachEducation = async (data, token) => {
  return http.put("coach/updateEducation", data, {
    headers: {
      Authorization: "Barear " + token,
    },
  });
};
export const createCoachExperience = async (data, token) => {
  return http.put("/coach/updateExperience", data, {
    headers: {
      Authorization: "Barear " + token,
    },
  });
};

export const getAllCoachDataById = async (id) => {
  return http.get(`/coach/getCoachbyId?id=${id}`);
};
export const getAllEducationDataById = async (id) => {
  return http.get(`/coach/getEducationbyId?id=${id}`);
};
export const deleteEducationImageByCoachId = async (id, url, type) => {
  return http.delete(`/coach/deleteImages?id=${id}&url=${url}&type=${type}`);
};
export const getAllExperienceDataById = async (id) => {
  return http.get(`/coach/getExperiencebyId?id=${id}`);
};

export const getAllPurchaseHistory = async (
  pageSize,
  pageNo,
  coachId,
  withdrawRequestDate
) => {
  return http.get(
    `/service/getPurchaseHistory?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}&withdrawRequestDate=${withdrawRequestDate}`
  );
};

export const changeCoachPassword = async (data) => {
  return http.put("/coach/changepassword", data);
};
export const postServiceData = async (data) => {
  return http.post("/service/addService", data);
};
export const verifyCoachServiceOtp = async (data) => {
  return http.put("/service/verifyOTP", data);
};
export const getAllService = async (pageNo, pageSize, coachId) => {
  return http.get(
    `/service/getservice?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}`
  );
};
export const getAllServiceWithStatus = async (
  pageNo,
  pageSize,
  coachId,
  status
) => {
  return http.get(
    `/service/getservice?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}&status=${status}`
  );
};
export const getAllServiceCount = async (id) => {
  return http.get(`/service/getservicecount?coachId=${id}`);
};
export const getServiceDataById = async (id) => {
  return http.get(`/service/getservicebyId?id=${id}`);
};
export const deleteServiveById = async (id) => {
  return http.delete(`/service/deleteservicebyId?id=${id}`);
};
export const verifyProceed = async (data) => {
  return http.put("/coach/proceed", data);
};
export const updateCoachBanner = async (data) => {
  return http.put("/coach/updateBannerImage", data);
};
export const getAllUpcomingServices = async (pageNo, pageSize, coachId) => {
  return http.get(
    `/service/getUpcommingservice?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}`
  );
};
export const getAllUpcomingServicesWithFilter = async (
  pageNo,
  pageSize,
  coachId,
  withdrawRequestDate,
  search
) => {
  return http.get(
    `/service/getUpcommingservice?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}&withdrawRequestDate=${withdrawRequestDate}&search=${search}`
  );
};
export const getAllUpcomingServicesSearch = async (
  pageNo,
  pageSize,
  serviceName
) => {
  return http.get(
    `/service/getUpcommingservice?pageSize=${pageSize}&pageNo=${pageNo}&serviceName=${serviceName}`
  );
};
export const getAllUpcomingServiceCount = async (id) => {
  return http.get(`/service/getUpcommingservicecount?coachId=${id}`);
};
export const getAllCompletedCancelledServices = async (
  pageNo,
  pageSize,
  coachId
) => {
  return http.get(
    `/service/getcompletecancelledservice?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}`
  );
};
export const getAllCompletedCancelledServicesWithDate = async (
  pageNo,
  pageSize,
  coachId,
  date
) => {
  return http.get(
    `/service/getcompletecancelledservice?pageSize=${pageSize}&pageNo=${pageNo}&date=${date}&coachId=${coachId}`
  );
};
export const getAllPackages = async () => {
  return http.get(`/packages/getpackages`);
};
export const getAllSkills = async () => {
  return http.get(`/skillMaster/getSkill`);
};
export const getAllServices = async () => {
  return http.get("/admin/getService");
};
export const getAllServicesById = async (serviceId) => {
  return http.get(`/admin/getServicebyId?id=${serviceId}`);
};
export const getAllSpecialities = async () => {
  return http.get(`/specialities/getAllspecialities`);
};
export const getAllNotificationsByCoachId = async (coachId) => {
  return http.get(`/notification/getnotification?entryform=${coachId}`);
};
export const deleteNotificationById = async (NotificationId) => {
  return http.delete(
    `/notification/deletenotificationbyId?id=${NotificationId}`
  );
};
export const getAllQuestionList = async (pageSize, pageNo, coachId) => {
  return http.get(
    `/service/candidateQuestionList?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}`
  );
};
export const getAllQuestionListWithFilter = async (
  pageSize,
  pageNo,
  coachId,
  search
) => {
  return http.get(
    `/service/candidateQuestionList?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}&search=${search}`
  );
};
export const responseByCoach = async (data) => {
  return http.put("/service/coachResponse", data);
};
export const getQuestionById = async (questionId) => {
  return http.get(`/service/getcandidateCoachQuestionbyId?id=${questionId}`);
};
export const getAllSentEmails = async (fromEmail) => {
  return http.get(`/EmailLog/getEmailLogCoach?from=${fromEmail}`);
};
export const getAllInboxEmails = async (toEmail) => {
  return http.get(`/EmailLog/getEmailLogCoach?To=${toEmail}`);
};
export const getMailDetailsById = async (mailId) => {
  return http.get(`/EmailLog/getEmailLogById?id=${mailId}`);
};
export const replyOnEmail = async (data) => {
  return http.post("/EmailLog/addEmailLog", data);
};
export const moveToTrashById = async (EmailId) => {
  return http.delete(`/EmailLog/deleteEmailLog?id=${EmailId}`);
};
export const delMailById = async (EmailId) => {
  return http.delete(`/EmailLog/deletetrashmailsbyEmail?id=${EmailId}`);
};
export const getTrashMails = async (To, From) => {
  return http.get(`/EmailLog/getTrashmailsEmailLog?To=${To}&from=${From}`);
};
export const removeTrashMails = async () => {
  return http.delete(`/EmailLog/deleteAllMails`);
};
export const restoreMail = async (mailId) => {
  return http.put(`/EmailLog/restoreEmailLog?id=${mailId}`);
};

export const getAllCountries = async () => {
  return http.get(`/country/getAllCountry`);
};

export const getAllState = async (country) => {
  return http.get(`/state/getAllState?country=${country}`);
};

export const getAllCity = async (country, state) => {
  return http.get(`/city/getAllCity?country=${country}&state=${state}`);
};
export const getAllCityNoFilter = async () => {
  return http.get("/city/getAllCityData");
};
export const AddAvailabilityApi = async (data) => {
  return http.post("/addAvailability/addAvailability", data);
};
export const getAllAvailableSlots = async (coachId) => {
  return http.get(`/addAvailability/getaddAvailability?coachId=${coachId}`);
};
export const getAllAvailableSlotsFilter = async (startDate, endDate) => {
  return http.get(
    `/addAvailability/getaddAvailability?startdate=${startDate}&enddate=${endDate}`
  );
};

export const getAllSentAssistantEmails = async (fromEmail) => {
  return http.get(`/assistantEmail/getAssistantEmailCoach?from=${fromEmail}`);
};
export const getAllInboxAssistantEmails = async (toEmail) => {
  return http.get(`/assistantEmail/getAssistantEmailCoach?To=${toEmail}`);
};
export const getAssistantMailDetailsById = async (mailId) => {
  return http.get(`/assistantEmail/getAssistantEmailById?id=${mailId}`);
};
export const replyOnAssistantEmail = async (data) => {
  return http.post("/assistantEmail/addAssistantEmails", data);
};
export const deleteCoachProfileApi = async (id) => {
  return http.delete(`/coach/deleteCoachbyId?id=${id}`);
};
// export const deactivateCoachProfileApi = async (id) => {
//   return http.delete(`/coach/accountDeActivatebycoach?id=${id}`);
// };
export const accountStatusCoachProfileApi = async (data) => {
  return http.put("/coach/updateAcountStatus", data);
};

export const getAllRequestHistoryApi = async (pageSize, pageNo, coachId) => {
  return http.get(
    `/service/getRequestHistory?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}`
  );
};
export const getAllRequestHistoryApiWithFilter = async (
  pageSize,
  pageNo,
  coachId,
  startdate,
  enddate
) => {
  return http.get(
    `/service/getRequestHistory?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}&startdate=${startdate}&enddate=${enddate}`
  );
};
export const getAllWithdrawHistoryApi = async (pageSize, pageNo, coachId) => {
  return http.get(
    `/service/withdrawHistory?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}`
  );
};
export const getAllWithdrawHistoryApiWithFilterApi = async (
  pageSize,
  pageNo,
  coachId,
  startdate,
  enddate
) => {
  return http.get(
    `/service/withdrawHistory?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}&startdate=${startdate}&enddate=${enddate}`
  );
};

export const getAllWalletInfo = async (pageSize, pageNo, coachId) => {
  return http.get(
    `/coachwallet/getcoachwallet?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}`
  );
};
export const getAllWalletInfoWithFilter = async (
  pageSize,
  pageNo,
  coachId,
  startDate,
  endDate
) => {
  return http.get(
    `/coachwallet/getcoachwallet?pageSize=${pageSize}&pageNo=${pageNo}&coachId=${coachId}&startDate=${startDate}&endDate=${endDate}`
  );
};
export const withDrawAmountApi = async (data) => {
  return http.post("/coachwallet/addcoachwallet", data);
};
export const getWalletAmount = async (coachId) => {
  return http.get(`/coachwallet/getcoachwalletbycoachId?coachId=${coachId}`);
};
export const getBankNameByIFSC = async (ifscCode) => {
  return http.get(`/coach/checkifsccode?ifscCode=${ifscCode}`);
};

export const getTaxByCountryAPI = async (country) => {
  return http.get(`/country/getCountryByName?name=${country}`);
};
export const getGSTandTDSAPI = async () => {
  return http.get(`/siteMaster/getsiteMaster`);
};
