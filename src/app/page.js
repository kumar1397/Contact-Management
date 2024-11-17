"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contacts`);
                const data = await response.json();
                const newdata = data.data;
                setPosts(newdata);
                console.log(data)
                console.log(data.data)
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <>
            <div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-5 rounded-lg bg-slate-800 drop-shadow-xl">
                <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana]">
                    My FULL STACK Blog App With Next.js
                </h1>
            </div>
            {/* Link */}
            <div className="flex my-5">
                <Link
                    href={"/upload  "}
                    className=" md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold text-black"
                >
                    Add New Contact 🚀
                </Link>
            </div>
            <div className="w-full flex  flex-col justify-center items-center">
                {posts.map((post ,index) => (
                    <div key={index} className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center">
                        <div className="flex items-center my-3">
                            <div className="mr-auto">
                                <h2 className="mr-auto font-semibold text-black">{post.fname}{post.lname}</h2>
                            </div>
                            <Link
                                href={`/update/${post._id}`}
                                className="px-4 py-1  text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200"
                            >
                                Edit
                            </Link>
                        </div>
                        
                        <div className=" mr-auto my-1 text-black">
                            <h2>{post.phone}</h2>
                            <h2>{post.email}</h2>
                            <h2>{post.company}</h2>
                            <h2>{post.jobtitle}</h2>
                        </div>
                    </div>
                ))}
            </div>
        
        </>
    );
}