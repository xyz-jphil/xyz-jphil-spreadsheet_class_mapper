/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @class
     */
    export interface ForLoop {
        loop(currRow_A1: number, lastRow_A1: number, data: Array<any>): ForLoop.RESULT;
    }

    export namespace ForLoop {

        export enum RESULT {
            BREAK, CONTINUE
        }
    }

}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param <T> The type of this mapping - a primitive java/javascript type
     * @class
     */
    export interface Mapper<T> {
        sheet(): xyz.jphil.spreadsheet_class_mapper.SheetDefinition;

        name(): string;

        column_0(): number;

        column_R1C1(): number;

        column_A1(): string;

        defaultValue(): T;

        valueAt(rows: Array<Array<any>>, at_r: number): T;

        value(row: Array<any>): T;

        isSimilar(m: Mapper<any>): boolean;

        setValue(row: Array<any>, value: T);
    }
}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param {number} col_0
     * @param {string} name
     * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
     * @class
     */
    export abstract class Mapper_A<T> implements xyz.jphil.spreadsheet_class_mapper.Mapper<T> {
        col_0: number;

        /*private*/ __name: string;

        /*private*/ sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition;

        public constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition) {
            if (this.col_0 === undefined) { this.col_0 = 0; }
            if (this.__name === undefined) { this.__name = null; }
            if (this.sheetDefinition === undefined) { this.sheetDefinition = null; }
            this.col_0 = col_0;
            this.__name = name == null ? "" : name;
            this.sheetDefinition = sheetDefinition;
        }

        /**
         * 
         * @param {*} m
         * @return {boolean}
         */
        public isSimilar(m: xyz.jphil.spreadsheet_class_mapper.Mapper<any>): boolean {
            if (m == null)return false;
            return m.column_0() === this.col_0 && (this.__name === m.name());
        }

        /**
         * 
         * @return {xyz.jphil.spreadsheet_class_mapper.SheetDefinition}
         */
        public sheet(): xyz.jphil.spreadsheet_class_mapper.SheetDefinition {
            return this.sheetDefinition;
        }

        /**
         * 
         * @return {string}
         */
        public name(): string {
            return this.__name;
        }

        /**
         * 
         * @return {number}
         */
        public column_0(): number {
            return this.col_0;
        }

        /**
         * 
         * @return {number}
         */
        public column_R1C1(): number {
            return this.col_0 + 1;
        }

        /**
         * 
         * @return {string}
         */
        public column_A1(): string {
            return xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.colToChar(this.column_R1C1());
        }

        public abstract defaultValue(): any;
        public abstract setValue(row?: any, value?: any): any;
        public abstract value(row?: any): any;
        public abstract valueAt(rows?: any, at_r?: any): any;    }
    Mapper_A["__class"] = "xyz.jphil.spreadsheet_class_mapper.Mapper_A";
    Mapper_A["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];


}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param {string} sheetName
     * @param {string} spreadSheetId
     * @param {number} headerRows_Count
     * @param {number} dataRowStart_0
     * @param {number} dataRowEnd_0
     * @class
     */
    export class SheetDefinition {
        /*private*/ __sheetName: string;

        /*private*/ __spreadSheetId: string;

        /*private*/ __headerRows_Count: number;

        /*private*/ __dataRowStart_0: number;

        /*private*/ __dataRowEnd_0: number;

        /*private*/ mappers: Array<xyz.jphil.spreadsheet_class_mapper.Mapper<any>>;

        public constructor(sheetName: string, spreadSheetId: string, headerRows_Count: number, dataRowStart_0: number, dataRowEnd_0: number) {
            if (this.__sheetName === undefined) { this.__sheetName = null; }
            if (this.__spreadSheetId === undefined) { this.__spreadSheetId = null; }
            if (this.__headerRows_Count === undefined) { this.__headerRows_Count = 0; }
            if (this.__dataRowStart_0 === undefined) { this.__dataRowStart_0 = 0; }
            if (this.__dataRowEnd_0 === undefined) { this.__dataRowEnd_0 = 0; }
            this.mappers = <any>([]);
            this.__sheetName = sheetName;
            this.__spreadSheetId = spreadSheetId;
            this.__headerRows_Count = headerRows_Count;
            this.__dataRowStart_0 = dataRowStart_0;
            this.__dataRowEnd_0 = dataRowEnd_0;
        }

        public dataRowEnd_0(): number {
            return this.__dataRowEnd_0;
        }

        public dataRowStart_0(): number {
            return this.__dataRowStart_0;
        }

        public headerRows_Count(): number {
            return this.__headerRows_Count;
        }

        public sheetName(): string {
            return this.__sheetName;
        }

        public spreadSheetId(): string {
            return this.__spreadSheetId;
        }

        public getMappers(): Array<xyz.jphil.spreadsheet_class_mapper.Mapper<any>> {
            const c: Array<xyz.jphil.spreadsheet_class_mapper.Mapper<any>> = <any>([]);
            for(let i: number = 0; i < /* size */(<number>this.mappers.length); i++) {{
                const m_i: xyz.jphil.spreadsheet_class_mapper.Mapper<any> = /* get */this.mappers[i];
                /* add */(c.push(m_i)>0);
            };}
            return c;
        }

        public getMapperByName(s: string): xyz.jphil.spreadsheet_class_mapper.Mapper<any> {
            let col_max: number = 1;
            let m_i_b: xyz.jphil.spreadsheet_class_mapper.Mapper<any> = /* size */(<number>this.mappers.length) > 0 ? /* get */this.mappers[0] : null;
            for(let i: number = 0; i < /* size */(<number>this.mappers.length); i++) {{
                const m_i: xyz.jphil.spreadsheet_class_mapper.Mapper<any> = /* get */this.mappers[i];
                if (m_i.column_R1C1() > col_max){
                    m_i_b = m_i;
                    col_max = m_i.column_R1C1();
                }
                if (m_i.name() === s)return m_i;
            };}
            return m_i_b;
        }

        public lastKnownColumn(): number {
            let col_max: number = 1;
            for(let i: number = 0; i < /* size */(<number>this.mappers.length); i++) {{
                const m_i: xyz.jphil.spreadsheet_class_mapper.Mapper<any> = /* get */this.mappers[i];
                col_max = m_i.column_R1C1() > col_max ? m_i.column_R1C1() : col_max;
            };}
            return col_max;
        }

        public dataRangeMaxCols(startRow: number): string {
            return this.sheetName() + "!A" + startRow + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn()) + (this.__dataRowEnd_0 + 1);
        }

        public dataRangeMaxColsAllRowsNoHeader(): string {
            return this.sheetName() + "!A" + (this.__dataRowStart_0 + 1) + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn());
        }

        public dataRangeMaxColsAllRowsAndHeader(): string {
            return this.sheetName() + "!A:" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn());
        }

        public dataRangeHeader(includes: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]): string {
            const col_max: number = this.maxCol(1, includes);
            return this.sheetName() + "!A1:" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(col_max) + "1";
        }

        public dataRangeHeaderFull(): string {
            return this.sheetName() + "!A1:" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn()) + "1";
        }

        public dataRangeAtRow(r_A1: number): string {
            return this.sheetName() + "!A" + r_A1 + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn()) + r_A1;
        }

        /*private*/ maxCol(columns: number, includes: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]): number {
            let col_max: number = Math.max(1, columns);
            col_max = Math.min(this.lastKnownColumn(), col_max);
            if (includes != null && includes.length > 0){
                for(let i: number = 0; i < includes.length; i++) {{
                    const m_i: xyz.jphil.spreadsheet_class_mapper.Mapper<any> = includes[i];
                    col_max = m_i.column_R1C1() > col_max ? m_i.column_R1C1() : col_max;
                };}
            }
            return col_max;
        }

        public dataRange(boundedRows: boolean, columns: number, includes: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]): string {
            const col_max: number = this.maxCol(columns, includes);
            return this.__sheetName + "!A" + (this.__dataRowStart_0 + 1) + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(col_max) + (boundedRows ? (this.__dataRowEnd_0 + 1) : "");
        }

        public addMapper(mapper: xyz.jphil.spreadsheet_class_mapper.Mapper<any>) {
            if (mapper == null)return;
            for(let i: number = 0; i < /* size */(<number>this.mappers.length); i++) {{
                const m_i: xyz.jphil.spreadsheet_class_mapper.Mapper<any> = /* get */this.mappers[i];
                if (m_i == null)continue;
                if (m_i.isSimilar(mapper))return;
            };}
            /* add */(this.mappers.push(mapper)>0);
        }

        public string_M(col_0: number, name: string, defaultValue: string): xyz.jphil.spreadsheet_class_mapper.M_String {
            const ms: xyz.jphil.spreadsheet_class_mapper.M_String = new xyz.jphil.spreadsheet_class_mapper.M_String(col_0, name, this, defaultValue);
            this.addMapper(ms);
            return ms;
        }

        public boolean_M(col_0: number, name: string, defaultValue: boolean): xyz.jphil.spreadsheet_class_mapper.M_Boolean {
            const ms: xyz.jphil.spreadsheet_class_mapper.M_Boolean = new xyz.jphil.spreadsheet_class_mapper.M_Boolean(col_0, name, this, defaultValue);
            this.addMapper(ms);
            return ms;
        }

        public long_M(col_0: number, name: string, defaultValue: number): xyz.jphil.spreadsheet_class_mapper.M_Long {
            const ms: xyz.jphil.spreadsheet_class_mapper.M_Long = new xyz.jphil.spreadsheet_class_mapper.M_Long(col_0, name, this, defaultValue);
            this.addMapper(ms);
            return ms;
        }

        public integer_M(col_0: number, name: string, defaultValue: number): xyz.jphil.spreadsheet_class_mapper.M_Integer {
            const ms: xyz.jphil.spreadsheet_class_mapper.M_Integer = new xyz.jphil.spreadsheet_class_mapper.M_Integer(col_0, name, this, defaultValue);
            this.addMapper(ms);
            return ms;
        }

        public read(ssdp: xyz.jphil.spreadsheet_class_mapper.SpreadSheetDataProvider, forLoop: xyz.jphil.spreadsheet_class_mapper.ForLoop, ...ms: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]) {
            let max_col: number = 1;
            if (ms == null || ms.length === 0){
                ms = /* toArray */this.mappers.slice(0);
            }
            for(let i: number = 0; i < ms.length; i++) {{
                const m: xyz.jphil.spreadsheet_class_mapper.Mapper<any> = ms[i];
                max_col = Math.max(max_col, m.column_R1C1());
            };}
            let data1: Array<Array<any>> = <any>([]);
            const lastCol: string = xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(max_col);
            const address: string = this.__sheetName + "!A" + (this.dataRowStart_0() + 1) + ":" + lastCol;
            data1 = ssdp.getData(address);
            for(let i: number = 0; i < /* size */(<number>data1.length); i++) {{
                const row: Array<any> = /* get */data1[i];
                forLoop.loop(i + 1 + this.dataRowStart_0(), 0 + 1 + this.dataRowStart_0() + /* size */(<number>data1.length) - 1, row);
            };}
        }

        public createNewUpdate(): xyz.jphil.spreadsheet_class_mapper.UpdateBuilder {
            return new xyz.jphil.spreadsheet_class_mapper.UpdateBuilder(this);
        }
    }
    SheetDefinition["__class"] = "xyz.jphil.spreadsheet_class_mapper.SheetDefinition";

}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @class
     */
    export interface SpreadSheetDataProvider {
        getData(address: string): Array<Array<any>>;
    }
}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
     * @class
     */
    export class UpdateBuilder {
        /*private*/ rows: Array<xyz.jphil.spreadsheet_class_mapper.UpdateEntry>;

        sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition;

        /*private*/ col_min_0: number;

        /*private*/ col_max_0: number;

        /*private*/ update_start_row_A1: number;

        public constructor(sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition) {
            this.rows = <any>([]);
            if (this.sheetDefinition === undefined) { this.sheetDefinition = null; }
            this.col_min_0 = 2147483647;
            this.col_max_0 = 0;
            if (this.update_start_row_A1 === undefined) { this.update_start_row_A1 = 0; }
            this.sheetDefinition = sheetDefinition;
            this.update_start_row_A1 = sheetDefinition.dataRowStart_0() + 1;
            this.defineColumnRangeToUpdate.apply(this, /* toArray */((a1, a2) => { if(a1.length >= a2.length) { a1.length=0; a1.push.apply(a1, a2); return a1; } else { return a2.slice(0); } })((s => { let a=[]; while(s-->0) a.push(null); return a; })(/* size */(<number>sheetDefinition.getMappers().length)), sheetDefinition.getMappers()));
        }

        public newEntry(): xyz.jphil.spreadsheet_class_mapper.UpdateEntry {
            const ue: xyz.jphil.spreadsheet_class_mapper.UpdateEntry = new xyz.jphil.spreadsheet_class_mapper.UpdateEntry(this);
            /* add */(this.rows.push(ue)>0);
            return ue;
        }

        public getSheetDefinition(): xyz.jphil.spreadsheet_class_mapper.SheetDefinition {
            return this.sheetDefinition;
        }

        public defineColumnRangeToUpdate(...ms: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]) {
            /* clear */(this.rows.length = 0);
            this.col_min_0 = 2147483647;
            this.col_max_0 = 0;
            if (ms == null || ms.length === 0)return;
            for(let i: number = 0; i < ms.length; i++) {{
                const m_i: xyz.jphil.spreadsheet_class_mapper.Mapper<any> = ms[i];
                this.col_max_0 = Math.max(this.col_max_0, m_i.column_0());
                this.col_min_0 = Math.min(this.col_min_0, m_i.column_0());
            };}
        }

        public updateRangeExtents(): string {
            return this.sheetDefinition.sheetName() + "!" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.col_min_0 + 1) + this.update_start_row_A1 + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.col_max_0 + 1) + (this.update_start_row_A1 + /* size */(<number>this.rows.length) - 1);
        }

        public updateValues(): Array<Array<any>> {
            const u_rows: Array<Array<any>> = <any>([]);
            for(let i: number = 0; i < /* size */(<number>this.rows.length); i++) {{
                const row_i: Array<any> = /* get */this.rows[i].getValuesWithinColumns(this.col_min_0, this.col_max_0);
                if (/* size */(<number>row_i.length) !== this.col_max_0 - this.col_min_0 + 1){
                    throw Object.defineProperty(new Error("Expected from " + this.col_min_0 + " " + this.col_max_0 + " but size = " + /* size */(<number>row_i.length)), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                }
                /* add */(u_rows.push(row_i)>0);
            };}
            return u_rows;
        }
    }
    UpdateBuilder["__class"] = "xyz.jphil.spreadsheet_class_mapper.UpdateBuilder";

}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param {xyz.jphil.spreadsheet_class_mapper.UpdateBuilder} entries
     * @class
     */
    export class UpdateEntry {
        /*private*/ entries: xyz.jphil.spreadsheet_class_mapper.UpdateBuilder;

        /*private*/ values: Array<any>;

        /*private*/ min_update: number;

        /*private*/ max_update: number;

        public constructor(entries: xyz.jphil.spreadsheet_class_mapper.UpdateBuilder) {
            if (this.entries === undefined) { this.entries = null; }
            this.values = <any>([]);
            this.min_update = 2147483647;
            this.max_update = 0;
            this.entries = entries;
            let max_col: number = 0;
            let min_col: number = 2147483647;
            {
                let array126 = entries.getSheetDefinition().getMappers();
                for(let index125=0; index125 < array126.length; index125++) {
                    let m = array126[index125];
                    {
                        max_col = Math.max(max_col, m.column_0());
                        min_col = Math.min(min_col, m.column_0());
                    }
                }
            }
            for(let i: number = min_col; i <= max_col; i++) {{
                /* add */(this.values.push("")>0);
            };}
            {
                let array128 = entries.getSheetDefinition().getMappers();
                for(let index127=0; index127 < array128.length; index127++) {
                    let m = array128[index127];
                    {
                        /* set */(this.values[m.column_0()] = m.defaultValue());
                    }
                }
            }
        }

        public set<T>(m: xyz.jphil.spreadsheet_class_mapper.Mapper<T>, v: T) {
            this.max_update = Math.max(this.max_update, m.column_0());
            this.min_update = Math.min(this.min_update, m.column_0());
            /* set */(this.values[m.column_0()] = v);
        }

        public getAllValues(): Array<any> {
            return this.values;
        }

        public getValuesWithinColumns(col_min_0: number, col_max_0: number): Array<any> {
            const c_min_0: number = Math.max(col_min_0, this.min_update);
            const c_max_0: number = Math.min(col_max_0, /* size */(<number>this.values.length) - 1);
            return <any>(/* subList */this.values.slice(c_min_0, c_max_0 + 1).slice(0));
        }
    }
    UpdateEntry["__class"] = "xyz.jphil.spreadsheet_class_mapper.UpdateEntry";

}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @class
     */
    export class Util_A1_R1C1 {
        public static getColumnA1(cn: number): string {
            if (cn === 0)throw Object.defineProperty(new Error("In A1 notation cn starts with 1 not zero"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            let colStr: string = "";
            let num: number = cn;
            while((num > 0)) {{
                const remainder: number = ((num - 1) % 26) + 1;
                num = num - remainder;
                num = (num / 26|0);
                colStr = Util_A1_R1C1.colToChar(remainder) + colStr;
            }};
            return colStr;
        }

        public static getColumnR1C1(colStr: string): number {
            let cn: number = 0;
            for(let i: number = 0; i < colStr.length; i++) {{
                cn = cn * 26 + ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(colStr.charAt(i)) - 64) * 1;
            };}
            return cn;
        }

        public static colToChar(c_a1: number): string {
            if (c_a1 === 0)return "";
            switch((c_a1)) {
            case 1:
                return "A";
            case 2:
                return "B";
            case 3:
                return "C";
            case 4:
                return "D";
            case 5:
                return "E";
            case 6:
                return "F";
            case 7:
                return "G";
            case 8:
                return "H";
            case 9:
                return "I";
            case 10:
                return "J";
            case 11:
                return "K";
            case 12:
                return "L";
            case 13:
                return "M";
            case 14:
                return "N";
            case 15:
                return "O";
            case 16:
                return "P";
            case 17:
                return "Q";
            case 18:
                return "R";
            case 19:
                return "S";
            case 20:
                return "T";
            case 21:
                return "U";
            case 22:
                return "V";
            case 23:
                return "W";
            case 24:
                return "X";
            case 25:
                return "Y";
            case 26:
                return "Z";
            default:
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object','java.lang.AssertionError'] });
            }
        }
    }
    Util_A1_R1C1["__class"] = "xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1";

}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param {number} col_0
     * @param {string} name
     * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
     * @param {boolean} defaultValue
     * @class
     * @extends xyz.jphil.spreadsheet_class_mapper.Mapper_A
     */
    export class M_Boolean extends xyz.jphil.spreadsheet_class_mapper.Mapper_A<boolean> {
        /*private*/ __defaultValue: boolean;

        public constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition, defaultValue: boolean) {
            super(col_0, name, sheetDefinition);
            if (this.__defaultValue === undefined) { this.__defaultValue = false; }
            this.__defaultValue = defaultValue;
        }

        /**
         * 
         * @return {boolean}
         */
        public defaultValue(): boolean {
            return this.__defaultValue;
        }

        /**
         * 
         * @param {*[][]} rows
         * @param {number} at_r
         * @return {boolean}
         */
        public valueAt(rows: Array<Array<any>>, at_r: number): boolean {
            if (rows == null)return this.__defaultValue;
            if (/* size */(<number>rows.length) <= at_r)return this.__defaultValue;
            return this.value(/* get */rows[at_r]);
        }

        /**
         * 
         * @param {*[]} row
         * @return {boolean}
         */
        public value(row: Array<any>): boolean {
            if (row == null || /* size */(<number>row.length) === 0)return this.__defaultValue;
            if (/* size */(<number>row.length) <= this.col_0)return this.__defaultValue;
            try {
                const o: any = /* get */row[this.col_0];
                if (o == null)return this.__defaultValue;
                if (typeof o === 'boolean'){
                    return <boolean>o;
                }
                const x: string = o.toString().toLowerCase();
                if (x === ("true"))return true;
                if (x === ("false"))return false;
            } catch(a) {
            }
            return this.__defaultValue;
        }

        public setValue$java_util_List$java_lang_Boolean(row: Array<any>, value: boolean) {
            /* set */(row[this.col_0] = value);
        }

        /**
         * 
         * @param {*[]} row
         * @param {boolean} value
         */
        public setValue(row?: any, value?: any) {
            if (((row != null && (row instanceof Array)) || row === null) && ((typeof value === 'boolean') || value === null)) {
                return <any>this.setValue$java_util_List$java_lang_Boolean(row, value);
            } else throw new Error('invalid overload');
        }
    }
    M_Boolean["__class"] = "xyz.jphil.spreadsheet_class_mapper.M_Boolean";
    M_Boolean["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];


}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param {number} col_0
     * @param {string} name
     * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
     * @param {number} defaultValue
     * @class
     * @extends xyz.jphil.spreadsheet_class_mapper.Mapper_A
     */
    export class M_Integer extends xyz.jphil.spreadsheet_class_mapper.Mapper_A<number> {
        /*private*/ __defaultValue: number;

        public constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition, defaultValue: number) {
            super(col_0, name, sheetDefinition);
            if (this.__defaultValue === undefined) { this.__defaultValue = 0; }
            this.__defaultValue = defaultValue;
        }

        /**
         * 
         * @return {number}
         */
        public defaultValue(): number {
            return this.__defaultValue;
        }

        /**
         * 
         * @param {*[][]} rows
         * @param {number} at_r
         * @return {number}
         */
        public valueAt(rows: Array<Array<any>>, at_r: number): number {
            if (rows == null)return this.__defaultValue;
            if (/* size */(<number>rows.length) <= at_r)return this.__defaultValue;
            return this.value(/* get */rows[at_r]);
        }

        /**
         * 
         * @param {*[]} row
         * @return {number}
         */
        public value(row: Array<any>): number {
            if (row == null || /* size */(<number>row.length) === 0)return this.__defaultValue;
            if (/* size */(<number>row.length) <= this.col_0)return this.__defaultValue;
            try {
                const o: any = /* get */row[this.col_0];
                if (o == null)return this.__defaultValue;
                if (typeof o === 'number')return <number>o;
                return /* parseInt */parseInt(o.toString());
            } catch(a) {
            }
            return this.__defaultValue;
        }

        public setValue$java_util_List$java_lang_Integer(row: Array<any>, value: number) {
            /* set */(row[this.col_0] = value);
        }

        /**
         * 
         * @param {*[]} row
         * @param {number} value
         */
        public setValue(row?: any, value?: any) {
            if (((row != null && (row instanceof Array)) || row === null) && ((typeof value === 'number') || value === null)) {
                return <any>this.setValue$java_util_List$java_lang_Integer(row, value);
            } else throw new Error('invalid overload');
        }
    }
    M_Integer["__class"] = "xyz.jphil.spreadsheet_class_mapper.M_Integer";
    M_Integer["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];


}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param {number} col_0
     * @param {string} name
     * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
     * @param {number} defaultValue
     * @class
     * @extends xyz.jphil.spreadsheet_class_mapper.Mapper_A
     */
    export class M_Long extends xyz.jphil.spreadsheet_class_mapper.Mapper_A<number> {
        /*private*/ __defaultValue: number;

        public constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition, defaultValue: number) {
            super(col_0, name, sheetDefinition);
            if (this.__defaultValue === undefined) { this.__defaultValue = 0; }
            this.__defaultValue = defaultValue;
        }

        /**
         * 
         * @return {number}
         */
        public defaultValue(): number {
            return this.__defaultValue;
        }

        /**
         * 
         * @param {*[][]} rows
         * @param {number} at_r
         * @return {number}
         */
        public valueAt(rows: Array<Array<any>>, at_r: number): number {
            if (rows == null)return this.__defaultValue;
            if (/* size */(<number>rows.length) <= at_r)return this.__defaultValue;
            return this.value(/* get */rows[at_r]);
        }

        /**
         * 
         * @param {*[]} row
         * @return {number}
         */
        public value(row: Array<any>): number {
            if (row == null || /* size */(<number>row.length) === 0)return this.__defaultValue;
            if (/* size */(<number>row.length) <= this.col_0)return this.__defaultValue;
            try {
                const o: any = /* get */row[this.col_0];
                if (o == null)return this.__defaultValue;
                if (typeof o === 'number')return <number>o;
                return /* parseLong */parseInt(o.toString());
            } catch(a) {
            }
            return this.__defaultValue;
        }

        public setValue$java_util_List$java_lang_Long(row: Array<any>, value: number) {
            /* set */(row[this.col_0] = value);
        }

        /**
         * 
         * @param {*[]} row
         * @param {number} value
         */
        public setValue(row?: any, value?: any) {
            if (((row != null && (row instanceof Array)) || row === null) && ((typeof value === 'number') || value === null)) {
                return <any>this.setValue$java_util_List$java_lang_Long(row, value);
            } else throw new Error('invalid overload');
        }
    }
    M_Long["__class"] = "xyz.jphil.spreadsheet_class_mapper.M_Long";
    M_Long["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];


}
namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     * 
     * @author
     * @param {number} col_0
     * @param {string} name
     * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
     * @param {string} defaultValue
     * @class
     * @extends xyz.jphil.spreadsheet_class_mapper.Mapper_A
     */
    export class M_String extends xyz.jphil.spreadsheet_class_mapper.Mapper_A<string> {
        /*private*/ __defaultValue: string;

        public constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition, defaultValue: string) {
            super(col_0, name, sheetDefinition);
            if (this.__defaultValue === undefined) { this.__defaultValue = null; }
            this.__defaultValue = defaultValue;
        }

        /**
         * 
         * @return {string}
         */
        public defaultValue(): string {
            return this.__defaultValue;
        }

        safelyCastObj(v: any): string {
            if (v == null)return null;
            const s: string = v.toString();
            return s == null ? this.__defaultValue : s;
        }

        /*private*/ nullChecks(rows: Array<Array<any>>, at_r: number): any {
            if (rows == null || /* size */(<number>rows.length) === 0)return null;
            if (/* size */(<number>rows.length) < at_r)return null;
            return this.nullCheck(/* get */rows[at_r]);
        }

        /*private*/ nullCheck(row: Array<any>): any {
            if (row == null || /* size */(<number>row.length) === 0)return null;
            if (/* size */(<number>row.length) <= this.col_0)return null;
            return /* get */row[this.col_0];
        }

        /**
         * 
         * @param {*[][]} rows
         * @param {number} at_r
         * @return {string}
         */
        public valueAt(rows: Array<Array<any>>, at_r: number): string {
            const v: any = this.nullChecks(rows, at_r);
            if (v == null)return this.defaultValue();
            return this.safelyCastObj(v);
        }

        /**
         * 
         * @param {*[]} row
         * @return {string}
         */
        public value(row: Array<any>): string {
            const v: any = this.nullCheck(row);
            if (v == null)return this.defaultValue();
            return this.safelyCastObj(v);
        }

        public setValue$java_util_List$java_lang_String(row: Array<any>, value: string) {
            /* set */(row[this.col_0] = value);
        }

        /**
         * 
         * @param {*[]} row
         * @param {string} value
         */
        public setValue(row?: any, value?: any) {
            if (((row != null && (row instanceof Array)) || row === null) && ((typeof value === 'string') || value === null)) {
                return <any>this.setValue$java_util_List$java_lang_String(row, value);
            } else throw new Error('invalid overload');
        }
    }
    M_String["__class"] = "xyz.jphil.spreadsheet_class_mapper.M_String";
    M_String["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];


}

