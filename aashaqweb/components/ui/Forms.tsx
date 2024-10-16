"use client";
import React from "react";
import FormData from "./FormData";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Buttom from "./Buttom";
import InputForm from "./InputForm";
import { MdLocalShipping } from "react-icons/md";
import { motion } from "framer-motion";

//Schemas
const OrderSchema = z.object({
  firstName: z.string().min(4, "Name invalid"),
  secondName: z.string().min(4, "Name invalid"),
  email: z.string().min(6, "Invalid email").email("Invalid email"),
});

const NewsLetterSchema = z.object({
  email: z.string().min(6, "Invalid email").email("Invalid email"),
});

//Types
export type OrdersFormDataType = z.infer<typeof OrderSchema>;
export type NewsLetterFormDataType = z.infer<typeof NewsLetterSchema>;

//unified Form Data Type
export type FromDataType = OrdersFormDataType | NewsLetterFormDataType;

export const Orders = () => {
  const form = useForm<OrdersFormDataType>({
    resolver: zodResolver(OrderSchema),
  });

  const [CurrentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      text: "Personal Info",
      id: 0,
      number: 1,
    },
    {
      text: "Address",
      id: 1,
      number: 2,
    },
    {
      text: "Submmited",
      id: 2,
      number: 3,
    },
  ];

  console.log("Steps Length : ", steps.length);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<OrdersFormDataType> = (data) => {
    console.log("Orders Submitted", data);
  };

  return (
    <section className="h-screen">
      <div>
        <FormData name="name" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <MdLocalShipping
              className={`h-20 w-20 text-white ${
                CurrentStep === steps.length - 1 ? "text-green-500" : null
              }`}
            />
            <p className="text-xl font-semibold">
              Order Now and Enjoy Hassle-Free Delivery Right to Your Door!
            </p>
            <div>
              {steps.map((item) => {
                return (
                  <div key={item.id}>
                    <p
                      className={`text-4xl ${
                        item.id === CurrentStep && item.id === steps.length - 1
                          ? "flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white"
                          : item.id === CurrentStep && item.id !== 2
                            ? "flex h-10 w-10 items-center justify-center rounded-full bg-red-500"
                            : null
                      }`}
                      key={item.id}
                    >
                      {item.number}
                    </p>
                    <p
                      className={`${
                        item.id === CurrentStep && item.id === steps.length - 1
                          ? "text-green-500"
                          : item.id === CurrentStep && item.id !== 2
                            ? "text-red-500"
                            : null
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
          // className="flex w-full items-center justify-center"
          >
            {CurrentStep === 0 && (
              <div>
                <InputForm
                  placeholder="First Name"
                  label="Name"
                  id="name"
                  type="text"
                />
                <InputForm
                  placeholder="Last Name"
                  label="Name"
                  id="name"
                  type="text"
                />
                <InputForm
                  placeholder="Email"
                  label="Email"
                  id="email"
                  type="text"
                />
                <InputForm
                  placeholder="+908-000-000"
                  label="Phone"
                  id="phone"
                  type="text"
                />
                <Buttom
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                  className="h-20 w-[300px] bg-red-500 hover:bg-red-400 max-sm:h-20 max-sm:w-40"
                  label="Next Step"
                />
              </div>
            )}
            {CurrentStep === 1 && (
              <div>
                <InputForm
                  placeholder="Address"
                  label="Address"
                  id="address"
                  type="text"
                />
                <InputForm
                  placeholder="Zip Code"
                  label="Zip Code"
                  id="zipcode"
                  type="text"
                />
                <div className="flex gap-5">
                  <Buttom
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="h-20 w-[300px] bg-red-500 hover:bg-red-400 max-sm:h-20 max-sm:w-40"
                    label="Back"
                  />
                  <Buttom
                    type="button"
                    onClick={() => {
                      setTimeout(() => {
                        console.log("Submmited");
                        setCurrentStep(0);
                      }, 1000);
                      setCurrentStep((prev) => prev + 1);
                    }}
                    className="h-20 w-[300px] bg-green-500 hover:bg-green-400 max-sm:h-20 max-sm:w-40"
                    label="Submmit"
                  />
                </div>
              </div>
            )}
            {CurrentStep === 2 && (
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-10 text-6xl text-green-500">Thank You</p>
              </motion.div>
            )}
          </div>
        </FormData>
      </div>
    </section>
  );
};

//News Letter Form

export const NewsLetter = () => {
  const form = useForm<NewsLetterFormDataType>({
    resolver: zodResolver(NewsLetterSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<NewsLetterFormDataType> = (data) => {
    console.log("News Letter Submitted", data);
  };
  return (
    <section className="">
      <FormData name="name" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-9xl"> I am NewsLetter</p>
      </FormData>
    </section>
  );
};

const Forms = ({ name }: { name: string }) => {
  switch (name) {
    case "Orders":
      return <Orders />;
    case "NewsLetter":
      return <NewsLetter />;
  }
};

export default Forms;
