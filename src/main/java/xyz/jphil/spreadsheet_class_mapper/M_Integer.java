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
public class M_Integer extends Mapper_A<Integer>{
    private final int defaultValue;
    public M_Integer(
            int col_0,
            String name,
            SheetDefinition sheetDefinition,
            int defaultValue
    ) {
        super(col_0, name, sheetDefinition);
        this.defaultValue = defaultValue;
    }

    @Override
    public Integer defaultValue() {
        return defaultValue;
    }

    @Override
    public Integer valueAt(List<List<Object>> rows, int at_r) {
        if(rows==null)return defaultValue;
        if(rows.size() <= at_r)return defaultValue;
        return value(rows.get(at_r));
    }
    
    @Override
    public Integer value(List<Object> row) {
        if(row==null || row.size()==0)return defaultValue;
        if(row.size() <= col_0)return defaultValue;
        try{
            Object o = row.get(col_0);
            if(o==null)return defaultValue;
            if(o instanceof Integer)return (Integer)o;
            return Integer.parseInt(o.toString());
        }catch(Exception a){}
        return defaultValue;
    }

    @Override
    public void setValue(List<Object> row, Integer value) {
        row.set(col_0, value);
    }
}
