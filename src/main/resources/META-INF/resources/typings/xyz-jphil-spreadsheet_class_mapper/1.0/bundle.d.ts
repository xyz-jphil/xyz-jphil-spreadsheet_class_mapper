declare namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     *
     * @author
     * @class
     */
    interface ForLoop {
        loop(currRow_A1: number, lastRow_A1: number, data: Array<any>): xyz.jphil.spreadsheet_class_mapper.ForLoopResult;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     *
     * @author
     * @enum
     * @property {xyz.jphil.spreadsheet_class_mapper.ForLoopResult} BREAK
     * @property {xyz.jphil.spreadsheet_class_mapper.ForLoopResult} CONTINUE
     * @class
     */
    enum ForLoopResult {
        BREAK = 0,
        CONTINUE = 1
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     *
     * @author
     * @param <T> The type of this mapping - a primitive java/javascript type
     * @class
     */
    interface Mapper<T> {
        sheet(): xyz.jphil.spreadsheet_class_mapper.SheetDefinition;
        name(): string;
        column_0(): number;
        column_R1C1(): number;
        column_A1(): string;
        defaultValue(): T;
        valueAt(rows: Array<Array<any>>, at_r: number): T;
        value(row: Array<any>): T;
        isSimilar(m: Mapper<any>): boolean;
        setValue(row: Array<any>, value: T): any;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     *
     * @author
     * @param {number} col_0
     * @param {string} name
     * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
     * @class
     */
    abstract class Mapper_A<T> implements xyz.jphil.spreadsheet_class_mapper.Mapper<T> {
        col_0: number;
        __name: string;
        sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition;
        constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition);
        /**
         *
         * @param {*} m
         * @return {boolean}
         */
        isSimilar(m: xyz.jphil.spreadsheet_class_mapper.Mapper<any>): boolean;
        /**
         *
         * @return {xyz.jphil.spreadsheet_class_mapper.SheetDefinition}
         */
        sheet(): xyz.jphil.spreadsheet_class_mapper.SheetDefinition;
        /**
         *
         * @return {string}
         */
        name(): string;
        /**
         *
         * @return {number}
         */
        column_0(): number;
        /**
         *
         * @return {number}
         */
        column_R1C1(): number;
        /**
         *
         * @return {string}
         */
        column_A1(): string;
        abstract defaultValue(): any;
        abstract setValue(row?: any, value?: any): any;
        abstract value(row?: any): any;
        abstract valueAt(rows?: any, at_r?: any): any;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
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
    class SheetDefinition {
        __sheetName: string;
        __spreadSheetId: string;
        __headerRows_Count: number;
        __dataRowStart_0: number;
        __dataRowEnd_0: number;
        mappers: Array<xyz.jphil.spreadsheet_class_mapper.Mapper<any>>;
        constructor(sheetName: string, spreadSheetId: string, headerRows_Count: number, dataRowStart_0: number, dataRowEnd_0: number);
        dataRowEnd_0(): number;
        dataRowStart_0(): number;
        headerRows_Count(): number;
        sheetName(): string;
        spreadSheetId(): string;
        getMappers(): Array<xyz.jphil.spreadsheet_class_mapper.Mapper<any>>;
        getMapperByName(s: string): xyz.jphil.spreadsheet_class_mapper.Mapper<any>;
        lastKnownColumn(): number;
        dataRangeMaxCols(startRow: number): string;
        dataRangeMaxColsAllRowsNoHeader(): string;
        dataRangeMaxColsAllRowsAndHeader(): string;
        dataRangeHeader(includes: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]): string;
        dataRangeHeaderFull(): string;
        dataRangeAtRow(r_A1: number): string;
        maxCol(columns: number, includes: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]): number;
        dataRange(boundedRows: boolean, columns: number, includes: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]): string;
        addMapper(mapper: xyz.jphil.spreadsheet_class_mapper.Mapper<any>): void;
        string_M(col_0: number, name: string, defaultValue: string): xyz.jphil.spreadsheet_class_mapper.M_String;
        boolean_M(col_0: number, name: string, defaultValue: boolean): xyz.jphil.spreadsheet_class_mapper.M_Boolean;
        long_M(col_0: number, name: string, defaultValue: number): xyz.jphil.spreadsheet_class_mapper.M_Long;
        integer_M(col_0: number, name: string, defaultValue: number): xyz.jphil.spreadsheet_class_mapper.M_Integer;
        read(ssdp: xyz.jphil.spreadsheet_class_mapper.SpreadSheetDataProvider, forLoop: xyz.jphil.spreadsheet_class_mapper.ForLoop, ...ms: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]): void;
        createNewUpdate(): xyz.jphil.spreadsheet_class_mapper.UpdateBuilder;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     *
     * @author
     * @class
     */
    interface SpreadSheetDataProvider {
        getData(address: string): Array<Array<any>>;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     *
     * @author
     * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
     * @class
     */
    class UpdateBuilder {
        rows: Array<xyz.jphil.spreadsheet_class_mapper.UpdateEntry>;
        sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition;
        col_min_0: number;
        col_max_0: number;
        update_start_row_A1: number;
        constructor(sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition);
        newEntry(): xyz.jphil.spreadsheet_class_mapper.UpdateEntry;
        getSheetDefinition(): xyz.jphil.spreadsheet_class_mapper.SheetDefinition;
        defineColumnRangeToUpdate(...ms: xyz.jphil.spreadsheet_class_mapper.Mapper<any>[]): void;
        updateRangeExtents(): string;
        updateValues(): Array<Array<any>>;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     *
     * @author
     * @param {xyz.jphil.spreadsheet_class_mapper.UpdateBuilder} entries
     * @class
     */
    class UpdateEntry {
        entries: xyz.jphil.spreadsheet_class_mapper.UpdateBuilder;
        values: Array<any>;
        min_update: number;
        max_update: number;
        constructor(entries: xyz.jphil.spreadsheet_class_mapper.UpdateBuilder);
        set<T>(m: xyz.jphil.spreadsheet_class_mapper.Mapper<T>, v: T): void;
        getAllValues(): Array<any>;
        getValuesWithinColumns(col_min_0: number, col_max_0: number): Array<any>;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
    /**
     *
     * @author
     * @class
     */
    class Util_A1_R1C1 {
        static getColumnA1(cn: number): string;
        static getColumnR1C1(colStr: string): number;
        static colToChar(c_a1: number): string;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
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
    class M_Boolean extends xyz.jphil.spreadsheet_class_mapper.Mapper_A<boolean> {
        __defaultValue: boolean;
        constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition, defaultValue: boolean);
        /**
         *
         * @return {boolean}
         */
        defaultValue(): boolean;
        /**
         *
         * @param {*[][]} rows
         * @param {number} at_r
         * @return {boolean}
         */
        valueAt(rows: Array<Array<any>>, at_r: number): boolean;
        /**
         *
         * @param {*[]} row
         * @return {boolean}
         */
        value(row: Array<any>): boolean;
        setValue$java_util_List$java_lang_Boolean(row: Array<any>, value: boolean): void;
        /**
         *
         * @param {*[]} row
         * @param {boolean} value
         */
        setValue(row?: any, value?: any): any;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
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
    class M_Integer extends xyz.jphil.spreadsheet_class_mapper.Mapper_A<number> {
        __defaultValue: number;
        constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition, defaultValue: number);
        /**
         *
         * @return {number}
         */
        defaultValue(): number;
        /**
         *
         * @param {*[][]} rows
         * @param {number} at_r
         * @return {number}
         */
        valueAt(rows: Array<Array<any>>, at_r: number): number;
        /**
         *
         * @param {*[]} row
         * @return {number}
         */
        value(row: Array<any>): number;
        setValue$java_util_List$java_lang_Integer(row: Array<any>, value: number): void;
        /**
         *
         * @param {*[]} row
         * @param {number} value
         */
        setValue(row?: any, value?: any): any;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
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
    class M_Long extends xyz.jphil.spreadsheet_class_mapper.Mapper_A<number> {
        __defaultValue: number;
        constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition, defaultValue: number);
        /**
         *
         * @return {number}
         */
        defaultValue(): number;
        /**
         *
         * @param {*[][]} rows
         * @param {number} at_r
         * @return {number}
         */
        valueAt(rows: Array<Array<any>>, at_r: number): number;
        /**
         *
         * @param {*[]} row
         * @return {number}
         */
        value(row: Array<any>): number;
        setValue$java_util_List$java_lang_Long(row: Array<any>, value: number): void;
        /**
         *
         * @param {*[]} row
         * @param {number} value
         */
        setValue(row?: any, value?: any): any;
    }
}
declare namespace xyz.jphil.spreadsheet_class_mapper {
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
    class M_String extends xyz.jphil.spreadsheet_class_mapper.Mapper_A<string> {
        __defaultValue: string;
        constructor(col_0: number, name: string, sheetDefinition: xyz.jphil.spreadsheet_class_mapper.SheetDefinition, defaultValue: string);
        /**
         *
         * @return {string}
         */
        defaultValue(): string;
        safelyCastObj(v: any): string;
        nullChecks(rows: Array<Array<any>>, at_r: number): any;
        nullCheck(row: Array<any>): any;
        /**
         *
         * @param {*[][]} rows
         * @param {number} at_r
         * @return {string}
         */
        valueAt(rows: Array<Array<any>>, at_r: number): string;
        /**
         *
         * @param {*[]} row
         * @return {string}
         */
        value(row: Array<any>): string;
        setValue$java_util_List$java_lang_String(row: Array<any>, value: string): void;
        /**
         *
         * @param {*[]} row
         * @param {string} value
         */
        setValue(row?: any, value?: any): any;
    }
}
