# GSAP Link
[GSAP](https://greensock.com/) 

> cdn : https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js  

[Ease-visualizer](https://greensock.com/ease-visualizer)  

# GSAP Intro
1. GSAP is a plugin for __TWEEN__ animation. ___The tween animation only sets up the first(last) frame and generates intermediate frame.___
2. Speed : GSAP > CSS > JQuery
3. Capatibility : GSAP > JQuery > CSS
4. Func Lib(for the previous version since GSAP3)
   1. TweenLite defines the <u>basic __Tween__ animation</u>.
   2. TimelineLite defines the <u>basic __Timeline__ animation</u>.
   3. TimelineMax defines the <u>__ADVANCED Timeline__ animation</u>.
   4. TweenMax defines all the function.

#  Note
##  __1. Tween__
- ```gsap.to(target, vars)```
- ```gsap.from(target, vars)```
- ```gsap.fromto(target, fromvars, tovars)```

### Example
```JS
// previous version
TweenMax.to('.box', 1, {x:450}); 

// GSAP3
gasp.to('.box', { 
  duration: 1,
  x: 450,
});

gsap.to('.box', 1, {x:450});
```

## __2. Timeline__
### Multi Tween
```JS
gsap.to('.box1', { duration: 1, x: 100, });
gsap.to('.box2', { delay: 1, duration: 1, y: 100 });
gsap.to('.box1', { delay: 2, duration: 1, rotation: 360 });
```
### Example
```JS
// previous version
new TimelineMax()
  .to('.box1', { duration: 1, x: 100, })
  .to('.box2', { duration: 1, y: 100 })
  .to('.box1', { duration: 1, rotation: 360 });

// GSAP3
new gsap.timeline()
  .to('.box1', { duration: 1, x: 100, })
  .to('.box2', { duration: 1, y: 100 })
  .to('.box1', { duration: 1, rotation: 360 });
```

### Default
```JS
const t1 = gsap.timeline({
  defaults: {
    duration: 1,
  },
});

t1.to('.box1', { x: 100, })
  .to('.box2', { y: 100, })
  .to('.box1', { rotation: 360, });

```
### Position
```JS
// The End of Timeline
tl.to(element, 1, {});  

// Abosolute Timeline e.g "2"
tl.to(element, 1, {}, 2);

// Relative to the End eg "+=2"
// 2 sec after
tl.to(element, 1, {}, '+=2');
// 2 sec before
tl.to(element, 1, {}, '-=2');

// Adding Label
t1.addLabel('spin', 3);
// Insert the animation at the label "spin"
tl.to(element, 1, {}, 'spin');
// Insert the animation 3 sec before the label "spin"
tl.to(element, 1, {}, 'spin+=3');
```

## __3. Other Setting__
- ## Animation Control
  - <code>.play()</code>
  - <code>.pause()</code>
  - <code>.paused()</code> : boolean 
  - <code>.pause()</code>
  - <code>.resume()</code>
  - <code>.restart()</code>
  - <code>.reverse()</code>
  - <code>.reversed()</code> : boolean
  - <code>.seek()</code>
- ## Repeat & Stagger
  - <code>repeat:</code>
  - <code>repeatDelay:</code>
  - <code>yoyo:</code> boolean
  - <code>stagger:</code>


