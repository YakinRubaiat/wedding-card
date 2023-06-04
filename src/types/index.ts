export interface SocialMedia {
    facebookId: string;
    twitterId: string;
}

export interface ProfileData {
    name: string;
    occupation: string;
    image: string;
    fatherName: string;
    motherName: string;
    details: string;
    facebookId: string;
    twitterId: string;
}

export interface ProfileProps {
    data: ProfileData;
}

export interface CountdownProps {
    // Define any props needed for the Countdown component
}

export interface AddressData {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export interface AddressProps {
    address: AddressData
}

export interface ShareButtonsProps {
    // Define any props needed for the ShareButtons component
  }
  
  