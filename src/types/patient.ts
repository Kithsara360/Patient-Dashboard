export interface Patient {
  id: string;
  patientId: string;
  name: string;
  age: number;
  phone: string;

  ward: string;
  attendingDoctor: string;
  medicalHistory: string;

  bloodGroup: string;
  hemoglobin: string;
  whiteBloodCells: string;
}