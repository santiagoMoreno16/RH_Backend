import { Module } from "module";
import { ModuleModel } from "../../data/mongodb";
import { CustomError, ModuleDatasource, ModuleEntity } from "../../domain";
import { ModuleDto } from "../../domain/dtos/quizModule/create-module.dto";
import { ModuleMapper } from "../mappers/module.mapper";
import ImgBase64 from "../../config/base64";
import { nanoid } from "nanoid";
import { UpdateModuleDto } from "../../domain/dtos/quizModule/update-module.dto";
import RouteImages from './../../config/var_img';

export class ModuleDatasourceImpl implements ModuleDatasource {
  /*async findById(id: string): Promise<ModuleEntity | null> {
    try {
      const course = await ModuleModel.findById({ _id: id }).populate('created_by.teacher_id');
      return course ? ModuleMapper.moduleEntityFromObject(course) : null;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }*/

  async findById(id: string): Promise<ModuleEntity | null> {
    try {
      const course = await ModuleModel.findById({ _id: id }).populate('created_by.teacher_id');
      const routeImage = RouteImages.routeImgModule;
      if (course) {
        ImgBase64.getBase64(course.imgpriv, 100, routeImage);
        
        return ModuleMapper.moduleEntityFromObject(course);
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  /*async findAll(): Promise<ModuleEntity[]> {
    try {
      const modules = await ModuleModel.find().exec();
      ImgBase64.obtenerBase64();
      return modules.map(ModuleMapper.moduleEntityFromObject);
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }*/

  async findAll(): Promise<ModuleEntity[]> {
    try {
      const modules = await ModuleModel.find().exec();
      const routeImage = RouteImages.routeImgModule;

      return modules.map((module) => {
        ImgBase64.getBase64(module.imgpriv, 300, routeImage);
        return ModuleMapper.moduleEntityFromObject(module);
      });
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  /*async update(updateModuleDto: UpdateModuleDto): Promise<ModuleEntity> {
    const { id } = updateModuleDto;
    
    try {
      const module = await ModuleModel.findOneAndUpdate(
        { id: id },
        { $set: updateModuleDto }
        
      ); 
    
      if (!module) {
        throw CustomError.badRequest("Error updating project");
      }

      return updateModuleDto;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
  */

  async update(updateModuleDto: UpdateModuleDto): Promise<ModuleEntity> {
    const { id, imgpriv, imgpublic, base64 } = updateModuleDto;
    const routeImage = RouteImages.routeImgModule;
  
    try {
      const module = await ModuleModel.findOneAndUpdate(
        { _id: id },
        { $set: updateModuleDto }
      );
  
      if (!module) {
        throw CustomError.badRequest("Error updating project");
      }
  
      // Update imageBase64
      ImgBase64.deleteImage(imgpriv, routeImage);
      const photoPriv = 'IMG_' + nanoid(20) + "." + imgpublic.split('.')[1];
      ImgBase64.buildBase64(photoPriv, base64, routeImage);
  
      return updateModuleDto;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
  

  async create(moduleDto: ModuleDto): Promise<ModuleEntity> {
    const {
      name,
      description,
      labels,
      type,
      modality,
      duration,
      deadline,
      created_by,
      base64,
      imgpriv,
      imgpublic
    } = moduleDto;

    try {
      const exists = await ModuleModel.findOne({
        name: name,
      });

      //if (exists) throw CustomError.badRequest("Error creating module");

      const photoPriv = 'IMG_' + nanoid(20) + "." + imgpublic.split('.')[1];
      const routeImage = RouteImages.routeImgModule;
      ImgBase64.buildBase64(photoPriv, base64, routeImage);
      
      

      const module = await ModuleModel.create(
        {
        name: name,
        description: description,
        labels: labels,
        type: type,
        modality: modality,
        duration: duration,
        deadline: deadline,
        created_by: created_by,
        base64: base64,
        imgpriv: photoPriv,
        imgpublic: imgpublic,
      });

      await module.save();

      return ModuleMapper.moduleEntityFromObject(module);
    } catch (error) {
      console.log("🚀 ~ ModuleDatasourceImpl ~ create ~ error:", error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  /*async delete(id: string): Promise<void> {
    try {
      await ModuleModel.findByIdAndDelete({ _id: id }).exec();
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }*/

  async delete(id: string): Promise<void> {
    try {
      const existe = await ModuleModel.findById(id).exec();
      const routeImage = RouteImages.routeImgModule;
  
      if (existe) {
        
        ImgBase64.deleteImage(existe.imgpriv, routeImage);
        
        ModuleModel.findByIdAndDelete({ _id: id }).exec();
        return console.log("Successfully Module Delete");
        
      }
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
  

}
