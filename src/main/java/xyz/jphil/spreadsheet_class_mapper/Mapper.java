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
 * @param <T> The type of this mapping - a primitive java/javascript type
 */
public interface Mapper<T> {
    SheetDefinition sheet();
    String name();
    int column_0();
    int column_R1C1();
    String column_A1();
    T defaultValue();
    T valueAt(List<List<Object>> rows, int at_r);
    T value(List<Object> row);
    
    boolean isSimilar(Mapper m);
    
    void setValue(List<Object> row, T value);
}
