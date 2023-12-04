import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

export type CharacterType = {


}

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    userid: string

    @Column()
    name: string

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
    created: Date

}