import fs from 'fs';
import LittleImage from './ImageLittle';
import RouteImages from './var_img';


class ImgBase64 {

    public static getBase64(img: string, sizeImg: number, routeImage: string): any {
        let base = '';
        const routeImageSystem = RouteImages.imgDefault;
        const routeImagePrivate = routeImage + img;
        //console.log(rutaImagenPrivada);
        

        if (fs.existsSync(routeImagePrivate)) {
            const imageMiniature = RouteImages.routeImageTemporaly + img;
            LittleImage.createMiniature(routeImagePrivate, imageMiniature, sizeImg);
            base = fs.readFileSync(imageMiniature, 'base64')
            fs.unlinkSync(imageMiniature);
        } else {
            base = fs.readFileSync(routeImageSystem, 'base64');
        }

        return base;
    }

    public static buildBase64(img: string, base64Img: string, routeImage: string): any {
        let decoding = base64Img.replace(/^data:image\/\w+;base64,/, '');
        fs.readdir(routeImage, (err) => {
            if (err) {
                fs.mkdirSync(routeImage, { recursive: true });
            }
            fs.writeFile(routeImage + img, decoding, { encoding: 'base64' }, function () {
            });
        })
    }

    public static deleteImage(bombreBase64: string, routeImage: string): void {
        const fsa = require('fs-extra');
        fs.unlink(routeImage + bombreBase64, function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('Image successfully deleted');
            }
        });
    }
}
export default ImgBase64;