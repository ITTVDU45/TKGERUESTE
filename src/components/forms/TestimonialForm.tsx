"use client"
import { useState } from "react";
import MultiSelect from "./MultiSelect";

const TestimonialForm = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="row">
            <div className="col-lg-6">
               <div className="contact__from-input mb-20">
                  <label>Vorname</label>
                  <input type="text" name="vorname" placeholder="Vorname" />
               </div>
            </div>
            <div className="col-lg-6">
               <div className="contact__from-input mb-20">
                  <label>Nachname</label>
                  <input type="text" name="nachname" placeholder="Nachname" />
               </div>
            </div>

            <div className="col-lg-6">
               <label>Email</label>
               <div className="contact__from-input mb-20">
                  <input type="email" name="email" placeholder="info@beispiel.de" />
               </div>
            </div>

            <div className="col-lg-6">
               <label>Telefonnummer</label>
               <div className="contact__from-input mb-20">
                  <input type="tel" name="phone" placeholder="+49 123 456789" />
               </div>
            </div>

            <div className="col-12">
               <label>Maßnahme (Mehrfachauswahl möglich)</label>
               <div className="contact__from-input mb-20">
                  {/* Custom multi-select dropdown */}
                  <MultiSelect />
               </div>
            </div>

            <div className="col-12">
               <div className="testimonials_btn text-center">
                  <button type="submit" className="primary-btn-4 btn-hover">
                     Abesenden
                     <span style={{ top: "147.172px", left: "108.5px" }}></span>
                  </button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default TestimonialForm
