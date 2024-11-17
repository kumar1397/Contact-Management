"use client";

import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

const AddBlog = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    company: "",
    jobtitle: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        router.push("/");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong while adding the contact.");
      }
    } catch (error) {
      alert("Failed to submit form.");
    }
  };

  return (
    <Fragment>
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-200 font-bold p-3">
            Add A New Contact 🚀
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              placeholder="Enter First Name"
              value={formData.fname}
              name="fname"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 text-black "
            />
            <input
              value={formData.lname}
              name="lname"
              onChange={handleChange}
              placeholder="Enter Last Name"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 text-black "
            />
            <input
              value={formData.phone}
              name="phone"
              onChange={handleChange}
              placeholder="Enter Phone number"
              type="number"
              className="rounded-md px-4 w-full py-2 my-2 text-black"
            />
            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 text-black"
            />
            <input
              value={formData.company}
              name="company"
              onChange={handleChange}
              placeholder="Enter company"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 text-black"
            />
            <input
              value={formData.jobtitle}
              name="jobtitle"
              onChange={handleChange}
              placeholder="Enter job title"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 text-black"
            />
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBlog;
