interface ITags {
  id: number;
  name: string;
}

export class CreateArticalDto {
  title: string;
  // tags: ITags[];
  author: string;
  createTime: string;
  content: string;
}
