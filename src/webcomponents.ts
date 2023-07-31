import r2wc from "@r2wc/react-to-web-component"

import { SqHeader } from "./components/SqHeader"
import { SqFooter } from "./components/SqFooter"
import { SqButton } from "./components/SqButton"
import { SqLink } from "./components/SqLink"

const SqHeaderWc = r2wc(SqHeader)
const SqFooterWc = r2wc(SqFooter)
const SqButtonWc = r2wc(SqButton, {
    props: {
        label: "string",
        variant: "string",
        color: "string",
        href: "string",
        size: "string",
        loading: "boolean"
    }
})
const SqLinkWc = r2wc(SqLink, {
    props: {
        variant: "string",
        text: "string",
        href: "string",
        size: "string",
        theme: "string"
    }
})

customElements.define("sq-header", SqHeaderWc)
customElements.define("sq-footer", SqFooterWc)
customElements.define("sq-button", SqButtonWc)
customElements.define("sq-link", SqLinkWc)