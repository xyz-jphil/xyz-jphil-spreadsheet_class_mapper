var xyz;
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
            /**
             *
             * @author
             * @enum
             * @property {xyz.jphil.spreadsheet_class_mapper.ForLoopResult} BREAK
             * @property {xyz.jphil.spreadsheet_class_mapper.ForLoopResult} CONTINUE
             * @class
             */
            let ForLoopResult;
            (function (ForLoopResult) {
                ForLoopResult[ForLoopResult["BREAK"] = 0] = "BREAK";
                ForLoopResult[ForLoopResult["CONTINUE"] = 1] = "CONTINUE";
            })(ForLoopResult = spreadsheet_class_mapper.ForLoopResult || (spreadsheet_class_mapper.ForLoopResult = {}));
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
            /**
             *
             * @author
             * @param {number} col_0
             * @param {string} name
             * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
             * @class
             */
            class Mapper_A {
                constructor(col_0, name, sheetDefinition) {
                    if (this.col_0 === undefined) {
                        this.col_0 = 0;
                    }
                    if (this.__name === undefined) {
                        this.__name = null;
                    }
                    if (this.sheetDefinition === undefined) {
                        this.sheetDefinition = null;
                    }
                    this.col_0 = col_0;
                    this.__name = name == null ? "" : name;
                    this.sheetDefinition = sheetDefinition;
                }
                /**
                 *
                 * @param {*} m
                 * @return {boolean}
                 */
                isSimilar(m) {
                    if (m == null)
                        return false;
                    return m.column_0() === this.col_0 && (this.__name === m.name());
                }
                /**
                 *
                 * @return {xyz.jphil.spreadsheet_class_mapper.SheetDefinition}
                 */
                sheet() {
                    return this.sheetDefinition;
                }
                /**
                 *
                 * @return {string}
                 */
                name() {
                    return this.__name;
                }
                /**
                 *
                 * @return {number}
                 */
                column_0() {
                    return this.col_0;
                }
                /**
                 *
                 * @return {number}
                 */
                column_R1C1() {
                    return this.col_0 + 1;
                }
                /**
                 *
                 * @return {string}
                 */
                column_A1() {
                    return xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.colToChar(this.column_R1C1());
                }
            }
            spreadsheet_class_mapper.Mapper_A = Mapper_A;
            Mapper_A["__class"] = "xyz.jphil.spreadsheet_class_mapper.Mapper_A";
            Mapper_A["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
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
                constructor(sheetName, spreadSheetId, headerRows_Count, dataRowStart_0, dataRowEnd_0) {
                    if (this.__sheetName === undefined) {
                        this.__sheetName = null;
                    }
                    if (this.__spreadSheetId === undefined) {
                        this.__spreadSheetId = null;
                    }
                    if (this.__headerRows_Count === undefined) {
                        this.__headerRows_Count = 0;
                    }
                    if (this.__dataRowStart_0 === undefined) {
                        this.__dataRowStart_0 = 0;
                    }
                    if (this.__dataRowEnd_0 === undefined) {
                        this.__dataRowEnd_0 = 0;
                    }
                    this.mappers = ([]);
                    this.__sheetName = sheetName;
                    this.__spreadSheetId = spreadSheetId;
                    this.__headerRows_Count = headerRows_Count;
                    this.__dataRowStart_0 = dataRowStart_0;
                    this.__dataRowEnd_0 = dataRowEnd_0;
                }
                dataRowEnd_0() {
                    return this.__dataRowEnd_0;
                }
                dataRowStart_0() {
                    return this.__dataRowStart_0;
                }
                headerRows_Count() {
                    return this.__headerRows_Count;
                }
                sheetName() {
                    return this.__sheetName;
                }
                spreadSheetId() {
                    return this.__spreadSheetId;
                }
                getMappers() {
                    const c = ([]);
                    for (let i = 0; i < /* size */ this.mappers.length; i++) {
                        {
                            const m_i = this.mappers[i];
                            /* add */ (c.push(m_i) > 0);
                        }
                        ;
                    }
                    return c;
                }
                getMapperByName(s) {
                    let col_max = 1;
                    let m_i_b = this.mappers.length > 0 ? /* get */ this.mappers[0] : null;
                    for (let i = 0; i < /* size */ this.mappers.length; i++) {
                        {
                            const m_i = this.mappers[i];
                            if (m_i.column_R1C1() > col_max) {
                                m_i_b = m_i;
                                col_max = m_i.column_R1C1();
                            }
                            if (m_i.name() === s)
                                return m_i;
                        }
                        ;
                    }
                    return m_i_b;
                }
                lastKnownColumn() {
                    let col_max = 1;
                    for (let i = 0; i < /* size */ this.mappers.length; i++) {
                        {
                            const m_i = this.mappers[i];
                            col_max = m_i.column_R1C1() > col_max ? m_i.column_R1C1() : col_max;
                        }
                        ;
                    }
                    return col_max;
                }
                dataRangeMaxCols(startRow) {
                    return this.sheetName() + "!A" + startRow + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn()) + (this.__dataRowEnd_0 + 1);
                }
                dataRangeMaxColsAllRowsNoHeader() {
                    return this.sheetName() + "!A" + (this.__dataRowStart_0 + 1) + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn());
                }
                dataRangeMaxColsAllRowsAndHeader() {
                    return this.sheetName() + "!A:" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn());
                }
                dataRangeHeader(includes) {
                    const col_max = this.maxCol(1, includes);
                    return this.sheetName() + "!A1:" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(col_max) + "1";
                }
                dataRangeHeaderFull() {
                    return this.sheetName() + "!A1:" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn()) + "1";
                }
                dataRangeAtRow(r_A1) {
                    return this.sheetName() + "!A" + r_A1 + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.lastKnownColumn()) + r_A1;
                }
                /*private*/ maxCol(columns, includes) {
                    let col_max = Math.max(1, columns);
                    col_max = Math.min(this.lastKnownColumn(), col_max);
                    if (includes != null && includes.length > 0) {
                        for (let i = 0; i < includes.length; i++) {
                            {
                                const m_i = includes[i];
                                col_max = m_i.column_R1C1() > col_max ? m_i.column_R1C1() : col_max;
                            }
                            ;
                        }
                    }
                    return col_max;
                }
                dataRange(boundedRows, columns, includes) {
                    const col_max = this.maxCol(columns, includes);
                    return this.__sheetName + "!A" + (this.__dataRowStart_0 + 1) + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(col_max) + (boundedRows ? (this.__dataRowEnd_0 + 1) : "");
                }
                addMapper(mapper) {
                    if (mapper == null)
                        return;
                    for (let i = 0; i < /* size */ this.mappers.length; i++) {
                        {
                            const m_i = this.mappers[i];
                            if (m_i == null)
                                continue;
                            if (m_i.isSimilar(mapper))
                                return;
                        }
                        ;
                    }
                    /* add */ (this.mappers.push(mapper) > 0);
                }
                string_M(col_0, name, defaultValue) {
                    const ms = new xyz.jphil.spreadsheet_class_mapper.M_String(col_0, name, this, defaultValue);
                    this.addMapper(ms);
                    return ms;
                }
                boolean_M(col_0, name, defaultValue) {
                    const ms = new xyz.jphil.spreadsheet_class_mapper.M_Boolean(col_0, name, this, defaultValue);
                    this.addMapper(ms);
                    return ms;
                }
                long_M(col_0, name, defaultValue) {
                    const ms = new xyz.jphil.spreadsheet_class_mapper.M_Long(col_0, name, this, defaultValue);
                    this.addMapper(ms);
                    return ms;
                }
                integer_M(col_0, name, defaultValue) {
                    const ms = new xyz.jphil.spreadsheet_class_mapper.M_Integer(col_0, name, this, defaultValue);
                    this.addMapper(ms);
                    return ms;
                }
                read(ssdp, forLoop, ...ms) {
                    let max_col = 1;
                    if (ms == null || ms.length === 0) {
                        ms = /* toArray */ this.mappers.slice(0);
                    }
                    for (let i = 0; i < ms.length; i++) {
                        {
                            const m = ms[i];
                            max_col = Math.max(max_col, m.column_R1C1());
                        }
                        ;
                    }
                    let data1 = ([]);
                    const lastCol = xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(max_col);
                    const address = this.__sheetName + "!A" + (this.dataRowStart_0() + 1) + ":" + lastCol;
                    data1 = ssdp.getData(address);
                    for (let i = 0; i < /* size */ data1.length; i++) {
                        {
                            const row = data1[i];
                            forLoop.loop(i + 1 + this.dataRowStart_0(), 0 + 1 + this.dataRowStart_0() + /* size */ data1.length - 1, row);
                        }
                        ;
                    }
                }
                createNewUpdate() {
                    return new xyz.jphil.spreadsheet_class_mapper.UpdateBuilder(this);
                }
            }
            spreadsheet_class_mapper.SheetDefinition = SheetDefinition;
            SheetDefinition["__class"] = "xyz.jphil.spreadsheet_class_mapper.SheetDefinition";
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
            /**
             *
             * @author
             * @param {xyz.jphil.spreadsheet_class_mapper.SheetDefinition} sheetDefinition
             * @class
             */
            class UpdateBuilder {
                constructor(sheetDefinition) {
                    this.rows = ([]);
                    if (this.sheetDefinition === undefined) {
                        this.sheetDefinition = null;
                    }
                    this.col_min_0 = 2147483647;
                    this.col_max_0 = 0;
                    if (this.update_start_row_A1 === undefined) {
                        this.update_start_row_A1 = 0;
                    }
                    this.sheetDefinition = sheetDefinition;
                    this.update_start_row_A1 = sheetDefinition.dataRowStart_0() + 1;
                    this.defineColumnRangeToUpdate.apply(this, /* toArray */ ((a1, a2) => { if (a1.length >= a2.length) {
                        a1.length = 0;
                        a1.push.apply(a1, a2);
                        return a1;
                    }
                    else {
                        return a2.slice(0);
                    } })((s => { let a = []; while (s-- > 0)
                        a.push(null); return a; })(/* size */ sheetDefinition.getMappers().length), sheetDefinition.getMappers()));
                }
                newEntry() {
                    const ue = new xyz.jphil.spreadsheet_class_mapper.UpdateEntry(this);
                    /* add */ (this.rows.push(ue) > 0);
                    return ue;
                }
                getSheetDefinition() {
                    return this.sheetDefinition;
                }
                defineColumnRangeToUpdate(...ms) {
                    /* clear */ (this.rows.length = 0);
                    this.col_min_0 = 2147483647;
                    this.col_max_0 = 0;
                    if (ms == null || ms.length === 0)
                        return;
                    for (let i = 0; i < ms.length; i++) {
                        {
                            const m_i = ms[i];
                            this.col_max_0 = Math.max(this.col_max_0, m_i.column_0());
                            this.col_min_0 = Math.min(this.col_min_0, m_i.column_0());
                        }
                        ;
                    }
                }
                updateRangeExtents() {
                    return this.sheetDefinition.sheetName() + "!" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.col_min_0 + 1) + this.update_start_row_A1 + ":" + xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1(this.col_max_0 + 1) + (this.update_start_row_A1 + /* size */ this.rows.length - 1);
                }
                updateValues() {
                    const u_rows = ([]);
                    for (let i = 0; i < /* size */ this.rows.length; i++) {
                        {
                            const row_i = this.rows[i].getValuesWithinColumns(this.col_min_0, this.col_max_0);
                            if ( /* size */row_i.length !== this.col_max_0 - this.col_min_0 + 1) {
                                throw Object.defineProperty(new Error("Expected from " + this.col_min_0 + " " + this.col_max_0 + " but size = " + /* size */ row_i.length), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.IllegalStateException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                            }
                            /* add */ (u_rows.push(row_i) > 0);
                        }
                        ;
                    }
                    return u_rows;
                }
            }
            spreadsheet_class_mapper.UpdateBuilder = UpdateBuilder;
            UpdateBuilder["__class"] = "xyz.jphil.spreadsheet_class_mapper.UpdateBuilder";
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
            /**
             *
             * @author
             * @param {xyz.jphil.spreadsheet_class_mapper.UpdateBuilder} entries
             * @class
             */
            class UpdateEntry {
                constructor(entries) {
                    if (this.entries === undefined) {
                        this.entries = null;
                    }
                    this.values = ([]);
                    this.min_update = 2147483647;
                    this.max_update = 0;
                    this.entries = entries;
                    let max_col = 0;
                    let min_col = 2147483647;
                    {
                        let array126 = entries.getSheetDefinition().getMappers();
                        for (let index125 = 0; index125 < array126.length; index125++) {
                            let m = array126[index125];
                            {
                                max_col = Math.max(max_col, m.column_0());
                                min_col = Math.min(min_col, m.column_0());
                            }
                        }
                    }
                    for (let i = min_col; i <= max_col; i++) {
                        {
                            /* add */ (this.values.push("") > 0);
                        }
                        ;
                    }
                    {
                        let array128 = entries.getSheetDefinition().getMappers();
                        for (let index127 = 0; index127 < array128.length; index127++) {
                            let m = array128[index127];
                            {
                                /* set */ (this.values[m.column_0()] = m.defaultValue());
                            }
                        }
                    }
                }
                set(m, v) {
                    this.max_update = Math.max(this.max_update, m.column_0());
                    this.min_update = Math.min(this.min_update, m.column_0());
                    /* set */ (this.values[m.column_0()] = v);
                }
                getAllValues() {
                    return this.values;
                }
                getValuesWithinColumns(col_min_0, col_max_0) {
                    const c_min_0 = Math.max(col_min_0, this.min_update);
                    const c_max_0 = Math.min(col_max_0, /* size */ this.values.length - 1);
                    return ( /* subList */this.values.slice(c_min_0, c_max_0 + 1).slice(0));
                }
            }
            spreadsheet_class_mapper.UpdateEntry = UpdateEntry;
            UpdateEntry["__class"] = "xyz.jphil.spreadsheet_class_mapper.UpdateEntry";
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
            /**
             *
             * @author
             * @class
             */
            class Util_A1_R1C1 {
                static getColumnA1(cn) {
                    if (cn === 0)
                        throw Object.defineProperty(new Error("In A1 notation cn starts with 1 not zero"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                    let colStr = "";
                    let num = cn;
                    while ((num > 0)) {
                        {
                            const remainder = ((num - 1) % 26) + 1;
                            num = num - remainder;
                            num = (num / 26 | 0);
                            colStr = Util_A1_R1C1.colToChar(remainder) + colStr;
                        }
                    }
                    ;
                    return colStr;
                }
                static getColumnR1C1(colStr) {
                    let cn = 0;
                    for (let i = 0; i < colStr.length; i++) {
                        {
                            cn = cn * 26 + ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(colStr.charAt(i)) - 64) * 1;
                        }
                        ;
                    }
                    return cn;
                }
                static colToChar(c_a1) {
                    if (c_a1 === 0)
                        return "";
                    switch ((c_a1)) {
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
                            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Error', 'java.lang.Object', 'java.lang.AssertionError'] });
                    }
                }
            }
            spreadsheet_class_mapper.Util_A1_R1C1 = Util_A1_R1C1;
            Util_A1_R1C1["__class"] = "xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1";
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
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
            class M_Boolean extends xyz.jphil.spreadsheet_class_mapper.Mapper_A {
                constructor(col_0, name, sheetDefinition, defaultValue) {
                    super(col_0, name, sheetDefinition);
                    if (this.__defaultValue === undefined) {
                        this.__defaultValue = false;
                    }
                    this.__defaultValue = defaultValue;
                }
                /**
                 *
                 * @return {boolean}
                 */
                defaultValue() {
                    return this.__defaultValue;
                }
                /**
                 *
                 * @param {*[][]} rows
                 * @param {number} at_r
                 * @return {boolean}
                 */
                valueAt(rows, at_r) {
                    if (rows == null)
                        return this.__defaultValue;
                    if ( /* size */rows.length <= at_r)
                        return this.__defaultValue;
                    return this.value(/* get */ rows[at_r]);
                }
                /**
                 *
                 * @param {*[]} row
                 * @return {boolean}
                 */
                value(row) {
                    if (row == null || /* size */ row.length === 0)
                        return this.__defaultValue;
                    if ( /* size */row.length <= this.col_0)
                        return this.__defaultValue;
                    try {
                        const o = row[this.col_0];
                        if (o == null)
                            return this.__defaultValue;
                        if (typeof o === 'boolean') {
                            return o;
                        }
                        const x = o.toString().toLowerCase();
                        if (x === ("true"))
                            return true;
                        if (x === ("false"))
                            return false;
                    }
                    catch (a) {
                    }
                    return this.__defaultValue;
                }
                setValue$java_util_List$java_lang_Boolean(row, value) {
                    /* set */ (row[this.col_0] = value);
                }
                /**
                 *
                 * @param {*[]} row
                 * @param {boolean} value
                 */
                setValue(row, value) {
                    if (((row != null && (row instanceof Array)) || row === null) && ((typeof value === 'boolean') || value === null)) {
                        return this.setValue$java_util_List$java_lang_Boolean(row, value);
                    }
                    else
                        throw new Error('invalid overload');
                }
            }
            spreadsheet_class_mapper.M_Boolean = M_Boolean;
            M_Boolean["__class"] = "xyz.jphil.spreadsheet_class_mapper.M_Boolean";
            M_Boolean["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
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
            class M_Integer extends xyz.jphil.spreadsheet_class_mapper.Mapper_A {
                constructor(col_0, name, sheetDefinition, defaultValue) {
                    super(col_0, name, sheetDefinition);
                    if (this.__defaultValue === undefined) {
                        this.__defaultValue = 0;
                    }
                    this.__defaultValue = defaultValue;
                }
                /**
                 *
                 * @return {number}
                 */
                defaultValue() {
                    return this.__defaultValue;
                }
                /**
                 *
                 * @param {*[][]} rows
                 * @param {number} at_r
                 * @return {number}
                 */
                valueAt(rows, at_r) {
                    if (rows == null)
                        return this.__defaultValue;
                    if ( /* size */rows.length <= at_r)
                        return this.__defaultValue;
                    return this.value(/* get */ rows[at_r]);
                }
                /**
                 *
                 * @param {*[]} row
                 * @return {number}
                 */
                value(row) {
                    if (row == null || /* size */ row.length === 0)
                        return this.__defaultValue;
                    if ( /* size */row.length <= this.col_0)
                        return this.__defaultValue;
                    try {
                        const o = row[this.col_0];
                        if (o == null)
                            return this.__defaultValue;
                        if (typeof o === 'number')
                            return o;
                        return /* parseInt */ parseInt(o.toString());
                    }
                    catch (a) {
                    }
                    return this.__defaultValue;
                }
                setValue$java_util_List$java_lang_Integer(row, value) {
                    /* set */ (row[this.col_0] = value);
                }
                /**
                 *
                 * @param {*[]} row
                 * @param {number} value
                 */
                setValue(row, value) {
                    if (((row != null && (row instanceof Array)) || row === null) && ((typeof value === 'number') || value === null)) {
                        return this.setValue$java_util_List$java_lang_Integer(row, value);
                    }
                    else
                        throw new Error('invalid overload');
                }
            }
            spreadsheet_class_mapper.M_Integer = M_Integer;
            M_Integer["__class"] = "xyz.jphil.spreadsheet_class_mapper.M_Integer";
            M_Integer["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
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
            class M_Long extends xyz.jphil.spreadsheet_class_mapper.Mapper_A {
                constructor(col_0, name, sheetDefinition, defaultValue) {
                    super(col_0, name, sheetDefinition);
                    if (this.__defaultValue === undefined) {
                        this.__defaultValue = 0;
                    }
                    this.__defaultValue = defaultValue;
                }
                /**
                 *
                 * @return {number}
                 */
                defaultValue() {
                    return this.__defaultValue;
                }
                /**
                 *
                 * @param {*[][]} rows
                 * @param {number} at_r
                 * @return {number}
                 */
                valueAt(rows, at_r) {
                    if (rows == null)
                        return this.__defaultValue;
                    if ( /* size */rows.length <= at_r)
                        return this.__defaultValue;
                    return this.value(/* get */ rows[at_r]);
                }
                /**
                 *
                 * @param {*[]} row
                 * @return {number}
                 */
                value(row) {
                    if (row == null || /* size */ row.length === 0)
                        return this.__defaultValue;
                    if ( /* size */row.length <= this.col_0)
                        return this.__defaultValue;
                    try {
                        const o = row[this.col_0];
                        if (o == null)
                            return this.__defaultValue;
                        if (typeof o === 'number')
                            return o;
                        return /* parseLong */ parseInt(o.toString());
                    }
                    catch (a) {
                    }
                    return this.__defaultValue;
                }
                setValue$java_util_List$java_lang_Long(row, value) {
                    /* set */ (row[this.col_0] = value);
                }
                /**
                 *
                 * @param {*[]} row
                 * @param {number} value
                 */
                setValue(row, value) {
                    if (((row != null && (row instanceof Array)) || row === null) && ((typeof value === 'number') || value === null)) {
                        return this.setValue$java_util_List$java_lang_Long(row, value);
                    }
                    else
                        throw new Error('invalid overload');
                }
            }
            spreadsheet_class_mapper.M_Long = M_Long;
            M_Long["__class"] = "xyz.jphil.spreadsheet_class_mapper.M_Long";
            M_Long["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
(function (xyz) {
    var jphil;
    (function (jphil) {
        var spreadsheet_class_mapper;
        (function (spreadsheet_class_mapper) {
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
            class M_String extends xyz.jphil.spreadsheet_class_mapper.Mapper_A {
                constructor(col_0, name, sheetDefinition, defaultValue) {
                    super(col_0, name, sheetDefinition);
                    if (this.__defaultValue === undefined) {
                        this.__defaultValue = null;
                    }
                    this.__defaultValue = defaultValue;
                }
                /**
                 *
                 * @return {string}
                 */
                defaultValue() {
                    return this.__defaultValue;
                }
                safelyCastObj(v) {
                    if (v == null)
                        return null;
                    const s = v.toString();
                    return s == null ? this.__defaultValue : s;
                }
                /*private*/ nullChecks(rows, at_r) {
                    if (rows == null || /* size */ rows.length === 0)
                        return null;
                    if ( /* size */rows.length < at_r)
                        return null;
                    return this.nullCheck(/* get */ rows[at_r]);
                }
                /*private*/ nullCheck(row) {
                    if (row == null || /* size */ row.length === 0)
                        return null;
                    if ( /* size */row.length <= this.col_0)
                        return null;
                    return /* get */ row[this.col_0];
                }
                /**
                 *
                 * @param {*[][]} rows
                 * @param {number} at_r
                 * @return {string}
                 */
                valueAt(rows, at_r) {
                    const v = this.nullChecks(rows, at_r);
                    if (v == null)
                        return this.defaultValue();
                    return this.safelyCastObj(v);
                }
                /**
                 *
                 * @param {*[]} row
                 * @return {string}
                 */
                value(row) {
                    const v = this.nullCheck(row);
                    if (v == null)
                        return this.defaultValue();
                    return this.safelyCastObj(v);
                }
                setValue$java_util_List$java_lang_String(row, value) {
                    /* set */ (row[this.col_0] = value);
                }
                /**
                 *
                 * @param {*[]} row
                 * @param {string} value
                 */
                setValue(row, value) {
                    if (((row != null && (row instanceof Array)) || row === null) && ((typeof value === 'string') || value === null)) {
                        return this.setValue$java_util_List$java_lang_String(row, value);
                    }
                    else
                        throw new Error('invalid overload');
                }
            }
            spreadsheet_class_mapper.M_String = M_String;
            M_String["__class"] = "xyz.jphil.spreadsheet_class_mapper.M_String";
            M_String["__interfaces"] = ["xyz.jphil.spreadsheet_class_mapper.Mapper"];
        })(spreadsheet_class_mapper = jphil.spreadsheet_class_mapper || (jphil.spreadsheet_class_mapper = {}));
    })(jphil = xyz.jphil || (xyz.jphil = {}));
})(xyz || (xyz = {}));
