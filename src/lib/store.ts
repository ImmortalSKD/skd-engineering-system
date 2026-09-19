import { create } from "zustand";
import type {
  QualityTier,
  RoomId,
  SystemPhase,
} from "./types";

interface SystemStore {
  phase: SystemPhase;
  progress: number;

  currentRoom: RoomId;
  previousRoom: RoomId | null;

  focusedProjectId: string | null;
  hoveredRoom: RoomId | null;

  hudVisible: boolean;
  ariaOpen: boolean;
  audioEnabled: boolean;

  quality: QualityTier;
  reducedMotion: boolean;

  setPhase: (phase: SystemPhase) => void;
  setProgress: (progress: number) => void;

  goToRoom: (room: RoomId) => void;

  focusProject: (projectId: string | null) => void;
  setHoveredRoom: (room: RoomId | null) => void;

  setHudVisible: (visible: boolean) => void;
  setAriaOpen: (open: boolean) => void;
  setAudioEnabled: (enabled: boolean) => void;

  setQuality: (quality: QualityTier) => void;
  setReducedMotion: (reduced: boolean) => void;
}

export const useSystemStore = create<SystemStore>((set) => ({
  phase: "loading",
  progress: 0,

  currentRoom: "hub",
  previousRoom: null,

  focusedProjectId: null,
  hoveredRoom: null,

  hudVisible: true,
  ariaOpen: false,
  audioEnabled: true,

  quality: "cinematic",
  reducedMotion: false,

  setPhase: (phase) =>
    set({ phase }),

  setProgress: (progress) =>
    set({
      progress: Math.max(0, Math.min(100, progress)),
    }),

  goToRoom: (room) =>
    set((state) => ({
      previousRoom: state.currentRoom,
      currentRoom: room,
      focusedProjectId: null,
    })),

  focusProject: (projectId) =>
    set({
      focusedProjectId: projectId,
    }),

  setHoveredRoom: (room) =>
    set({
      hoveredRoom: room,
    }),

  setHudVisible: (visible) =>
    set({
      hudVisible: visible,
    }),

  setAriaOpen: (open) =>
    set({
      ariaOpen: open,
    }),

  setAudioEnabled: (enabled) =>
    set({
      audioEnabled: enabled,
    }),

  setQuality: (quality) =>
    set({
      quality,
    }),

  setReducedMotion: (reduced) =>
    set({
      reducedMotion: reduced,
    }),
}));