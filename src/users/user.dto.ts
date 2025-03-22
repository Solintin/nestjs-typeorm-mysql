export interface userDto {
  id: number;
  name: string;
  gender: string;
  job: string;
  role: 'INTERN' | 'ADMIN' | 'ENGINEER';
}
