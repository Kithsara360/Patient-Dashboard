"use client";

import { useRouter } from "next/navigation";
import { Patient } from "@/types/patient";

interface PatientCardProps {
  patient: Patient;
}

export default function PatientCard({ patient }: PatientCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/patients/${patient.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-lg border p-4 shadow hover:shadow-md"
    >
      <h2 className="text-xl font-semibold">{patient.name}</h2>
      <p className="text-sm text-gray-600">Ward: {patient.ward}</p>
      <p className="text-sm text-gray-600">Doctor: {patient.attendingDoctor}</p>
    </div>
  );
}