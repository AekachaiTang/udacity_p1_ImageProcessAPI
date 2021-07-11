import sharp from "sharp";
import config from "../config";

const images = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
    const imagePath = `${config.DIR_PATH}/photo/${filename}.jpg`;
    const outPath = `${config.DIR_PATH}/thumb/${filename}${width}x${height}.jpg`;
    try{
        await sharp(imagePath).rotate().resize({width, height, fit: 'contain'}).toFile(outPath);
    } catch (e) {
        console.error('Error on Images Util', e);
        throw e;
    }
};

export default images;