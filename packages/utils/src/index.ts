// Utilitaires partagés entre les applications frontend

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// === Tailwind class merger ===
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// === Formatters ===
export function formatDate(date: string | Date, locale: string = "fr-FR"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function formatDateTime(date: string | Date, locale: string = "fr-FR"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatCurrency(amount: number, currency: string = "MGA"): string {
  return new Intl.NumberFormat("fr-MG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number, locale: string = "fr-FR"): string {
  return new Intl.NumberFormat(locale).format(num);
}

// === Validators (Zod schemas communs) ===
import { z } from "zod";

export const emailSchema = z.string().email("Email invalide");

export const passwordSchema = z
  .string()
  .min(8, "Le mot de passe doit contenir au moins 8 caractères")
  .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
  .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre");

export const phoneSchema = z
  .string()
  .regex(/^\+?[0-9]{9,15}$/, "Numéro de téléphone invalide")
  .optional();

export const uuidSchema = z.string().uuid("Identifiant invalide");

// === Helpers ===
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}