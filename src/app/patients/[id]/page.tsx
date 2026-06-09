import DashboardLayout from "@/components/layout/DashboardLayout";
import { patients } from "@/data/patients";
import Link from "next/link";

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
  <div className="space-y-6 p-6">

    <div className="flex items-start justify-between">
      {/* Left side: patient identity */}
      <div>
        <h1 className="text-3xl font-bold">
          {patient.name}
        </h1>

        <p className="text-sm text-gray-500">
          {patient.patientId}
        </p>
      </div>

      {/* Edit button to the right side of the patient's full details page*/}
      <Link
        href={`/patients/${patient.id}/edit`}
        className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Edit Patient
      </Link>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border p-4">
        <h2 className="mb-3 font-semibold">
          Patient Information
        </h2>

        <p>Name: {patient.name}</p>
        <p>Age: {patient.age}</p>
        <p>Phone: {patient.phone}</p>
        <p>Patient ID: {patient.patientId}</p>
      </div>

      <div className="rounded-lg border p-4">
        <h2 className="mb-3 font-semibold">
          Hospital Information
        </h2>

        <p>Ward: {patient.ward}</p>
        <p>Doctor: {patient.attendingDoctor}</p>
      </div>

      <div className="rounded-lg border p-4">
        <h2 className="mb-3 font-semibold">
          Medical History
        </h2>
        <p>{patient.medicalHistory}</p>
      </div>

      <div className="rounded-lg border p-4">
        <h2 className="mb-3 font-semibold">
        Blood Report
        </h2>

      <div className="report">
        <p>
          Blood Group: {patient.bloodGroup}
        </p>

        <p>
        Hemoglobin: {patient.hemoglobin}
        </p>

        <p>
        White Blood Cells:{" "}
        {patient.whiteBloodCells}
        </p>
      </div>
      </div>

    </div>
  </div>
  );
}