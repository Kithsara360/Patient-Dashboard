import DashboardLayout from "@/components/layout/DashboardLayout";
import EditPatientForm from "@/components/patients/EditPatientForm";
import { getPatientById } from "@/lib/patient-service";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPatientPage({ params }: PageProps) {
  const { id } = await params;
  const patient = getPatientById(id);

  if (!patient) {
    return (
      <DashboardLayout>
        <h1 className="text-2xl font-bold">Patient Not Found</h1>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl p-6">
        <h1 className="mb-6 text-3xl font-bold">Edit Patient</h1>
        <EditPatientForm patient={patient} />
      </div>
    </DashboardLayout>
  );
}