/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var luvml;
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {string} name
         * @param {boolean} hasQuotes
         * @param {boolean} hasEqualSign
         * @param {boolean} hasValue
         * @class
         */
        class Attr {
            constructor(name, hasQuotes, hasEqualSign, hasValue) {
                if (this.name === undefined) {
                    this.name = null;
                }
                if (this.__hasQuotes === undefined) {
                    this.__hasQuotes = false;
                }
                if (this.__hasEqualSign === undefined) {
                    this.__hasEqualSign = false;
                }
                if (this.__hasValue === undefined) {
                    this.__hasValue = false;
                }
                this.name = name;
                this.__hasQuotes = hasQuotes;
                this.__hasEqualSign = hasEqualSign;
                this.__hasValue = hasValue;
            }
            static named(name) {
                return new Attr(name, true, true, true);
            }
            static null_valued(name) {
                return new Attr(name, false, false, false);
            }
            /**
             *
             * @return {boolean}
             */
            hasQuotes() {
                return true;
            }
            /**
             *
             * @return {boolean}
             */
            hasEqualSign() {
                return true;
            }
            /**
             *
             * @return {boolean}
             */
            hasValue() {
                return true;
            }
            /**
             *
             * @return {string}
             */
            attributeName() {
                return this.name;
            }
        }
        a.Attr = Attr;
        Attr["__class"] = "luvml.a.Attr";
        Attr["__interfaces"] = ["luvml.a.AttributeDefinition_I"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {*} definition
         * @class
         */
        class Attribute_Am {
            constructor(definition) {
                if (this.d === undefined) {
                    this.d = null;
                }
                this.d = definition;
            }
            /**
             *
             * @return {luvml.HtmlSegmentType_E}
             */
            type() {
                return luvml.HtmlSegmentType_E.Attribute;
            }
            getValue() {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
            /**
             *
             * @return {*}
             */
            definition() {
                return this.d;
            }
            /**
             *
             * @param {*} o
             */
            to(o) {
                o.__(" ");
                o.__(this.d.attributeName());
                if (this.d.hasEqualSign())
                    o.__("=");
                if (this.d.hasQuotes())
                    o.__("\"");
                if (this.d.hasValue())
                    this.valueTo(o);
                if (this.d.hasQuotes())
                    o.__("\"");
            }
        }
        a.Attribute_Am = Attribute_Am;
        Attribute_Am["__class"] = "luvml.a.Attribute_Am";
        Attribute_Am["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    /**
     *
     * @author
     * @class
     */
    class DOCTYPE {
        constructor() {
            if (this.h === undefined) {
                this.h = null;
            }
        }
        static html5() {
            return new DOCTYPE();
        }
        html(...segments) {
            if (this.h != null) {
                throw Object.defineProperty(new Error("Already added children, now please use the returned html object or a child to put more elements"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.IllegalStateException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
            this.h = new luvml.e.html();
            (o => o.____.apply(o, segments))(this.h);
            return this.h;
        }
        /**
         *
         * @return {luvml.HtmlSegmentType_E}
         */
        type() {
            return luvml.HtmlSegmentType_E.DocType;
        }
        /**
         *
         * @param {*} o
         */
        to(o) {
            o.__("<!DOCTYPE html>").nL();
            if (this.h != null) {
                this.h.to(o);
            }
        }
    }
    luvml.DOCTYPE = DOCTYPE;
    DOCTYPE["__class"] = "luvml.DOCTYPE";
    DOCTYPE["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.___F"];
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @param {luvml.___F[]} comments
         * @class
         */
        class Comment_Css_or_Script {
            constructor(...comments) {
                if (this.comments === undefined) {
                    this.comments = null;
                }
                this.comments = comments;
            }
            static ___(s) {
                return Comment_Css_or_Script.__({ to: (o) => o.__(s) });
            }
            static __(...c) {
                return new (__Function.prototype.bind.apply(Comment_Css_or_Script, [null].concat(c)));
            }
            /**
             *
             * @param {*} o
             */
            to(o) {
                o.__("/* ");
                for (let i = 0; i < this.comments.length; i++) {
                    {
                        const comment_i = this.comments[i];
                        comment_i.to(o);
                    }
                    ;
                }
                o.__(" */");
            }
        }
        e.Comment_Css_or_Script = Comment_Css_or_Script;
        Comment_Css_or_Script["__class"] = "luvml.e.Comment_Css_or_Script";
        Comment_Css_or_Script["__interfaces"] = ["luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @param {luvml.___F[]} comments
         * @class
         */
        class Comment_Html {
            constructor(...comments) {
                if (this.comments === undefined) {
                    this.comments = null;
                }
                this.comments = comments;
            }
            static ___(s) {
                return Comment_Html.__({ to: (o) => o.__(s) });
            }
            static __(...c) {
                return new (__Function.prototype.bind.apply(Comment_Html, [null].concat(c)));
            }
            /**
             *
             * @return {luvml.HtmlSegmentType_E}
             */
            type() {
                return luvml.HtmlSegmentType_E.Comment;
            }
            /**
             *
             * @param {*} o
             */
            to(o) {
                o.__("<!-- ");
                for (let i = 0; i < this.comments.length; i++) {
                    {
                        const comment_i = this.comments[i];
                        comment_i.to(o);
                    }
                    ;
                }
                o.__(" -->");
            }
        }
        e.Comment_Html = Comment_Html;
        Comment_Html["__class"] = "luvml.e.Comment_Html";
        Comment_Html["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @param {string} tag
         * @param {boolean} selfClosingHtml
         * @param {boolean} strictXml
         * @class
         */
        class Element_m {
            constructor(tag, selfClosingHtml, strictXml) {
                if (((typeof tag === 'string') || tag === null) && ((typeof selfClosingHtml === 'boolean') || selfClosingHtml === null) && ((typeof strictXml === 'boolean') || strictXml === null)) {
                    let __args = arguments;
                    if (this.tag === undefined) {
                        this.tag = null;
                    }
                    if (this.selfClosingHtml === undefined) {
                        this.selfClosingHtml = false;
                    }
                    if (this.strictXml === undefined) {
                        this.strictXml = false;
                    }
                    this.__attributes = ([]);
                    this.__children = ([]);
                    this.tag = tag;
                    this.selfClosingHtml = selfClosingHtml;
                    this.strictXml = strictXml;
                    if (selfClosingHtml && strictXml) {
                        throw Object.defineProperty(new Error("An element cannot be both, self closing html and a strict xml"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                    }
                    if (tag == null)
                        throw Object.defineProperty(new Error("Tag cannot be null"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.NullPointerException', 'java.lang.Exception'] });
                }
                else if (((typeof tag === 'string') || tag === null) && ((typeof selfClosingHtml === 'boolean') || selfClosingHtml === null) && strictXml === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let strictXml = false;
                        if (this.tag === undefined) {
                            this.tag = null;
                        }
                        if (this.selfClosingHtml === undefined) {
                            this.selfClosingHtml = false;
                        }
                        if (this.strictXml === undefined) {
                            this.strictXml = false;
                        }
                        this.__attributes = ([]);
                        this.__children = ([]);
                        this.tag = tag;
                        this.selfClosingHtml = selfClosingHtml;
                        this.strictXml = strictXml;
                        if (selfClosingHtml && strictXml) {
                            throw Object.defineProperty(new Error("An element cannot be both, self closing html and a strict xml"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                        }
                        if (tag == null)
                            throw Object.defineProperty(new Error("Tag cannot be null"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.NullPointerException', 'java.lang.Exception'] });
                    }
                    if (this.tag === undefined) {
                        this.tag = null;
                    }
                    if (this.selfClosingHtml === undefined) {
                        this.selfClosingHtml = false;
                    }
                    if (this.strictXml === undefined) {
                        this.strictXml = false;
                    }
                    this.__attributes = ([]);
                    this.__children = ([]);
                }
                else if (((typeof tag === 'string') || tag === null) && selfClosingHtml === undefined && strictXml === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let selfClosingHtml = false;
                        {
                            let __args = arguments;
                            let strictXml = false;
                            if (this.tag === undefined) {
                                this.tag = null;
                            }
                            if (this.selfClosingHtml === undefined) {
                                this.selfClosingHtml = false;
                            }
                            if (this.strictXml === undefined) {
                                this.strictXml = false;
                            }
                            this.__attributes = ([]);
                            this.__children = ([]);
                            this.tag = tag;
                            this.selfClosingHtml = selfClosingHtml;
                            this.strictXml = strictXml;
                            if (selfClosingHtml && strictXml) {
                                throw Object.defineProperty(new Error("An element cannot be both, self closing html and a strict xml"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                            }
                            if (tag == null)
                                throw Object.defineProperty(new Error("Tag cannot be null"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.NullPointerException', 'java.lang.Exception'] });
                        }
                        if (this.tag === undefined) {
                            this.tag = null;
                        }
                        if (this.selfClosingHtml === undefined) {
                            this.selfClosingHtml = false;
                        }
                        if (this.strictXml === undefined) {
                            this.strictXml = false;
                        }
                        this.__attributes = ([]);
                        this.__children = ([]);
                    }
                    if (this.tag === undefined) {
                        this.tag = null;
                    }
                    if (this.selfClosingHtml === undefined) {
                        this.selfClosingHtml = false;
                    }
                    if (this.strictXml === undefined) {
                        this.strictXml = false;
                    }
                    this.__attributes = ([]);
                    this.__children = ([]);
                }
                else
                    throw new Error('invalid overload');
            }
            ____(...segments) {
                if (segments == null)
                    return this;
                for (let i = 0; i < segments.length; i++) {
                    {
                        const seg = segments[i];
                        if (seg == null) {
                            throw Object.defineProperty(new Error("there is a corrupt null segment "), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                        }
                        const t = seg.type();
                        if (t == null) {
                            throw Object.defineProperty(new Error("there is a corrupt segment of null type " + seg), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                        }
                        if ( /* Enum.equals */((t) === (luvml.HtmlSegmentType_E.Attribute))) {
                            this.addAttribute(seg);
                        }
                        else if ( /* Enum.equals */((t) === (luvml.HtmlSegmentType_E.Element)) || /* Enum.equals */ ((t) === (luvml.HtmlSegmentType_E.Text)) || /* Enum.equals */ ((t) === (luvml.HtmlSegmentType_E.Comment)) || /* Enum.equals */ ((t) === (luvml.HtmlSegmentType_E.NodeFragment))) {
                            if (this.selfClosingHtml)
                                throw Object.defineProperty(new Error("self closing html cannot have children of any type"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                            /* add */ (this.__children.push(seg) > 0);
                        }
                        else if ( /* Enum.equals */((t) === (luvml.HtmlSegmentType_E.DocType))) {
                            throw Object.defineProperty(new Error("DocType is a root element, not allowed as a child."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                        }
                        else {
                            throw Object.defineProperty(new Error("Unknown segment type " + t), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.IllegalStateException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                        }
                    }
                    ;
                }
                return this;
            }
            /*private*/ addAttribute(toAdd) {
                const n = toAdd.definition().attributeName();
                if (n == null || n.length === 0) {
                    return;
                }
                let previouslyExisting = null;
                for (let a_idx = 0; a_idx < /* size */ this.__attributes.length; a_idx++) {
                    {
                        const a_i = this.__attributes[a_idx];
                        if (a_i != null && a_i.definition() != null) {
                            if (n === a_i.definition().attributeName()) {
                                previouslyExisting = a_i;
                                break;
                            }
                        }
                    }
                    ;
                }
                if (previouslyExisting != null) {
                    if ((previouslyExisting != null && previouslyExisting instanceof luvml.a.clss) || (toAdd != null && toAdd instanceof luvml.a.clss)) {
                        previouslyExisting.__(toAdd);
                        return;
                    }
                    else {
                        /* remove */ (a => { let index = a.indexOf(previouslyExisting); if (index >= 0) {
                            a.splice(index, 1);
                            return true;
                        }
                        else {
                            return false;
                        } })(this.__attributes);
                    }
                }
                /* add */ (this.__attributes.push(toAdd) > 0);
            }
            /**
             *
             * @return {luvml.HtmlSegmentType_E}
             */
            type() {
                return luvml.HtmlSegmentType_E.Element;
            }
            /**
             *
             * @return {boolean}
             */
            isSelfClosingHtml() {
                return this.selfClosingHtml;
            }
            /**
             *
             * @return {boolean}
             */
            isStrictXml() {
                return this.strictXml;
            }
            attributes() {
                return this.__attributes;
            }
            children() {
                if (this.selfClosingHtml)
                    throw Object.defineProperty(new Error(this.tag + " is self closing and does not support children"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                return this.__children;
            }
            attribute(name) {
                if (name == null)
                    return null;
                for (let a_idx = 0; a_idx < /* size */ this.__attributes.length; a_idx++) {
                    {
                        const a_i = this.__attributes[a_idx];
                        if (a_i == null || a_i.definition() == null)
                            continue;
                        if (name === a_i.definition().attributeName())
                            return a_i;
                    }
                    ;
                }
                return null;
            }
            attribute_(adi) {
                if (adi == null)
                    return null;
                return this.attribute(adi.attributeName());
            }
            /**
             *
             * @return {string}
             */
            tagName() {
                return this.tag;
            }
            /**
             *
             * @param {*} o
             */
            to(o) {
                o.__("<");
                o.__(this.tag);
                for (let a_idx = 0; a_idx < /* size */ this.__attributes.length; a_idx++) {
                    {
                        const a_i = this.__attributes[a_idx];
                        a_i.to(o);
                    }
                    ;
                }
                if ( /* size */this.__children.length === 0) {
                    if (this.selfClosingHtml && !o.parameters().isPolyglotXHTML()) {
                        o.__(">");
                    }
                    else {
                        o.__("/>");
                    }
                    o.nL();
                    return;
                }
                o.__(">");
                o.nL();
                for (let e_idx = 0; e_idx < /* size */ this.__children.length; e_idx++) {
                    {
                        const e_i = this.__children[e_idx];
                        e_i.to(o.child());
                    }
                    ;
                }
                o.__("</");
                o.__(this.tag);
                o.__(">");
                o.nL();
            }
        }
        e.Element_m = Element_m;
        Element_m["__class"] = "luvml.e.Element_m";
        Element_m["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @param {*} src
         * @class
         */
        class Node {
            constructor(src) {
                if (this.src === undefined) {
                    this.src = null;
                }
                this.src = src;
            }
            static __(src) {
                return new Node(src);
            }
            /**
             *
             * @return {luvml.HtmlSegmentType_E}
             */
            type() {
                return luvml.HtmlSegmentType_E.NodeFragment;
            }
            /**
             *
             * @param {*} o
             */
            to(o) {
                this.src.to(o);
            }
        }
        e.Node = Node;
        Node["__class"] = "luvml.e.Node";
        Node["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         * I am not sure if this is of any use.
         * @author
         * @class
         */
        class NodeFragment {
            constructor() {
                this.content = ([]);
            }
            /**
             *
             * @return {luvml.HtmlSegmentType_E}
             */
            type() {
                return luvml.HtmlSegmentType_E.NodeFragment;
            }
            /**
             *
             * @return {*[]}
             */
            getContent() {
                return this.content;
            }
            /**
             *
             * @param {luvml.e.Node_I[]} segments
             * @return {luvml.e.NodeFragment}
             */
            ___(...segments) {
                for (let i = 0; i < segments.length; i++) {
                    {
                        const segment = segments[i];
                        /* add */ (this.content.push(segment) > 0);
                    }
                    ;
                }
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
            static __(...segments) {
                const fragment = new NodeFragment();
                (o => o.___.apply(o, segments))(fragment);
                return fragment;
            }
            /**
             *
             * @param {*} o
             */
            to(o) {
                for (let i = 0; i < /* size */ this.content.length; i++) {
                    {
                        const segment = this.content[i];
                        if (segment != null) {
                            segment.to(o);
                        }
                        else {
                            o.__("<!-- null segment at index " + i + " of this fragment -->").nL();
                        }
                    }
                    ;
                }
            }
        }
        e.NodeFragment = NodeFragment;
        NodeFragment["__class"] = "luvml.e.NodeFragment";
        NodeFragment["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.NodeFragment_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         */
        class Node_A {
            /**
             *
             * @return {luvml.HtmlSegmentType_E}
             */
            type() {
                return luvml.HtmlSegmentType_E.NodeFragment;
            }
            constructor() {
            }
        }
        e.Node_A = Node_A;
        Node_A["__class"] = "luvml.e.Node_A";
        Node_A["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
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
    let HtmlSegmentType_E;
    (function (HtmlSegmentType_E) {
        HtmlSegmentType_E[HtmlSegmentType_E["Attribute"] = 0] = "Attribute";
        HtmlSegmentType_E[HtmlSegmentType_E["Element"] = 1] = "Element";
        HtmlSegmentType_E[HtmlSegmentType_E["Text"] = 2] = "Text";
        HtmlSegmentType_E[HtmlSegmentType_E["Comment"] = 3] = "Comment";
        HtmlSegmentType_E[HtmlSegmentType_E["DocType"] = 4] = "DocType";
        HtmlSegmentType_E[HtmlSegmentType_E["NodeFragment"] = 5] = "NodeFragment";
    })(HtmlSegmentType_E = luvml.HtmlSegmentType_E || (luvml.HtmlSegmentType_E = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var o;
    (function (o) {
        /**
         *
         * @author
         * @param {luvml.o.FormatBuilder} fb
         * @class
         */
        class Format {
            constructor(fb) {
                if (this.intentChar === undefined) {
                    this.intentChar = 0;
                }
                if (this.childIntent === undefined) {
                    this.childIntent = 0;
                }
                if (this.newLine === undefined) {
                    this.newLine = null;
                }
                this.intentChar = fb.__intentChar;
                this.childIntent = fb.__childIntent;
                this.newLine = fb.__newLine;
            }
            static NEWLINE_UNIX_$LI$() { if (Format.NEWLINE_UNIX == null) {
                Format.NEWLINE_UNIX = [('\n').charCodeAt(0)];
            } return Format.NEWLINE_UNIX; }
            static NEWLINE_WINDOWS_$LI$() { if (Format.NEWLINE_WINDOWS == null) {
                Format.NEWLINE_WINDOWS = [('\r').charCodeAt(0), ('\n').charCodeAt(0)];
            } return Format.NEWLINE_WINDOWS; }
            static intentChar_default_$LI$() { if (Format.intentChar_default == null) {
                Format.intentChar_default = (' ').charCodeAt(0);
            } return Format.intentChar_default; }
            static newLine_default_$LI$() { if (Format.newLine_default == null) {
                Format.newLine_default = Format.NEWLINE_NULL;
            } return Format.newLine_default; }
        }
        Format.NEWLINE_NULL = null;
        Format.childIntent_default = 0;
        o.Format = Format;
        Format["__class"] = "luvml.o.Format";
    })(o = luvml.o || (luvml.o = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var o;
    (function (o) {
        /**
         *
         * @author
         * @class
         */
        class FormatBuilder {
            constructor() {
                this.__intentChar = luvml.o.Format.intentChar_default_$LI$();
                this.__childIntent = luvml.o.Format.childIntent_default;
                this.__newLine = luvml.o.Format.newLine_default_$LI$();
            }
            modify(f) {
                if (f != null) {
                    this.__intentChar = f.intentChar;
                    this.__childIntent = f.childIntent;
                    this.__newLine = f.newLine;
                }
                return this;
            }
            childIntent(childIntent) {
                this.__childIntent = childIntent;
                return this;
            }
            intentChar$char(intentChar) {
                return this.intentChar$int((intentChar).charCodeAt(0));
            }
            intentChar(intentChar) {
                if (((typeof intentChar === 'string') || intentChar === null)) {
                    return this.intentChar$char(intentChar);
                }
                else if (((typeof intentChar === 'number') || intentChar === null)) {
                    return this.intentChar$int(intentChar);
                }
                else
                    throw new Error('invalid overload');
            }
            intentChar$int(intentChar) {
                this.__intentChar = (intentChar | 0);
                return this;
            }
            singleTabIntent() {
                return this.intentChar$char('\t').childIntent(1);
            }
            spaceIntent() {
                return this.intentChar$char(' ').childIntent(4);
            }
            newLine_Windows() {
                this.__newLine = luvml.o.Format.NEWLINE_WINDOWS_$LI$();
                return this;
            }
            newLine_Unix() {
                this.__newLine = luvml.o.Format.NEWLINE_UNIX_$LI$();
                return this;
            }
            newLine_Null() {
                this.__newLine = luvml.o.Format.NEWLINE_NULL;
                return this;
            }
            newLine(b) {
                this.__newLine = b;
                return this;
            }
            build() {
                return new luvml.o.Format(this);
            }
        }
        o.FormatBuilder = FormatBuilder;
        FormatBuilder["__class"] = "luvml.o.FormatBuilder";
    })(o = luvml.o || (luvml.o = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var o;
    (function (o) {
        /**
         *
         * @author
         * @class
         */
        class Out {
            string() {
                return new luvml.o.Out_String();
            }
            asString(x) {
                const os = new luvml.o.Out_String();
                x.to(os);
                return os.render();
            }
        }
        o.Out = Out;
        Out["__class"] = "luvml.o.Out";
    })(o = luvml.o || (luvml.o = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var o;
    (function (o) {
        /**
         *
         * @author Ivan Velikanova  ivan.velikanova@gmail.com
         * @param {*} ap
         * @class
         */
        class Out_A {
            constructor(ap) {
                if (this.p === undefined) {
                    this.p = null;
                }
                const pb = (new luvml.o.ParametersBuilder());
                if (ap != null) {
                    (target => (typeof target === 'function') ? target(pb) : target.accept(pb))(ap);
                }
                this.p = pb.build();
            }
            /**
             *
             * @return {luvml.o.Parameters}
             */
            parameters() {
                return this.p;
            }
            /**
             *
             * @return {*}
             */
            nL() {
                if (this.p.format != null) {
                    if (this.p.format.newLine != null) {
                        this.ba(this.p.format.newLine);
                    }
                    for (let i = 0; i < this.p.totalIntent; i++) {
                        {
                            this._b(this.p.format.intentChar);
                        }
                        ;
                    }
                }
                return this;
            }
            /**
             *
             * @return {luvml.o.Out_A}
             */
            child() {
                const parent = this;
                if (this.p != null && this.p.format != null) {
                    return new Out_A.ChildOut_IA(parent);
                }
                else
                    return this;
            }
            /**
             *
             * @return {luvml.o.Out_A}
             */
            parent() {
                return null;
            }
        }
        o.Out_A = Out_A;
        Out_A["__class"] = "luvml.o.Out_A";
        Out_A["__interfaces"] = ["luvml.o.Out_I"];
        (function (Out_A) {
            class ChildOut_IA extends luvml.o.Out_A {
                constructor(parent) {
                    super(($) => $.child(parent.p));
                    if (this.__parent === undefined) {
                        this.__parent = null;
                    }
                    this.__parent = parent;
                }
                /**
                 *
                 * @param {string} s
                 * @return {*}
                 */
                __(s) {
                    this.__parent.__(s);
                    return this;
                }
                /**
                 *
                 * @param {byte[]} b
                 * @return {*}
                 */
                ba(b) {
                    return this.__parent.ba(b);
                }
                /**
                 *
                 * @param {number} b
                 * @return {*}
                 */
                _b(b) {
                    return this.__parent._b(b);
                }
                /**
                 *
                 * @return {luvml.o.Out_A}
                 */
                parent() {
                    return this.__parent;
                }
            }
            Out_A.ChildOut_IA = ChildOut_IA;
            ChildOut_IA["__class"] = "luvml.o.Out_A.ChildOut_IA";
            ChildOut_IA["__interfaces"] = ["luvml.o.Out_I"];
        })(Out_A = o.Out_A || (o.Out_A = {}));
    })(o = luvml.o || (luvml.o = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var o;
    (function (o) {
        /**
         *
         * @author
         * @param {luvml.o.ParametersBuilder} p
         * @class
         */
        class Parameters {
            constructor(p) {
                if (this.polyglotXHTML === undefined) {
                    this.polyglotXHTML = false;
                }
                if (this.format === undefined) {
                    this.format = null;
                }
                if (this.totalIntent === undefined) {
                    this.totalIntent = 0;
                }
                if (this.__extraParams === undefined) {
                    this.__extraParams = null;
                }
                this.polyglotXHTML = p.__polyglotXHTML;
                this.format = p.__format;
                this.totalIntent = p.__totalIntent;
                this.__extraParams = (((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0); })(p.__extraParams));
            }
            extraParams() {
                return (((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0); })(this.__extraParams));
            }
            isPolyglotXHTML() {
                return this.polyglotXHTML;
            }
        }
        Parameters.polyglotXHTML_default = true;
        Parameters.format_default = null;
        Parameters.totalIntent_default = 0;
        o.Parameters = Parameters;
        Parameters["__class"] = "luvml.o.Parameters";
    })(o = luvml.o || (luvml.o = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var o;
    (function (o) {
        /**
         *
         * @author
         * @class
         */
        class ParametersBuilder {
            constructor() {
                this.__polyglotXHTML = luvml.o.Parameters.polyglotXHTML_default;
                this.__format = luvml.o.Parameters.format_default;
                this.__totalIntent = luvml.o.Parameters.totalIntent_default;
                this.__extraParams = (((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0); })(null));
            }
            extraParams(c) {
                this.__extraParams = (((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0); })(c));
                return this;
            }
            polyglotXHTML(polyglotXHTML) {
                this.__polyglotXHTML = polyglotXHTML;
                return this;
            }
            unformated() {
                this.__format = null;
                return this;
            }
            format$luvml_o_Format(f) {
                this.__format = f;
                return this;
            }
            format(f) {
                if (((f != null && f instanceof luvml.o.Format) || f === null)) {
                    return this.format$luvml_o_Format(f);
                }
                else if (((typeof f === 'function' && f.length === 1) || f === null)) {
                    return this.format$java_util_function_Consumer(f);
                }
                else
                    throw new Error('invalid overload');
            }
            format$java_util_function_Consumer(cc) {
                const fb = new luvml.o.FormatBuilder();
                fb.modify(this.__format);
                (target => (typeof target === 'function') ? target(fb) : target.accept(fb))(cc);
                this.__format = fb.build();
                return this;
            }
            totalIntent(totalIntent) {
                this.__totalIntent = totalIntent;
                return this;
            }
            child(p) {
                this.modify(p);
                this.totalIntent(this.__totalIntent + p.format.childIntent);
                return this;
            }
            modify(p) {
                this.__polyglotXHTML = p.polyglotXHTML;
                this.__format = p.format;
                this.__totalIntent = p.totalIntent;
                return this;
            }
            build() {
                return (new luvml.o.Parameters(this));
            }
        }
        o.ParametersBuilder = ParametersBuilder;
        ParametersBuilder["__class"] = "luvml.o.ParametersBuilder";
    })(o = luvml.o || (luvml.o = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {string} n
         * @param {string} v
         * @class
         * @extends luvml.a.Attribute_Am
         */
        class A extends luvml.a.Attribute_Am {
            constructor(n, v) {
                super(luvml.a.Attr.named(n));
                if (this.v === undefined) {
                    this.v = null;
                }
                this.v = v;
            }
            getValue() {
                return this.v;
            }
            static __(n, v) {
                return new A(n, v);
            }
            /**
             *
             * @param {*} o
             */
            valueTo(o) {
                o.__(this.v);
            }
        }
        a.A = A;
        A["__class"] = "luvml.a.A";
        A["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {*} definition
         * @param {string} value
         * @class
         * @extends luvml.a.Attribute_Am
         */
        class Attribute_m extends luvml.a.Attribute_Am {
            constructor(definition, value) {
                if (((definition != null && (definition.constructor != null && definition.constructor["__interfaces"] != null && definition.constructor["__interfaces"].indexOf("luvml.a.AttributeDefinition_I") >= 0)) || definition === null) && ((typeof value === 'string') || value === null)) {
                    let __args = arguments;
                    super(definition);
                    this.value = null;
                    this.value = value;
                }
                else if (((definition != null && (definition.constructor != null && definition.constructor["__interfaces"] != null && definition.constructor["__interfaces"].indexOf("luvml.a.AttributeDefinition_I") >= 0)) || definition === null) && value === undefined) {
                    let __args = arguments;
                    super(definition);
                    this.value = null;
                }
                else
                    throw new Error('invalid overload');
            }
            setValue(value) {
                this.value = value;
            }
            getValue() {
                return this.value;
            }
            /**
             *
             * @param {*} o
             */
            valueTo(o) {
                if (this.value == null)
                    return;
                o.__(this.value);
            }
        }
        a.Attribute_m = Attribute_m;
        Attribute_m["__class"] = "luvml.a.Attribute_m";
        Attribute_m["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a_1) {
        /**
         *
         * @author
         * @class
         * @extends luvml.a.Attribute_Am
         */
        class clss extends luvml.a.Attribute_Am {
            constructor() {
                super(clss.DEFINITION_$LI$());
                this.value = ([]);
            }
            static DEFINITION_$LI$() { if (clss.DEFINITION == null) {
                clss.DEFINITION = luvml.a.Attr.named("class");
            } return clss.DEFINITION; }
            __(...classes) {
                for (let i = 0; i < classes.length; i++) {
                    {
                        const classes_i = classes[i];
                        for (let j = 0; j < /* size */ classes_i.value.length; j++) {
                            {
                                const clss_i_j = classes_i.value[j];
                                this.addSingleClass(clss_i_j);
                            }
                            ;
                        }
                    }
                    ;
                }
            }
            addClasses(classes) {
                const classes_sub = classes.split(" ");
                for (let i = 0; i < classes_sub.length; i++) {
                    {
                        const classes_sub_i = classes_sub[i];
                        this.addSingleClass(classes_sub_i);
                    }
                    ;
                }
            }
            /*private*/ addSingleClass(clss) {
                for (let i = 0; i < /* size */ this.value.length; i++) {
                    {
                        const class_i = this.value[i];
                        if (class_i === clss) {
                            return;
                        }
                    }
                    ;
                }
                /* add */ (this.value.push(clss) > 0);
            }
            removeClasses(classes) {
                const classes_sub = classes.split(" ");
                for (let i = 0; i < classes_sub.length; i++) {
                    {
                        const clss_i = this.value[i];
                        this.removeSingleClass(clss_i);
                    }
                    ;
                }
            }
            add(...classes) {
                for (let i = 0; i < classes.length; i++) {
                    {
                        const clss = classes[i];
                        this.addSingleClass(clss);
                    }
                    ;
                }
            }
            remove(...classes) {
                for (let i = 0; i < classes.length; i++) {
                    {
                        const clss = classes[i];
                        this.removeSingleClass(clss);
                    }
                    ;
                }
            }
            /*private*/ removeSingleClass(clss) {
                let toRemove = clss;
                for (let i = 0; i < /* size */ this.value.length; i++) {
                    {
                        const class_i = this.value[i];
                        if (class_i === clss) {
                            toRemove = class_i;
                            break;
                        }
                    }
                    ;
                }
                /* remove */ (a => { let index = a.indexOf(toRemove); if (index >= 0) {
                    a.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                } })(this.value);
            }
            static __(...classes) {
                const a = new clss();
                for (let v_i = 0; v_i < classes.length; v_i++) {
                    {
                        const clss_v = classes[v_i];
                        const clss_vs = clss_v.split(" ");
                        for (let j = 0; j < clss_vs.length; j++) {
                            {
                                const clss_vi_j = clss_vs[j];
                                a.addSingleClass(clss_vi_j);
                            }
                            ;
                        }
                    }
                    ;
                }
                return a;
            }
            /**
             *
             * @param {*} o
             */
            valueTo(o) {
                for (let i = 0; i < /* size */ this.value.length; i++) {
                    {
                        const v_i = this.value[i];
                        o.__(v_i);
                        if (i < /* size */ this.value.length - 1) {
                            o.__(" ");
                        }
                    }
                    ;
                }
            }
        }
        a_1.clss = clss;
        clss["__class"] = "luvml.a.clss";
        clss["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class a extends luvml.e.Element_m {
            constructor() {
                super("a");
            }
            static __() {
                return new a();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new a());
            }
        }
        e.a = a;
        a["__class"] = "luvml.e.a";
        a["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class body extends luvml.e.Element_m {
            constructor() {
                super("body");
            }
            static __() {
                return new body();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new body());
            }
        }
        e.body = body;
        body["__class"] = "luvml.e.body";
        body["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class div extends luvml.e.Element_m {
            constructor() {
                super("div");
            }
            static __() {
                return new div();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new div());
            }
        }
        e.div = div;
        div["__class"] = "luvml.e.div";
        div["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @param {number} _1_to_6
         * @class
         * @extends luvml.e.Element_m
         */
        class h extends luvml.e.Element_m {
            constructor(_1_to_6) {
                super(h.htag(_1_to_6));
            }
            static __(_1_to_6) {
                return new h(_1_to_6);
            }
            static ___(_1_to_6, ...segments) {
                return (o => o.____.apply(o, segments))(new h(_1_to_6));
            }
            /*private*/ static htag(_1_to_6) {
                switch ((_1_to_6)) {
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
                        throw Object.defineProperty(new Error("h" + _1_to_6 + " is not a standard element"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Error', 'java.lang.Object', 'java.lang.AssertionError'] });
                }
            }
        }
        e.h = h;
        h["__class"] = "luvml.e.h";
        h["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class head extends luvml.e.Element_m {
            constructor() {
                super("head");
            }
            static __() {
                return new head();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new head());
            }
        }
        e.head = head;
        head["__class"] = "luvml.e.head";
        head["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class html extends luvml.e.Element_m {
            constructor() {
                super("html");
            }
            static __() {
                return new html();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new html());
            }
        }
        e.html = html;
        html["__class"] = "luvml.e.html";
        html["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class img extends luvml.e.Element_m {
            constructor() {
                super("img", false);
            }
            static __() {
                return new img();
            }
            static ___(...segments) {
                return new img().____(...segments);
            }
        }
        e.img = img;
        img["__class"] = "luvml.e.img";
        img["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class input extends luvml.e.Element_m {
            constructor() {
                super("input");
            }
            static __() {
                return new input();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new input());
            }
        }
        e.input = input;
        input["__class"] = "luvml.e.input";
        input["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class label extends luvml.e.Element_m {
            constructor() {
                super("label");
            }
            static __() {
                return new label();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new label());
            }
        }
        e.label = label;
        label["__class"] = "luvml.e.label";
        label["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class li extends luvml.e.Element_m {
            constructor() {
                super("li");
            }
            static __() {
                return new li();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new li());
            }
        }
        e.li = li;
        li["__class"] = "luvml.e.li";
        li["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class nav extends luvml.e.Element_m {
            constructor() {
                super("nav");
            }
            static __() {
                return new nav();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new nav());
            }
        }
        e.nav = nav;
        nav["__class"] = "luvml.e.nav";
        nav["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class path extends luvml.e.Element_m {
            constructor() {
                super("path", false, true);
            }
            static __() {
                return new path();
            }
            d(path) {
                this.____(luvml.a.A.__("d", path));
                return this;
            }
            /**
             *
             * @param {*} o
             */
            to(o) {
                super.to(o);
            }
        }
        e.path = path;
        path["__class"] = "luvml.e.path";
        path["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class svg extends luvml.e.Element_m {
            constructor() {
                super("svg");
                this.____(luvml.a.A.__("xmlns", "http://www.w3.org/2000/svg"));
            }
            static __() {
                return new svg();
            }
            static ___(...segments) {
                return new svg().____(...segments);
            }
        }
        e.svg = svg;
        svg["__class"] = "luvml.e.svg";
        svg["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var e;
    (function (e) {
        /**
         *
         * @author
         * @class
         * @extends luvml.e.Element_m
         */
        class ul extends luvml.e.Element_m {
            constructor() {
                super("ul");
            }
            static __() {
                return new ul();
            }
            static ___(...segments) {
                return (o => o.____.apply(o, segments))(new ul());
            }
        }
        e.ul = ul;
        ul["__class"] = "luvml.e.ul";
        ul["__interfaces"] = ["luvml.e.Node_I", "luvml.HtmlSegment_I", "luvml.e.Element_I", "luvml.___F"];
    })(e = luvml.e || (luvml.e = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var o;
    (function (o) {
        /**
         *
         * @author Ivan Velikanova
         * @param {*} ap
         * @class
         * @extends luvml.o.Out_A
         */
        class Out_String extends luvml.o.Out_A {
            constructor(ap = null) {
                super((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0); })(ap)));
                this.s = "";
            }
            /**
             *
             * @param {string} s
             * @return {luvml.o.Out_String}
             */
            __(s) {
                this.s += s;
                return this;
            }
            render() {
                return this.s;
            }
            /**
             *
             * @param {number} b
             * @return {luvml.o.Out_String}
             */
            _b(b) {
                this.s += String.fromCharCode(b);
                return this;
            }
            /**
             *
             * @param {byte[]} b
             * @return {luvml.o.Out_String}
             */
            ba(b) {
                this.s += String.fromCharCode.apply(null, b);
                return this;
            }
        }
        o.Out_String = Out_String;
        Out_String["__class"] = "luvml.o.Out_String";
        Out_String["__interfaces"] = ["luvml.o.Out_I"];
    })(o = luvml.o || (luvml.o = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {string} v
         * @class
         * @extends luvml.a.Attribute_m
         */
        class for_ extends luvml.a.Attribute_m {
            constructor(v) {
                if (((typeof v === 'string') || v === null)) {
                    let __args = arguments;
                    super(for_.DEFINITION_$LI$(), v);
                }
                else if (v === undefined) {
                    let __args = arguments;
                    super(for_.DEFINITION_$LI$());
                }
                else
                    throw new Error('invalid overload');
            }
            static DEFINITION_$LI$() { if (for_.DEFINITION == null) {
                for_.DEFINITION = luvml.a.Attr.named("for");
            } return for_.DEFINITION; }
            static __(v) {
                return new for_(v);
            }
        }
        a.for_ = for_;
        for_["__class"] = "luvml.a.for_";
        for_["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {string} v
         * @class
         * @extends luvml.a.Attribute_m
         */
        class href extends luvml.a.Attribute_m {
            constructor(v) {
                if (((typeof v === 'string') || v === null)) {
                    let __args = arguments;
                    super(href.DEFINITION_$LI$(), v);
                }
                else if (v === undefined) {
                    let __args = arguments;
                    super(href.DEFINITION_$LI$());
                }
                else
                    throw new Error('invalid overload');
            }
            static DEFINITION_$LI$() { if (href.DEFINITION == null) {
                href.DEFINITION = luvml.a.Attr.named("href");
            } return href.DEFINITION; }
            static __(v) {
                return new href(v);
            }
        }
        a.href = href;
        href["__class"] = "luvml.a.href";
        href["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {string} v
         * @class
         * @extends luvml.a.Attribute_m
         */
        class id extends luvml.a.Attribute_m {
            constructor(v) {
                if (((typeof v === 'string') || v === null)) {
                    let __args = arguments;
                    super(id.DEFINITION_$LI$(), v);
                }
                else if (v === undefined) {
                    let __args = arguments;
                    super(id.DEFINITION_$LI$());
                }
                else
                    throw new Error('invalid overload');
            }
            static DEFINITION_$LI$() { if (id.DEFINITION == null) {
                id.DEFINITION = luvml.a.Attr.named("id");
            } return id.DEFINITION; }
            static __(v) {
                return new id(v);
            }
        }
        a.id = id;
        id["__class"] = "luvml.a.id";
        id["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {string} v
         * @class
         * @extends luvml.a.Attribute_m
         */
        class src extends luvml.a.Attribute_m {
            constructor(v) {
                if (((typeof v === 'string') || v === null)) {
                    let __args = arguments;
                    super(src.DEFINITION_$LI$(), v);
                }
                else if (v === undefined) {
                    let __args = arguments;
                    super(src.DEFINITION_$LI$());
                }
                else
                    throw new Error('invalid overload');
            }
            static DEFINITION_$LI$() { if (src.DEFINITION == null) {
                src.DEFINITION = luvml.a.Attr.named("src");
            } return src.DEFINITION; }
            static __(v) {
                return new src(v);
            }
        }
        a.src = src;
        src["__class"] = "luvml.a.src";
        src["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {string} v
         * @class
         * @extends luvml.a.Attribute_m
         */
        class type extends luvml.a.Attribute_m {
            constructor(v) {
                if (((typeof v === 'string') || v === null)) {
                    let __args = arguments;
                    super(type.DEFINITION_$LI$(), v);
                }
                else if (v === undefined) {
                    let __args = arguments;
                    super(type.DEFINITION_$LI$());
                }
                else
                    throw new Error('invalid overload');
            }
            static DEFINITION_$LI$() { if (type.DEFINITION == null) {
                type.DEFINITION = luvml.a.Attr.named("type");
            } return type.DEFINITION; }
            static __(v) {
                return new type(v);
            }
        }
        a.type = type;
        type["__class"] = "luvml.a.type";
        type["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @param {string} v
         * @class
         * @extends luvml.a.Attribute_m
         */
        class value extends luvml.a.Attribute_m {
            constructor(v) {
                if (((typeof v === 'string') || v === null)) {
                    let __args = arguments;
                    super(value.DEFINITION_$LI$(), v);
                }
                else if (v === undefined) {
                    let __args = arguments;
                    super(value.DEFINITION_$LI$());
                }
                else
                    throw new Error('invalid overload');
            }
            static DEFINITION_$LI$() { if (value.DEFINITION == null) {
                value.DEFINITION = luvml.a.Attr.named("value");
            } return value.DEFINITION; }
            static __(v) {
                return new value(v);
            }
        }
        a.value = value;
        value["__class"] = "luvml.a.value";
        value["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
(function (luvml) {
    var a;
    (function (a) {
        /**
         *
         * @author
         * @class
         * @extends luvml.a.Attribute_m
         */
        class viewBox extends luvml.a.Attribute_m {
            constructor() {
                super(viewBox.DEFINITION_$LI$());
            }
            static DEFINITION_$LI$() { if (viewBox.DEFINITION == null) {
                viewBox.DEFINITION = luvml.a.Attr.named("viewBox");
            } return viewBox.DEFINITION; }
            static __(w, h) {
                const v = new viewBox();
                v.setValue("0 0 " + w + " " + h);
                return v;
            }
            static ____(x1, y1, x2, y2) {
                const v = new viewBox();
                v.setValue(x1 + " " + y1 + " " + x2 + " " + y2);
                return v;
            }
        }
        a.viewBox = viewBox;
        viewBox["__class"] = "luvml.a.viewBox";
        viewBox["__interfaces"] = ["luvml.HtmlSegment_I", "luvml.a.Attribute_I", "luvml.___F"];
    })(a = luvml.a || (luvml.a = {}));
})(luvml || (luvml = {}));
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
