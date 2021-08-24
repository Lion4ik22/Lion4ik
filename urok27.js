'use strict';

// 1) Какое будет выведено значение: let x = 5; alert( x++ ); ?
// 2) Чему равно такое выражение: [ ] + false - null + true ?
// 3) Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// 4) Чему равна сумма [ ] + 1 + 2?
// 5) Что выведет этот код: alert( &quot;1&quot;[0] )?
// 6) Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
// 7) Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b)?
// 8) Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); ?
// 9) a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// 10) Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
// 11) Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot;?
// 12) Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ?


// 1)
// let x = 5; alert( x++ );
// Ответ: 5.

//2)
// [ ] + false - null + true
// console.log([] + false - null + true);
//Ответ: NaN

//3)
// let y = 1;
// let x = y = 2;
// alert(x);
// //Ответ: 2

//4)
// console.log([] + 1 + 2);
//Ответ: 12

//5)
// alert( '1'[0] );
//Ответ: 1

//6)
// console.log(2 && 1 && null && 0 && undefined);
//Ответ: Null

//7)
// console.log(!!( 1 && 2 ) === (1 && 2));
//Ответ: false

//8)
// alert( null || 2 && 3 || 4 );
// Ответ: 3

//9)
// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a === b);
// Ответ: fasle

//10)
// alert( +'Infinity');
// Ответ: Infinity

//11)
// console.log('Ёжик' > 'яблоко');
// Ответ: fasle

// 12)
// console.log(0 || '' || 2 || undefined || true || falsе);
// Ответ: 2