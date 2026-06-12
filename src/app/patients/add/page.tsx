"use client";

import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PatientForm from "@/components/patients/PatientForm";
import { usePatients } from "@/context/PatientContext";
import { Patient } from "@/types/patient";

export default function AddPatientPage() {
    const { addPatient } =
        usePatients();

    const router =
        useRouter();

    // submit handler to add new patient from context and then navigate back to patients listing page
    const handleAddPatient = (
  patient: Patient
) => {
  addPatient(patient);

  router.push("/patients");
};

//rendering form
return (
  <DashboardLayout>
    <div className="max-w-3xl p-6">

      <h1 className="mb-6 text-3xl font-bold">
        Add Patient
      </h1>

      <PatientForm
        onSubmit={handleAddPatient}
      />

    </div>
  </DashboardLayout>
);
}