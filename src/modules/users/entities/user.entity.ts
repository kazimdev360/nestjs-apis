import { DefaultEntity } from "src/common/default.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends DefaultEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    address: string;

}