import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up API routes
  app.post("/api/appointments", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const appointmentData = insertAppointmentSchema.parse(req.body);
      
      // Create appointment in storage
      const appointment = await storage.createAppointment(appointmentData);
      
      // Return success response
      return res.status(201).json({
        success: true,
        message: "Appointment created successfully",
        data: appointment
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "Failed to create appointment"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
