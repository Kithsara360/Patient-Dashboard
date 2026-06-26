"use client";

import { useState } from "react";
import { Patient } from "@/types/patient";
import PatientCard from "@/components/patients/PatientCard";

interface PatientListProps {
  patients: Patient[]; // full list passed down from server
}

export default function PatientList({ patients }: PatientListProps) {

  // search term state — updates on every keystroke
  const [search, setSearch] = useState("");

  // filter state — "all" means no filter applied
  const [wardFilter, setWardFilter] = useState("all");
  const [doctorFilter, setDoctorFilter] = useState("all");

  // Builds unique ward options from the patient list for the filter dropdown
  const wards = ["all", ...Array.from(new Set(patients.map((p) => p.ward)))];   //gets non duplicate wards to a set - then array

  // Build unique doctor options filter dropdown the same way
  const doctors = ["all", ...Array.from(new Set(patients.map((p) => p.attendingDoctor)))];

  // Filtering logic
  // This runs every render — no useEffect needed, it's just a calculation
  const filtered = patients.filter((patient) => {   // .filter() loops through every patient and returns a new array containing only patients where the callback returns "true"
    // search matches if any of these fields contain the searched term
    const matchesSearch =
      search === "" || // if search is empty, everything passes
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.patientId.toLowerCase().includes(search.toLowerCase()) ||
      patient.ward.toLowerCase().includes(search.toLowerCase()) ||
      patient.attendingDoctor.toLowerCase().includes(search.toLowerCase());

    // ward filter — passes if "all" selected, or exact match
    const matchesWard =
      wardFilter === "all" || patient.ward === wardFilter;

    // doctor filter — same pattern
    const matchesDoctor =
      doctorFilter === "all" || patient.attendingDoctor === doctorFilter;

    // patient must pass ALL three checks to appear
    return matchesSearch && matchesWard && matchesDoctor;
  });

  return (
    <div>
      {/* SEARCH + FILTER BAR */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">

        {/* Search input */}
        <input
          type="text"
          placeholder="Search by name, ID, ward, doctor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}   //onChange runs when user types     //setSearch updates state
          className="flex-1 rounded border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Ward filter dropdown */}
        <select
          value={wardFilter}
          onChange={(e) => setWardFilter(e.target.value)}
          className="rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {wards.map((ward) => (
            <option key={ward} value={ward}>
              {ward === "all" ? "All Wards" : `Ward: ${ward}`}
            </option>
          ))}
        </select>

        {/* Doctor filter dropdown */}
        <select
          value={doctorFilter}
          onChange={(e) => setDoctorFilter(e.target.value)}
          className="rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {doctors.map((doctor) => (
            <option key={doctor} value={doctor}>
              {doctor === "all" ? "All Doctors" : doctor}
            </option>
          ))}
        </select>

        {/* Clear button — only shows when something is active */}
        {(search || wardFilter !== "all" || doctorFilter !== "all") && (
          <button
            onClick={() => {
              setSearch("");
              setWardFilter("all");
              setDoctorFilter("all");
            }}
            className="rounded border px-3 py-2 text-sm text-red-500 hover:bg-red-50"
          >
            Clear
          </button>
        )}
      </div>

      {/* RESULTS COUNT */}
      <p className="mb-3 text-sm text-gray-500">
        Showing {filtered.length} of {patients.length} patients
      </p>

      {/* PATIENT CARDS or EMPTY STATE */}
      {filtered.length === 0 ? (
        <div className="rounded border border-dashed p-8 text-center text-gray-400">
          No patients match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((patient) => (
            <PatientCard key={patient.id} patient={patient} /> 
          ))}
        </div>
      )}
    </div>
  );
}