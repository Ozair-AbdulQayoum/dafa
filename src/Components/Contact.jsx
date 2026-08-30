// src/Components/Home-Page/Contact.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

import { contactData } from "./ContactData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#087B5A]/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#0284C7]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#087B5A]/40" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087B5A] sm:text-sm">
              {contactData.badge}
            </p>

            <span className="h-px w-10 bg-[#087B5A]/40" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
            {contactData.title}{" "}
            <span className="text-[#087B5A]">
              {contactData.highlightedTitle}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {contactData.description}
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTACT AREA
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="rounded-3xl bg-[#0B3D2E] p-7 text-white shadow-xl sm:p-9 lg:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A7F3D0]">
              Contact Information
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
              Let's Start a Conversation
            </h3>

            <p className="mt-4 text-sm leading-7 text-green-50/70 sm:text-base">
              Our team is available to answer questions and provide information
              about DAFA's humanitarian mine-action activities.
            </p>

            {/* Contact Items */}

            <div className="mt-9 space-y-7">
              {contactData.contactInfo.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <div className="group flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#A7F3D0] transition-all duration-300 group-hover:bg-[#F97316] group-hover:text-white">
                      <Icon size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-100/50">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm font-medium leading-6 text-white/90">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a key={index} href={item.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Small Bottom Accent */}

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs leading-6 text-green-50/50">
                Demining Agency for Afghanistan
              </p>

              <p className="mt-1 text-sm font-semibold text-white/80">
                Working toward safer communities.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#087B5A]">
                {contactData.form.title}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                How Can We Help?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {contactData.form.description}
              </p>
            </div>

            {/* Success Message */}

            {submitted && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
              >
                <FaCheckCircle />

                <span>Your message has been submitted successfully.</span>
              </motion.div>
            )}

            {/* Form */}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-[#0F172A]"
                  >
                    {contactData.form.fields.firstName.label}
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder={contactData.form.fields.firstName.placeholder}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087B5A] focus:bg-white focus:ring-4 focus:ring-[#087B5A]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-[#0F172A]"
                  >
                    {contactData.form.fields.lastName.label}
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder={contactData.form.fields.lastName.placeholder}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087B5A] focus:bg-white focus:ring-4 focus:ring-[#087B5A]/10"
                  />
                </div>
              </div>

              {/* Email + Phone */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#0F172A]"
                  >
                    {contactData.form.fields.email.label}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={contactData.form.fields.email.placeholder}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087B5A] focus:bg-white focus:ring-4 focus:ring-[#087B5A]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#0F172A]"
                  >
                    {contactData.form.fields.phone.label}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={contactData.form.fields.phone.placeholder}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087B5A] focus:bg-white focus:ring-4 focus:ring-[#087B5A]/10"
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#0F172A]"
                >
                  {contactData.form.fields.subject.label}
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder={contactData.form.fields.subject.placeholder}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087B5A] focus:bg-white focus:ring-4 focus:ring-[#087B5A]/10"
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#0F172A]"
                >
                  {contactData.form.fields.message.label}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder={contactData.form.fields.message.placeholder}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#087B5A] focus:bg-white focus:ring-4 focus:ring-[#087B5A]/10"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#087B5A] px-6 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3D2E] hover:shadow-lg"
              >
                <span>{contactData.form.buttonText}</span>

                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* =====================================================
            IMPORTANT NOTICE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 flex items-start gap-4 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-5 sm:px-6"
        >
          <div className="mt-0.5 shrink-0 text-[#F97316]">
            <FaExclamationTriangle size={18} />
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#0F172A]">
              {contactData.importantNotice.title}
            </h4>

            <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
              {contactData.importantNotice.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
