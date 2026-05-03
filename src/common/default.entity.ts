import {
    AfterLoad,
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    DeleteDateColumn,
} from 'typeorm';

export class DefaultEntity extends BaseEntity {
    @Column({ type: 'json', nullable: true })
    meta_data: any;

    @Column({ nullable: true })
    status: string;

    @Column({ default: 1 })
    is_active: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    created_at: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updated_at: string;

    @Column({ nullable: true })
    created_by: string;

    // @Column({nullable:true})
    user_ip: string;

    @Column({ nullable: true })
    updated_by: string;

    @DeleteDateColumn({ select: false })
    deleted_at: Date;

    @BeforeUpdate()
    updateTimestamp() {
        this.updated_at = new Date().toISOString();
    }
    @BeforeInsert()
    utcTimestamp() {
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
    }
    @AfterLoad()
    timestampformat() {
        this.created_at = new Date(this.created_at).toLocaleString('en-US');
        this.updated_at = new Date(this.updated_at).toLocaleString('en-US');
    }
}

export enum IsActiveType {
    is_active = 1,
    is_inactive = 0,
}