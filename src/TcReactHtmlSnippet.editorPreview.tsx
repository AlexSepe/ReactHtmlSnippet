import { Component, ReactNode, createElement } from "react";
import { TcReactHtmlSnippetPreviewProps } from "../typings/TcReactHtmlSnippetProps";

export class preview extends Component<TcReactHtmlSnippetPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TcReactHtmlSnippet.css");
}
