import { Component, ReactNode, createElement } from "react";
import { TcReactHtmlSnippetContainerProps } from "../typings/TcReactHtmlSnippetProps";
import InnerHTML from "dangerously-set-html-content";

import "./ui/TcReactHtmlSnippet.css";

export class TcReactHtmlSnippet extends Component<TcReactHtmlSnippetContainerProps> {
    render(): ReactNode {
        return (
            <div className={this.props.class} style={this.props.style}>
                <InnerHTML html={this.props.InnerHtml.value || ""} />
            </div>
        );
    }
}
