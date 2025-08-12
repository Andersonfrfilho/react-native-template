import {AppError} from './instance';

describe('AppError', () => {
  it('should be defined', () => {
    const errorInstance = new AppError({
      message: 'test error',
      code: 500,
      name: 'test-error-name',
      stack: 'test-error-stack',
      params: {
        key: 'value',
      },
    });
    expect(errorInstance).toBeInstanceOf(AppError);
  });
});
