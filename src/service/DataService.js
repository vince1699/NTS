import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/newcomers");
  }
  get(id) {
    return http.get(`/newcomers/${id}`);
  }
  create(data) {
    return http.post("/newcomers", data);
  }
  update(id, data) {
    return http.put(`/newcomers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/newcomers/${id}`);
  }
  deleteAll() {
    return http.delete(`/newcomers`);
  }
  findByTitle(title) {
    return http.get(`/newcomers?surname=${title}`);
  }
}
export default new TutorialDataService();