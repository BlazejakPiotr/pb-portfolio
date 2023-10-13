"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:demojohndoe01@gmail.com?subject=${data.subject}&body=Hey its ${data.name}, ${data.message}`;
  };
  return (
    <>
      <section
        id="contact"
        className="max-w-6xl mx-auto p-5 flex flex-col flex-wrap justify-center items-center gap-10 min-h-screen"
      >
        <h1 className="text-4xl text-light-blue font-bold  h-fit mt-[72px]">
          Get in <span className="text-orange">Touch</span>
        </h1>

        <p className="text-blue md:w-[40%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum
          labore similique doloribus non nesciunt tempore laborum, asperiores
          accusamus pariatur perspiciatis enim maxime nisi voluptatibus et
          beatae, excepturi nobis reiciendis, libero recusandae commodi nemo
          ipsum quod. Quae dolore deserunt error nulla ea excepturi mollitia
          earum, magnam eum nam nostrum in.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center space-y-3 w-full md:w-[40%] "
        >
          <input
            {...register("name", { required: true })}
            className="placeholder-purple border border-purple text-white focus:outline-none p-2 bg-transparent rounded-lg w-full"
            placeholder="Your name"
            type="text"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
          <input
            {...register("subject", { required: true })}
            className="placeholder-purple border border-purple text-white focus:outline-none p-2 bg-transparent rounded-lg w-full"
            placeholder="Subject"
            type="text"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
          <textarea
            {...register("message", { required: true })}
            rows={8}
            className="placeholder-purple border border-purple text-white focus:outline-none p-2 bg-transparent rounded-lg w-full"
            placeholder="Your message"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
          <button
            type="submit"
            className="bg-orange p-3 rounded-lg font-bold w-full text-white hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
