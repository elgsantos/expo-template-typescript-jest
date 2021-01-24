# React Native Template Expo Typescript with Jest

[![Runs with expo][expo-shield]][expo-url]
[![npm][npm-shield]][package-url]
![IOS][ios-shield]
![Android][android-shield]
![Web][web-shield]
![Typescript][typescript-shield]
[![Tested with jest][jest-shield]][jest-url]
![coverage][cov-shield]
[![Stars][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<p align="center">
  <p align="center">
    A React Native Template using Expo, Typescript and Jest
    <br />
    <a href="https://github.com/elgsantos/expo-template-typescript-jest"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/elgsantos/expo-template-typescript-jest/issues">Report Bug</a>
    ·
    <a href="https://github.com/elgsantos/expo-template-typescript-jest/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
        <ul>
          <li><a href="#testing">Testing</a></li>
          <li><a href="#using-npm">Using npm</a></li>
        </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This template was developed to facilitate the creation of a new project using Expo, React Native and Jest.

![React Native Template Expo Typescript with Jest][repo-screenshot]

### Built With

* [Expo][expo-url]
* [React Native][react-native-url]
* [Jest][jest-url]

## Getting Started

To get this template up and running follow these simple steps.

### Prerequisites

* Install [Node.js][node-url]
* [Expo][expo-url]
  ```sh
  npm i -g expo-cli
  ```
* [Yarn][yarn-url]
  ```sh
  npm install -g yarn
  ```

### Installation

Create a project with this template:
  ```sh
  expo init --template expo-template-typescript-jest
  ```

(It will prompt you to enter a project name)

## Usage

* Navigate to the created directory
* Start the project:
  ```sh
  yarn start
  ```
* Then develop your app, creating files `.tsx` for React Native components and `.ts` for plain typescript files.

### Testing

There are some examples of tsx testing, snapshot test and function test inside the project.

- To run tests: 
  ```sh 
  yarn test
  ```
- To run test coverage: 
  ```sh
  yarn test:ci
  ```
- To watch tests: 
  ```sh 
  yarn test:watch
  ```
- To generate coverage badges:
  ```sh
  yarn test:badge
  ```

### Using npm
If you prefer to use npm reather than using yarn, make the following changes:
- Pass npm flag to installation: `expo init --template expo-template-typescript-jest --npm`
- Change test scripts to use npm in package.json
  ```json
    "test:watch": "npm test --watch",
    "test:ci": "npm test --coverage",
    "test:badges": "npm run test:ci  && jest-coverage-badges --input coverage/coverage-summary.json --output __badges__"
  ```
- Run commands with npm: `npm start`, `npm test`, `npm run test:watch`, `npm run test:ci`, `npm run test:badges`

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Author

Eduardo Santos - [elgsantos][github-url]

Project Link: [https://github.com/elgsantos/expo-template-typescript-jest](https://github.com/elgsantos/expo-template-typescript-jest)

## Acknowledgements
* [Expo Blank Typescript Template](https://docs.expo.io/guides/typescript/)
* [Img Shields](https://shields.io)
* [Faker](https://github.com/Marak/Faker.js#readme)
* [Test Renderer](https://reactjs.org/docs/test-renderer.html)
* [README template](https://github.com/othneildrew/Best-README-Template)
* [Jest Coverage Badges](https://www.npmjs.com/package/jest-coverage-badges)

<!-- MARKDOWN LINKS -->
[cov-shield]: ./__badges__/badge-lines.svg
[repo-screenshot]: https://user-images.githubusercontent.com/8595291/105619692-ea944400-5dd3-11eb-86b9-f3a9279d4389.jpg
[npm-shield]: https://img.shields.io/npm/v/expo-template-typescript-jest?style=flat
[package-url]: https://www.npmjs.com/package/expo-template-typescript-jest
[expo-shield]: https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=f3f3f3&logoColor=000&label=SDK%2040
[expo-url]: https://expo.io/
[typescript-shield]: https://img.shields.io/static/v1?logo=TYPESCRIPT&message=TypeScript&style=flat&color=3178C6&logoColor=fff&labelColor=gray&label=
[ios-shield]: https://img.shields.io/static/v1?logo=APPLE&message=iOS&style=flat&color=black&logoColor=fff&labelColor=gray&label=
[android-shield]: https://img.shields.io/static/v1?logo=ANDROID&message=Android&style=flat&logoColor=fff&color=A4C639&labelColor=gray&label=
[web-shield]: https://img.shields.io/static/v1?logo=GOOGLE-CHROME&message=Web&style=flat&logoColor=fff&color=4285F4&labelColor=gray&label=
[jest-shield]: https://img.shields.io/static/v1?logo=JEST&message=Jest&style=flat&logoColor=99424f&color=99424f&labelColor=f3f3f3&label=
[jest-url]: https://github.com/facebook/jest
[react-native-url]: https://reactnative.dev/
[node-url]: https://nodejs.org/
[yarn-url]: https://yarnpkg.com/

[stars-shield]: https://img.shields.io/github/stars/elgsantos/expo-template-typescript-jest.svg?style=flat
[stars-url]: https://github.com/elgsantos/expo-template-typescript-jest/stargazers
[issues-shield]: https://img.shields.io/github/issues/elgsantos/expo-template-typescript-jest.svg?style=flat
[issues-url]: https://github.com/elgsantos/expo-template-typescript-jest/issues

[license-shield]: https://img.shields.io/github/license/elgsantos/expo-template-typescript-jest.svg?style=flat
[license-url]: https://github.com/elgsantos/expo-template-typescript-jest/blob/master/LICENSE.txt
[github-url]: https://github.com/elgsantos