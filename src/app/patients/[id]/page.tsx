import DashboardLayout from "@/components/layout/DashboardLayout";
import { patients } from "@/data/patients";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PatientDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const patient = patients.find(
    (p) => p.id === id
  );

  if (!patient) {
    return (
      <DashboardLayout>
        <h1>Patient Not Found</h1>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="rounded-xl border bg-white p-6">
        <h1 className="mb-4 text-3xl font-bold">
          {patient.name}
        </h1>

        <p>Patient ID: {patient.patientId}</p>
        <p>Age: {patient.age}</p>
        <p>Phone: {patient.phone}</p>
        <p>Ward: {patient.ward}</p>
        <p>
          Doctor: {patient.attendingDoctor}
        </p>
        <p>
          Medical History: {patient.medicalHistory}
        </p>
      </div>
    </DashboardLayout>
  );
}