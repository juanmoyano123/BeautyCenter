import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    id: 1,
    title: "Tratamientos Faciales",
    description: "Limpieza profunda, hidratación y rejuvenecimiento para una piel radiante.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Tratamiento facial"
  },
  {
    id: 2,
    title: "Masajes Terapéuticos",
    description: "Técnicas profesionales para aliviar tensiones y mejorar tu bienestar.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Masaje terapéutico"
  },
  {
    id: 3,
    title: "Manicura y Pedicura",
    description: "Cuidado completo para tus manos y pies, con los mejores productos.",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Manicura y pedicura"
  },
  {
    id: 4,
    title: "Tratamientos Corporales",
    description: "Exfoliación, hidratación y técnicas reafirmantes para todo tu cuerpo.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    alt: "Tratamientos corporales"
  }
];

export const team = [
  {
    id: 1,
    name: "Ana",
    role: "Esteticista",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    details: "10 años de experiencia"
  },
  {
    id: 2,
    name: "Lucía",
    role: "Especialista facial",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    details: "Certificada internacionalmente"
  },
  {
    id: 3,
    name: "Martín",
    role: "Masoterapeuta",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    details: "Especialista en masajes terapéuticos"
  },
  {
    id: 4,
    name: "Carla",
    role: "Atención al cliente",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    details: "Siempre lista para ayudarte"
  }
];

export const gallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Tratamiento facial"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Masaje relajante"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Manicura"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Masaje con piedras calientes"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Exfoliación corporal"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    alt: "Ambiente relajante"
  }
];
