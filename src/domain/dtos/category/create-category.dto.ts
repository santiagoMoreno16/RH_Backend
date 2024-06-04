export class CategoryDto {
  private constructor( public name: string, public status: boolean, public base64: string, public imgpriv: string, public imgpublic: string) {}

  static create(object: { [key: string]: any }): [string?, CategoryDto?] {
    const { name, status, base64, imgpriv, imgpublic } = object;

    if (!name) return ["Missing name"];
    if (status === '' || status === undefined || status === null) return ["Missing status"];
    if (!base64) return ["Missing base64"];
    if (!imgpriv) return ["Missing imgpriv"];
    if (!imgpublic) return ["Missing imgpublic"];

    return [undefined, new CategoryDto(name, status, base64, imgpriv, imgpublic)];
  }


}
