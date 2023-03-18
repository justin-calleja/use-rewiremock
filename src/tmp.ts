import { rewiremock } from "./rewiremock";

rewiremock("fs").with({
  readFileSync: () => "... mocked readFileSync",
});

rewiremock("./thing").with(() => "... mocked thing");
// rewiremock("./thing").with({
//   default: () => "... mocked thing",
// });
// rewiremock("./thing").with(() => () => "... mocked thing");

rewiremock.enable()

import { readFileSync } from 'fs'

console.log('1 >', readFileSync(`${__dirname}/thing.ts`))

import thing from './thing'
console.log('2 >', thing())
