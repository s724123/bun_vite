// tailwind.config.js
module.exports = {
  // 必須確保 Tailwind 知道要去哪裡掃描您的類別名稱 (class names)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 確保包含了所有使用 JSX/TSX 的檔案
  ],

  // 這是啟用 DaisyUI 插件的關鍵
  plugins: [
    require('daisyui'),
  ],


  daisyui: {
    themes: ["cupcake","light", "dark"], // 確保您需要的顏色主題在這裡
  },
}