import SuppliesSchool from "../assets/suppliesSchool.jpg";
import FurnitureSchool from "../assets/furSchool.jpg";
import ToysVet from "../assets/vetToys.jpg";
import DryFood from "../assets/dryFood.jpg";
import SuppliesHospital from "../assets/suppliesHospital.jpg";
import MachinesHospital from "../assets/machinesHospital.jpg";
import ClothesOrphanage from "../assets/clothesOrphanage.jpg";
import Teacher from "../assets/teacher.jpg";
import Doctor from "../assets/doctor.jpg";

export const data = [
  {
    id: 1,
    organisation: "Eire",
    category: "Supplies",
    type: "Bookmark",
    material: "Paper",
    year: "2025",
    image: SuppliesSchool,
  },
  {
    id: 2,
    organisation: "Eire",
    category: "Supplies",
    type: "Pencil",
    material: "2B",
    year: "2020",
    image: SuppliesSchool,
  },
  {
    id: 3,
    organisation: "Eire",
    category: "Furniture",
    type: "Chair",
    material: "Metal",
    year: "1990",
    image: FurnitureSchool,
  },
  {
    id: 4,
    organisation: "Eire",
    category: "Furniture",
    type: "Chair",
    material: "Leather",
    year: "2017",
    image: FurnitureSchool,
  },
  {
    id: 6,
    organisation: "Alya",
    category: "Furniture",
    type: "Table",
    material: "Glass",
    year: "2013",
    image: FurnitureSchool,
  },
  {
    id: 7,
    organisation: "Oyope",
    type: "Medical",
    category: "Probono Doctor Visit",
    drName: "Test Doctor",
    drId: 2,
    material: "Pediatrics",
    year: "2020",
    image: Doctor,
  },
  {
    id: 8,
    organisation: "Oyope",
    type: "Medical",
    category: "Probono Doctor Visit",
    drName: "Omar Ayman",
    drId: 1,
    material: "Neurology",
    year: "2016",
    image: Doctor,
  },
  {
    id: 9,
    organisation: "Oyope",
    category: "Supplies",
    type: "Surgical",
    material: "Steel",
    year: "2025",
    image: SuppliesHospital,
  },
  {
    id: 10,
    organisation: "Eire",
    type: "Education",
    category: "Probono Teaching Lession",
    teacherName: "Test Teacher",
    teacherId: 5,
    material: "English",
    year: "Year 10",
    image: Teacher,
  },
  {
    id: 11,
    organisation: "Rhyzio",
    type: "Toy",
    category: "Boardgame",
    year: "2012",
    material: "Paper",
    image: ToysVet,
  },
  {
    id: 12,
    organisation: "Youopia",
    type: "Dry Food",
    category: "Cat Food",
    year: "2024",
    material: "Wet Food",
    image: DryFood,
  },
];
