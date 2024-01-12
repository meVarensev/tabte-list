# Начало работы

Это шаблонный README для нового проекта React, созданного с использованием `vite`. Здесь представлены основные шаги по установке и настройке инструментов `Eslint`, `Prettier` и `Redux`. Вы можете использовать этот README в качестве отправной точки и внести изменения в соответствии со своими потребностями.

## Установка зависимостей

Выполните следующие команды для установки зависимостей проекта:

```shell
npm install
```

## Установка Eslint

Для настройки `Eslint` выполните следующие команды:

```shell
npm init @eslint/config
npm install -D eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb
```

## Настройка .eslintrc.json

В файле `.eslintrc.json` в корневой папке проекта добавьте следующую конфигурацию:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "airbnb",
    "prettier"
  ],
  "plugins": ["react-hooks", "react"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

## Добавление скрипта для запуска Eslint

Добавьте следующую конфигурацию в секцию `scripts` вашего `package.json`:

```json
"scripts": {
  "lint": "eslint --fix --ext .ts,.tsx ."
}
```

Теперь вы можете запустить `Eslint` с помощью команды:

```shell
npm run lint
```

## Установка Prettier

Для установки `Prettier` выполните следующую команду:

```shell
npm install -D --save-exact prettier eslint-config-prettier
```

## Настройка .prettierrc.json

В файле `.prettierrc.json` в корневой папке проекта добавьте следующую конфигурацию:

```json
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true
}
```

## Установка Redux Toolkit

Для установки Redux и React Redux выполните следующую команду:

```shell
npm install @reduxjs/toolkit
```

Также можно установить пакет для интеграции с Redux DevTools:

```shell
npm install --save-dev @redux-devtools/core
```

Теперь вы готовы начать работу с Redux в вашем проекте.

---

**Примечание**: Обратите внимание, что этот README предназначен только для предоставления базовой информации и указания на основные шаги по настройке Eslint, Prettier и Redux. Вы можете дополнить его согласно своим потребностям и добавить более подробные инструкции или описания вашего проекта.
