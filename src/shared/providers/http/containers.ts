import {container} from 'tsyringe';
import '../pokemons';
import {HTTP_CLIENT_PROVIDER, HttpClientInterface} from './interfaces';
import {HttpClient} from './provider';

container.registerSingleton<HttpClientInterface>(
  HTTP_CLIENT_PROVIDER,
  HttpClient,
);
