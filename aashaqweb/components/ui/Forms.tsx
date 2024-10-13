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
import { nanoid } from "nanoid";
import Image from "next/image";
import shop1 from "../img/shop1.svg";
import shop2 from "../img/shop2.svg";

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
      id: 1,
    },
    {
      text: "Address",
      id: 2,
    },
    {
      text: "Submmit",
      id: 3,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<OrdersFormDataType> = (data) => {
    console.log("Orders Submitted", data);
  };

  return (
    <div className="flex size-full flex-col items-center">
      <div className="mt-[80px] flex items-center justify-center gap-6">
        <FormData
          className="mt-[100px] flex h-[500px] w-[600px] flex-col items-center justify-center gap-10"
          name="name"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <MdLocalShipping className="h-20 w-20 text-white" />
            <p className="text-xl font-semibold">
              Order Now and Enjoy Hassle-Free Delivery Right to Your Door!
            </p>
            <div className="flex gap-20 font-bold">
              {steps.map((item, index) => {
                return (
                  <div
                    className={`flex flex-col items-center justify-center gap-2`}
                  >
                    <p
                      className={`text-4xl ${index === CurrentStep ? "flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white" : null}`}
                      key={item.id}
                    >
                      {item.id}
                    </p>
                    <p
                      className={`${index === CurrentStep ? "text-red-500" : null} `}
                    >
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {CurrentStep === 0 && (
            <div className="flex flex-col items-center justify-center gap-6">
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
                className="h-20 w-[300px] bg-red-500 hover:bg-red-400"
                label="Next Step"
              />
            </div>
          )}

          {CurrentStep === 1 && (
            <div className="flex flex-col items-center justify-center gap-6">
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
                  className="h-20 w-[300px] bg-red-500 hover:bg-red-400"
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
                  className="h-20 w-[300px] bg-green-500 hover:bg-green-400"
                  label="Submmit"
                />
              </div>
            </div>
          )}
          {CurrentStep === 2 && (
            <div>
              <p className="mt-10 text-9xl">Thank</p>
            </div>
          )}
        </FormData>
      </div>
    </div>
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
    <div className="">
      <FormData name="name" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-9xl"> I am NewsLetter</p>
      </FormData>
    </div>
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
