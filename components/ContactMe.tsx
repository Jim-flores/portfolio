import React, { useRef, FormEvent } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
};

type Props = {};
function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const current = form.current;
    if (!current) return;
    if (
      current?.user_name.value &&
      current?.user_email.value &&
      current?.message.value
    ) {
      emailjs
        .sendForm(
          "service_bn3vfye",
          "template_dqj4k4r",
          current,
          "F_qU0Sf32GplKhLhr"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .then(() => alert("Enviado"));
    } else {
      return alert("Faltan datos");
    }
  };

  return (
    <div className="bg-work bg-cover bg-fixed h-screen xl:py-10 md:py-10 sm:py-0">
      <div className="h-full flex relative flex-col text-center md:text-center md:flex-row max-w-lg px-10 justify-evenly mx-auto items-center bg-[rgb(36,36,36)]/90 rounded-lg sm:w-[98%] sm:h-[100%]">
        <h3 className="absolute xl:top-12 sm:top-24 md:top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
        <div className="flex flex-col space-y-10 mt-20">
          <h4 className="xl:text-2xl md:text-2xl sm:text-lg font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">Lets talk</span>
          </h4>
          <div className="space-y-10">
            <div className="flex items-center space-x-5">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="xl:text-2xl md:text-2xl sm:text-lg">
                +051933065147
              </p>
            </div>
            <div className="flex items-center space-x-5">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="xl:text-2xl md:text-2xl sm:text-lg">
                j1mer0528@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-5">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="xl:text-2xl md:text-2xl sm:text-lg">Puno, Perú</p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-2 xl:w-fit md:w-fit mx-auto sm:w-80"
            >
              <div className="flex space-x-2">
                <input
                  {...register("user_name")}
                  placeholder="Name"
                  type="text"
                  className="contactInput sm:w-[50%]"
                />
                <input
                  {...register("user_email")}
                  placeholder="Email"
                  type="email"
                  className="contactInput sm:w-[50%]"
                />
              </div>
              <input
                {...register("subject")}
                placeholder="Subject"
                type="text"
                className="contactInput"
              />
              <textarea
                {...register("message")}
                placeholder="Message"
                className="contactInput"
              />
              <button
                type="submit"
                className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
