import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 8+ chars, 1 lower, 1 upper, 1 digit, 1 special
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!?])[A-Za-z\d@#$%^&*!?]{8,}$/;

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedOnce, setSubmittedOnce] = useState(false); // للبونس

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // امسح error الحقل ده لو موجود
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (/\s/.test(formData.username)) {
      newErrors.username = "Username must not contain spaces";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!PASSWORD_REGEX.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 chars, include upper, lower, digit & special char";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedOnce(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // بونس: alert بالبيانات
    alert("Registered data:\n" + JSON.stringify(formData, null, 2));

    // ممكن هنا تبعت للـ API لو عايز
    navigate("/products");
  };

  // بونس: عرض كل الأخطاء في بداية الفورم بعد الضغط على Register
  const topErrors =
    submittedOnce && Object.values(errors).filter(Boolean).length > 0 ? (
      <div className="alert alert-danger">
        <ul className="mb-0">
          {Object.entries(errors).map(
            ([key, msg]) =>
              msg && (
                <li key={key}>
                  <small>{msg}</small>
                </li>
              )
          )}
        </ul>
      </div>
    ) : null;

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="mb-3">Register</h2>

        {topErrors}

        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-control ${
                errors.name ? "is-invalid" : ""
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-control ${
                errors.email ? "is-invalid" : ""
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Username */}
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className={`form-control ${
                errors.username ? "is-invalid" : ""
              }`}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              }`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-success">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
