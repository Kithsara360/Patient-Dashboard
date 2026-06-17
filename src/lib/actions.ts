"use server";

import { redirect } from "next/navigation";
import { addPatient as addPatientToFile, updatePatient as updatePatientInFile } from "@/lib/patient-service";
import { Patient } from "@/types/patient";

// Called from the Add page. Saves the patient, then redirects.
export async function createPatient(patient: Patient) {
  addPatientToFile(patient);
  redirect("/patients");
}

// Called from the Edit page. Saves the patient, then redirects to its details page.
export async function editPatient(id: string, patient: Patient) {
  updatePatientInFile(id, patient);
  redirect(`/patients/${id}`);
}