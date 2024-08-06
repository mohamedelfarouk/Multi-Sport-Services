export interface Facility {
  facilityId?: number;
  facilityName: string;
  facilityType: string;  
  address: string;
  location: string;
  phoneNumber: string;
  email: string;
  ratings: number;
  amenities: string;
  facilityManager:
    {
      userId: number;
      firstName: string;
      lastName: string;
    };

}
