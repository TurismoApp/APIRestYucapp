import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Types } from 'mariadb';
import { activity } from "./activity.entity";

@Entity()
export class images {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 21 , nullable: true})
    public title: string;

    @Column()
    public link: string;

    @ManyToOne(type => activity, activity => activity.images)
    activity: activity;
}