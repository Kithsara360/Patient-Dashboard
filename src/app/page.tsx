import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-sm text-gray-500">
            Total Patients
          </h3>

          <p className="mt-2 text-3xl font-bold">
            42
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-sm text-gray-500">
            Ward A
          </h3>

          <p className="mt-2 text-3xl font-bold">
            15
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-sm text-gray-500">
            Ward B
          </h3>

          <p className="mt-2 text-3xl font-bold">
            27
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}