import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["comment", "template"];

  connect() {
    console.log("Hello, Stimulus!");
  }

  addAssociation() {
    var content = this.templateTarget.innerHTML.replace(
      /TEMPLATE_RECORD/g,
      new Date().valueOf()
    );
    console.log(content)
    this.templateTarget.insertAdjacentHTML("afterend", content);
  }

}
