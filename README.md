# use-rewiremock

This is a simple repo to try to get [rewritemock](https://www.npmjs.com/package/rewiremock) to work.

## What I tried

I'm trying to run `./src/tmp.ts` with `ts-node`. In `src/tmp.ts`, I'm trying 3 diff approaches to mock out `src/thing.ts`:

```ts
rewiremock("./thing").with(() => "... mocked thing");
// rewiremock("./thing").with({
//   default: () => "... mocked thing",
// });
// rewiremock("./thing").with(() => () => "... mocked thing");
```

Trying each in order:

```sh
❯ ./node_modules/.bin/ts-node ./src/tmp.ts
1 > <Buffer 65 78 70 6f 72 74 20 64 65 66 61 75 6c 74 20 28 29 20 3d 3e 20 27 74 68 69 73 20 69 73 20 74 68 69 6e 67 27 0a>
2 > this is thing

❯ ./node_modules/.bin/ts-node ./src/tmp.ts
1 > <Buffer 65 78 70 6f 72 74 20 64 65 66 61 75 6c 74 20 28 29 20 3d 3e 20 27 74 68 69 73 20 69 73 20 74 68 69 6e 67 27 0a>
2 > this is thing

❯ ./node_modules/.bin/ts-node ./src/tmp.ts
1 > <Buffer 65 78 70 6f 72 74 20 64 65 66 61 75 6c 74 20 28 29 20 3d 3e 20 27 74 68 69 73 20 69 73 20 74 68 69 6e 67 27 0a>
2 > this is thing
```

i.e. nothing works. I'm expecting this output:

```txt
1 > ... mocked readFileSync
2 > ... mocked thing
```
