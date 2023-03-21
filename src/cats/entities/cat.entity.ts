import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// 建立一个实体映射到数据库表
@Entity('cats')
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  name: string;

  @Column({ type: 'varchar', name: 'desc' })
  desc: string;
}
