import { HttpClient } from "../HttpClient/Index";

class ContactService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  GetAll() {
    return this.get("contact");
  }
}

export default new ContactService();
