import 'reflect-metadata';
import {AppError} from '@shared/error/instance';
import {GLOBAL_ERRORS} from '@shared/error/constants/global';
import {PokemonServiceInterface} from '../../interfaces';
import {GetPokemonByIdUseCase} from './GetPokemonByIdUseCase';
import {GetPokemonByIdUseCaseInterface} from './interface';

const mockPokemonService: jest.Mocked<PokemonServiceInterface> = {
  getPokemonById: jest.fn(),
};

describe('GetPokemonByIdUseCase', () => {
  let useCase: GetPokemonByIdUseCaseInterface;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new GetPokemonByIdUseCase(mockPokemonService);
  });

  it('deve retornar o pokemon quando encontrado', async () => {
    const mockResponse = {
      id: 25,
      name: 'Pikachu',
      type: ['Electric'],
    };

    mockPokemonService.getPokemonById.mockResolvedValue(mockResponse);

    const result = await useCase.execute(25);

    expect(result).toEqual(mockResponse);
    expect(mockPokemonService.getPokemonById).toHaveBeenCalledWith(25);
  });

  it('deve lançar um AppError quando o serviço falha', async () => {
    const mockError = new Error('Not found');
    mockPokemonService.getPokemonById.mockRejectedValue(mockError);

    await expect(useCase.execute(999)).rejects.toThrow(AppError);

    try {
      await useCase.execute(999);
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect(error.message).toBe(GLOBAL_ERRORS.NOT_FOUND_ERROR.message);
      expect(error.statusCode).toBe(GLOBAL_ERRORS.NOT_FOUND_ERROR.statusCode);
      expect(error.stack).toBe(mockError.stack);
    }
  });
});
