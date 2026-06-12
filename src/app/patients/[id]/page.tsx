"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
// import { patients } from "@/data/patients";  dont need static data now.. will get from context
import Link from "next/link";
import {usePatients} from "@/context/PatientContext";  
import {useParams} from "next/navigation";

export default function PatientDetailsPage() {

  // get patient id from url params and fetch patient details from context using id
  const params = useParams();
  const id = params.id as string;

  const {patients} = usePatients();

  const patient =
    patients.find(
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
      <div className="space-y-6 p-6">

    <div className="flex items-start justify-between">
      {/* Patient name and ID displayed at the left side of the page */}
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
        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Edit Patient details
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
  
  </DashboardLayout>
  );
}