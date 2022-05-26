module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
    jest: true,
    es2020: true,
    es6: true,
    'cypress/globals': true
  },
  // extends: [
  //   //'vue'
  //   //'plugin:vue/vue3-essential', // lv1
  //   'plugin:vue/vue3-strongly-recommended', // lv2
  //   //'plugin:vue/vue3-recommended', // lv3
  //   // js
  //   'eslint:recommended',
  //   //'prettier'
  // ],
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['prettier', 'cypress'],

  // parserOptions: {
  //     "ecmaVersion": 6,
  //     "sourceType": "module",
  //     "ecmaFeatures": {
  //         "jsx": true
  //     }
  // },

  // parserOptions: {
  //   sourceType: "module",
  //   allowImportExportEverywhere: false,
  //   ecmaFeatures: {
  //     globalReturn: false,
  //   },
  //   babelOptions: {
  //     configFile: "path/to/config.js",
  //   },
  // },

  // parserOptions: {
  //   parser: '@babel/eslint-parser'
  // },
  rules: {
    // "vue/html-closing-bracket-newline": ["error", {
    //   "singleline": "never",
    //   "multiline": "never "
    // }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid', // 화살표 함수 괄호 사용 방식
        bracketSpacing: true, // 객체 리터럴의 괄호 사이에 공백 출력
        endOfLine: 'auto', // 개행문자 CRLF/LF 자동 설정
        printWidth: 100, // 줄바꿈 길이 설정
        semi: false, // 명령문 끝에 세미콜론 추가
        singleQuote: true, // 작은 따옴표 사용
        tabWidth: 2, // 들여쓰기 공백 수 설정
        trailingComma: 'all', // 후행 쉼표 추가
        useTabs: false, // tab 대신 space 사용
      },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     arrowParens: 'avoid',    // 화살표 함수 괄호 사용 방식
    //     bracketSpacing: true,    // 객체 리터럴의 괄호 사이에 공백 출력
    //     endOfLine: 'auto',        // 개행문자 CRLF/LF 자동 설정
    //     printWidth: 80,            // 줄바꿈 길이 설정
    //     semi: true,                // 명령문 끝에 세미콜론 추가
    //     singleQuote: true,        // 작은 따옴표 사용
    //     tabWidth: 2,            // 들여쓰기 공백 수 설정
    //     trailingComma: 'all',    // 후행 쉼표 추가
    //     useTabs: false,            // tab 대신 space 사용
    //   },
    // ]
  },
}
