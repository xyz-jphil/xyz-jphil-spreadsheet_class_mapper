/*
 * Copyright 2021 Ivan Velikanova ivan.velikanova@gmail.com .
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

import java.util.ArrayList;

/**
 *
 * @author
 */
public class UpdateEntry {
    private final UpdateBuilder entries;
    private final ArrayList<Object> values = new ArrayList<>();
    private int min_update = Integer.MAX_VALUE;
    private int max_update = 0;
    public UpdateEntry(UpdateBuilder entries) {
        this.entries = entries;
        int max_col = 0;
        int min_col = Integer.MAX_VALUE;
        for (Mapper m : entries.getSheetDefinition().getMappers()) {
            max_col = Math.max(max_col, m.column_0());
            min_col = Math.min(min_col, m.column_0());
        }
        for (int i = min_col; i <= max_col; i++) {
            values.add("");//empty string - baseline defaults
        }
        for (Mapper m : entries.getSheetDefinition().getMappers()) {
            //set explicit default values
            values.set(m.column_0(), m.defaultValue());
        }
    }
    
    public <T> void set(Mapper<T> m,T v){
        //set actual values
        max_update = Math.max(max_update, m.column_0());
        min_update = Math.min(min_update, m.column_0());
        values.set(m.column_0(), v);
    }

    public final ArrayList<Object> getAllValues() {
        return values;
    }
    
    public final ArrayList<Object> getValuesWithinColumns(int col_min_0,int col_max_0) {
        int c_min_0 = Math.max(col_min_0, min_update);
        int c_max_0 = Math.min(col_max_0,values.size()-1);
        return new ArrayList<>(values.subList(c_min_0, c_max_0+1));
    }
}
