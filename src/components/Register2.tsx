import { useFormik } from "formik";
import * as yup from "yup";
import { FunctionComponent } from "react";
import { addUser } from "../services/usersService";

interface Register2Props {}

const Register2: FunctionComponent<Register2Props> = () => {
  let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email("Invalid email"),
      password: yup
        .string()
        .required()
        .min(8, "Too short! Password should be at least 8 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      addUser(values)
        .then((res) => {
          console.log(res.data);
          resetForm();
        })
        .catch((error) => console.log(error));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h3 className="display-3">REGISTER 2</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingInput">Email address</label>
          {formik.touched.email && formik.errors.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingPassword">Password</label>
          {formik.touched.password && formik.errors.password && (
            <p className="text-danger">{formik.errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-success mt-3"
          disabled={!formik.isValid || !formik.dirty}
        >
          Register
        </button>
      </form>
    </>
  );
};

export default Register2;
