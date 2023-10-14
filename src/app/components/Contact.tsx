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
      <section id="contact" className="flex flex-col gap-5">
        <h1 className="text-2xl  text-light-blue font-semibold text-start h-fit border-b-2  border-orange w-fit ">
          Contact
        </h1>

        <p className="w-full text-start text-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum
          labore similique doloribus non nesciunt tempore laborum, asperiores
          accusamus pariatur perspiciatis enim maxime nisi voluptatibus et
          beatae, excepturi nobis reiciendis, libero recusandae commodi nemo
          ipsum quod. Quae dolore deserunt error nulla ea excepturi mollitia
          earum, magnam eum nam nostrum in.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center space-y-3 w-full "
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
            rows={6}
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
