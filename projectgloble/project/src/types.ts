export interface UserProfile {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
  };
  dob: {
    age: number;
  };
}