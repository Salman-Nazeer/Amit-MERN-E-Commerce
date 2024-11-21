const backendDomin = "http://localhost:8080";

const SummaryAPI = {
  signUp: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomin}/api/user-details`,
    method: "get",
  },
  logout: {
    url: `${backendDomin}/api/logout`,
    method: "get",
  },
  all_user: {
    url: `${backendDomin}/api/all-user`,
    method: "get",
  },
  update_user: {
    url: `${backendDomin}/api/update-user`,
    method: "post",
  },
};

export default SummaryAPI;
