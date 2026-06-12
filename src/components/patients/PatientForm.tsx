// both add patients and edit patients will use this form
"use client";

import { useState } from "react";
import { Patient } from "@/types/patient"; //to validate patient object types to not get wrong data types.....

interface PatientFormProps {
  initialData?: Patient;

  onSubmit: (
    patient: Patient
  ) => void;
}
//create component for form for both add and edit..
export default function PatientForm({
  initialData,
  onSubmit,
}: PatientFormProps) {
    //create state for each form field and initialize with initial data if provided (for edit) or default values (for add)
    const [name, setName] =
  useState(initialData?.name || "");

const [patientId, setPatientId] =
  useState(
    initialData?.patientId || ""
  );

const [age, setAge] =
  useState(
    initialData?.age || 0
  );

const [phone, setPhone] =
  useState(
    initialData?.phone || ""
  );


  // continue for remaining fields like doctor, ward etc.
  const [ward, setWard] =
  useState(
    initialData?.ward || ""
  );

const [attendingDoctor, setAttendingDoctor] =
  useState(
    initialData?.attendingDoctor || ""
  );

const [medicalHistory, setMedicalHistory] =
  useState(
    initialData?.medicalHistory || ""
  );

const [bloodGroup, setBloodGroup] =
  useState(
    initialData?.bloodGroup || ""
  );

const [hemoglobin, setHemoglobin] =
  useState(
    initialData?.hemoglobin || ""
  );

const [whiteBloodCells, setWhiteBloodCells] =
  useState(
    initialData?.whiteBloodCells || ""
  );


  //handler for submissions
  const handleSubmit = (
  e: React.FormEvent
) => {
  e.preventDefault();  // Prevents browser from refreshing on form submission!!!!

  onSubmit({
    id:
      initialData?.id ||
      crypto.randomUUID(),  //Generates an unique ID for a added patient(for new- if no initial id) )
                            // but keeps the original id for edits
    name,
    patientId,
    age,
    phone,
    ward,
    attendingDoctor,
    medicalHistory,
    bloodGroup,
    hemoglobin,
    whiteBloodCells,
  });
};
    return (
  <form
    onSubmit={handleSubmit} // return for form submission handler
    className="space-y-4"
  >
  
    {/* name field */}
    <div>
  <label className="mb-1 block">
    Name
  </label>

  <input
    value={name}
    onChange={(e) =>
      setName(e.target.value)   //updates state
    }
    className="w-full rounded border p-2"
  />
</div>
    

    {/* id field */}
    <div>
  <label className="mb-1 block">
    Patient ID
  </label>

  <input
    value={patientId}
    onChange={(e) =>
      setPatientId(
        e.target.value
      )
    }
    className="w-full rounded border p-2"
  />
</div>

    {/* Age */}
      <div>
        <label className="mb-1 block">
          Age
        </label>

        <input
          type="number"
          value={age}
          onChange={(e) =>
            setAge(
              Number(
                e.target.value
              )
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-1 block">
          Phone
        </label>

        <input
          value={phone}
          onChange={(e) =>
            setPhone(
              e.target.value
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* Ward */}
      <div>
        <label className="mb-1 block">
          Ward
        </label>

        <input
          value={ward}
          onChange={(e) =>
            setWard(
              e.target.value
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* Attending Doctor */}
      <div>
        <label className="mb-1 block">
          Attending Doctor
        </label>

        <input
          value={attendingDoctor}
          onChange={(e) =>
            setAttendingDoctor(
              e.target.value
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* Medical History */}
      <div>
        <label className="mb-1 block">
          Medical History
        </label>

        <textarea
          value={medicalHistory}
          onChange={(e) =>
            setMedicalHistory(
              e.target.value
            )
          }
          className="w-full rounded border p-2"
          rows={4}
        />
      </div>

      {/* Blood Group */}
      <div>
        <label className="mb-1 block">
          Blood Group
        </label>

        <input
          value={bloodGroup}
          onChange={(e) =>
            setBloodGroup(
              e.target.value
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* Hemoglobin */}
      <div>
        <label className="mb-1 block">
          Hemoglobin
        </label>

        <input
          value={hemoglobin}
          onChange={(e) =>
            setHemoglobin(
              e.target.value
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* White Blood Cells */}
      <div>
        <label className="mb-1 block">
          White Blood Cells
        </label>

        <input
          value={whiteBloodCells}
          onChange={(e) =>
            setWhiteBloodCells(
              e.target.value
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

          {/* Submit button */}
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Save Patient
      </button>
    </form>
  );
}