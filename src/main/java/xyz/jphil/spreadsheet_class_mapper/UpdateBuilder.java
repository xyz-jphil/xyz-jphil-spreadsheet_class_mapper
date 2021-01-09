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
import static xyz.jphil.spreadsheet_class_mapper.Util_A1_R1C1.getColumnA1;

/**
 *
 * @author
 */
public class UpdateBuilder {
    private final ArrayList<UpdateEntry> rows = new ArrayList<>();
    final SheetDefinition sheetDefinition;
    private int col_min_0 = Integer.MAX_VALUE;
    private int col_max_0 = 0;
    
    private int update_start_row_A1;
    
    public UpdateBuilder(SheetDefinition sheetDefinition) {
        this.sheetDefinition = sheetDefinition;
        update_start_row_A1 = sheetDefinition.dataRowStart_0()+1;
        defineColumnRangeToUpdate(sheetDefinition.getMappers().toArray(new Mapper[sheetDefinition.getMappers().size()]));
    }
    
    public UpdateEntry newEntry(){
        UpdateEntry ue = new UpdateEntry(this);
        rows.add(ue);
        return ue;
    }

    public SheetDefinition getSheetDefinition() {
        return sheetDefinition;
    }
    
    public void defineColumnRangeToUpdate(Mapper ... ms){
        rows.clear();
        col_min_0 = Integer.MAX_VALUE;
        col_max_0 = 0;
        if(ms==null || ms.length==0)return;
        for (int i = 0; i < ms.length; i++) {
            Mapper m_i = ms[i];
            col_max_0 = Math.max(col_max_0, m_i.column_0());
            col_min_0 = Math.min(col_min_0, m_i.column_0());
        }
    }
    
    public String updateRangeExtents(){
        return sheetDefinition.sheetName()+"!"+
               getColumnA1(col_min_0+1)+update_start_row_A1
                +":"+
               getColumnA1(col_max_0+1)+(update_start_row_A1+rows.size()-1);
    }
    
    public ArrayList<ArrayList<Object>> updateValues(){
        ArrayList<ArrayList<Object>> u_rows = new ArrayList(rows.size());
        for (int i = 0; i < rows.size(); i++) {
            ArrayList<Object> row_i = rows.get(i).getValuesWithinColumns(col_min_0, col_max_0);
            if(row_i.size() != col_max_0 - col_min_0 + 1){
                throw new IllegalStateException("Expected from "+col_min_0+" "+col_max_0+" but size = "+row_i.size());
            }
            u_rows.add(row_i);
        }
        return u_rows;
    }
    
}
