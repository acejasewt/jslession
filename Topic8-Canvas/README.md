# 支援瀏覽器
1. Chrome 73、74
2. Safari 11 和 12
3. Firefox 65、66
4. Internet Explorer 11
5. Edge 42 和 44
6. Respondus LockDown 瀏覽

# 範例
- [CHROME MUSIC LAB](https://musiclab.chromeexperiments.com/)
- [Chrome Experiments](https://experiments.withgoogle.com/)
- [遊戲](https://codepen.io/frank890417/pen/jxBeWO)
- [視覺化圖表](https://codepen.io/frank890417/pen/eYZKrew)

# Canvas基本用法
```html
<canvas id='mycanvas' width='150' height='150'></canvas>
```
- ```<canvas>``` 只有 width 與 height 這兩個屬性
- 預設寬為 300px、高為 150px

```js
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d')
```
- canvas 元素會產生一個固定大小的繪圖畫布,這個畫布有一或多
個渲染環境(2D/3D)
- getContext() 是傳回一個用於在畫布上繪圖的上下文環境,在上
述範例指的是2D二維繪圖
