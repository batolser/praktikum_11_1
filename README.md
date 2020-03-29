# Работа praktikum_11

Сборка проекта с помощью webpack.

[Ссылка на проект](https://github.com/batolser/praktikum_11_1.git)

Version 0.1.0

## Просмотреть итоговый проект можно двумя способами:

1. На GitHub Environment - View deployment
2. Разместив файлы из ветки gh-pages у себя на сервере

## Как инициализировать проект

1. Склонировать проект
git clone https://github.com/batolser/praktikum_11_1.git
2. Установить зависимости для разработчика
>npm install --save-dev @babel/cli @babel/core @babel/preset-env autoprefixer babel-loader cross-env css-loader cssnano file-loader gh-pages html-loader html-webpack-plugin@3.2.0 image-webpack-loader lodash mini-css-extract-plugin postcss-loader resolve-url resolve-url-loader style-loader url-loader webpack webpack-cli webpack-dev-server webpack-md5-hash
3. Установить зависимости для продакшн версии
>npm install --save babel-polyfill core-js html-loader optimize-css-assets-webpack-plugin resolve-cwd
4. Собрать проект (продакшн версию)
>npm run build
5. Собрать проект (версия для разработчиков)
>npm run dev
5. "Задеплоить" проект
>npm run deploy
