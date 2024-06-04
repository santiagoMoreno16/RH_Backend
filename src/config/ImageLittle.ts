import sharp from 'sharp';

class ImageMiniature {
    public static async createMiniature(routeImagePrivate: string, imageMiniature: string, size: number): Promise<void> {
      try {
        await sharp(routeImagePrivate).resize({ width: size }).toFile(imageMiniature);
        
        console.log('Successfully created miniature:', imageMiniature);
      } catch (error) {
        console.error('Error creating miniature:', error);
        
        throw error;
      }
    }
  }
  
  export default ImageMiniature;

