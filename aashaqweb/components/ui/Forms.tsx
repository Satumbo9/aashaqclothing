"use client";
import React from "react";
import FormData from "./FormData";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Buttom from "./Buttom";
import InputForm from "./InputForm";

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
      <div className="mt-[180px] flex items-center justify-center">
        <p className="text-9xl"> Orders</p>
        <FormData
          className="mt-[100px] flex w-[600px] flex-col items-center justify-center gap-5"
          name="name"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputForm placeholder="Name" label="Name" id="name" type="text" />
          <InputForm placeholder="Email" label="Email" id="email" type="text" />
          <InputForm
            placeholder="+908-000-000"
            label="Phone"
            id="email"
            type="text"
          />
          <Buttom
            type="submit"
            className="h-10 w-[300px] bg-red-500"
            label="Submmit"
          />
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
