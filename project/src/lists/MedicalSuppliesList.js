import MachineHospital from "../assets/machinesHospital.jpg";
import Panadol from "../picsss/panadol.jpg";
import Tylenol from "../picsss/tylenol.jpg";
import Therm from "../picsss/thermometer.jpg";
import MRI from "../picsss/mri.jpg";

export const MedicalSuppliesList = [
  {
    id: 1,
    name: "MRI Machine",
    type: "Medical Equipment",
    use: "For brain scans",
    image: MRI,
    quantity: 3,
    xyz: "Medical Supplies",
  },
  {
    id: 2,
    name: "Thermometer",
    type: "Medical Devices",
    use: "For measuring temperature",
    image: Therm,
    quantity: 3,
    xyz: "Medical Supplies",
  },
  {
    id: 3,
    name: "Panadol",
    type: "Medications",
    use: "For headaches",
    image: Panadol,
    quantity: 3,
    xyz: "Medical Supplies",
  },
  {
    id: 4,
    name: "Tylenol",
    type: "Medications",
    use: "For stomachaches",
    image: Tylenol,
    quantity: 3,
    xyz: "Medical Supplies",
  },
];

export default MedicalSuppliesList;
