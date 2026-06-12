"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PatientForm from "@/components/patients/PatientForm";
import { usePatients } from "@/context/PatientContext";
import { Patient } from "@/types/patient";

export default function EditPatientPage() {   //fetch details from context pg
    const params =
        useParams();

    const id =
        params.id as string;

    const router =
        useRouter();

    const { //get context- update data from context
        patients,
        updatePatient,
    } = usePatients();

    const patient =     //find current patient from id
  patients.find(
    (p) => p.id === id
  );

    if (!patient) {     // for patients not found
        return (
            <DashboardLayout>
                <h1>
                    Patient Not Found
                </h1>
            </DashboardLayout>
        );
    }

    // update handler
    const handleUpdatePatient = (
  updatedPatient: Patient
) => {
  updatePatient(
    id,
    updatedPatient
  );

  router.push(
    `/patients/${id}`
  );
};


    // render form
    return (
    <DashboardLayout>
    <div className="max-w-3xl p-6">

      <h1 className="mb-6 text-3xl font-bold">
        Edit Patient
      </h1>

      <PatientForm
        initialData={patient}
        onSubmit={handleUpdatePatient}
      />

    </div>
  </DashboardLayout>
);

}