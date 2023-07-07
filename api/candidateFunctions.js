import http from "./http";

export const getAllServiceDataById = async (id) => {
  return http.get(`candidate/getServicebyId?id=${id}`);
};
export const getAllSlotsByCoachId = async (coachId) => {
  return http.get(`/addAvailability/getaddAvailabilitybyId?id=${coachId}`);
};
export const bookSlots = async (data) => {
  return http.post("/candidate/buyServices", data);
};
export const serviceDeliver = async (data) => {
  return http.post("/candidate/serviceDelivery", data);
};
export const reserveSlots = async (slotId, recordId, timeId) => {
  return http.put(
    `/addAvailability/reserveSlot?slotId=${slotId}&recordId=${recordId}&timeId=${timeId}`
  );
};
