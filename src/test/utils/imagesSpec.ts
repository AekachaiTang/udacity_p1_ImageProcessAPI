import images from "../../utils/images";

describe('Tests for images function', () => {
  it('expects imageProcess("img4", 200, 200) to be resolved', async () => {
    await expectAsync(images('img4', 200, 200)).toBeResolved();
  });

  it('expects images("img4", 200, 200) to be rejected', async () => {
    await expectAsync(images('imgg4', 200, 200)).toBeRejected();
  });
});