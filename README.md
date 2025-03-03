
# Mobile App 📳

Este é um projeto de aplicativo móvel desenvolvido com **Ionic** e **Vue.js**. O aplicativo se comunica com um backend em **Java** para fornecer funcionalidades como [listar as funcionalidades principais].

## Tecnologias Utilizadas ✏

- **Ionic Framework**: Framework para criação de aplicativos móveis híbridos.
- **Vue.js**: Framework JavaScript para construção de interfaces de usuário.
- **Backend**: A aplicação se comunica com um backend desenvolvido em **Java** (pode ser um backend RESTful, Spring Boot, etc.).
- **Axios**: Biblioteca para fazer requisições HTTP entre o app e o servidor backend.

## Arquitetura 📚

O aplicativo segue a arquitetura cliente-servidor, onde:

- **Frontend**: Desenvolvido com **Ionic** e **Vue.js** para interação com o usuário.
- **Backend**: Desenvolvido em **Java** (exemplo: Spring Boot, Java EE) para processar as requisições e gerenciar a lógica de negócios.
- **Comunicação**: O app se comunica com o backend através de requisições HTTP RESTful, utilizando **Axios** para consumir APIs.

## Instalação 🔨

Para rodar o aplicativo localmente em seu dispositivo ou no simulador, siga os seguintes passos:

### 1. Clonar o Repositório

```bash
git clone https://github.com/VavaHelper/Mobile-App.git
```

### 2. Instalar Dependências

No diretório do projeto, instale as dependências com o seguinte comando:

```bash
npm install
```

ou, se você estiver usando **Yarn**:

```bash
yarn install
```

### 3. Configurar o Backend (Se necessário)

Se o backend em Java estiver rodando localmente ou em um servidor, verifique a configuração da URL base das APIs no seu projeto. A URL pode ser configurada no arquivo de configuração de ambiente, como `src/environments/environment.ts` (ou `environment.prod.ts`), dependendo do seu ambiente.

Exemplo de configuração de API no Vue:

```javascript
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080/api'  // Altere para a URL do seu backend em Java
};
```

### 4. Rodar o Aplicativo 

Para rodar o aplicativo no ambiente de desenvolvimento, utilize o comando:

```bash
ionic serve
```

Isso abrirá o aplicativo no seu navegador para visualização. Caso queira testar no dispositivo ou no emulador, use:

```bash
ionic capacitor run android
```

Ou para iOS:

```bash
ionic capacitor run ios
```

### 5. Iniciar o Backend 💻

Caso o backend esteja sendo executado localmente, certifique-se de que o servidor em Java esteja rodando corretamente. Se estiver utilizando o **Spring Boot**, por exemplo, basta rodar o comando:

```bash
mvn spring-boot:run
```

Certifique-se de que a URL do backend esteja configurada corretamente no frontend para garantir que a comunicação entre o app e o servidor funcione sem problemas.

## Contribuição

1. Faça o fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Comite suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a [nome da licença] - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
