// From: https://www.npmjs.com/package/rewiremock
import rewiremock from 'rewiremock'

// settings
// ....
// this is important. This command is "transfering" this module parent to rewiremock
rewiremock.overrideEntryPoint(module)
export { rewiremock }
