import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {



  const formSubmission = () => toast.success('Form Submitted Succesfully')

  return (
    <section className="contact-us-section">
      <Container>
        <h2 className="section-title">Contact Us</h2>
        <Row>
          <Col lg={6} md={12} className="contact-form-container">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>

              <Button onClick={formSubmission} variant="primary" type="submit" className="submit-btn">
                Submit
              </Button>
            </Form>
          </Col>

          <Col lg={6} md={12} className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7616.436913281298!2d78.5535685!3d17.353218!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1728024922662!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps"></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
