"use client";

import PatientForm from "@/components/patients/PatientForm";
import { createPatient } from "@/lib/actions";
import { Patient } from "@/types/patient";

export default function AddPatientForm() {
  const handleAddPatient = (patient: Patient) => {
    createPatient(patient); // calls the Server Action directly, like a normal function
  };

  return <PatientForm onSubmit={handleAddPatient} />;
}