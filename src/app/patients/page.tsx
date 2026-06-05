import DashboardLayout from "@/components/layout/DashboardLayout";
import PatientCard from "@/components/patients/PatientCard";
import { patients } from "@/data/patients";

export default function PatientsPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="mb-6 text-3xl font-bold">
          Patients
        </h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {patients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}