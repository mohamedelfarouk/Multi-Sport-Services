export interface TrainingSession {
  sessionId?: number;  // Add sessionId as optional
  athlete: {
    userId: number;
  };
  trainer: {
    userId: number;
  };
  sessionType: string;
  sessionDate: string;
  startTime: string;
  endTime: string;
  cost: number;
}
