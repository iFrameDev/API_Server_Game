import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

export type UserType = {
    name:string
    password:string
    email:string

}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userid: string

    @Column()
    name: string

    @Column()
    email: string

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    created: Date

}