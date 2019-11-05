'use strict';

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Введите имя проекта',
    default: 'app'
  },
  {
    type: 'list',
    name: 'templates',
    message: 'Выберите шаблонизатор для html',
    choices: [
      {
        name: 'Nunjucks',
        value: 'nunjucks'
      },
      // {
      //   name: 'Swig',
      //   value: 'swig'
      // },
      // {
      //   name: 'Jade',
      //   value: 'jade'
      // },
      {
        name: 'Pug',
        value: 'pug'
      },
      {
        name: 'HTML',
        value: 'html'
      }
    ],
    default: 0
  },
  {
    type: 'list',
    name: 'css',
    message: 'Выберите css препроцессор',
    choices: [
      {
        name: 'Sass + PostCSS',
        value: 'sass'
      },
      {
        name: 'PostCSS (with SugarSS and Stylelint)',
        value: 'postcss'
      }
    ],
    default: 0
  },
  {
    type: 'list',
    name: 'bundler',
    message: 'Выберите сборщик для js',
    choices: [
      {
        name: 'Webpack',
        value: 'webpack'
      },
      {
        name: 'Без сборки',
        value: 'manually'
      }
    ]
  },
  {
    type: 'checkbox',
    name: 'sprites',
    message: 'Как будут собиратся иконки?',
    choices: [
      {
        name: 'SVG sprites',
        value: 'svg',
        checked: true
      },
      {
        name: 'Iconfonts',
        value: 'iconfont',
        checked: false
      },
      {
        name: 'PNG sprites',
        value: 'png',
        checked: false
      }
    ]
  },
  {
    type: 'confirm',
    name: 'svgo',
    message: 'Использовать SVGO для оптимизации svg?',
    default: true
  },
  {
    type: 'confirm',
    name: 'webp',
    message: 'Генерировать WebP картинки?',
    default: true
  },
  // {
  //   type: 'confirm',
  //   name: 'preview',
  //   message: 'Make preview page with all htmls',
  //   default: false
  // },
  {
    type: 'confirm',
    name: 'install',
    message: 'Установить зависимости прямо сейчас?',
    default: false
  }
];
