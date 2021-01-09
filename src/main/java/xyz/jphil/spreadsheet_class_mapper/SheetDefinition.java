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

import java.util.ArrayList;
import java.util.List;

/**
 * 
 * @author
 */
public class SheetDefinition {
    private final String sheetName;
    private final String spreadSheetId;
    private final int headerRows_Count;
    private final int dataRowStart_0;
    private final int dataRowEnd_0;
    private final ArrayList<Mapper> mappers
            = new ArrayList<>();

    public SheetDefinition(String sheetName, 
            String spreadSheetId, 
            int headerRows_Count, 
            int dataRowStart_0, 
            int dataRowEnd_0) {
        this.sheetName = sheetName;
        this.spreadSheetId = spreadSheetId;
        this.headerRows_Count = headerRows_Count;
        this.dataRowStart_0 = dataRowStart_0;
        this.dataRowEnd_0 = dataRowEnd_0;
    }

    public int dataRowEnd_0() {
        return dataRowEnd_0;
    }

    public int dataRowStart_0() {
        return dataRowStart_0;
    }

    public int headerRows_Count() {
        return headerRows_Count;
    }
    
    public String sheetName() {
        return sheetName;
    }

    public String spreadSheetId() {
        return spreadSheetId;
    }

    public ArrayList<Mapper> getMappers() {
        ArrayList<Mapper> c = new ArrayList<>();
        for (int i = 0; i < mappers.size(); i++) {
            Mapper m_i = mappers.get(i);
            c.add(m_i);
        }
        return c;
    }
    
    public Mapper getMapperByName(String s){
        int col_max = 1;
        Mapper m_i_b = mappers.size()>0?mappers.get(0):null;
        for (int i = 0; i < mappers.size(); i++) {
            Mapper m_i = mappers.get(i);
            if(m_i.column_R1C1() > col_max){
                m_i_b = m_i; col_max = m_i.column_R1C1();
            }
            if(m_i.name().equals(s)) return m_i;
        }
        return m_i_b;
    }
    
    public int lastKnownColumn(){
        int col_max = 1;
        for (int i = 0; i < mappers.size(); i++) {
            Mapper m_i = mappers.get(i);
            col_max = m_i.column_R1C1()>col_max?m_i.column_R1C1():col_max;
        }
        return col_max;
    }
    
    public String dataRangeMaxCols(int startRow){
        return sheetName()+"!A"+startRow+ ":"+Util_A1_R1C1.getColumnA1(lastKnownColumn())+
                (dataRowEnd_0+1);
    }
    
    public String dataRangeMaxColsAllRowsNoHeader(){
        return sheetName()+"!A"+(dataRowStart_0+1)
                + ":"+Util_A1_R1C1.getColumnA1(lastKnownColumn());
    }
    
    public String dataRangeMaxColsAllRowsAndHeader(){
        return sheetName()+"!A:"+Util_A1_R1C1.getColumnA1(lastKnownColumn());
    }
    
    public String dataRangeHeader(Mapper [] includes){
        int col_max = maxCol(1, includes);
        return sheetName()+"!A1:"+Util_A1_R1C1.getColumnA1(col_max)+"1";
    }
    
    public String dataRangeHeaderFull(){
        return sheetName()+"!A1:"+Util_A1_R1C1.getColumnA1(lastKnownColumn())+"1";
    }
    
    public String dataRangeAtRow(int r_A1){
        return sheetName()+"!A"+r_A1+":"+Util_A1_R1C1.getColumnA1(lastKnownColumn())+r_A1;
    }
    
    private int maxCol(int columns, Mapper [] includes){
        int col_max = Math.max(1,columns) ;
        col_max = Math.min(lastKnownColumn(), col_max);
        //col_max = maxCol(col_max, includes);
        if( includes!=null && includes.length>0 ){
            for (int i = 0; i < includes.length; i++) {
                Mapper m_i = includes[i];
                col_max = m_i.column_R1C1()>col_max?m_i.column_R1C1():col_max;
            }
        }
        return col_max;
    }
    
    public String dataRange(boolean boundedRows,int columns,Mapper [] includes){
        int col_max = maxCol(columns, includes);
        return
            sheetName+"!A"+(dataRowStart_0+1)+":"+
                Util_A1_R1C1.getColumnA1(col_max)+(boundedRows?(dataRowEnd_0+1):"");
    }
    
    public void addMapper(Mapper mapper){
        if(mapper==null)return;
        for (int i = 0; i < mappers.size(); i++) {
            Mapper m_i = mappers.get(i);
            if(m_i==null)continue;
            if(m_i.isSimilar(mapper))return; // already there
        }
        mappers.add(mapper);
    }
    
    public M_String string_M(int col_0,
            String name,String defaultValue){
        M_String ms = new M_String(col_0, name, this, defaultValue);
        addMapper(ms);
        return ms;
    }
    
    public M_Boolean boolean_M(int col_0,
            String name,boolean defaultValue){
        M_Boolean ms = new M_Boolean(col_0, name, this, defaultValue);
        addMapper(ms);
        return ms;
    }
    
    public M_Long long_M(int col_0,
            String name,long defaultValue){
        M_Long ms = new M_Long(col_0, name, this, defaultValue);
        addMapper(ms);
        return ms;
    }
    
    public M_Integer integer_M(int col_0,
            String name,int defaultValue){
        M_Integer ms = new M_Integer(col_0, name, this, defaultValue);
        addMapper(ms);
        return ms;
    }
    
    public void read(SpreadSheetDataProvider ssdp, ForLoop forLoop, Mapper ... ms){
        int max_col = 1;
        if(ms==null || ms.length==0) { ms = mappers.toArray(new Mapper[mappers.size()]); }
        for (int i = 0; i < ms.length; i++) {
            Mapper m = ms[i];
            max_col = Math.max(max_col,m.column_R1C1());
        }
        List<List<Object>> data1 = new ArrayList();
        String lastCol = Util_A1_R1C1.getColumnA1(max_col);
        String address = sheetName+"!A"+(dataRowStart_0()+1)+":"+lastCol;
        data1 = ssdp.getData(address);
        //data1 = Sheet_Modify.getData(HSCATALOG.id(), "A"+"");
        for (int i = 0; i < data1.size(); i++) {
            List<Object> row = data1.get(i);
            forLoop.loop(
                i+1+dataRowStart_0(), 
                0+1+dataRowStart_0()+data1.size()-1, 
                row
            );
        }
    }
    
    public UpdateBuilder createNewUpdate(){
        return new UpdateBuilder(this);
    }
}
