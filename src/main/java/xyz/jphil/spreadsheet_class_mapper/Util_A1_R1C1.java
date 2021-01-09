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

/**
 *
 * @author
 */
public class Util_A1_R1C1 {
    public static String getColumnA1(int cn){
        if(cn==0)throw new IllegalArgumentException("In A1 notation cn starts with 1 not zero");
        String colStr = "";
        int num = cn;
        while(num>0){
            int remainder = ((num-1)%26)+1;
            num = num - remainder;
            num = num/26;
            colStr = colToChar(remainder)+colStr;
        }
        return colStr;
    }
    
    public static int getColumnR1C1(String colStr){
        int cn = 0;
        for (int i = 0; i < colStr.length() ; i++) {
            cn = cn*26 + (colStr.charAt(i) - 64)*1;
        }
        return cn;
    }
    
    public static String colToChar(int c_a1){
        if(c_a1==0)return "";
        switch (c_a1) {
            case  1: return "A";
            case  2: return "B";
            case  3: return "C";
            case  4: return "D";
            case  5: return "E";
            case  6: return "F";
            case  7: return "G";
            case  8: return "H";
            case  9: return "I";
            case 10: return "J";
            
            case 11: return "K";
            case 12: return "L";
            case 13: return "M";
            case 14: return "N";
            case 15: return "O";
            case 16: return "P";
            case 17: return "Q";
            case 18: return "R";
            case 19: return "S";
            case 20: return "T";
            
            case 21: return "U";
            case 22: return "V";
            case 23: return "W";
            case 24: return "X";
            case 25: return "Y";
            case 26: return "Z";

            default:
                throw new AssertionError();
        }
    }
}
