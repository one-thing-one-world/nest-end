import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artical')
export class Artical {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', name: 'author' })
  author: string;

  @Column({ type: 'varchar', name: 'createtime' })
  createtime: string;

  @Column({ type: 'varchar', name: 'content' })
  content: string;
}
