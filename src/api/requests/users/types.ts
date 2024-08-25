export interface CurrentOrganisation {
  id: number;
  name: string;
  logo_url: string;
  is_personal: boolean;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  profile_picture_url: string;
  email_verified_at: string;
  identification_number: string;
  current_organisation: CurrentOrganisation;
}

export interface UserResponse {
  data: UserData;
}