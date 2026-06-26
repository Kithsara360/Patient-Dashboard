"use client";

import PatientForm from "@/components/patients/PatientForm";
import { createPatient } from "@/lib/actions";
import { Patient } from "@/types/patient";
import { useNotification } from "@/components/NotificationContext";

export default function AddPatientForm() {
  const { showNotification } = useNotification();

  const handleAddPatient = async (patient: Patient) => {
    showNotification("Patient added successfully!", "success");
    await createPatient(patient);
  };

  return <PatientForm onSubmit={handleAddPatient} />;
}






// "use client";

// import { useState, useEffect } from "react";
// import PatientForm from "@/components/patients/PatientForm";
// import { createPatient } from "@/lib/actions";
// import { Patient } from "@/types/patient";

// export default function AddPatientForm() {
//       // useState returns [currentValue, setter] array— then destructured into notification (the state) and setNotification (the function to update it)
//       //naming the currentValue to notification, and the setter to setNotification.
//   const [notification, setNotification] = useState<{ 
//     //tells the shape this state can hold 
//     message: string;      // It's either an object with a message string and a type that is "success" or "error", or it's null. 
//     type: "success" | "error"; 
//   } | null>(null); //initial state value is null, meaning no notifications before submit

//   useEffect(() => {   //runs after the first render, whenever notification state changes
//     if (!notification) return;  // to not run timer
//     const timer = setTimeout(() => {
//       setNotification(null);
//     }, 2000); //
//     return () => clearTimeout(timer);
//   }, [notification]);


  
//   const handleAddPatient = async (patient: Patient) => {  //expects a type matching patient object
//     try {
//       // throw new Error("test error"); 
//       await createPatient(patient); // calls server action to save patient
//       setNotification({ message: "Patient added successfully!", type: "success" });
//     } catch (error) {
//       setNotification({ message: "Failed to add patient.", type: "error" });
//     }
//   };


//   return (
//     <div className="relative">
//       {notification && (  //if notification is not null, render the notification div
//         <div
//           role="alert"
//           className={`mb-4 rounded px-4 py-3 text-white ${
//             notification.type === "success" ? "bg-green-500" : "bg-red-500" //green for success, red for error
//           }`}
//         >
//           {notification.message}  
//           {/* renders the string in notification.message */}
//           <button
//             onClick={() => setNotification(null)} //sets state to null, - triggers re render and removes the notification
//             className="ml-4 font-bold"
//           >
//             ✕
//           </button>
//         </div>
//       )}
//       <PatientForm onSubmit={handleAddPatient} /> 
//             {/* renders PatientForm and passes handleAddPatient as a prop named onSubmit */}
//             {/* Passes the function so patientform can call when user submits */}
//     </div>
//   );
// }