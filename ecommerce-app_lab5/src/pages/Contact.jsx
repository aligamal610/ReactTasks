import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// schema بتاع Yup
const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().nullable(), // optional
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be at most 500 characters"),
});

export default function Contact() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // هنا ممكن تبعت للـ API
    console.log("Contact data:", data);
    setSuccess("Thank you! We will get to you soon.");
    reset(); // reset values
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-6">
        <h2 className="mb-3">Send Us a Message</h2>
        <p className="text-muted">
          Please fill in the form below to get in touch with us.
        </p>

        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* First & Last name نفس الصف */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                {...register("firstName")}
              />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName.message}
                </div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                {...register("lastName")}
              />
              {errors.lastName && (
                <div className="invalid-feedback">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>

          {/* Email + Phone */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                }`}
                {...register("email")}
              />
              {errors.email && (
                <div className="invalid-feedback">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="phone">
                Phone number (optional)
              </label>
              <input
                id="phone"
                type="text"
                className="form-control"
                {...register("phone")}
              />
              {/* البونس: لو حابب تستخدم باكدج تليفون زي react-phone-input-2
                  تقدر تركبه هنا بدل input العادي */}
            </div>
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className={`form-control ${
                errors.message ? "is-invalid" : ""
              }`}
              {...register("message")}
            />
            {errors.message && (
              <div className="invalid-feedback">
                {errors.message.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
