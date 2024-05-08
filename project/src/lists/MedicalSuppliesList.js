import mri from "../images/mri.jpg";
import thermometer from "../images/thermometer.jpg";
import panadol from "../images/panadol.jpg";
import tylenol from "../images/tylenol.jpg";

export const MedicalSuppliesList = [
  {
    id: 1,
    name: "MRI Machine",
    type: "Medical Equipment",
    use: "For brain scans",
    image: mri,
    quantity: 3,
    xyz:"Medical Supplies",

  },
  {
    id: 2,
    name: "Thermometer",
    type: "Medical Devices",
    use: "For measuring temperature",
    image: thermometer,
    quantity: 3,
    xyz:"Medical Supplies",
  },
  {
    id: 3,
    name: "Panadol",
    type: "Medications",
    use: "For headaches",
    image: panadol,
    quantity: 3,
    xyz: "Medical Supplies"
  },
  {
    id: 4,
    name: "Tylenol",
    type: "Medications",
    use: "For stomachaches",
    image: tylenol,
    quantity: 3,
    xyz:"Medical Supplies",
  },
];
