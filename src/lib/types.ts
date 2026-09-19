export type SystemPhase =
  | "loading"
  | "boot"
  | "diving"
  | "ready";

export type RoomId =
  | "hub"
  | "hardware"
  | "software"
  | "archive"
  | "ai"
  | "rf"
  | "drone"
  | "profile"
  | "contact";

export type QualityTier =
  | "cinematic"
  | "high"
  | "normal";

export interface CameraPreset {
  position: [number, number, number];
  target: [number, number, number];
  fov?: number;
  duration?: number;
  ease?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year?: number;
  status?: string;
  model?: string;
  images?: string[];
  videos?: string[];
  github?: string;
  liveDemo?: string;
}