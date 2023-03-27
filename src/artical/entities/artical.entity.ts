import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artical')
export class Artical {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', name: 'tagType' })
  tagType: string;

  @Column({ type: 'varchar', name: 'author' })
  author: string;

  @Column({ type: 'varchar', name: 'createTime' })
  createTime: string;

  @Column({ type: 'longtext', name: 'content' })
  content: string;
}
