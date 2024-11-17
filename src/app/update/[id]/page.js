"use client";

import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { useParams } from "next/navigation";

const EditContact = () => {
    const { id } = useParams();
    const router = useRouter();
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        company: "",
        jobtitle: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateContact = async (data) => {
        // if (!id) {
        //     alert("ID is missing");
        //     throw new Error("ID is required for updating the contact");
        // }
        console.log(id);
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/update/${id}`;
        // alert(`The URL is: ${url}`);
       
        console.log("Payload being sent:", JSON.stringify(data));
 
        try {
           const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/update/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            if (!res.ok) {
                throw new Error("Failed to update contact");
            }
            return await res.json();
        } catch (error) {
            alert("qqqError updating contact:", error);
            console.error("Error updating contact:", error);
            throw error;
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updated = await updateContact({ ...formData}); // Pass `id`
            if (updated) {
                alert("Contact Updated Successfully");
                router.push("/");
            }
        } catch (error) {
            alert("Failed to Update Contact at submit");
            console.error("Submit Error:", error);
        }
    };
    

    const handleDelete = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (res.ok) {
                alert("Contact deleted successfully!");
                router.push('/'); // Redirect to homepage or list
            } else {
                const errorData = await res.json();
                alert(`Failed to delete contact: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            alert("Error deleting contact: " + error.message);
            console.error("Error deleting contact:", error);
        }
    };
    

    return (
        <Fragment>
            <div className="w-full m-auto flex my-4">
                <div className="flex flex-col justify-center items-center m-auto">
                    <p className="text-2xl text-slate-200 font-bold p-3">Edit Contact 🚀</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            name="fname"

                            placeholder="First Name"
                            type="text"
                            value={formData.fname}
                            onChange={handleChange}
                            className="rounded-md px-4 w-full py-2 my-2 text-black"
                        />
                        <input
                            name="lname"
                            placeholder="Last Name"
                            type="text"
                            value={formData.lname}
                            onChange={handleChange}
                            className="rounded-md px-4 w-full py-2 my-2 text-black"
                        />
                        <input
                            name="phone"
                            placeholder="Phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            className="rounded-md px-4 w-full py-2 my-2 text-black"
                        />
                        <input
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-md px-4 w-full py-2 my-2 text-black"
                        />
                        <input
                            name="company"
                            placeholder="Company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="rounded-md px-4 w-full py-2 my-2 text-black"
                        />
                        <input
                            name="jobtitle"
                            placeholder="Job Title"
                            type="text"
                            value={formData.jobtitle}
                            onChange={handleChange}
                            className="rounded-md px-4 w-full py-2 my-2 text-black"
                        />
                        <div className="flex justify-between">
                            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 text-black rounded-lg m-auto hover:bg-slate-100">
                                Update
                            </button>
                        </div>
                    </form>
                    <button
                        onClick={handleDelete}
                        className="font-semibold px-4 py-2 shadow-xl bg-red-400 rounded-lg m-auto mt-2 hover:bg-red-500"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default EditContact;

