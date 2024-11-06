import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;
  
  @Column()
  role: string; 

  @Column({ default: false })
  attendanceConfirmed: boolean;
  
}
