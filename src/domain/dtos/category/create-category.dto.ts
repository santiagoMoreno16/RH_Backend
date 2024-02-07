export class CategoryDto {
  private constructor( public name: string, public status: boolean, public image: string) {}

  static create(object: { [key: string]: any }): [string?, CategoryDto?] {
    const { name, status, image } = object;

    if (!name) return ["Missing name"];
    if (status === '' || status === undefined || status === null) return ["Missing status"];
    if (!image) return ["Missing image"];

    return [undefined, new CategoryDto(name, status, image)];
  }


}
