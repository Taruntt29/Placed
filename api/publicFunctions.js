import http from "./http";

export const getAllBlogData = async () => {
  return http.get("/blogs/getAllBlogs");
};
export const getAllTrending = async () => {
  return http.get("/trendingNow/getAlltrendingNow");
};
export const getAllBlogDetailsById = async (blogId) => {
  return http.get(`/blogs/getblogsbyId?id=${blogId}`);
};
export const getAllCoachDataApi = async () => {
  return http.get("/coach/getCoach");
};
export const getAllArticleNewsData = async () => {
  return http.get("/articlesNews/getAllarticlesNews");
};
export const getAllArticleNewsById = async (id) => {
  return http.get(`/articlesNews/getArticlesNewsbyId?id=${id}`);
};
export const getAllTestimonials = async () => {
  return http.get("/testimonial/getAllTestimonial");
};
// build resume functions
export const buildResumeTemplate1 = async (data) => {
  return http.post("/resume/addResume", data);
};
export const getResumeById = async (id) => {
  return http.get(`/resume/getResumebyId?id=${id}`);
};
