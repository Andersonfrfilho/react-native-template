import {GLOBAL_ERRORS} from './constants/global';

interface AppErrorParams {
  message: string;
  code?: number;
  stack?: string;
  name?: string;
  params?: object;
}
export class AppError extends Error {
  constructor({
    message = GLOBAL_ERRORS.NOT_FOUND_ERROR.message,
    code = GLOBAL_ERRORS.NOT_FOUND_ERROR.code,
    stack = '',
    name = 'AppError',
    params = {},
  }: AppErrorParams) {
    super(message);
    this.name = name;
    this.code = code;
    this.stack = stack;
    this.params = params;
  }
  code: number;
  params: object;
  stack: string;
  name: string;
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      params: this.params,
    };
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
}
