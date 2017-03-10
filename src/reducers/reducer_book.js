/**
 * Created by aliyy on 2017/1/14.
 */

//export default后面要跟function关键字的函数，不能用箭头函数
export default function(){
  //此处需要写return，而且已经是book reducer文件了，不需要再返回key
  return [
    {title: 'Javascript', pages: 101},
    {title: 'ES6', pages: 20},
    {title: 'React', pages: 10},
    {title: 'Redux', pages: 9},
    {title: 'Flux', pages: 5}
  ]
}