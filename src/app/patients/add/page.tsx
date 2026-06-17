import DashboardLayout from "@/components/layout/DashboardLayout";
import AddPatientForm from "@/components/patients/AddPatientForm";

export default function AddPatientPage() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl p-6">
        <h1 className="mb-6 text-3xl font-bold">Add Patient</h1>
        <AddPatientForm />
      </div>
    </DashboardLayout>
  );
}