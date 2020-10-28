import { temperature } from './sea';
console.log('海水溫度: ' + temperature);

import { temperature as humanTemperature, swim } from './human';
console.log('人體溫度: ' + humanTemperature);
swim();

import * as human from './human';
console.log('人體溫度: ' + human.temperature);
human.swim();