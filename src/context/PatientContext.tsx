"use client";

import {createContext, useContext, useState,} from "react";
import { Patient } from "@/types/patient";
import { patients as initialPatients } from "@/data/patients";

//context type
type PatientContextType = {
  patients: Patient[];

  addPatient: (patient: Patient) => void;

  updatePatient: (
    id: string,
    updatedPatient: Patient
  ) => void;
};

//create the context...cotainers the patients data and functions to add and update patient data
const PatientContext =
  createContext<PatientContextType | null>(   //currently its empty but will be filled with providr component
    null
  );

//create the provider component...
export function PatientProvider({
  children,
}: {
  children: React.ReactNode;
}) {

    //create state to hold the patients data, initialized with the mock data from patients.ts...
const [patients, setPatients] =
  useState(initialPatients);

    //function to add a new patient to the state...
    const addPatient = (
  patient: Patient
) => {
  setPatients((prev) => [
    ...prev,
    patient,
  ]);
};

    //Update function to update patient's details in the state based on patient ID...
    //Searches all patients with Id and fintds the relavant patient and updates details with the provided in the updatedPatient object
    const updatePatient = (
  id: string,
  updatedPatient: Patient
) => {
  setPatients((prev) =>
    prev.map((patient) =>
      patient.id === id
        ? updatedPatient
        : patient
    )
  );
};
return (
  <PatientContext.Provider
    value={{
      patients,
      addPatient,
      updatePatient,
    }}
  >
    {children}
  </PatientContext.Provider>
);
}

export function usePatients() {
  const context =
    useContext(PatientContext);

  if (!context) {
    throw new Error(
      "usePatients must be used inside PatientProvider"
    );
  }

  return context;
}