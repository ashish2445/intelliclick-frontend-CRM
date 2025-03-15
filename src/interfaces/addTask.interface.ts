export interface IAddTask {
    type: string;
    subject: string;
    description: string;
    startTime: string; // ISO 8601 format
    endTime: string;   // ISO 8601 format
    associated_lead: string; // Lead ID
  }
  