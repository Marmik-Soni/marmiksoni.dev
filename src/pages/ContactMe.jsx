import styles from "../styles/ContactMe.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactValidationSchema } from "../Validations/validationSchema";
import { toast } from "react-toastify";

const ContactMe = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = ({ resetForm }) => {
    toast.success("Form Submitted!");
    resetForm();
  };
  return (
    <>
      <div className={styles.contactMeContainer}>
        <h1>Connect with Me.</h1>
        <div className={styles.contentWrapper}>
          {/* Left Column: Contact Info */}
          <div className={styles.contactInfo}>
            <h2>Let's Chat!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum similique tempora veniam est eius pariatur officiis
              sapiente ipsa modi ipsum.
            </p>

            <div className={styles.infoItem}>
              <span>📧</span>
              <a href="mailto:marmiksoni777@gmail.com">
                marmiksoni777@gmail.com
              </a>
            </div>
            {/* <div className={styles.infoItem}>
              <span>📞</span>
              <a href="tel:+919327244045">9327244045</a>
            </div> */}
            <div className={styles.infoItem}>
              <span>📍&nbsp;&nbsp;&nbsp;</span>
              <a
                href="https://maps.app.goo.gl/qeVG7GJj3atJKVjRA"
                target="_blank"
              >
                Nadiad, Gujarat
              </a>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58893.91788997286!2d72.81752624054141!3d22.69588776406236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b060b242c55%3A0xc415d383e5344e08!2sNadiad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1753439399315!5m2!1sen!2sin"
                width="100%"
                height="260"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}

          <Formik
            initialValues={initialValues}
            validationSchema={contactValidationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={styles.formContainer}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <Field type="text" name="name" className={styles.input} />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <Field type="email" name="email" className={styles.input} />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <Field type="text" name="subject" className={styles.input} />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <Field
                  as="textarea"
                  name="message"
                  className={styles.textarea}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={styles.error}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
