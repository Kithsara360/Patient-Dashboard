"use client";

import PatientForm from "@/components/patients/PatientForm";
import { editPatient } from "@/lib/actions";
import { Patient } from "@/types/patient";
import { useNotification } from "@/components/NotificationContext";

interface EditPatientFormProps {
  patient: Patient;
}

export default function EditPatientForm({ patient }: EditPatientFormProps) {
  const { showNotification } = useNotification();

  const handleUpdatePatient = async (updatedPatient: Patient) => {
    showNotification("Patient updated successfully!", "success");
    await editPatient(patient.id, updatedPatient);
  };

  return <PatientForm initialData={patient} onSubmit={handleUpdatePatient} />;
}




// "use client";

// import {useState, useEffect} from "react";
// import PatientForm from "@/components/patients/PatientForm";
// import { editPatient } from "@/lib/actions";
// import { Patient } from "@/types/patient";

// interface EditPatientFormProps {
//   patient: Patient;
// }

// export default function EditPatientForm({ patient }: EditPatientFormProps) {
//   const [notification, setNotification] = useState<{ 
//     message: string;      
//     type: "success" | "error"; 
//   } | null>(null);

//   useEffect(() => {   
//     if (!notification) return;  
//     const timer = setTimeout(() => {
//       setNotification(null);
//     }, 2000); 
//     return () => clearTimeout(timer);
//   }, [notification]);

//   const handleUpdatePatient = async (updatedPatient: Patient) => {
//     try {
//       await editPatient(patient.id, updatedPatient);  // calls server action to update patient
//       setNotification({ message: "Patient updated successfully!", type: "success" });
//     } catch (error) {
//       setNotification({ message: "Failed to update patient.", type: "error" });
//     }
//   };

//   return (
//     <div className="relative">
//       {notification && (  
//         <div
//           role="alert"
//           className={`mb-4 rounded px-4 py-3 text-white ${
//             notification.type === "success" ? "bg-green-500" : "bg-red-500" 
//           }`}
//         >
//           {notification.message}  
//           <button
//             onClick={() => setNotification(null)} 
//             className="ml-4 font-bold"
//           >
//             ✕
//           </button>
//         </div>
//       )}
//       <PatientForm initialData={patient} onSubmit={handleUpdatePatient} />
//     </div>
//   );
// }