module.exports =  {

    parser:  '@typescript-eslint/parser',  // Задает парсер ESLint
  
    extends:  [
  
      'plugin:react/recommended',  // Использует рекомендуемые правила из @ eslint-plugin-react
  
      'plugin:@typescript-eslint/recommended',  // Использует рекомендуемые правила из @typescript-eslint/eslint-plugin
  
  +   'prettier/@typescript-eslint',  // Использует eslint-config-prettier для отключения правил ESLint из @typescript-eslint/eslint-plugin, которые будут конфликтовать с prettier
  
  +   'plugin:prettier/recommended',  // Включает eslint-plugin-prettier и отображает более красивые ошибки как ошибки ESLint. Убедитесь, что это всегда последняя конфигурация в массиве extends.
  
    ],
  
    parserOptions:  {
  
    ecmaVersion:  2018,  // Позволяет анализировать современные функции ECMAScript
  
    sourceType:  'module',  // Разрешает использование импорта
  
    ecmaFeatures:  {
  
      jsx:  true,  //Разрешает анализ JSX
  
    },
  
    },
  
    rules:  {
  
       // Место для указания правил ESLint. Может использоваться для перезаписи правил, указанных в расширенных конфигах
  
      // например "@typescript-eslint/явный-тип-возврата-функции": "выкл.",
  
    },
  
    settings:  {
  
      react:  {
  
        version:  'detect',  // Указывает eslint-plugin-react автоматически определять версию React для использования
  
      },
  
    },
  
  };