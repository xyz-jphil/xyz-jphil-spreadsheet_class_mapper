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
public class M_Boolean extends Mapper_A<Boolean>{
    private final boolean defaultValue;
    public M_Boolean(
            int col_0,
            String name,
            SheetDefinition sheetDefinition,
            boolean defaultValue
    ) {
        super(col_0, name, sheetDefinition);
        this.defaultValue = defaultValue;
    }

    @Override
    public Boolean defaultValue() {
        return defaultValue;
    }

    @Override
    public Boolean valueAt(List<List<Object>> rows, int at_r) {
        if(rows==null)return defaultValue;
        if(rows.size() <= at_r)return defaultValue;
        return value(rows.get(at_r));
    }
    
    @Override
    public Boolean value(List<Object> row) {
        if(row==null || row.size()==0)return defaultValue;
        if(row.size() <= col_0)return defaultValue;
        try{
            Object o = row.get(col_0);
            if(o == null) return defaultValue;
            if(o instanceof Boolean){
                return (Boolean)o;
            }
            String x = o.toString().toLowerCase();
            if(x.equals("true"))return true;
            if(x.equals("false"))return false;
        }catch(Exception a){}
        return defaultValue;
    }

    @Override
    public void setValue(List<Object> row, Boolean value) {
        row.set(col_0, value);
    }
    
    

}
