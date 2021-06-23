import {Entity,Column,CreateDateColumn,UpdateDateColumn, PrimaryColumn, Timestamp} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("tags")
class Tag {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at:Timestamp;

    @UpdateDateColumn()
    updated_at:Timestamp;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Tag}
