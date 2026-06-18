import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PatientCard from "@/components/patients/PatientCard";
import { getPatients } from "@/lib/patient-service";

// No "use client" here — this runs on the server, every time the page is requested.
export default function PatientsPage() {
  const patients = getPatients(); // direct function call from patient-service

  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Patients</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </DashboardLayout>
  );
}