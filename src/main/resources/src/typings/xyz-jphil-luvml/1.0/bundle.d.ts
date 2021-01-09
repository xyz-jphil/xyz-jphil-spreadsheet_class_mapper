declare namespace luvml.a {
    /**
     *
     * @author
     * @param {string} name
     * @param {boolean} hasQuotes
     * @param {boolean} hasEqualSign
     * @param {boolean} hasValue
     * @class
     */
    class Attr implements luvml.a.AttributeDefinition_I {
        name: string;
        __hasQuotes: boolean;
        __hasEqualSign: boolean;
        __hasValue: boolean;
        constructor(name: string, hasQuotes: boolean, hasEqualSign: boolean, hasValue: boolean);
        static named(name: string): Attr;
        static null_valued(name: string): Attr;
        /**
         *
         * @return {boolean}
         */
        hasQuotes(): boolean;
        /**
         *
         * @return {boolean}
         */
        hasEqualSign(): boolean;
        /**
         *
         * @return {boolean}
         */
        hasValue(): boolean;
        /**
         *
         * @return {string}
         */
        attributeName(): string;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @class
     */
    interface AttributeDefinition_I {
        hasQuotes(): boolean;
        hasEqualSign(): boolean;
        hasValue(): boolean;
        attributeName(): string;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @param {*} definition
     * @class
     */
    abstract class Attribute_Am implements luvml.a.Attribute_I {
        d: luvml.a.AttributeDefinition_I;
        constructor(definition: luvml.a.AttributeDefinition_I);
        /**
         *
         * @return {luvml.HtmlSegmentType_E}
         */
        type(): luvml.HtmlSegmentType_E;
        abstract valueTo(o: luvml.o.Out_I): any;
        getValue(): any;
        /**
         *
         * @return {*}
         */
        definition(): luvml.a.AttributeDefinition_I;
        /**
         *
         * @param {*} o
         */
        to(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @class
     */
    interface Attribute_I extends luvml.HtmlSegment_I {
        definition(): luvml.a.AttributeDefinition_I;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @class
     */
    interface CommonAttribute extends luvml.a.CoreAttribute, luvml.a.CommonEventAttribute {
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @class
     */
    interface CommonEventAttribute {
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @class
     */
    interface CoreAttribute extends luvml.___F {
    }
}
declare namespace luvml {
    /**
     *
     * @author
     * @class
     */
    class DOCTYPE implements luvml.HtmlSegment_I {
        h: luvml.e.html;
        static html5(): DOCTYPE;
        html(...segments: luvml.HtmlSegment_I[]): luvml.e.html;
        /**
         *
         * @return {luvml.HtmlSegmentType_E}
         */
        type(): luvml.HtmlSegmentType_E;
        /**
         *
         * @param {*} o
         */
        to(o: luvml.o.Out_I): void;
        constructor();
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @param {luvml.___F[]} comments
     * @class
     */
    class Comment_Css_or_Script implements luvml.___F {
        comments: luvml.___F[];
        constructor(...comments: luvml.___F[]);
        static ___(s: string): Comment_Css_or_Script;
        static __(...c: luvml.___F[]): Comment_Css_or_Script;
        /**
         *
         * @param {*} o
         */
        to(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @param {luvml.___F[]} comments
     * @class
     */
    class Comment_Html implements luvml.HtmlSegment_I {
        comments: luvml.___F[];
        constructor(...comments: luvml.___F[]);
        static ___(s: string): Comment_Html;
        static __(...c: luvml.___F[]): Comment_Html;
        /**
         *
         * @return {luvml.HtmlSegmentType_E}
         */
        type(): luvml.HtmlSegmentType_E;
        /**
         *
         * @param {*} o
         */
        to(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     */
    interface Element_I extends luvml.e.Node_I {
        tagName(): string;
        isSelfClosingHtml(): boolean;
        isStrictXml(): boolean;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @param {string} tag
     * @param {boolean} selfClosingHtml
     * @param {boolean} strictXml
     * @class
     */
    class Element_m implements luvml.e.Node_I, luvml.e.Element_I {
        __attributes: Array<luvml.a.Attribute_I>;
        __children: Array<luvml.e.Node_I>;
        tag: string;
        selfClosingHtml: boolean;
        strictXml: boolean;
        constructor(tag?: any, selfClosingHtml?: any, strictXml?: any);
        ____(...segments: luvml.HtmlSegment_I[]): Element_m;
        addAttribute(toAdd: luvml.a.Attribute_I): void;
        /**
         *
         * @return {luvml.HtmlSegmentType_E}
         */
        type(): luvml.HtmlSegmentType_E;
        /**
         *
         * @return {boolean}
         */
        isSelfClosingHtml(): boolean;
        /**
         *
         * @return {boolean}
         */
        isStrictXml(): boolean;
        attributes(): Array<luvml.a.Attribute_I>;
        children(): Array<luvml.e.Node_I>;
        attribute(name: string): luvml.a.Attribute_I;
        attribute_(adi: luvml.a.AttributeDefinition_I): luvml.a.Attribute_I;
        /**
         *
         * @return {string}
         */
        tagName(): string;
        /**
         *
         * @param {*} o
         */
        to(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @param {*} src
     * @class
     */
    class Node implements luvml.e.Node_I {
        src: luvml.___F;
        constructor(src: luvml.___F);
        static __(src: luvml.___F): Node;
        /**
         *
         * @return {luvml.HtmlSegmentType_E}
         */
        type(): luvml.HtmlSegmentType_E;
        /**
         *
         * @param {*} o
         */
        to(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.e {
    /**
     * I am not sure if this is of any use.
     * @author
     * @class
     */
    class NodeFragment implements luvml.e.NodeFragment_I {
        content: Array<luvml.e.Node_I>;
        /**
         *
         * @return {luvml.HtmlSegmentType_E}
         */
        type(): luvml.HtmlSegmentType_E;
        /**
         *
         * @return {*[]}
         */
        getContent(): Array<luvml.e.Node_I>;
        /**
         *
         * @param {luvml.e.Node_I[]} segments
         * @return {luvml.e.NodeFragment}
         */
        ___(...segments: luvml.e.Node_I[]): NodeFragment;
        /**
         * make sure to notice the difference between
         * the function signature (name) of static
         * and class member function
         * Otherwise you will add elements and think why it is not adding
         * @param {luvml.e.Node_I[]} segments
         * @return {luvml.e.NodeFragment}
         */
        static __(...segments: luvml.e.Node_I[]): NodeFragment;
        /**
         *
         * @param {*} o
         */
        to(o: luvml.o.Out_I): void;
        constructor();
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     */
    interface NodeFragment_I extends luvml.e.Node_I {
        getContent(): Array<luvml.e.Node_I>;
        ___(...segments: luvml.e.Node_I[]): luvml.e.NodeFragment;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     */
    interface Node_I extends luvml.HtmlSegment_I {
    }
}
declare namespace luvml {
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
    enum HtmlSegmentType_E {
        Attribute = 0,
        Element = 1,
        Text = 2,
        Comment = 3,
        DocType = 4,
        NodeFragment = 5
    }
}
declare namespace luvml {
    /**
     *
     * @author
     * @class
     */
    interface HtmlSegment_I extends luvml.___F {
        type(): luvml.HtmlSegmentType_E;
    }
}
declare namespace luvml.o {
    /**
     *
     * @author
     * @param {luvml.o.FormatBuilder} fb
     * @class
     */
    class Format {
        static NEWLINE_UNIX: number[];
        static NEWLINE_UNIX_$LI$(): number[];
        static NEWLINE_WINDOWS: number[];
        static NEWLINE_WINDOWS_$LI$(): number[];
        static NEWLINE_NULL: number[];
        intentChar: number;
        childIntent: number;
        newLine: number[];
        static intentChar_default: number;
        static intentChar_default_$LI$(): number;
        static childIntent_default: number;
        static newLine_default: number[];
        static newLine_default_$LI$(): number[];
        constructor(fb: luvml.o.FormatBuilder);
    }
}
declare namespace luvml.o {
    /**
     *
     * @author
     * @class
     */
    class FormatBuilder {
        __intentChar: number;
        __childIntent: number;
        __newLine: number[];
        modify(f: luvml.o.Format): FormatBuilder;
        childIntent(childIntent: number): FormatBuilder;
        intentChar$char(intentChar: string): FormatBuilder;
        intentChar(intentChar?: any): any;
        intentChar$int(intentChar: number): FormatBuilder;
        singleTabIntent(): FormatBuilder;
        spaceIntent(): FormatBuilder;
        newLine_Windows(): FormatBuilder;
        newLine_Unix(): FormatBuilder;
        newLine_Null(): FormatBuilder;
        newLine(b: number[]): FormatBuilder;
        build(): luvml.o.Format;
        constructor();
    }
}
declare namespace luvml.o {
    /**
     *
     * @author
     * @class
     */
    class Out {
        string(): luvml.o.Out_String;
        asString(x: luvml.___F): string;
    }
}
declare namespace luvml.o {
    /**
     *
     * @author Ivan Velikanova  ivan.velikanova@gmail.com
     * @param {*} ap
     * @class
     */
    abstract class Out_A<ExtraParams> implements luvml.o.Out_I {
        p: luvml.o.Parameters<any>;
        constructor(ap: (p1: luvml.o.ParametersBuilder<ExtraParams>) => void);
        /**
         *
         * @return {luvml.o.Parameters}
         */
        parameters(): luvml.o.Parameters<any>;
        /**
         *
         * @return {*}
         */
        nL(): luvml.o.Out_I;
        /**
         *
         * @return {luvml.o.Out_A}
         */
        child(): Out_A<any>;
        /**
         *
         * @return {luvml.o.Out_A}
         */
        parent(): Out_A<any>;
        abstract __(s?: any): any;
        abstract _b(b?: any): any;
        abstract ba(b?: any): any;
    }
    namespace Out_A {
        class ChildOut_IA extends luvml.o.Out_A<any> {
            __parent: luvml.o.Out_A<any>;
            constructor(parent: luvml.o.Out_A<any>);
            /**
             *
             * @param {string} s
             * @return {*}
             */
            __(s: string): luvml.o.Out_I;
            /**
             *
             * @param {byte[]} b
             * @return {*}
             */
            ba(b: number[]): luvml.o.Out_I;
            /**
             *
             * @param {number} b
             * @return {*}
             */
            _b(b: number): luvml.o.Out_I;
            /**
             *
             * @return {luvml.o.Out_A}
             */
            parent(): luvml.o.Out_A<any>;
        }
    }
}
declare namespace luvml.o {
    /**
     *
     * @author Ivan Velikanova
     * @class
     */
    interface Out_I {
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
declare namespace luvml.o {
    /**
     *
     * @author
     * @param {luvml.o.ParametersBuilder} p
     * @class
     */
    class Parameters<E> {
        /**
         * Refer : <a href="https://en.wikipedia.org/wiki/Polyglot_markup">Wikipedia: Polyglot markup</a>
         * if true makes Xml compatible html5 which is acceptable as valid Html
         * as per https://validator.w3.org/nu/ ; example - <pre><img src="i.jpg"/></pre> .
         * if false makes html as per strict html standard ; example - <pre><img src="i.jpg"></pre> .
         *
         * default false
         */
        polyglotXHTML: boolean;
        format: luvml.o.Format;
        totalIntent: number;
        __extraParams: (p1: E) => void;
        static polyglotXHTML_default: boolean;
        static format_default: luvml.o.Format;
        static totalIntent_default: number;
        constructor(p: luvml.o.ParametersBuilder<E>);
        extraParams(): (p1: E) => void;
        isPolyglotXHTML(): boolean;
    }
}
declare namespace luvml.o {
    /**
     *
     * @author
     * @class
     */
    class ParametersBuilder<E> {
        __polyglotXHTML: boolean;
        __format: luvml.o.Format;
        __totalIntent: number;
        __extraParams: (p1: E) => void;
        extraParams(c: (p1: E) => void): ParametersBuilder<E>;
        polyglotXHTML(polyglotXHTML: boolean): ParametersBuilder<E>;
        unformated(): ParametersBuilder<E>;
        format$luvml_o_Format(f: luvml.o.Format): ParametersBuilder<E>;
        format(f?: any): any;
        format$java_util_function_Consumer(cc: (p1: luvml.o.FormatBuilder) => void): ParametersBuilder<E>;
        totalIntent(totalIntent: number): ParametersBuilder<E>;
        child(p: luvml.o.Parameters<any>): ParametersBuilder<E>;
        modify(p: luvml.o.Parameters<any>): ParametersBuilder<E>;
        build(): luvml.o.Parameters<any>;
        constructor();
    }
}
declare namespace luvml {
    /**
     * A Generic Flow
     * @author
     * @class
     */
    interface ___F {
        to(o: luvml.o.Out_I): any;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @param {string} n
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_Am
     */
    class A extends luvml.a.Attribute_Am {
        v: string;
        constructor(n: string, v: string);
        getValue(): string;
        static __(n: string, v: string): luvml.a.Attribute_I;
        /**
         *
         * @param {*} o
         */
        valueTo(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @param {*} definition
     * @param {string} value
     * @class
     * @extends luvml.a.Attribute_Am
     */
    class Attribute_m extends luvml.a.Attribute_Am {
        value: string;
        constructor(definition?: any, value?: any);
        setValue(value: string): void;
        getValue(): string;
        /**
         *
         * @param {*} o
         */
        valueTo(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @class
     * @extends luvml.a.Attribute_Am
     */
    class clss extends luvml.a.Attribute_Am {
        static DEFINITION: luvml.a.Attr;
        static DEFINITION_$LI$(): luvml.a.Attr;
        value: Array<string>;
        constructor();
        __(...classes: clss[]): void;
        addClasses(classes: string): void;
        addSingleClass(clss: string): void;
        removeClasses(classes: string): void;
        add(...classes: string[]): void;
        remove(...classes: string[]): void;
        removeSingleClass(clss: string): void;
        static __(...classes: string[]): clss;
        /**
         *
         * @param {*} o
         */
        valueTo(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class a extends luvml.e.Element_m {
        constructor();
        static __(): a;
        static ___(...segments: luvml.HtmlSegment_I[]): a;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class body extends luvml.e.Element_m {
        constructor();
        static __(): body;
        static ___(...segments: luvml.HtmlSegment_I[]): body;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class div extends luvml.e.Element_m {
        constructor();
        static __(): div;
        static ___(...segments: luvml.HtmlSegment_I[]): div;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @param {number} _1_to_6
     * @class
     * @extends luvml.e.Element_m
     */
    class h extends luvml.e.Element_m {
        constructor(_1_to_6: number);
        static __(_1_to_6: number): h;
        static ___(_1_to_6: number, ...segments: luvml.HtmlSegment_I[]): h;
        static htag(_1_to_6: number): string;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class head extends luvml.e.Element_m {
        constructor();
        static __(): head;
        static ___(...segments: luvml.HtmlSegment_I[]): head;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class html extends luvml.e.Element_m {
        constructor();
        static __(): html;
        static ___(...segments: luvml.HtmlSegment_I[]): html;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class img extends luvml.e.Element_m {
        constructor();
        static __(): img;
        static ___(...segments: luvml.a.Attribute_I[]): img;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class input extends luvml.e.Element_m {
        constructor();
        static __(): input;
        static ___(...segments: luvml.HtmlSegment_I[]): input;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class label extends luvml.e.Element_m {
        constructor();
        static __(): label;
        static ___(...segments: luvml.HtmlSegment_I[]): label;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class li extends luvml.e.Element_m {
        constructor();
        static __(): li;
        static ___(...segments: luvml.HtmlSegment_I[]): li;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class nav extends luvml.e.Element_m {
        constructor();
        static __(): nav;
        static ___(...segments: luvml.HtmlSegment_I[]): nav;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class path extends luvml.e.Element_m {
        constructor();
        static __(): path;
        d(path: string): path;
        /**
         *
         * @param {*} o
         */
        to(o: luvml.o.Out_I): void;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class svg extends luvml.e.Element_m {
        constructor();
        static __(): svg;
        static ___(...segments: luvml.a.Attribute_I[]): svg;
    }
}
declare namespace luvml.e {
    /**
     *
     * @author
     * @class
     * @extends luvml.e.Element_m
     */
    class ul extends luvml.e.Element_m {
        constructor();
        static __(): ul;
        static ___(...segments: luvml.HtmlSegment_I[]): ul;
    }
}
declare namespace luvml.o {
    /**
     *
     * @author Ivan Velikanova
     * @param {*} ap
     * @class
     * @extends luvml.o.Out_A
     */
    class Out_String extends luvml.o.Out_A<any> {
        constructor(ap?: (p1: luvml.o.ParametersBuilder<any>) => void);
        s: string;
        /**
         *
         * @param {string} s
         * @return {luvml.o.Out_String}
         */
        __(s: string): Out_String;
        render(): string;
        /**
         *
         * @param {number} b
         * @return {luvml.o.Out_String}
         */
        _b(b: number): Out_String;
        /**
         *
         * @param {byte[]} b
         * @return {luvml.o.Out_String}
         */
        ba(b: number[]): Out_String;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    class for_ extends luvml.a.Attribute_m {
        static DEFINITION: luvml.a.Attr;
        static DEFINITION_$LI$(): luvml.a.Attr;
        constructor(v?: any);
        static __(v: string): for_;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    class href extends luvml.a.Attribute_m {
        static DEFINITION: luvml.a.Attr;
        static DEFINITION_$LI$(): luvml.a.Attr;
        constructor(v?: any);
        static __(v: string): href;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    class id extends luvml.a.Attribute_m {
        static DEFINITION: luvml.a.Attr;
        static DEFINITION_$LI$(): luvml.a.Attr;
        constructor(v?: any);
        static __(v: string): id;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    class type extends luvml.a.Attribute_m {
        static DEFINITION: luvml.a.Attr;
        static DEFINITION_$LI$(): luvml.a.Attr;
        constructor(v?: any);
        static __(v: string): type;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @param {string} v
     * @class
     * @extends luvml.a.Attribute_m
     */
    class value extends luvml.a.Attribute_m {
        static DEFINITION: luvml.a.Attr;
        static DEFINITION_$LI$(): luvml.a.Attr;
        constructor(v?: any);
        static __(v: string): value;
    }
}
declare namespace luvml.a {
    /**
     *
     * @author
     * @class
     * @extends luvml.a.Attribute_m
     */
    class viewBox extends luvml.a.Attribute_m {
        static DEFINITION: luvml.a.Attr;
        static DEFINITION_$LI$(): luvml.a.Attr;
        constructor();
        static __(w: number, h: number): viewBox;
        static ____(x1: number, y1: number, x2: number, y2: number): viewBox;
    }
}
declare var __Function: FunctionConstructor;
