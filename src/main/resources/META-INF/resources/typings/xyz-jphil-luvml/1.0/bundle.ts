/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace luvml.a {
    /**
     * 
     * @author
     * @param {string} name
     * @param {boolean} hasQuotes
     * @param {boolean} hasEqualSign
     * @param {boolean} hasValue
     * @class
     */
    export class Attr implements luvml.a.AttributeDefinition_I {
        /*private*/ name: string;

        /*private*/ __hasQuotes: boolean;

        /*private*/ __hasEqualSign: boolean;

        /*private*/ __hasValue: boolean;

        public constructor(name: string, hasQuotes: boolean, hasEqualSign: boolean, hasValue: boolean) {
            if (this.name === undefined) { this.name = null; }
            if (this.__hasQuotes === undefined) { this.__hasQuotes = false; }
            if (this.__hasEqualSign === undefined) { this.__hasEqualSign = false; }
            if (this.__hasValue === undefined) { this.__hasValue = false; }
            this.name = name;
            this.__hasQuotes = hasQuotes;
            this.__hasEqualSign = hasEqualSign;
            this.__hasValue = hasValue;
        }

        public static named(name: string): Attr {
            return new Attr(name, true, true, true);
        }

        public static null_valued(name: string): Attr {
            return new Attr(name, false, false, false);
        }

        /**
         * 
         * @return {boolean}
         */
        public hasQuotes(): boolean {
            return true;
        }

        /**
         * 
         * @return {boolean}
         */
        public hasEqualSign(): boolean {
            return true;
        }

        /**
         * 
         * @return {boolean}
         */
        public hasValue(): boolean {
            return true;
        }

        /**
         * 
         * @return {string}
         */
        public attributeName(): string {
            return this.name;
        }
    }
    Attr["__class"] = "luvml.a.Attr";
    Attr["__interfaces"] = ["luvml.a.AttributeDefinition_I"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @class
     */
    export interface AttributeDefinition_I {
        hasQuotes(): boolean;

        hasEqualSign(): boolean;

        hasValue(): boolean;

        attributeName(): string;
    }
}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {*} definition
     * @class
     */
    export abstract class Attribute_Am implements luvml.a.Attribute_I {
        /*private*/ d: luvml.a.AttributeDefinition_I;

        public constructor(definition: luvml.a.AttributeDefinition_I) {
            if (this.d === undefined) { this.d = null; }
            this.d = definition;
        }

        /**
         * 
         * @return {luvml.HtmlSegmentType_E}
         */
        public type(): luvml.HtmlSegmentType_E {
            return luvml.HtmlSegmentType_E.Attribute;
        }

        public abstract valueTo(o: luvml.o.Out_I);

        public getValue(): any {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @return {*}
         */
        public definition(): luvml.a.AttributeDefinition_I {
            return this.d;
        }

        /**
         * 
         * @param {*} o
         */
        public to(o: luvml.o.Out_I) {
            o.__(" ");
            o.__(this.d.attributeName());
            if (this.d.hasEqualSign())o.__("=");
            if (this.d.hasQuotes())o.__("\"");
            if (this.d.hasValue())this.valueTo(o);
            if (this.d.hasQuotes())o.__("\"");
        }
    }
    Attribute_Am["__class"] = "luvml.a.Attribute_Am";
    Attribute_Am["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @class
     */
    export interface Attribute_I extends luvml.HtmlSegment_I {
        definition(): luvml.a.AttributeDefinition_I;
    }
}
namespace luvml.a {
    /**
     * 
     * @author
     * @class
     */
    export interface CommonAttribute extends luvml.a.CoreAttribute, luvml.a.CommonEventAttribute {    }
}
namespace luvml.a {
    /**
     * 
     * @author
     * @class
     */
    export interface CommonEventAttribute {    }
}
namespace luvml.a {
    /**
     * 
     * @author
     * @class
     */
    export interface CoreAttribute extends luvml.___F {    }
}
namespace luvml {
    /**
     * 
     * @author
     * @class
     */
    export class DOCTYPE implements luvml.HtmlSegment_I {
        /*private*/ h: luvml.e.html;

        public static html5(): DOCTYPE {
            return new DOCTYPE();
        }

        public html(...segments: luvml.HtmlSegment_I[]): luvml.e.html {
            if (this.h != null){
                throw Object.defineProperty(new Error("Already added children, now please use the returned html object or a child to put more elements"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            this.h = new luvml.e.html();
            (o => o.____.apply(o, segments))(this.h);
            return this.h;
        }

        /**
         * 
         * @return {luvml.HtmlSegmentType_E}
         */
        public type(): luvml.HtmlSegmentType_E {
            return luvml.HtmlSegmentType_E.DocType;
        }

        /**
         * 
         * @param {*} o
         */
        public to(o: luvml.o.Out_I) {
            o.__("<!DOCTYPE html>").nL();
            if (this.h != null){
                this.h.to(o);
            }
        }

        constructor() {
            if (this.h === undefined) { this.h = null; }
        }
    }
    DOCTYPE["__class"] = "luvml.DOCTYPE";
    DOCTYPE["__interfaces"] = ["luvml.HtmlSegment_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @param {luvml.___F[]} comments
     * @class
     */
    export class Comment_Css_or_Script implements luvml.___F {
        /*private*/ comments: luvml.___F[];

        public constructor(...comments: luvml.___F[]) {
            if (this.comments === undefined) { this.comments = null; }
            this.comments = comments;
        }

        public static ___(s: string): Comment_Css_or_Script {
            return Comment_Css_or_Script.__({ to: (o) => o.__(s) });
        }

        public static __(...c: luvml.___F[]): Comment_Css_or_Script {
            return <any>new (__Function.prototype.bind.apply(Comment_Css_or_Script, [null].concat(<any[]>c)));
        }

        /**
         * 
         * @param {*} o
         */
        public to(o: luvml.o.Out_I) {
            o.__("/* ");
            for(let i: number = 0; i < this.comments.length; i++) {{
                const comment_i: luvml.___F = this.comments[i];
                comment_i.to(o);
            };}
            o.__(" */");
        }
    }
    Comment_Css_or_Script["__class"] = "luvml.e.Comment_Css_or_Script";
    Comment_Css_or_Script["__interfaces"] = ["luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @param {luvml.___F[]} comments
     * @class
     */
    export class Comment_Html implements luvml.HtmlSegment_I {
        /*private*/ comments: luvml.___F[];

        public constructor(...comments: luvml.___F[]) {
            if (this.comments === undefined) { this.comments = null; }
            this.comments = comments;
        }

        public static ___(s: string): Comment_Html {
            return Comment_Html.__({ to: (o) => o.__(s) });
        }

        public static __(...c: luvml.___F[]): Comment_Html {
            return <any>new (__Function.prototype.bind.apply(Comment_Html, [null].concat(<any[]>c)));
        }

        /**
         * 
         * @return {luvml.HtmlSegmentType_E}
         */
        public type(): luvml.HtmlSegmentType_E {
            return luvml.HtmlSegmentType_E.Comment;
        }

        /**
         * 
         * @param {*} o
         */
        public to(o: luvml.o.Out_I) {
            o.__("<!-- ");
            for(let i: number = 0; i < this.comments.length; i++) {{
                const comment_i: luvml.___F = this.comments[i];
                comment_i.to(o);
            };}
            o.__(" -->");
        }
    }
    Comment_Html["__class"] = "luvml.e.Comment_Html";
    Comment_Html["__interfaces"] = ["luvml.HtmlSegment_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     */
    export interface Element_I extends luvml.e.Node_I {
        tagName(): string;

        isSelfClosingHtml(): boolean;

        isStrictXml(): boolean;
    }
}
namespace luvml.e {
    /**
     * 
     * @author
     * @param {string} tag
     * @param {boolean} selfClosingHtml
     * @param {boolean} strictXml
     * @class
     */
    export class Element_m implements luvml.e.Node_I, luvml.e.Element_I {
        /*private*/ __attributes: Array<luvml.a.Attribute_I>;

        /*private*/ __children: Array<luvml.e.Node_I>;

        /*private*/ tag: string;

        /*private*/ selfClosingHtml: boolean;

        /*private*/ strictXml: boolean;

        public constructor(tag?: any, selfClosingHtml?: any, strictXml?: any) {
            if (((typeof tag === 'string') || tag === null) && ((typeof selfClosingHtml === 'boolean') || selfClosingHtml === null) && ((typeof strictXml === 'boolean') || strictXml === null)) {
                let __args = arguments;
                if (this.tag === undefined) { this.tag = null; } 
                if (this.selfClosingHtml === undefined) { this.selfClosingHtml = false; } 
                if (this.strictXml === undefined) { this.strictXml = false; } 
                this.__attributes = <any>([]);
                this.__children = <any>([]);
                this.tag = tag;
                this.selfClosingHtml = selfClosingHtml;
                this.strictXml = strictXml;
                if (selfClosingHtml && strictXml){
                    throw Object.defineProperty(new Error("An element cannot be both, self closing html and a strict xml"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                }
                if (tag == null)throw Object.defineProperty(new Error("Tag cannot be null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
            } else if (((typeof tag === 'string') || tag === null) && ((typeof selfClosingHtml === 'boolean') || selfClosingHtml === null) && strictXml === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let strictXml: any = false;
                    if (this.tag === undefined) { this.tag = null; } 
                    if (this.selfClosingHtml === undefined) { this.selfClosingHtml = false; } 
                    if (this.strictXml === undefined) { this.strictXml = false; } 
                    this.__attributes = <any>([]);
                    this.__children = <any>([]);
                    this.tag = tag;
                    this.selfClosingHtml = selfClosingHtml;
                    this.strictXml = strictXml;
                    if (selfClosingHtml && strictXml){
                        throw Object.defineProperty(new Error("An element cannot be both, self closing html and a strict xml"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                    }
                    if (tag == null)throw Object.defineProperty(new Error("Tag cannot be null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
                }
                if (this.tag === undefined) { this.tag = null; } 
                if (this.selfClosingHtml === undefined) { this.selfClosingHtml = false; } 
                if (this.strictXml === undefined) { this.strictXml = false; } 
                this.__attributes = <any>([]);
                this.__children = <any>([]);
            } else if (((typeof tag === 'string') || tag === null) && selfClosingHtml === undefined && strictXml === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let selfClosingHtml: any = false;
                    {
                        let __args = arguments;
                        let strictXml: any = false;
                        if (this.tag === undefined) { this.tag = null; } 
                        if (this.selfClosingHtml === undefined) { this.selfClosingHtml = false; } 
                        if (this.strictXml === undefined) { this.strictXml = false; } 
                        this.__attributes = <any>([]);
                        this.__children = <any>([]);
                        this.tag = tag;
                        this.selfClosingHtml = selfClosingHtml;
                        this.strictXml = strictXml;
                        if (selfClosingHtml && strictXml){
                            throw Object.defineProperty(new Error("An element cannot be both, self closing html and a strict xml"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                        }
                        if (tag == null)throw Object.defineProperty(new Error("Tag cannot be null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
                    }
                    if (this.tag === undefined) { this.tag = null; } 
                    if (this.selfClosingHtml === undefined) { this.selfClosingHtml = false; } 
                    if (this.strictXml === undefined) { this.strictXml = false; } 
                    this.__attributes = <any>([]);
                    this.__children = <any>([]);
                }
                if (this.tag === undefined) { this.tag = null; } 
                if (this.selfClosingHtml === undefined) { this.selfClosingHtml = false; } 
                if (this.strictXml === undefined) { this.strictXml = false; } 
                this.__attributes = <any>([]);
                this.__children = <any>([]);
            } else throw new Error('invalid overload');
        }

        public ____(...segments: luvml.HtmlSegment_I[]): Element_m {
            if (segments == null)return this;
            for(let i: number = 0; i < segments.length; i++) {{
                const seg: luvml.HtmlSegment_I = segments[i];
                if (seg == null){
                    throw Object.defineProperty(new Error("there is a corrupt null segment "), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                const t: luvml.HtmlSegmentType_E = seg.type();
                if (t == null){
                    throw Object.defineProperty(new Error("there is a corrupt segment of null type " + seg), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                if (/* Enum.equals */(<any>(t) === <any>(luvml.HtmlSegmentType_E.Attribute))){
                    this.addAttribute(<luvml.a.Attribute_I><any>seg);
                } else if (/* Enum.equals */(<any>(t) === <any>(luvml.HtmlSegmentType_E.Element)) || /* Enum.equals */(<any>(t) === <any>(luvml.HtmlSegmentType_E.Text)) || /* Enum.equals */(<any>(t) === <any>(luvml.HtmlSegmentType_E.Comment)) || /* Enum.equals */(<any>(t) === <any>(luvml.HtmlSegmentType_E.NodeFragment))){
                    if (this.selfClosingHtml)throw Object.defineProperty(new Error("self closing html cannot have children of any type"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    /* add */(this.__children.push(<luvml.e.Node_I><any>seg)>0);
                } else if (/* Enum.equals */(<any>(t) === <any>(luvml.HtmlSegmentType_E.DocType))){
                    throw Object.defineProperty(new Error("DocType is a root element, not allowed as a child."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                } else {
                    throw Object.defineProperty(new Error("Unknown segment type " + t), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                }
            };}
            return this;
        }

        /*private*/ addAttribute(toAdd: luvml.a.Attribute_I) {
            const n: string = toAdd.definition().attributeName();
            if (n == null || n.length === 0){
                return;
            }
            let previouslyExisting: luvml.a.Attribute_I = null;
            for(let a_idx: number = 0; a_idx < /* size */(<number>this.__attributes.length); a_idx++) {{
                const a_i: luvml.a.Attribute_I = /* get */this.__attributes[a_idx];
                if (a_i != null && a_i.definition() != null){
                    if (n === a_i.definition().attributeName()){
                        previouslyExisting = a_i;
                        break;
                    }
                }
            };}
            if (previouslyExisting != null){
                if ((previouslyExisting != null && previouslyExisting instanceof <any>luvml.a.clss) || (toAdd != null && toAdd instanceof <any>luvml.a.clss)){
                    (<luvml.a.clss><any>previouslyExisting).__((<luvml.a.clss><any>toAdd));
                    return;
                } else {
                    /* remove */(a => { let index = a.indexOf(previouslyExisting); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.__attributes);
                }
            }
            /* add */(this.__attributes.push(toAdd)>0);
        }

        /**
         * 
         * @return {luvml.HtmlSegmentType_E}
         */
        public type(): luvml.HtmlSegmentType_E {
            return luvml.HtmlSegmentType_E.Element;
        }

        /**
         * 
         * @return {boolean}
         */
        public isSelfClosingHtml(): boolean {
            return this.selfClosingHtml;
        }

        /**
         * 
         * @return {boolean}
         */
        public isStrictXml(): boolean {
            return this.strictXml;
        }

        public attributes(): Array<luvml.a.Attribute_I> {
            return this.__attributes;
        }

        public children(): Array<luvml.e.Node_I> {
            if (this.selfClosingHtml)throw Object.defineProperty(new Error(this.tag + " is self closing and does not support children"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return this.__children;
        }

        public attribute(name: string): luvml.a.Attribute_I {
            if (name == null)return null;
            for(let a_idx: number = 0; a_idx < /* size */(<number>this.__attributes.length); a_idx++) {{
                const a_i: luvml.a.Attribute_I = /* get */this.__attributes[a_idx];
                if (a_i == null || a_i.definition() == null)continue;
                if (name === a_i.definition().attributeName())return a_i;
            };}
            return null;
        }

        public attribute_(adi: luvml.a.AttributeDefinition_I): luvml.a.Attribute_I {
            if (adi == null)return null;
            return this.attribute(adi.attributeName());
        }

        /**
         * 
         * @return {string}
         */
        public tagName(): string {
            return this.tag;
        }

        /**
         * 
         * @param {*} o
         */
        public to(o: luvml.o.Out_I) {
            o.__("<");
            o.__(this.tag);
            for(let a_idx: number = 0; a_idx < /* size */(<number>this.__attributes.length); a_idx++) {{
                const a_i: luvml.a.Attribute_I = /* get */this.__attributes[a_idx];
                a_i.to(o);
            };}
            if (/* size */(<number>this.__children.length) === 0){
                if (this.selfClosingHtml && !o.parameters().isPolyglotXHTML()){
                    o.__(">");
                } else {
                    o.__("/>");
                }
                o.nL();
                return;
            }
            o.__(">");
            o.nL();
            for(let e_idx: number = 0; e_idx < /* size */(<number>this.__children.length); e_idx++) {{
                const e_i: luvml.e.Node_I = /* get */this.__children[e_idx];
                e_i.to(o.child());
            };}
            o.__("</");
            o.__(this.tag);
            o.__(">");
            o.nL();
        }
    }
    Element_m["__class"] = "luvml.e.Element_m";
    Element_m["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @param {*} src
     * @class
     */
    export class Node implements luvml.e.Node_I {
        /*private*/ src: luvml.___F;

        public constructor(src: luvml.___F) {
            if (this.src === undefined) { this.src = null; }
            this.src = src;
        }

        public static __(src: luvml.___F): Node {
            return new Node(src);
        }

        /**
         * 
         * @return {luvml.HtmlSegmentType_E}
         */
        public type(): luvml.HtmlSegmentType_E {
            return luvml.HtmlSegmentType_E.NodeFragment;
        }

        /**
         * 
         * @param {*} o
         */
        public to(o: luvml.o.Out_I) {
            this.src.to(o);
        }
    }
    Node["__class"] = "luvml.e.Node";
    Node["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * I am not sure if this is of any use.
     * @author
     * @class
     */
    export class NodeFragment implements luvml.e.NodeFragment_I {
        /*private*/ content: Array<luvml.e.Node_I>;

        /**
         * 
         * @return {luvml.HtmlSegmentType_E}
         */
        public type(): luvml.HtmlSegmentType_E {
            return luvml.HtmlSegmentType_E.NodeFragment;
        }

        /**
         * 
         * @return {*[]}
         */
        public getContent(): Array<luvml.e.Node_I> {
            return this.content;
        }

        /**
         * 
         * @param {luvml.e.Node_I[]} segments
         * @return {luvml.e.NodeFragment}
         */
        public ___(...segments: luvml.e.Node_I[]): NodeFragment {
            for(let i: number = 0; i < segments.length; i++) {{
                const segment: luvml.e.Node_I = segments[i];
                /* add */(this.content.push(segment)>0);
            };}
            return this;
        }

        /**
         * make sure to notice the difference between
         * the function signature (name) of static
         * and class member function
         * Otherwise you will add elements and think why it is not adding
         * @param {luvml.e.Node_I[]} segments
         * @return {luvml.e.NodeFragment}
         */
        public static __(...segments: luvml.e.Node_I[]): NodeFragment {
            const fragment: NodeFragment = new NodeFragment();
            (o => o.___.apply(o, segments))(fragment);
            return fragment;
        }

        /**
         * 
         * @param {*} o
         */
        public to(o: luvml.o.Out_I) {
            for(let i: number = 0; i < /* size */(<number>this.content.length); i++) {{
                const segment: luvml.HtmlSegment_I = /* get */this.content[i];
                if (segment != null){
                    segment.to(o);
                } else {
                    o.__("<!-- null segment at index " + i + " of this fragment -->").nL();
                }
            };}
        }

        constructor() {
            this.content = <any>([]);
        }
    }
    NodeFragment["__class"] = "luvml.e.NodeFragment";
    NodeFragment["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.NodeFragment_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     */
    export interface NodeFragment_I extends luvml.e.Node_I {
        getContent(): Array<luvml.e.Node_I>;

        ___(...segments: luvml.e.Node_I[]): luvml.e.NodeFragment;
    }
}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     */
    export abstract class Node_A implements luvml.e.Node_I {
        /**
         * 
         * @return {luvml.HtmlSegmentType_E}
         */
        public type(): luvml.HtmlSegmentType_E {
            return luvml.HtmlSegmentType_E.NodeFragment;
        }

        public abstract to(o?: any): any;
        constructor() {
        }
    }
    Node_A["__class"] = "luvml.e.Node_A";
    Node_A["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     */
    export interface Node_I extends luvml.HtmlSegment_I {    }
}
namespace luvml {
    /**
     * 
     * @author
     * @enum
     * @property {luvml.HtmlSegmentType_E} Attribute
     * @property {luvml.HtmlSegmentType_E} Element
     * @property {luvml.HtmlSegmentType_E} Text
     * @property {luvml.HtmlSegmentType_E} Comment
     * @property {luvml.HtmlSegmentType_E} DocType
     * @property {luvml.HtmlSegmentType_E} NodeFragment
     * @class
     */
    export enum HtmlSegmentType_E {
        Attribute, Element, Text, Comment, DocType, NodeFragment
    }
}
namespace luvml {
    /**
     * 
     * @author
     * @class
     */
    export interface HtmlSegment_I extends luvml.___F {
        type(): luvml.HtmlSegmentType_E;
    }
}
namespace luvml.o {
    /**
     * 
     * @author
     * @param {luvml.o.FormatBuilder} fb
     * @class
     */
    export class Format {
        public static NEWLINE_UNIX: number[]; public static NEWLINE_UNIX_$LI$(): number[] { if (Format.NEWLINE_UNIX == null) { Format.NEWLINE_UNIX = [('\n').charCodeAt(0)]; }  return Format.NEWLINE_UNIX; }

        public static NEWLINE_WINDOWS: number[]; public static NEWLINE_WINDOWS_$LI$(): number[] { if (Format.NEWLINE_WINDOWS == null) { Format.NEWLINE_WINDOWS = [('\r').charCodeAt(0), ('\n').charCodeAt(0)]; }  return Format.NEWLINE_WINDOWS; }

        public static NEWLINE_NULL: number[] = null;

        public intentChar: number;

        public childIntent: number;

        public newLine: number[];

        public static intentChar_default: number; public static intentChar_default_$LI$(): number { if (Format.intentChar_default == null) { Format.intentChar_default = (' ').charCodeAt(0); }  return Format.intentChar_default; }

        public static childIntent_default: number = 0;

        public static newLine_default: number[]; public static newLine_default_$LI$(): number[] { if (Format.newLine_default == null) { Format.newLine_default = Format.NEWLINE_NULL; }  return Format.newLine_default; }

        public constructor(fb: luvml.o.FormatBuilder) {
            if (this.intentChar === undefined) { this.intentChar = 0; }
            if (this.childIntent === undefined) { this.childIntent = 0; }
            if (this.newLine === undefined) { this.newLine = null; }
            this.intentChar = fb.__intentChar;
            this.childIntent = fb.__childIntent;
            this.newLine = fb.__newLine;
        }
    }
    Format["__class"] = "luvml.o.Format";

}
namespace luvml.o {
    /**
     * 
     * @author
     * @class
     */
    export class FormatBuilder {
        public __intentChar: number;

        public __childIntent: number;

        public __newLine: number[];

        public modify(f: luvml.o.Format): FormatBuilder {
            if (f != null){
                this.__intentChar = f.intentChar;
                this.__childIntent = f.childIntent;
                this.__newLine = f.newLine;
            }
            return this;
        }

        public childIntent(childIntent: number): FormatBuilder {
            this.__childIntent = childIntent;
            return this;
        }

        public intentChar$char(intentChar: string): FormatBuilder {
            return this.intentChar$int((intentChar).charCodeAt(0));
        }

        public intentChar(intentChar?: any): any {
            if (((typeof intentChar === 'string') || intentChar === null)) {
                return <any>this.intentChar$char(intentChar);
            } else if (((typeof intentChar === 'number') || intentChar === null)) {
                return <any>this.intentChar$int(intentChar);
            } else throw new Error('invalid overload');
        }

        public intentChar$int(intentChar: number): FormatBuilder {
            this.__intentChar = (<number>intentChar|0);
            return this;
        }

        public singleTabIntent(): FormatBuilder {
            return this.intentChar$char('\t').childIntent(1);
        }

        public spaceIntent(): FormatBuilder {
            return this.intentChar$char(' ').childIntent(4);
        }

        public newLine_Windows(): FormatBuilder {
            this.__newLine = luvml.o.Format.NEWLINE_WINDOWS_$LI$();
            return this;
        }

        public newLine_Unix(): FormatBuilder {
            this.__newLine = luvml.o.Format.NEWLINE_UNIX_$LI$();
            return this;
        }

        public newLine_Null(): FormatBuilder {
            this.__newLine = luvml.o.Format.NEWLINE_NULL;
            return this;
        }

        public newLine(b: number[]): FormatBuilder {
            this.__newLine = b;
            return this;
        }

        public build(): luvml.o.Format {
            return new luvml.o.Format(this);
        }

        constructor() {
            this.__intentChar = luvml.o.Format.intentChar_default_$LI$();
            this.__childIntent = luvml.o.Format.childIntent_default;
            this.__newLine = luvml.o.Format.newLine_default_$LI$();
        }
    }
    FormatBuilder["__class"] = "luvml.o.FormatBuilder";

}
namespace luvml.o {
    /**
     * 
     * @author
     * @class
     */
    export class Out {
        public string(): luvml.o.Out_String {
            return new luvml.o.Out_String();
        }

        public asString(x: luvml.___F): string {
            const os: luvml.o.Out_String = new luvml.o.Out_String();
            x.to(os);
            return os.render();
        }
    }
    Out["__class"] = "luvml.o.Out";

}
namespace luvml.o {
    /**
     * 
     * @author Ivan Velikanova  ivan.velikanova@gmail.com
     * @param {*} ap
     * @class
     */
    export abstract class Out_A<ExtraParams> implements luvml.o.Out_I {
        public p: luvml.o.Parameters<any>;

        public constructor(ap: (p1: luvml.o.ParametersBuilder<ExtraParams>) => void) {
            if (this.p === undefined) { this.p = null; }
            const pb: luvml.o.ParametersBuilder<any> = <any>(new luvml.o.ParametersBuilder());
            if (ap != null){
                (target => (typeof target === 'function') ? target(pb) : (<any>target).accept(pb))(ap);
            }
            this.p = pb.build();
        }

        /**
         * 
         * @return {luvml.o.Parameters}
         */
        public parameters(): luvml.o.Parameters<any> {
            return this.p;
        }

        /**
         * 
         * @return {*}
         */
        public nL(): luvml.o.Out_I {
            if (this.p.format != null){
                if (this.p.format.newLine != null){
                    this.ba(this.p.format.newLine);
                }
                for(let i: number = 0; i < this.p.totalIntent; i++) {{
                    this._b(this.p.format.intentChar);
                };}
            }
            return this;
        }

        /**
         * 
         * @return {luvml.o.Out_A}
         */
        public child(): Out_A<any> {
            const parent: Out_A<any> = this;
            if (this.p != null && this.p.format != null){
                return new Out_A.ChildOut_IA(parent);
            } else return this;
        }

        /**
         * 
         * @return {luvml.o.Out_A}
         */
        public parent(): Out_A<any> {
            return null;
        }

        public abstract __(s?: any): any;
        public abstract _b(b?: any): any;
        public abstract ba(b?: any): any;    }
    Out_A["__class"] = "luvml.o.Out_A";
    Out_A["__interfaces"] = ["luvml.o.Out_I"];



    export namespace Out_A {

        export class ChildOut_IA extends luvml.o.Out_A<any> {
            __parent: luvml.o.Out_A<any>;

            public constructor(parent: luvml.o.Out_A<any>) {
                super(($) => $.child(parent.p));
                if (this.__parent === undefined) { this.__parent = null; }
                this.__parent = parent;
            }

            /**
             * 
             * @param {string} s
             * @return {*}
             */
            public __(s: string): luvml.o.Out_I {
                this.__parent.__(s);
                return this;
            }

            /**
             * 
             * @param {byte[]} b
             * @return {*}
             */
            public ba(b: number[]): luvml.o.Out_I {
                return this.__parent.ba(b);
            }

            /**
             * 
             * @param {number} b
             * @return {*}
             */
            public _b(b: number): luvml.o.Out_I {
                return this.__parent._b(b);
            }

            /**
             * 
             * @return {luvml.o.Out_A}
             */
            public parent(): luvml.o.Out_A<any> {
                return this.__parent;
            }
        }
        ChildOut_IA["__class"] = "luvml.o.Out_A.ChildOut_IA";
        ChildOut_IA["__interfaces"] = ["luvml.o.Out_I"];


    }

}
namespace luvml.o {
    /**
     * 
     * @author Ivan Velikanova
     * @class
     */
    export interface Out_I {
        __(s: string): Out_I;

        /**
         * inserts newline
         * @return {*} this
         */
        nL(): Out_I;

        child(): Out_I;

        parent(): Out_I;

        parameters(): luvml.o.Parameters<any>;

        _b(b: number): Out_I;

        ba(b: number[]): Out_I;
    }
}
namespace luvml.o {
    /**
     * 
     * @author
     * @param {luvml.o.ParametersBuilder} p
     * @class
     */
    export class Parameters<E> {
        /**
         * Refer : <a href="https://en.wikipedia.org/wiki/Polyglot_markup">Wikipedia: Polyglot markup</a>
         * if true makes Xml compatible html5 which is acceptable as valid Html
         * as per https://validator.w3.org/nu/ ; example - <pre><img src="i.jpg"/></pre> .
         * if false makes html as per strict html standard ; example - <pre><img src="i.jpg"></pre> .
         * 
         * default false
         */
        public polyglotXHTML: boolean;

        public format: luvml.o.Format;

        public totalIntent: number;

        public __extraParams: (p1: E) => void;

        public static polyglotXHTML_default: boolean = true;

        public static format_default: luvml.o.Format = null;

        public static totalIntent_default: number = 0;

        public constructor(p: luvml.o.ParametersBuilder<E>) {
            if (this.polyglotXHTML === undefined) { this.polyglotXHTML = false; }
            if (this.format === undefined) { this.format = null; }
            if (this.totalIntent === undefined) { this.totalIntent = 0; }
            if (this.__extraParams === undefined) { this.__extraParams = null; }
            this.polyglotXHTML = p.__polyglotXHTML;
            this.format = p.__format;
            this.totalIntent = p.__totalIntent;
            this.__extraParams = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(p.__extraParams));
        }

        public extraParams(): (p1: E) => void {
            return <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(this.__extraParams));
        }

        public isPolyglotXHTML(): boolean {
            return this.polyglotXHTML;
        }
    }
    Parameters["__class"] = "luvml.o.Parameters";

}
namespace luvml.o {
    /**
     * 
     * @author
     * @class
     */
    export class ParametersBuilder<E> {
        public __polyglotXHTML: boolean;

        __format: luvml.o.Format;

        __totalIntent: number;

        __extraParams: (p1: E) => void;

        public extraParams(c: (p1: E) => void): ParametersBuilder<E> {
            this.__extraParams = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(c));
            return this;
        }

        public polyglotXHTML(polyglotXHTML: boolean): ParametersBuilder<E> {
            this.__polyglotXHTML = polyglotXHTML;
            return this;
        }

        public unformated(): ParametersBuilder<E> {
            this.__format = null;
            return this;
        }

        public format$luvml_o_Format(f: luvml.o.Format): ParametersBuilder<E> {
            this.__format = f;
            return this;
        }

        public format(f?: any): any {
            if (((f != null && f instanceof <any>luvml.o.Format) || f === null)) {
                return <any>this.format$luvml_o_Format(f);
            } else if (((typeof f === 'function' && (<any>f).length === 1) || f === null)) {
                return <any>this.format$java_util_function_Consumer(f);
            } else throw new Error('invalid overload');
        }

        public format$java_util_function_Consumer(cc: (p1: luvml.o.FormatBuilder) => void): ParametersBuilder<E> {
            const fb: luvml.o.FormatBuilder = new luvml.o.FormatBuilder();
            fb.modify(this.__format);
            (target => (typeof target === 'function') ? target(fb) : (<any>target).accept(fb))(cc);
            this.__format = fb.build();
            return this;
        }

        public totalIntent(totalIntent: number): ParametersBuilder<E> {
            this.__totalIntent = totalIntent;
            return this;
        }

        public child(p: luvml.o.Parameters<any>): ParametersBuilder<E> {
            this.modify(p);
            this.totalIntent(this.__totalIntent + p.format.childIntent);
            return this;
        }

        public modify(p: luvml.o.Parameters<any>): ParametersBuilder<E> {
            this.__polyglotXHTML = p.polyglotXHTML;
            this.__format = p.format;
            this.__totalIntent = p.totalIntent;
            return this;
        }

        public build(): luvml.o.Parameters<any> {
            return <any>(new luvml.o.Parameters(this));
        }

        constructor() {
            this.__polyglotXHTML = luvml.o.Parameters.polyglotXHTML_default;
            this.__format = luvml.o.Parameters.format_default;
            this.__totalIntent = luvml.o.Parameters.totalIntent_default;
            this.__extraParams = <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(null));
        }
    }
    ParametersBuilder["__class"] = "luvml.o.ParametersBuilder";

}
namespace luvml {
    /**
     * A Generic Flow
     * @author
     * @class
     */
    export interface ___F {
        to(o: luvml.o.Out_I);
    }
}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {string} n
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_Am
     */
    export class A extends luvml.a.Attribute_Am {
        /*private*/ v: string;

        public constructor(n: string, v: string) {
            super(luvml.a.Attr.named(n));
            if (this.v === undefined) { this.v = null; }
            this.v = v;
        }

        public getValue(): string {
            return this.v;
        }

        public static __(n: string, v: string): luvml.a.Attribute_I {
            return new A(n, v);
        }

        /**
         * 
         * @param {*} o
         */
        public valueTo(o: luvml.o.Out_I) {
            o.__(this.v);
        }
    }
    A["__class"] = "luvml.a.A";
    A["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {*} definition
     * @param {string} value
     * @class
     * @extends luvml.a.Attribute_Am
     */
    export class Attribute_m extends luvml.a.Attribute_Am {
        /*private*/ value: string;

        public constructor(definition?: any, value?: any) {
            if (((definition != null && (definition.constructor != null && definition.constructor["__interfaces"] != null && definition.constructor["__interfaces"].indexOf("luvml.a.AttributeDefinition_I") >= 0)) || definition === null) && ((typeof value === 'string') || value === null)) {
                let __args = arguments;
                super(definition);
                this.value = null;
                this.value = value;
            } else if (((definition != null && (definition.constructor != null && definition.constructor["__interfaces"] != null && definition.constructor["__interfaces"].indexOf("luvml.a.AttributeDefinition_I") >= 0)) || definition === null) && value === undefined) {
                let __args = arguments;
                super(definition);
                this.value = null;
            } else throw new Error('invalid overload');
        }

        public setValue(value: string) {
            this.value = value;
        }

        public getValue(): string {
            return this.value;
        }

        /**
         * 
         * @param {*} o
         */
        public valueTo(o: luvml.o.Out_I) {
            if (this.value == null)return;
            o.__(this.value);
        }
    }
    Attribute_m["__class"] = "luvml.a.Attribute_m";
    Attribute_m["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @class
     * @extends luvml.a.Attribute_Am
     */
    export class clss extends luvml.a.Attribute_Am {
        public static DEFINITION: luvml.a.Attr; public static DEFINITION_$LI$(): luvml.a.Attr { if (clss.DEFINITION == null) { clss.DEFINITION = luvml.a.Attr.named("class"); }  return clss.DEFINITION; }

        /*private*/ value: Array<string>;

        public constructor() {
            super(clss.DEFINITION_$LI$());
            this.value = <any>([]);
        }

        public __(...classes: clss[]) {
            for(let i: number = 0; i < classes.length; i++) {{
                const classes_i: clss = classes[i];
                for(let j: number = 0; j < /* size */(<number>classes_i.value.length); j++) {{
                    const clss_i_j: string = /* get */classes_i.value[j];
                    this.addSingleClass(clss_i_j);
                };}
            };}
        }

        public addClasses(classes: string) {
            const classes_sub: string[] = classes.split(" ");
            for(let i: number = 0; i < classes_sub.length; i++) {{
                const classes_sub_i: string = classes_sub[i];
                this.addSingleClass(classes_sub_i);
            };}
        }

        /*private*/ addSingleClass(clss: string) {
            for(let i: number = 0; i < /* size */(<number>this.value.length); i++) {{
                const class_i: string = /* get */this.value[i];
                if (class_i === clss){
                    return;
                }
            };}
            /* add */(this.value.push(clss)>0);
        }

        public removeClasses(classes: string) {
            const classes_sub: string[] = classes.split(" ");
            for(let i: number = 0; i < classes_sub.length; i++) {{
                const clss_i: string = /* get */this.value[i];
                this.removeSingleClass(clss_i);
            };}
        }

        public add(...classes: string[]) {
            for(let i: number = 0; i < classes.length; i++) {{
                const clss: string = classes[i];
                this.addSingleClass(clss);
            };}
        }

        public remove(...classes: string[]) {
            for(let i: number = 0; i < classes.length; i++) {{
                const clss: string = classes[i];
                this.removeSingleClass(clss);
            };}
        }

        /*private*/ removeSingleClass(clss: string) {
            let toRemove: string = clss;
            for(let i: number = 0; i < /* size */(<number>this.value.length); i++) {{
                const class_i: string = /* get */this.value[i];
                if (class_i === clss){
                    toRemove = class_i;
                    break;
                }
            };}
            /* remove */(a => { let index = a.indexOf(toRemove); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.value);
        }

        public static __(...classes: string[]): clss {
            const a: clss = new clss();
            for(let v_i: number = 0; v_i < classes.length; v_i++) {{
                const clss_v: string = classes[v_i];
                const clss_vs: string[] = clss_v.split(" ");
                for(let j: number = 0; j < clss_vs.length; j++) {{
                    const clss_vi_j: string = clss_vs[j];
                    a.addSingleClass(clss_vi_j);
                };}
            };}
            return a;
        }

        /**
         * 
         * @param {*} o
         */
        public valueTo(o: luvml.o.Out_I) {
            for(let i: number = 0; i < /* size */(<number>this.value.length); i++) {{
                const v_i: string = /* get */this.value[i];
                o.__(v_i);
                if (i < /* size */(<number>this.value.length) - 1){
                    o.__(" ");
                }
            };}
        }
    }
    clss["__class"] = "luvml.a.clss";
    clss["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class a extends luvml.e.Element_m {
        public constructor() {
            super("a");
        }

        public static __(): a {
            return new a();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): a {
            return <a>(o => o.____.apply(o, segments))(new a());
        }
    }
    a["__class"] = "luvml.e.a";
    a["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class body extends luvml.e.Element_m {
        public constructor() {
            super("body");
        }

        public static __(): body {
            return new body();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): body {
            return <body>(o => o.____.apply(o, segments))(new body());
        }
    }
    body["__class"] = "luvml.e.body";
    body["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class div extends luvml.e.Element_m {
        public constructor() {
            super("div");
        }

        public static __(): div {
            return new div();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): div {
            return <div>(o => o.____.apply(o, segments))(new div());
        }
    }
    div["__class"] = "luvml.e.div";
    div["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @param {number} _1_to_6
     * @class
     * @extends luvml.e.Element_m
     */
    export class h extends luvml.e.Element_m {
        public constructor(_1_to_6: number) {
            super(h.htag(_1_to_6));
        }

        public static __(_1_to_6: number): h {
            return new h(_1_to_6);
        }

        public static ___(_1_to_6: number, ...segments: luvml.HtmlSegment_I[]): h {
            return <h>(o => o.____.apply(o, segments))(new h(_1_to_6));
        }

        /*private*/ static htag(_1_to_6: number): string {
            switch((_1_to_6)) {
            case 1:
                return "h1";
            case 2:
                return "h2";
            case 3:
                return "h3";
            case 4:
                return "h4";
            case 5:
                return "h5";
            case 6:
                return "h6";
            default:
                throw Object.defineProperty(new Error("h" + _1_to_6 + " is not a standard element"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object','java.lang.AssertionError'] });
            }
        }
    }
    h["__class"] = "luvml.e.h";
    h["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class head extends luvml.e.Element_m {
        public constructor() {
            super("head");
        }

        public static __(): head {
            return new head();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): head {
            return <head>(o => o.____.apply(o, segments))(new head());
        }
    }
    head["__class"] = "luvml.e.head";
    head["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class html extends luvml.e.Element_m {
        public constructor() {
            super("html");
        }

        public static __(): html {
            return new html();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): html {
            return <html>(o => o.____.apply(o, segments))(new html());
        }
    }
    html["__class"] = "luvml.e.html";
    html["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class img extends luvml.e.Element_m {
        public constructor() {
            super("img", false);
        }

        public static __(): img {
            return new img();
        }

        public static ___(...segments: luvml.a.Attribute_I[]): img {
            return <img>new img().____(...segments);
        }
    }
    img["__class"] = "luvml.e.img";
    img["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class input extends luvml.e.Element_m {
        public constructor() {
            super("input");
        }

        public static __(): input {
            return new input();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): input {
            return <input>(o => o.____.apply(o, segments))(new input());
        }
    }
    input["__class"] = "luvml.e.input";
    input["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class label extends luvml.e.Element_m {
        public constructor() {
            super("label");
        }

        public static __(): label {
            return new label();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): label {
            return <label>(o => o.____.apply(o, segments))(new label());
        }
    }
    label["__class"] = "luvml.e.label";
    label["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class li extends luvml.e.Element_m {
        public constructor() {
            super("li");
        }

        public static __(): li {
            return new li();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): li {
            return <li>(o => o.____.apply(o, segments))(new li());
        }
    }
    li["__class"] = "luvml.e.li";
    li["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class nav extends luvml.e.Element_m {
        public constructor() {
            super("nav");
        }

        public static __(): nav {
            return new nav();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): nav {
            return <nav>(o => o.____.apply(o, segments))(new nav());
        }
    }
    nav["__class"] = "luvml.e.nav";
    nav["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class path extends luvml.e.Element_m {
        public constructor() {
            super("path", false, true);
        }

        public static __(): path {
            return new path();
        }

        public d(path: string): path {
            this.____(luvml.a.A.__("d", path));
            return this;
        }

        /**
         * 
         * @param {*} o
         */
        public to(o: luvml.o.Out_I) {
            super.to(o);
        }
    }
    path["__class"] = "luvml.e.path";
    path["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class svg extends luvml.e.Element_m {
        public constructor() {
            super("svg");
            this.____(luvml.a.A.__("xmlns", "http://www.w3.org/2000/svg"));
        }

        public static __(): svg {
            return new svg();
        }

        public static ___(...segments: luvml.a.Attribute_I[]): svg {
            return <svg>new svg().____(...segments);
        }
    }
    svg["__class"] = "luvml.e.svg";
    svg["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.e {
    /**
     * 
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    export class ul extends luvml.e.Element_m {
        public constructor() {
            super("ul");
        }

        public static __(): ul {
            return new ul();
        }

        public static ___(...segments: luvml.HtmlSegment_I[]): ul {
            return <ul>(o => o.____.apply(o, segments))(new ul());
        }
    }
    ul["__class"] = "luvml.e.ul";
    ul["__interfaces"] = ["luvml.e.Node_I","luvml.HtmlSegment_I","luvml.e.Element_I","luvml.___F"];


}
namespace luvml.o {
    /**
     * 
     * @author Ivan Velikanova
     * @param {*} ap
     * @class
     * @extends luvml.o.Out_A
     */
    export class Out_String extends luvml.o.Out_A<any> {
        public constructor(ap: (p1: luvml.o.ParametersBuilder<any>) => void = null) {
            super(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0)})(ap)));
            this.s = "";
        }

        /*private*/ s: string;

        /**
         * 
         * @param {string} s
         * @return {luvml.o.Out_String}
         */
        public __(s: string): Out_String {
            this.s += s;
            return this;
        }

        public render(): string {
            return this.s;
        }

        /**
         * 
         * @param {number} b
         * @return {luvml.o.Out_String}
         */
        public _b(b: number): Out_String {
            this.s += String.fromCharCode(b);
            return this;
        }

        /**
         * 
         * @param {byte[]} b
         * @return {luvml.o.Out_String}
         */
        public ba(b: number[]): Out_String {
            this.s += String.fromCharCode.apply(null, b);
            return this;
        }
    }
    Out_String["__class"] = "luvml.o.Out_String";
    Out_String["__interfaces"] = ["luvml.o.Out_I"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    export class for_ extends luvml.a.Attribute_m {
        public static DEFINITION: luvml.a.Attr; public static DEFINITION_$LI$(): luvml.a.Attr { if (for_.DEFINITION == null) { for_.DEFINITION = luvml.a.Attr.named("for"); }  return for_.DEFINITION; }

        public constructor(v?: any) {
            if (((typeof v === 'string') || v === null)) {
                let __args = arguments;
                super(for_.DEFINITION_$LI$(), v);
            } else if (v === undefined) {
                let __args = arguments;
                super(for_.DEFINITION_$LI$());
            } else throw new Error('invalid overload');
        }

        public static __(v: string): for_ {
            return new for_(v);
        }
    }
    for_["__class"] = "luvml.a.for_";
    for_["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    export class href extends luvml.a.Attribute_m {
        public static DEFINITION: luvml.a.Attr; public static DEFINITION_$LI$(): luvml.a.Attr { if (href.DEFINITION == null) { href.DEFINITION = luvml.a.Attr.named("href"); }  return href.DEFINITION; }

        public constructor(v?: any) {
            if (((typeof v === 'string') || v === null)) {
                let __args = arguments;
                super(href.DEFINITION_$LI$(), v);
            } else if (v === undefined) {
                let __args = arguments;
                super(href.DEFINITION_$LI$());
            } else throw new Error('invalid overload');
        }

        public static __(v: string): href {
            return new href(v);
        }
    }
    href["__class"] = "luvml.a.href";
    href["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    export class id extends luvml.a.Attribute_m {
        public static DEFINITION: luvml.a.Attr; public static DEFINITION_$LI$(): luvml.a.Attr { if (id.DEFINITION == null) { id.DEFINITION = luvml.a.Attr.named("id"); }  return id.DEFINITION; }

        public constructor(v?: any) {
            if (((typeof v === 'string') || v === null)) {
                let __args = arguments;
                super(id.DEFINITION_$LI$(), v);
            } else if (v === undefined) {
                let __args = arguments;
                super(id.DEFINITION_$LI$());
            } else throw new Error('invalid overload');
        }

        public static __(v: string): id {
            return new id(v);
        }
    }
    id["__class"] = "luvml.a.id";
    id["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    export class src extends luvml.a.Attribute_m {
        public static DEFINITION: luvml.a.Attr; public static DEFINITION_$LI$(): luvml.a.Attr { if (src.DEFINITION == null) { src.DEFINITION = luvml.a.Attr.named("src"); }  return src.DEFINITION; }

        public constructor(v?: any) {
            if (((typeof v === 'string') || v === null)) {
                let __args = arguments;
                super(src.DEFINITION_$LI$(), v);
            } else if (v === undefined) {
                let __args = arguments;
                super(src.DEFINITION_$LI$());
            } else throw new Error('invalid overload');
        }

        public static __(v: string): src {
            return new src(v);
        }
    }
    src["__class"] = "luvml.a.src";
    src["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    export class type extends luvml.a.Attribute_m {
        public static DEFINITION: luvml.a.Attr; public static DEFINITION_$LI$(): luvml.a.Attr { if (type.DEFINITION == null) { type.DEFINITION = luvml.a.Attr.named("type"); }  return type.DEFINITION; }

        public constructor(v?: any) {
            if (((typeof v === 'string') || v === null)) {
                let __args = arguments;
                super(type.DEFINITION_$LI$(), v);
            } else if (v === undefined) {
                let __args = arguments;
                super(type.DEFINITION_$LI$());
            } else throw new Error('invalid overload');
        }

        public static __(v: string): type {
            return new type(v);
        }
    }
    type["__class"] = "luvml.a.type";
    type["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    export class value extends luvml.a.Attribute_m {
        public static DEFINITION: luvml.a.Attr; public static DEFINITION_$LI$(): luvml.a.Attr { if (value.DEFINITION == null) { value.DEFINITION = luvml.a.Attr.named("value"); }  return value.DEFINITION; }

        public constructor(v?: any) {
            if (((typeof v === 'string') || v === null)) {
                let __args = arguments;
                super(value.DEFINITION_$LI$(), v);
            } else if (v === undefined) {
                let __args = arguments;
                super(value.DEFINITION_$LI$());
            } else throw new Error('invalid overload');
        }

        public static __(v: string): value {
            return new value(v);
        }
    }
    value["__class"] = "luvml.a.value";
    value["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}
namespace luvml.a {
    /**
     * 
     * @author
     * @class
     * @extends luvml.a.Attribute_m
     */
    export class viewBox extends luvml.a.Attribute_m {
        public static DEFINITION: luvml.a.Attr; public static DEFINITION_$LI$(): luvml.a.Attr { if (viewBox.DEFINITION == null) { viewBox.DEFINITION = luvml.a.Attr.named("viewBox"); }  return viewBox.DEFINITION; }

        public constructor() {
            super(viewBox.DEFINITION_$LI$());
        }

        public static __(w: number, h: number): viewBox {
            const v: viewBox = new viewBox();
            v.setValue("0 0 " + w + " " + h);
            return v;
        }

        public static ____(x1: number, y1: number, x2: number, y2: number): viewBox {
            const v: viewBox = new viewBox();
            v.setValue(x1 + " " + y1 + " " + x2 + " " + y2);
            return v;
        }
    }
    viewBox["__class"] = "luvml.a.viewBox";
    viewBox["__interfaces"] = ["luvml.HtmlSegment_I","luvml.a.Attribute_I","luvml.___F"];


}

var __Function = Function;

luvml.a.viewBox.DEFINITION_$LI$();

luvml.a.value.DEFINITION_$LI$();

luvml.a.type.DEFINITION_$LI$();

luvml.a.src.DEFINITION_$LI$();

luvml.a.id.DEFINITION_$LI$();

luvml.a.href.DEFINITION_$LI$();

luvml.a.for_.DEFINITION_$LI$();

luvml.a.clss.DEFINITION_$LI$();

luvml.o.Format.newLine_default_$LI$();

luvml.o.Format.intentChar_default_$LI$();

luvml.o.Format.NEWLINE_WINDOWS_$LI$();

luvml.o.Format.NEWLINE_UNIX_$LI$();
