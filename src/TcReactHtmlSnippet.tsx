import { Component, ReactNode, createElement } from "react";
import { TcReactHtmlSnippetContainerProps } from "../typings/TcReactHtmlSnippetProps";
import InnerHTML from "dangerously-set-html-content";

import "./ui/TcReactHtmlSnippet.css";

export class TcReactHtmlSnippet extends Component<TcReactHtmlSnippetContainerProps> {
    render(): ReactNode {           
        return (     
            (this.props.InnerHtmlStatic.length > 0 && (
                <div className={this.props.class} style={this.props.style}>
                    <InnerHTML html={this.props.InnerHtmlStatic} />
                </div>
            )) 
            || 
            (this.props.InnerHtml?.status === "available" && (
                <div className={this.props.class} style={this.props.style}>
                    <InnerHTML html={this.props.InnerHtml?.value} />
                </div>
            ))
        );

        
    }
}
