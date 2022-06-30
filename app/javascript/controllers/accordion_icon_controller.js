import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["icon"]

  connect() {
    console.log(this.iconTarget);
  }

  iconToggle(event) {
    console.log(this.iconTarget.classList);
    this.iconTarget.classList.toggle("fa-minus");
    this.iconTarget.classList.toggle("fa-plus");
  }

  // iconToggle() {
  //   this.iconTarget.classList.toggleClass("fas fa-solid fa-minus")
  // }
}
