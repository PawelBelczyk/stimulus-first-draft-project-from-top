import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent =
      `Hello jesteś najlepszy i możesz tego się nauczyć jak wszystkiego zresztą innego w swoim życiu co już zrobiłeś, ${this.nameTarget.value}!`
  }
}