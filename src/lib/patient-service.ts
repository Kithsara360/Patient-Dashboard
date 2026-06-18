//Only this file accesses the json 

import fs from "fs";
import path from "path";
import { Patient } from "@/types/patient";

// Builds an absolute path to patients.json file, regardless of where this code runs from.
// process.cwd() = the project root folder (where package.json lives).
const dataFilePath = path.join(process.cwd(), "src", "data", "patients.json");

// Reads the JSON file from disk and parses it into a array of Patient objects.
function readPatients(): Patient[] {
  const fileContents = fs.readFileSync(dataFilePath, "utf-8"); //readFilesSync gets data from dataFilePath and returns contents to fileContents as a text string eg: [{"id":"1","name":"John Silva",...}]
  return JSON.parse(fileContents); //parse converts string to a js array of obects so can .map().find()
}

// Takes an array of Patient objects and writes it back to disk as formatted JSON.
function writePatients(patients: Patient[]): void {
  fs.writeFileSync(dataFilePath, JSON.stringify(patients, null, 2)); //  "JSON.stringify(patients...)"  reverse of json.parse and converts it back to text string
}    // "fs.writeFileSync" then takes that string and overwrites the entire entire file at "dataFilePath"

// getPatients
export function getPatients(): Patient[] {
  return readPatients();    // for now just wraps around readpatients but can be used later for sorting.....
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