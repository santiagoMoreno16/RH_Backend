import { CategoryModel } from "../../data/mongodb";
import { CategoryDto, CategoryEntity, CustomError, UpdateCategoryDto } from "../../domain";
import { CategoryDatasource } from "../../domain/datasources/category.datasource";
import { CategoryMapper } from "../mappers/category.mapper";
import RouteImages from './../../config/var_img';
import ImgBase64 from "../../config/base64";
import { nanoid } from "nanoid";

export class CategoryDatasourceImpl implements CategoryDatasource {


  async update(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
     const { id, name, imgpriv, imgpublic, base64 } = updateCategoryDto;
     const routeImage = RouteImages.routeImgCategory;

    try {
     
      const categoryName = await CategoryModel.findOne(
        {name: name}
      )

      if (categoryName) {
        throw CustomError.badRequest("Category name already exists");
      }

      const category = await CategoryModel.findByIdAndUpdate(
        { _id: id},
        { $set: updateCategoryDto }
      );


      if (!category) {
        throw CustomError.badRequest("Error updating category");
      }

      // Update imageBase64
      ImgBase64.deleteImage(imgpriv, routeImage);
      const photoPriv = 'IMG_' + nanoid(20) + "." + imgpublic.split('.')[1];
      ImgBase64.buildBase64(photoPriv, base64, routeImage);

      return updateCategoryDto;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async create(categoryDto: CategoryDto): Promise<CategoryEntity> {
    const { name, status, base64, imgpriv, imgpublic } = categoryDto;

    try {
      const exists = await CategoryModel.findOne({
        name: name,
      });
      if (exists) throw CustomError.badRequest("Error creating category");

      const photoPriv = 'IMG_' + nanoid(20) + "." + imgpublic.split('.')[1];
      const routeImage = RouteImages.routeImgCategory;
      ImgBase64.buildBase64(photoPriv, base64, routeImage);

      const category = await CategoryModel.create({
        name: name,
        status: status,
        base64: base64,
        imgpriv: photoPriv,
        imgpublic: imgpublic,
      });

      await category.save();

      return CategoryMapper.categoryEntityFromObject(category);
    } catch (error) {
      console.log("🚀 ~ CategoryDatasourceImpl ~ create ~ error:", error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
