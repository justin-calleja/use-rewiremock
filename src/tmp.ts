import { rewiremock } from "./rewiremock";

rewiremock("./blah/util").with(() => "... mocked util");

rewiremock.enable();

import thing from "./thing";
console.log("2 >", thing());
