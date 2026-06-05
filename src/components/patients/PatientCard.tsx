"use client";

import { useRouter } from "next/navigation";

interface PatientCardProps {
  patient: {
    id: number;
    patientId: string;
    name: string;
    age: number;
  };
}

export default function PatientCard({
  patient,
}: PatientCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push(`/patients/${patient.id}`)
      }
      className="cursor-pointer rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <h2 className="text-lg font-bold">
        {patient.name}
      </h2>

      <p className="mt-2 text-gray-500">
        {patient.patientId}
      </p>

      <p className="mt-2 text-sm">
        Age: {patient.age}
      </p>
    </div>
  );
}