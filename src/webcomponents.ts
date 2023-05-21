import r2wc from "@r2wc/react-to-web-component"

import { SqHeader } from "./components/SqHeader"

const SqHeaderWc = r2wc(SqHeader)

customElements.define("sq-header", SqHeaderWc)