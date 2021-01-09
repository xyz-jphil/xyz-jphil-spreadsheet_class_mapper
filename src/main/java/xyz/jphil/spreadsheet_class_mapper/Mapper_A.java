/*
 * Copyright 2020 Ivan Velikanova ivan.velikanova@gmail.com .
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package xyz.jphil.spreadsheet_class_mapper;

import java.util.List;

/**
 *
 * @author
 */
public abstract class Mapper_A<T> implements Mapper<T>{
    protected final int col_0;
    private final String name;
    private final SheetDefinition sheetDefinition;

    public Mapper_A(int col_0, String name, SheetDefinition sheetDefinition) {
        this.col_0 = col_0;
        this.name = name==null?"":name;
        this.sheetDefinition = sheetDefinition;
    }

    @Override
    public boolean isSimilar(Mapper m) {
        if(m==null)return false;
        return m.column_0() == col_0
                && name.equals(m.name());
        // no type checking
    }

    @Override
    public SheetDefinition sheet() {
        return sheetDefinition;
    }

    @Override
    public String name() {
        return name;
    }

    @Override
    public int column_0() {
        return col_0;
    }

    @Override
    public int column_R1C1() {
        return col_0+1;
    }

    @Override
    public String column_A1() {
        return Util_A1_R1C1.colToChar(column_R1C1());
    }

    
    
}
