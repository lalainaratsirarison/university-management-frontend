// Types partagés entre les applications frontend

// === Utilisateur & Auth ===
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  permissions: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  };
}

// === Pagination ===
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ApiResponse<T> {
  data: T;
  meta?: Record<string, unknown>;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    details: unknown;
    requestId: string | null;
  };
}

// === Entités métier (références) ===
export interface AcademicYear {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface Formation {
  id: string;
  name: string;
  code: string;
  description: string | null;
  isActive: boolean;
}

export interface Level {
  id: string;
  name: string;
  order: number;
  formationId: string;
}

export interface Class {
  id: string;
  name: string;
  levelId: string;
  academicYearId: string;
  maxStudents: number;
}

export interface Student {
  id: string;
  matricule: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  dateOfBirth: string | null;
  enrollmentStatus: "active" | "suspended" | "graduated" | "withdrawn";
}

export interface Enrollment {
  id: string;
  studentId: string;
  academicYearId: string;
  formationId: string;
  levelId: string;
  classId: string;
  groupId: string | null;
  status: "pending" | "active" | "completed" | "cancelled";
  enrolledAt: string;
}