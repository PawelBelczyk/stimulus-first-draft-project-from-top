import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="checkbox-highlight"
export default class extends Controller {
 static targets =["box"]
  
 toggle() {
  this.boxTarget.classList.toggle("highlight")
 }
 
}
