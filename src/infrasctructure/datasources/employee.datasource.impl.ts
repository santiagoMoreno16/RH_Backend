import { EmployeeModel } from "../../data/mongodb";
import { CustomError, EmployeeDatasource, EmployeeDto, EmployeeEntity, UpdateEmployeeDto } from "../../domain";
import { EmployeeMapper } from "../mappers/employee.mapper";
import ImgBase64 from "../../config/base64";
import { nanoid } from "nanoid";
import RouteImages from './../../config/var_img';

export class EmployeeDatasourceImpl implements EmployeeDatasource {

  async update(updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeEntity> {
    const { userId, imgpriv, imgpublic, base64 } = updateEmployeeDto;
    const routeImage = RouteImages.routeImgEmployee;
    
    try {
      const employee = await EmployeeModel.findOneAndUpdate(
        { userId: userId },
        { $set: updateEmployeeDto }
      ); 
    
      if (!employee) {
        throw CustomError.badRequest("Error updating employee");
      }

      // Update imageBase64
      ImgBase64.deleteImage(imgpriv, routeImage);
      const photoPriv = 'IMG_' + nanoid(20) + "." + imgpublic.split('.')[1];
      ImgBase64.buildBase64(photoPriv, base64, routeImage);

      return updateEmployeeDto;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async create(employeeDto: EmployeeDto): Promise<EmployeeEntity> {
    const { gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, base64, imgpriv, imgpublic } = employeeDto

    try {
        const exists = await EmployeeModel.findOne({
            userId: userId,
        });
        if (exists) throw CustomError.badRequest("Error creating employee");

        const photoPriv = 'IMG_' + nanoid(20) + "." + imgpublic.split('.')[1];
        const routeImage = RouteImages.routeImgModule;
        ImgBase64.buildBase64(photoPriv, base64, routeImage);
  
        const employee = await EmployeeModel.create({
            gender: gender,
            birthdate: birthdate,
            numberChildren: numberChildren,
            entryIntoCompany: entryIntoCompany,
            enterprise: enterprise,
            city: city,
            corporatePosition: corporatePosition,
            userId: userId,
            base64: base64,
            imgpriv: photoPriv,
            imgpublic: imgpublic,
        });
  
        await employee.save();
  
        return EmployeeMapper.employeeEntityFromObject(employee);
      } catch (error) {
        console.log(error);
        if (error instanceof CustomError) {
          throw error;
        }
        throw CustomError.internalServer();
      }

    }
 
 
}
