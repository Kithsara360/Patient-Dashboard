import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { getPatientById } from "@/lib/patient-service";

interface PageProps {
  params: { id: string };
}

export default async function PatientDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const patient = getPatientById(id); //Async function- params type becomes Promise (id: string), and await it before destructuring

  if (!patient) {
    return (
      <DashboardLayout>
        <h1 className="text-2xl font-bold">Patient Not Found</h1>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl space-y-2 p-6">
        <h1 className="mb-4 text-3xl font-bold">{patient.name}</h1>
        <p>Patient ID: {patient.patientId}</p>
        <p>Age: {patient.age}</p>
        <p>Phone: {patient.phone}</p>
        <p>Ward: {patient.ward}</p>
        <p>Attending Doctor: {patient.attendingDoctor}</p>
        <p>Medical History: {patient.medicalHistory}</p>
        <p>Blood Group: {patient.bloodGroup}</p>
        <p>Hemoglobin: {patient.hemoglobin}</p>
        <p>White Blood Cells: {patient.whiteBloodCells}</p>

        <Link
          href={`/patients/${patient.id}/edit`}
          className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
          Edit
        </Link>
      </div>
    </DashboardLayout>
  );
}