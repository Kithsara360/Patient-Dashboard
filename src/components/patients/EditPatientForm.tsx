"use client";

import PatientForm from "@/components/patients/PatientForm";
import { editPatient } from "@/lib/actions";
import { Patient } from "@/types/patient";

interface EditPatientFormProps {
  patient: Patient;
}

export default function EditPatientForm({ patient }: EditPatientFormProps) {
  const handleUpdatePatient = (updatedPatient: Patient) => {
    editPatient(patient.id, updatedPatient);
  };

  return <PatientForm initialData={patient} onSubmit={handleUpdatePatient} />;
}