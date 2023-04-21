import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity('artical')
export class Artical extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', name: 'author' })
  author: string;

  @Column({ type: 'varchar', name: 'createTime' })
  createTime: string;

  @Column({ type: 'longtext', name: 'content' })
  content: string;

  @ManyToMany(() => Tag, (tag) => tag.articals)
  @JoinTable()
  tags: Tag[];
}
