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
public class M_String extends Mapper_A<String>{
    private final String defaultValue;
    public M_String(
            int col_0,
            String name,
            SheetDefinition sheetDefinition,
            String defaultValue
    ) {
        super(col_0, name, sheetDefinition);
        this.defaultValue = defaultValue;
    }

    @Override
    public String defaultValue() {
        return defaultValue;
    }

    //@Override
    protected String safelyCastObj(Object v){
        if(v==null)return null;
        String s = v.toString();
        return s==null?defaultValue:s;
    }
    
    private Object nullChecks(List<List<Object>> rows, int at_r){
        if(rows==null || rows.size()==0)return null;
        if(rows.size() < at_r)return null;
        return nullCheck(rows.get(at_r));
    }
    
    private Object nullCheck(List<Object> row){
        if(row==null || row.size()==0)return null;
        if(row.size() <= col_0)return null;
        return row.get(col_0);
    }
    
    @Override
    public String valueAt(List<List<Object>> rows, int at_r) {
        Object v = nullChecks(rows, at_r);
        if(v==null)return defaultValue();
        return safelyCastObj(v); // a cast happens even to call this
    }
    
    @Override
    public String value(List<Object> row) {
        Object v = nullCheck(row);
        if(v==null)return defaultValue();
        return safelyCastObj(v); // a cast happens even to call this
    }
    
    @Override
    public void setValue(List<Object> row, String value) {
        row.set(col_0, value);
    }

}
