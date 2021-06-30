import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-md-3 offset-md-1">
          <h2>Medcity</h2>
          <p>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for your family
            healthcare.
          </p>
          <p>Make Appointment</p>
        </div>
        <div className="col-md-2">
          <p>Departments</p>
          Neurology Clinic
          <p>Cardiology Clinic</p>
          <p>Pathology Clinic</p>
          <p>Laboratory Analysis</p>
          <p>Pediatric Clinic</p>
          <p>Cardiac Clinic</p>
        </div>
        <div className="col-md-2">
          <p> Links</p>
          <p>About Us</p>
          <p>Our CLinic</p>
          <p>Our Doctors</p>
          <p>News & Media</p>
          <p>Appointments</p>
        </div>
        <div className="col-md-4">
          <div id="footer-card" class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h5 class="card-title">Quick Contacts</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                If you have any questions or need help, feel free to contact
                with our team.
              </h6>
              <p>
                {" "}
                <span></span>
                01061245741
              </p>
              <p>2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
              <p>
                Get Direction <span></span>
                <span></span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
