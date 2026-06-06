import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "output"]

  count() {
    const maxLength = 280

    const currentLength = this.inputTarget.value.length

    const remaining = maxLength - currentLength

    this.outputTarget.textContent =
      `Pozostało: ${remaining} znaków`
  }
}