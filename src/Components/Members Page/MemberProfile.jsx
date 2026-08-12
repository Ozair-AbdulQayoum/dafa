import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

// =========================================================
// MEMBERS DATA
// =========================================================

const members = {
  // =======================================================
  // DIRECTOR
  // =======================================================
  director: {
    name: "Example Name",
    position: "Director",
    department: "Executive Leadership",
    experience: "20+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/director.jpg",

    introduction:
      "The Director provides strategic leadership and overall direction for DAFA, guiding the organization in delivering humanitarian mine action activities and supporting safer communities across Afghanistan.",

    biography:
      "As the Director of the Demining Agency for Afghanistan, the Director provides overall strategic, operational, and organizational leadership. The role includes guiding departmental coordination, supporting organizational development, maintaining relationships with partners and stakeholders, and ensuring that DAFA's humanitarian objectives are implemented effectively and responsibly.",

    education: [
      "Bachelor's Degree",
      "Professional Leadership and Management Training",
      "Humanitarian Mine Action Training",
    ],

    responsibilities: [
      "Provide overall strategic leadership and organizational direction.",
      "Oversee coordination between DAFA departments and management teams.",
      "Guide organizational planning, policies, and development.",
      "Represent DAFA in meetings with partners, authorities, and stakeholders.",
      "Support effective and accountable humanitarian mine action delivery.",
      "Provide leadership for organizational performance and development.",
    ],

    career: [
      {
        period: "2015 – Present",
        position: "Director",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2010 – 2015",
        position: "Senior Management Position",
        organization: "Humanitarian Organization",
      },
      {
        period: "2005 – 2010",
        position: "Program / Operations Management",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // ADMINISTRATION MANAGER
  // =======================================================
  "administration-manager": {
    name: "Example Name",
    position: "HR / Administration Manager",
    department: "Administration",
    experience: "10+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/admin-manager.jpg",

    introduction:
      "An experienced administration professional supporting organizational coordination, human resources, documentation, and effective administrative systems.",

    biography:
      "Supports administrative planning, human resources, documentation, internal coordination, and organizational processes that contribute to effective day-to-day operations.",

    education: [
      "Bachelor's Degree in Business Administration",
      "Professional Administrative Training",
      "Human Resources Management Training",
    ],

    responsibilities: [
      "Coordinate human resources and administrative activities.",
      "Support organizational documentation and records.",
      "Coordinate office administration and internal services.",
      "Support recruitment and personnel-related processes.",
      "Maintain effective administrative procedures.",
    ],

    career: [
      {
        period: "2022 – Present",
        position: "HR / Administration Manager",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2018 – 2022",
        position: "Administration Officer",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // ADMINISTRATION OFFICER
  // =======================================================
  "administration-officer": {
    name: "Example Name",
    position: "HR / Administration Officer",
    department: "Administration",
    experience: "7+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/admin-officer.jpg",

    introduction:
      "An administration professional supporting HR processes, documentation, coordination, and daily administrative activities.",

    biography:
      "Supports the administration team with personnel documentation, office coordination, internal communication, and day-to-day administrative requirements.",

    education: [
      "Bachelor's Degree",
      "Human Resources Training",
      "Administrative Management Training",
    ],

    responsibilities: [
      "Support HR and administrative activities.",
      "Maintain personnel documentation.",
      "Support recruitment and staff coordination.",
      "Assist with office administration.",
      "Support internal administrative communication.",
    ],

    career: [
      {
        period: "2021 – Present",
        position: "HR / Administration Officer",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2018 – 2021",
        position: "Administration Assistant",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // FINANCE MANAGER
  // =======================================================
  "finance-manager": {
    name: "Example Name",
    position: "Finance Manager",
    department: "Finance",
    experience: "12+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/finance-manager.jpg",

    introduction:
      "An experienced finance professional supporting responsible financial management, planning, reporting, and organizational accountability.",

    biography:
      "Supports financial planning, reporting, monitoring, budgeting, and coordination to help ensure responsible management of organizational resources.",

    education: [
      "Bachelor's Degree in Accounting or Finance",
      "Professional Financial Management Training",
      "Accounting and Reporting Training",
    ],

    responsibilities: [
      "Oversee financial operations.",
      "Support financial planning and budgeting.",
      "Prepare and monitor financial reports.",
      "Monitor financial records and transactions.",
      "Support organizational financial accountability.",
    ],

    career: [
      {
        period: "2020 – Present",
        position: "Finance Manager",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2016 – 2020",
        position: "Finance Officer",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // FINANCE OFFICER
  // =======================================================
  "finance-officer": {
    name: "Example Name",
    position: "Finance Officer",
    department: "Finance",
    experience: "8+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/finance-officer.jpg",

    introduction:
      "A finance professional supporting financial records, reporting, transactions, and day-to-day financial activities.",

    biography:
      "Supports the finance department with financial documentation, transaction processing, reporting, and monitoring of organizational financial activities.",

    education: [
      "Bachelor's Degree in Accounting or Finance",
      "Professional Accounting Training",
    ],

    responsibilities: [
      "Maintain financial records.",
      "Support financial reporting.",
      "Process and monitor financial transactions.",
      "Assist with budget monitoring.",
      "Support financial documentation and compliance.",
    ],

    career: [
      {
        period: "2022 – Present",
        position: "Finance Officer",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2018 – 2022",
        position: "Finance Assistant",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // LOGISTICS MANAGER
  // =======================================================
  "ahmad-example": {
    name: "Ahmad Example",
    position: "Logistics Manager / Support Manager",
    department: "Logistics",
    experience: "12+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/logistics-manager.jpg",

    introduction:
      "An experienced logistics professional supporting DAFA's humanitarian operations through effective planning, coordination, resource management, and operational support.",

    biography:
      "With extensive experience in humanitarian and operational environments, Ahmad supports the coordination of logistics activities and helps ensure that essential resources are available to support DAFA's programs and field operations.",

    education: [
      "Bachelor's Degree in Business Administration",
      "Professional Training in Logistics Management",
      "Supply Chain and Resource Management Training",
    ],

    responsibilities: [
      "Coordinate logistics activities and operational requirements.",
      "Support transportation and resource planning.",
      "Monitor supplies, equipment, and inventory.",
      "Coordinate with departments and field teams.",
      "Support efficient delivery of operational resources.",
    ],

    career: [
      {
        period: "2021 – Present",
        position: "Logistics Manager / Support Manager",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2017 – 2021",
        position: "Logistics Officer",
        organization: "Humanitarian Organization",
      },
      {
        period: "2014 – 2017",
        position: "Logistics Assistant",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // LOGISTICS OFFICER
  // =======================================================
  "logistics-officer": {
    name: "Example Name",
    position: "Logistics Officer",
    department: "Logistics",
    experience: "8+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/logistics-officer.jpg",

    introduction:
      "A logistics professional supporting transportation, supplies, equipment, inventory, and operational resource coordination.",

    biography:
      "Supports logistics planning and daily resource coordination to ensure field teams and departments receive the resources required for their activities.",

    education: ["Bachelor's Degree", "Logistics Management Training"],

    responsibilities: [
      "Coordinate logistics requirements.",
      "Support transportation planning.",
      "Monitor supplies and equipment.",
      "Maintain logistics records.",
      "Coordinate with field teams.",
    ],

    career: [
      {
        period: "2021 – Present",
        position: "Logistics Officer",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2018 – 2021",
        position: "Logistics Assistant",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // LOGISTICS ASSISTANT
  // =======================================================
  "logistics-assistant": {
    name: "Example Name",
    position: "Logistics Assistant",
    department: "Logistics",
    experience: "5+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/logistics-assistant.jpg",

    introduction:
      "A logistics support professional assisting with supplies, transportation, inventory, and daily operational requirements.",

    biography:
      "Provides practical support to the logistics team and assists with the coordination and availability of operational resources.",

    education: ["Bachelor's Degree", "Logistics and Supply Training"],

    responsibilities: [
      "Assist with logistics activities.",
      "Support inventory management.",
      "Assist with transportation coordination.",
      "Support equipment and supply records.",
      "Assist logistics officers with daily requirements.",
    ],

    career: [
      {
        period: "2022 – Present",
        position: "Logistics Assistant",
        organization: "Demining Agency for Afghanistan",
      },
    ],
  },

  // =======================================================
  // STOREKEEPER
  // =======================================================
  storekeeper: {
    name: "Example Name",
    position: "Storekeeper",
    department: "Logistics",
    experience: "6+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/storekeeper.jpg",

    introduction:
      "A logistics support professional responsible for organized storage, inventory monitoring, and equipment management.",

    biography:
      "Supports the logistics department by maintaining organized storage facilities, monitoring stock levels, and keeping accurate inventory records.",

    education: [
      "Bachelor's Degree",
      "Storekeeping and Inventory Management Training",
    ],

    responsibilities: [
      "Maintain store and inventory records.",
      "Monitor stock levels.",
      "Receive and issue supplies.",
      "Maintain organized storage facilities.",
      "Report inventory requirements.",
    ],

    career: [
      {
        period: "2020 – Present",
        position: "Storekeeper",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2017 – 2020",
        position: "Logistics Assistant",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // OPERATIONS MANAGER
  // =======================================================
  "operations-manager": {
    name: "Example Name",
    position: "Operations Manager",
    department: "Operations",
    experience: "15+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/operations-manager.jpg",

    introduction:
      "An experienced operations professional supporting the planning, coordination, and delivery of humanitarian mine action activities.",

    biography:
      "Provides operational leadership and coordination while supporting teams in planning and delivering humanitarian mine action activities effectively and safely.",

    education: [
      "Bachelor's Degree",
      "Humanitarian Mine Action Training",
      "Operational Management Training",
    ],

    responsibilities: [
      "Coordinate operational activities.",
      "Support field planning and implementation.",
      "Coordinate with technical and field teams.",
      "Monitor operational requirements.",
      "Support safe and effective program delivery.",
    ],

    career: [
      {
        period: "2019 – Present",
        position: "Operations Manager",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2014 – 2019",
        position: "Operations Officer",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // OPERATIONS OFFICER
  // =======================================================
  "operations-officer": {
    name: "Example Name",
    position: "Operations Officer",
    department: "Operations",
    experience: "9+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/operations-officer.jpg",

    introduction:
      "An operations professional supporting field planning, coordination, monitoring, and implementation of humanitarian activities.",

    biography:
      "Supports the operations team in coordinating field activities and ensuring that operational plans are implemented effectively.",

    education: ["Bachelor's Degree", "Humanitarian Mine Action Training"],

    responsibilities: [
      "Support operational planning.",
      "Coordinate field activities.",
      "Monitor operational progress.",
      "Coordinate with field teams.",
      "Prepare operational updates and reports.",
    ],

    career: [
      {
        period: "2021 – Present",
        position: "Operations Officer",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2017 – 2021",
        position: "Field Operations Officer",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // QA MANAGER
  // =======================================================
  "qa-manager": {
    name: "Example Name",
    position: "QA Manager",
    department: "Operations",
    experience: "11+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/qa-manager.jpg",

    introduction:
      "A quality assurance professional supporting the monitoring and continuous improvement of humanitarian mine action activities.",

    biography:
      "Supports quality assurance systems and monitoring processes to help ensure that operational activities meet required standards and organizational procedures.",

    education: [
      "Bachelor's Degree",
      "Quality Management Training",
      "Humanitarian Mine Action Training",
    ],

    responsibilities: [
      "Oversee quality assurance activities.",
      "Monitor operational standards.",
      "Conduct quality reviews and assessments.",
      "Support corrective actions and improvements.",
      "Coordinate with operational teams on quality requirements.",
    ],

    career: [
      {
        period: "2020 – Present",
        position: "QA Manager",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2016 – 2020",
        position: "QA Officer",
        organization: "Humanitarian Organization",
      },
    ],
  },

  // =======================================================
  // QA OFFICER
  // =======================================================
  "qa-officer": {
    name: "Example Name",
    position: "QA Officer",
    department: "Operations",
    experience: "7+ Years Experience",
    location: "Kabul, Afghanistan",
    image: "/images/team/qa-officer.jpg",

    introduction:
      "A quality assurance professional supporting monitoring, assessment, documentation, and compliance with operational standards.",

    biography:
      "Supports quality assurance activities by conducting monitoring visits, documenting findings, and coordinating with operational teams to improve implementation quality.",

    education: [
      "Bachelor's Degree",
      "Quality Assurance Training",
      "Humanitarian Mine Action Training",
    ],

    responsibilities: [
      "Conduct quality monitoring activities.",
      "Document quality findings.",
      "Support operational assessments.",
      "Monitor compliance with procedures.",
      "Support corrective and improvement actions.",
    ],

    career: [
      {
        period: "2022 – Present",
        position: "QA Officer",
        organization: "Demining Agency for Afghanistan",
      },
      {
        period: "2019 – 2022",
        position: "Field Officer",
        organization: "Humanitarian Organization",
      },
    ],
  },
};

// =========================================================
// MEMBER PROFILE PAGE
// =========================================================

export default function MemberProfile() {
  const { slug } = useParams();

  const member = members[slug];

  // =======================================================
  // PROFILE NOT FOUND
  // =======================================================

  if (!member) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
            Members
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Profile Not Found
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-slate-500">
            The requested member profile could not be found.
          </p>

          <Link
            to="/members"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#087B5A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B3D2E]"
          >
            <FaArrowLeft size={12} />
            Back to Members
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-[#0B3D2E]">
        {/* Decorative Elements */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#A7F3D0]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          {/* Back Link */}
          <Link
            to="/members"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-50/60 transition hover:text-[#A7F3D0]"
          >
            <FaArrowLeft size={12} />
            Back to Our People
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto w-full max-w-[390px]"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0B3D2E]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Profile Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7F3D0]">
                {member.department}
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {member.name}
              </h1>

              <p className="mt-4 text-lg font-semibold text-[#A7F3D0] sm:text-xl">
                {member.position}
              </p>

              {/* Meta Information */}
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-green-50/70">
                  <FaBriefcase size={13} className="text-[#A7F3D0]" />

                  {member.experience}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-green-50/70">
                  <FaMapMarkerAlt size={13} className="text-[#A7F3D0]" />

                  {member.location}
                </span>
              </div>

              <p className="mt-8 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg">
                {member.introduction}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PROFESSIONAL PROFILE
      =================================================== */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:px-10">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
              Professional Profile
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              About {member.name}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              {member.biography}
            </p>
          </motion.div>

          {/* Professional Information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-[#0F172A]">
              Professional Information
            </h3>

            <div className="mt-6 space-y-5">
              <InfoItem
                icon={FaBriefcase}
                label="Position"
                value={member.position}
              />

              <InfoItem
                icon={FaUsers}
                label="Department"
                value={member.department}
              />

              <InfoItem
                icon={FaCalendarAlt}
                label="Experience"
                value={member.experience}
              />

              <InfoItem
                icon={FaMapMarkerAlt}
                label="Location"
                value={member.location}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================
          RESPONSIBILITIES
      =================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
            Role & Responsibilities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Areas of Responsibility
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {member.responsibilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-sm"
              >
                <FaCheckCircle
                  className="mt-1 shrink-0 text-[#087B5A]"
                  size={16}
                />

                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          EDUCATION & TRAINING
      =================================================== */}

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
            Education & Training
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Education & Professional Development
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {member.education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-[#087B5A]">
                  <FaGraduationCap size={17} />
                </div>

                <p className="text-sm font-medium text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          CAREER
      =================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087B5A]">
            Career
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Professional Experience
          </h2>

          <div className="relative mt-12 max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#087B5A]/20" />

            <div className="space-y-10">
              {member.career.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative pl-10"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-white bg-[#087B5A]" />

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#087B5A]">
                    {item.period}
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-[#0F172A]">
                    {item.position}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.organization}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          BOTTOM CTA
      =================================================== */}

      <section className="bg-[#0B3D2E] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:px-8 md:flex-row lg:px-10">
          <div>
            <p className="text-lg font-bold text-white">
              Explore more DAFA personnel
            </p>

            <p className="mt-1 text-sm text-green-50/60">
              View key personnel across DAFA departments.
            </p>
          </div>

          <Link
            to="/members"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ea580c] hover:shadow-lg"
          >
            View All Members
            <FaArrowRight size={12} />
          </Link>
        </div>
      </section>
    </main>
  );
}

// =========================================================
// INFORMATION ITEM
// =========================================================

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#087B5A]/10 text-[#087B5A]">
        <Icon size={15} />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-700">{value}</p>
      </div>
    </div>
  );
}
