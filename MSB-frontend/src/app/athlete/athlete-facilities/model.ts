// src/app/models/facility.model.ts
export enum FacilityType {
    FOOTBALL_11V11 = 'FOOTBALL_11V11',
    FOOTBALL_7V7 = 'FOOTBALL_7V7',
    FOOTBALL_5V5 = 'FOOTBALL_5V5',
    BASKETBALL_INDOOR = 'BASKETBALL_INDOOR',
    BASKETBALL_OUTDOOR = 'BASKETBALL_OUTDOOR',
    VOLLEYBALL_INDOOR = 'VOLLEYBALL_INDOOR',
    VOLLEYBALL_OUTDOOR = 'VOLLEYBALL_OUTDOOR',
    TENNIS_CLAY = 'TENNIS_CLAY',
    TENNIS_GRASS = 'TENNIS_GRASS',
    TENNIS_HARD = 'TENNIS_HARD',
    PADEL_SINGLE = 'PADEL_SINGLE',
    PADEL_DOUBLE = 'PADEL_DOUBLE',
    BOWLING_ALLEY = 'BOWLING_ALLEY',
    POOL_TABLE = 'POOL_TABLE'
  }
  
  export interface Facilityint {
    facilityId: number;
    facilityName: string;
    facilityType: FacilityType; // Use the enum here
    address: string;
    location: string;
    phoneNumber: string;
    email: string;
    ratings: number;
    amenities: string;
    events: [],
    bookings: [],
    facilityManager:any
  }
  