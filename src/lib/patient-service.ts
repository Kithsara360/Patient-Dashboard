import fs from "fs";
import path from "path";
import { Patient } from "@/types/patient";

// Builds an absolute path to data/patients.json, regardless of where this code runs from.
// process.cwd() = the project root folder (where package.json lives).
const dataFilePath = path.join(process.cwd(), "src", "data", "patients.json");

// Reads the JSON file from disk and parses it into a real array of Patient objects.
function readPatients(): Patient[] {
  const fileContents = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(fileContents);
}

// Takes an array of Patient objects and writes it back to disk as formatted JSON.
function writePatients(patients: Patient[]): void {
  fs.writeFileSync(dataFilePath, JSON.stringify(patients, null, 2));
}

// Returns every patient. Used by the patient list page.
export function getPatients(): Patient[] {
  return readPatients();
}

// Returns a single patient matching the given ID, or undefined if not found.
// Used by the details page and the edit page.
export function getPatientById(id: string): Patient | undefined {
  const patients = readPatients();
  return patients.find((p) => p.id === id);
}

// Adds a new patient to the array and saves it back to the file.
export function addPatient(patient: Patient): void {
  const patients = readPatients();
  patients.push(patient);
  writePatients(patients);
}

// Replaces the patient with the matching ID, then saves the file.
export function updatePatient(id: string, updatedPatient: Patient): void {
  const patients = readPatients();
  const newPatients = patients.map((p) =>
    p.id === id ? updatedPatient : p
  );
  writePatients(newPatients);
}