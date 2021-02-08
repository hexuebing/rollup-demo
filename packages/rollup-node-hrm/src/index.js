import demo1 from './lib/demo1';
import demo2 from './lib/demo2';

export default {
  init() {
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    console.log([...arr1, ...arr2]);
    console.log('src/index')

    demo1.init();
    demo2.init();
  }
}