import fileExist from "../../utils/fileExist";

describe('Tests for fileExist func', () => {
  const wrongPath = './upload/upload/photo/img3.jpg';
  const rightPath = './upload/upload/photo/img1.jpg';

  it('expects fileExist rightPath to be true', async () => {
    const result = await fileExist(rightPath);
    expect(result).toBeTrue();
  });
  it('expects fileExist(wrongPath) to be false', async () => {
    const result = await fileExist(wrongPath);
    expect(result).toBeFalse();
  });

});