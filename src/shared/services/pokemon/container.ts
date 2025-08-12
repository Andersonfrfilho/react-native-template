import {container} from 'tsyringe';
import {
  HTTP_CLIENT_POKEMON_PROVIDER,
  HttpClientPokemonInterface,
  POKEMON_SERVICE_PROVIDER,
  PokemonServiceInterface,
} from './interfaces';
import {createHttpClient} from '@shared/providers/http/factory';
import {PokemonService} from './service';

const pokemonHttpClient = createHttpClient(
  process.env.SERVICES_POKEMON_BASE_URL!,
);

container.register<HttpClientPokemonInterface>(HTTP_CLIENT_POKEMON_PROVIDER, {
  useValue: pokemonHttpClient,
});

container.registerSingleton<PokemonServiceInterface>(
  POKEMON_SERVICE_PROVIDER,
  PokemonService,
);
