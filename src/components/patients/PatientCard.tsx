"use client";

import { useRouter } from "next/navigation";
import { User, BadgeInfo } from "lucide-react";

interface PatientCardProps {
  patient: {
    id: string;
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
      onClick={() => router.push(`/patients/${patient.id}`)}
      className="cursor-pointer rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <User size={18} />
            <h2 className="font-semibold">
              {patient.name}
            </h2>
          </div>

          <div className="mt-2 flex items-center gap-2 text-gray-500">
            <BadgeInfo size={16} />
            <p>{patient.patientId}</p>
          </div>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm">
          Age {patient.age}
        </span>
      </div>
    </div>
  );
}