# React Native Template

Este projeto é um template React Native com suporte a testes automatizados e integração com SonarQube local via Docker.

## Requisitos

- Node.js >= 18
- Docker e Docker Compose
- Yarn ou npm
- Android Studio e/ou Xcode (para rodar emuladores/simuladores)
- Ambiente configurado para React Native

## Scripts disponíveis

```bash
# Inicia o servidor Metro
npm start

# Executa o projeto no Android
npm run android

# Executa o projeto no iOS
npm run ios

# Executa o ESLint
npm run lint

# Executa os testes unitários com Jest
npm run test

# Executa os testes E2E com Detox
npm run detox:build:debug:android
npm run detox:test:debug:android
npm run detox:build:debug:ios
npm run detox:test:debug:ios

# Executa a análise de código com SonarQube
npm run sonar
```

## Rodando SonarQube com Docker

1. Suba o container com o SonarQube:

```bash
docker compose up -d
```

2. Acesse o SonarQube no navegador em [http://localhost:9000](http://localhost:9000) e crie um token.

Usuário padrão: admin
Senha padrão: admin

2.1 Gere um token no SonarQube
Acesse http://localhost:9000

Vá até: Meu Conta > Segurança

Crie um token de acesso (ex: sonar-token-template)

Copie o token gerado

3. Crie um arquivo `.env` com seu token do SonarQube:

```
SONARQUBE_TOKEN=seu_token_aqui
```

4. Execute a análise com o comando:

```bash
npm run sonar
```

## Arquivo de configuração do SonarQube

O arquivo `sonar-project.properties` já está incluído no projeto.
