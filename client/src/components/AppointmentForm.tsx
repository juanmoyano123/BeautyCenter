import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Form schema with validation
const appointmentSchema = z.object({
  name: z.string().min(2, { message: "Por favor ingresa tu nombre" }),
  email: z.string().email({ message: "Por favor ingresa un email válido" }),
  phone: z.string().min(8, { message: "Por favor ingresa un teléfono válido" }),
  service: z.string().min(1, { message: "Por favor selecciona un servicio" }),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export default function AppointmentForm() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  });
  
  const appointmentMutation = useMutation({
    mutationFn: (data: AppointmentFormValues) => 
      apiRequest("POST", "/api/appointments", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/appointments'] });
      reset();
      setFormSubmitted(true);
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos a la brevedad.",
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Hubo un problema al enviar el formulario: ${error}`,
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: AppointmentFormValues) => {
    appointmentMutation.mutate(data);
  };
  
  return (
    <section id="agenda" className="py-16 px-6 bg-primary bg-opacity-10">
      <div className="container mx-auto max-w-md">
        <h2 className="font-cormorant text-foreground text-3xl md:text-4xl font-semibold text-center mb-12">
          Agendá tu cita
        </h2>
        
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-muted-foreground text-sm font-medium mb-2">Nombre</label>
            <input 
              type="text" 
              id="name"
              {...register("name")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-muted-foreground text-sm font-medium mb-2">Correo electrónico</label>
            <input 
              type="email" 
              id="email"
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-muted-foreground text-sm font-medium mb-2">Teléfono</label>
            <input 
              type="tel" 
              id="phone"
              {...register("phone")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="service" className="block text-muted-foreground text-sm font-medium mb-2">Servicio</label>
            <select 
              id="service"
              {...register("service")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="" disabled>Selecciona un servicio</option>
              <option value="facial">Tratamiento Facial</option>
              <option value="massage">Masaje Terapéutico</option>
              <option value="manicure">Manicura/Pedicura</option>
              <option value="body">Tratamiento Corporal</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
            )}
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-[#A87B5C] text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 shadow focus:outline-none"
            disabled={appointmentMutation.isPending}
          >
            {appointmentMutation.isPending ? "Enviando..." : "Agendar Cita"}
          </button>
          
          {/* Success Message */}
          {formSubmitted && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
              ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
