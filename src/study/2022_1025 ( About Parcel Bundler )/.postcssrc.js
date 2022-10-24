// NodeJS Bundler가 읽는 것이기 때문에 
// ESM 문법이 아닌, CommonJS 문법 사용!

// import -> require()


// export -> module.exports()
module.exports = {
  plugins: [require("autoprefixer")],
};