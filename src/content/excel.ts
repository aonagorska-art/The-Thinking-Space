import {practicalPuzzles} from './excel-practical';
import type {Puzzle} from '../types';
const foundations = [
  {
    "id": "excel-sum",
    "category": "constraints",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "The weekly total",
        "question": "B2:B6 contains 10, 20, 30, 40, 50. Write a formula in B7 that totals the range.",
        "hints": [
          "Use a function that adds numbers.",
          "A colon describes a continuous range."
        ],
        "answer": "=SUM(B2:B6) → 150\nTotal: 150.",
        "explanation": [
          "B2:B6 includes all five cells.",
          "SUM adds their values: 10+20+30+40+50."
        ]
      },
      "pl": {
        "title": "Suma tygodnia",
        "question": "B2:B6 zawiera 10, 20, 30, 40, 50. W B7 wpisz formułę sumującą ten zakres.",
        "hints": [
          "Użyj funkcji dodającej liczby.",
          "Dwukropek oznacza ciągły zakres."
        ],
        "answer": "=SUM(B2:B6) → 150\nWynik: 150. W polskim Excelu: =SUMA(B2:B6).",
        "explanation": [
          "B2:B6 obejmuje wszystkie pięć komórek.",
          "SUMA dodaje wartości: 10+20+30+40+50."
        ]
      },
      "ru": {
        "title": "Итог недели",
        "question": "B2:B6 содержит 10, 20, 30, 40, 50. Напиши в B7 формулу суммы этого диапазона.",
        "hints": [
          "Нужна функция сложения.",
          "Двоеточие задаёт непрерывный диапазон."
        ],
        "answer": "=SUM(B2:B6) → 150\nСумма: 150.",
        "explanation": [
          "B2:B6 включает все пять ячеек.",
          "SUM складывает их значения: 10+20+30+40+50."
        ]
      },
      "zh": {
        "title": "一周合计",
        "question": "B2:B6 中是10、20、30、40、50。在 B7 写出求和公式。",
        "hints": [
          "使用求和函数。",
          "冒号表示连续区域。"
        ],
        "answer": "=SUM(B2:B6) → 150\n结果：150。",
        "explanation": [
          "B2:B6 包含这五个单元格。",
          "SUM 将它们相加：10+20+30+40+50。"
        ]
      }
    }
  },
  {
    "id": "excel-absolute",
    "category": "constraints",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "A rate that stays put",
        "question": "B2 contains 80 and E1 contains 10%. C2 should calculate 10% of B2. Write a formula you can copy down while always using E1.",
        "hints": [
          "One reference should move; the other should stay fixed.",
          "Dollar signs lock the row and column."
        ],
        "answer": "=B2*$E$1\nC2 returns 8.",
        "explanation": [
          "B2 changes to B3 when copied down.",
          "$E$1 stays fixed, so every row uses the same rate."
        ]
      },
      "pl": {
        "title": "Stawka bez zmian",
        "question": "B2 zawiera 80, a E1 zawiera 10%. C2 ma obliczać 10% wartości B2. Napisz formułę do kopiowania w dół, która zawsze korzysta z E1.",
        "hints": [
          "Jeden adres powinien się zmieniać, drugi pozostać stały.",
          "Znaki dolara blokują wiersz i kolumnę."
        ],
        "answer": "=B2*$E$1\nC2 zwróci 8.",
        "explanation": [
          "Przy kopiowaniu w dół B2 zmieni się na B3.",
          "$E$1 pozostanie stałe, więc każdy wiersz użyje tej samej stawki."
        ]
      },
      "ru": {
        "title": "Постоянная ставка",
        "question": "B2 содержит 80, E1 — 10%. В C2 нужно вычислить 10% от B2. Напиши формулу для копирования вниз с неизменной ссылкой на E1.",
        "hints": [
          "Одна ссылка меняется, другая фиксирована.",
          "Знаки доллара закрепляют столбец и строку."
        ],
        "answer": "=B2*$E$1\nC2 вернёт 8.",
        "explanation": [
          "При копировании вниз B2 станет B3.",
          "$E$1 не изменится: ставка будет общей для всех строк."
        ]
      },
      "zh": {
        "title": "固定的比率",
        "question": "B2 为80，E1 为10%。C2 要计算 B2 的10%。写出向下复制后仍引用 E1 的公式。",
        "hints": [
          "一个引用要变化，另一个要固定。",
          "美元符号可锁定列和行。"
        ],
        "answer": "=B2*$E$1\nC2 返回8。",
        "explanation": [
          "向下复制时，B2 变成 B3。",
          "$E$1 保持不变，每行使用同一比率。"
        ]
      }
    }
  },
  {
    "id": "excel-average",
    "category": "constraints",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Blank or zero?",
        "question": "A2:A5 contains 10, a genuinely empty cell, 20 and 30. What does AVERAGE(A2:A5) return? What if the empty cell becomes 0?",
        "hints": [
          "An empty cell and a numeric zero are different.",
          "Count the numeric values in each case."
        ],
        "answer": "=AVERAGE(A2:A5) → 20\n20 with the blank; 15 with zero.",
        "explanation": [
          "The blank is ignored: 60/3=20.",
          "Zero is a number and counts in the denominator: 60/4=15."
        ]
      },
      "pl": {
        "title": "Pusto czy zero?",
        "question": "A2:A5 zawiera 10, naprawdę pustą komórkę, 20 i 30. Co zwróci ŚREDNIA(A2:A5)? A co, jeśli wpiszesz 0 w pustą komórkę?",
        "hints": [
          "Pusta komórka i liczba zero to nie to samo.",
          "Policz wartości liczbowe w obu sytuacjach."
        ],
        "answer": "=AVERAGE(A2:A5) → 20\n20 przy pustej komórce; 15 przy zerze. Polska formuła: =ŚREDNIA(A2:A5).",
        "explanation": [
          "Pusta komórka jest pomijana: 60/3=20.",
          "Zero liczy się jako wartość liczbowa: 60/4=15."
        ]
      },
      "ru": {
        "title": "Пусто или ноль?",
        "question": "A2:A5 содержит 10, действительно пустую ячейку, 20 и 30. Что вернёт AVERAGE(A2:A5)? А если вписать 0 вместо пустоты?",
        "hints": [
          "Пустая ячейка отличается от числового нуля.",
          "Посчитай числа в каждом случае."
        ],
        "answer": "=AVERAGE(A2:A5) → 20\n20 с пустотой; 15 с нулём.",
        "explanation": [
          "Пустота пропускается: 60/3=20.",
          "Ноль учитывается как число: 60/4=15."
        ]
      },
      "zh": {
        "title": "空白还是零？",
        "question": "A2:A5 中是10、真正的空白单元格、20和30。AVERAGE(A2:A5) 返回什么？空白改成0后呢？",
        "hints": [
          "空白与数值零不同。",
          "分别数一数数值的个数。"
        ],
        "answer": "=AVERAGE(A2:A5) → 20\n有空白时为20；改成零后为15。",
        "explanation": [
          "空白被忽略：60/3=20。",
          "零也计入个数：60/4=15。"
        ]
      }
    }
  },
  {
    "id": "excel-conditional",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Two conditions",
        "question": "Rows 2–5 contain region, status, amount in A:C: East/Paid/100; West/Paid/80; East/Open/50; East/Paid/20. Sum only paid East orders.",
        "hints": [
          "You need both conditions to hold on the same row.",
          "SUMIFS starts with the range to sum."
        ],
        "answer": "=SUMIFS(C2:C5,A2:A5,\"East\",B2:B5,\"Paid\") → 120\nResult: 120.",
        "explanation": [
          "Only rows 2 and 5 match both conditions.",
          "Their amounts are 100+20; the open East order is excluded."
        ]
      },
      "pl": {
        "title": "Dwa warunki",
        "question": "Wiersze 2–5 w A:C to region, status, kwota: East/Paid/100; West/Paid/80; East/Open/50; East/Paid/20. Zsumuj tylko opłacone zamówienia z East.",
        "hints": [
          "Oba warunki muszą pasować w tym samym wierszu.",
          "SUMIFS zaczyna się od zakresu sumowania."
        ],
        "answer": "=SUMIFS(C2:C5,A2:A5,\"East\",B2:B5,\"Paid\") → 120\nWynik: 120. Polska funkcja: SUMA.WARUNKÓW; kryteria East i Paid pozostają jak w danych.",
        "explanation": [
          "Oba warunki spełniają tylko wiersze 2 i 5.",
          "Ich kwoty to 100+20; zamówienie East ze statusem Open pomijamy."
        ]
      },
      "ru": {
        "title": "Два условия",
        "question": "Строки 2–5 в A:C: регион, статус, сумма — East/Paid/100; West/Paid/80; East/Open/50; East/Paid/20. Сложи только оплаченные заказы East.",
        "hints": [
          "Оба условия должны совпасть в одной строке.",
          "SUMIFS начинается с диапазона суммирования."
        ],
        "answer": "=SUMIFS(C2:C5,A2:A5,\"East\",B2:B5,\"Paid\") → 120\nРезультат: 120.",
        "explanation": [
          "Оба условия выполняются лишь в строках 2 и 5.",
          "Сумма 100+20; заказ East со статусом Open исключён."
        ]
      },
      "zh": {
        "title": "两个条件",
        "question": "A:C 的第2到5行为地区、状态、金额：East/Paid/100；West/Paid/80；East/Open/50；East/Paid/20。只汇总 East 中已付款的订单。",
        "hints": [
          "同一行必须满足两个条件。",
          "SUMIFS 的第一个参数是求和区域。"
        ],
        "answer": "=SUMIFS(C2:C5,A2:A5,\"East\",B2:B5,\"Paid\") → 120\n结果：120。",
        "explanation": [
          "只有第2和5行同时满足条件。",
          "金额为100+20，East 中状态为 Open 的订单被排除。"
        ]
      }
    }
  },
  {
    "id": "excel-lookup",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Find the price",
        "question": "In Excel Microsoft 365, A2:A4 holds P10, P20, P30 and B2:B4 holds 12, 18, 25. E2 holds P20. Return its price, or the text Missing if the code is absent.",
        "hints": [
          "Match the product code, not the row number.",
          "XLOOKUP accepts a fallback for no match."
        ],
        "answer": "=XLOOKUP(E2,A2:A4,B2:B4,\"Missing\")\nResult: 18.",
        "explanation": [
          "P20 is the second item in the lookup range.",
          "XLOOKUP returns the second price; its fourth argument handles an absent code."
        ]
      },
      "pl": {
        "title": "Znajdź cenę",
        "question": "W Excelu Microsoft 365 A2:A4 zawiera P10, P20, P30, a B2:B4: 12, 18, 25. E2 zawiera P20. Zwróć cenę albo tekst Missing, gdy kodu nie ma.",
        "hints": [
          "Dopasuj kod produktu, nie numer wiersza.",
          "XLOOKUP pozwala podać wynik dla braku dopasowania."
        ],
        "answer": "=XLOOKUP(E2,A2:A4,B2:B4,\"Missing\")\nWynik: 18. Polska funkcja: X.WYSZUKAJ.",
        "explanation": [
          "P20 jest drugim elementem zakresu wyszukiwania.",
          "Funkcja zwraca drugą cenę, a czwarty argument obsługuje brak kodu."
        ]
      },
      "ru": {
        "title": "Найди цену",
        "question": "В Excel Microsoft 365 A2:A4 содержит P10, P20, P30, B2:B4 — 12, 18, 25. В E2 стоит P20. Верни цену или текст Missing, если кода нет.",
        "hints": [
          "Ищи код товара, а не номер строки.",
          "XLOOKUP позволяет задать результат при отсутствии совпадения."
        ],
        "answer": "=XLOOKUP(E2,A2:A4,B2:B4,\"Missing\")\nРезультат: 18.",
        "explanation": [
          "P20 — второй элемент диапазона поиска.",
          "Функция возвращает вторую цену; четвёртый аргумент обрабатывает отсутствие кода."
        ]
      },
      "zh": {
        "title": "查找价格",
        "question": "在 Excel Microsoft 365 中，A2:A4 为 P10、P20、P30，B2:B4 为12、18、25。E2 为 P20。返回价格，找不到代码则返回文本 Missing。",
        "hints": [
          "匹配商品代码，而不是行号。",
          "XLOOKUP 可指定未找到时的返回值。"
        ],
        "answer": "=XLOOKUP(E2,A2:A4,B2:B4,\"Missing\")\n结果：18。",
        "explanation": [
          "P20 是查找区域中的第二项。",
          "函数返回第二个价格，第四个参数处理找不到代码的情况。"
        ]
      }
    }
  },
  {
    "id": "excel-duplicates",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Only the repeats",
        "question": "A2:A6 contains Ada, Ben, Ada, Ada, Ben. Write a formula in B2 to copy down that returns TRUE only for the second and subsequent appearances of a name.",
        "hints": [
          "Count only from the first data row to the current row.",
          "Fix the start of the range and let its end move."
        ],
        "answer": "=COUNTIF($A$2:A2,A2)>1\nResults: FALSE, FALSE, TRUE, TRUE, TRUE.",
        "explanation": [
          "The expanding range counts occurrences seen so far.",
          "A count above one flags a repeat while leaving the first occurrence unflagged."
        ]
      },
      "pl": {
        "title": "Tylko powtórzenia",
        "question": "A2:A6 zawiera Ada, Ben, Ada, Ada, Ben. W B2 wpisz formułę do skopiowania w dół, która zwraca PRAWDA tylko od drugiego wystąpienia danego imienia.",
        "hints": [
          "Licz od pierwszego wiersza danych do bieżącego.",
          "Zablokuj początek zakresu i pozwól zmieniać się końcowi."
        ],
        "answer": "=COUNTIF($A$2:A2,A2)>1\nWyniki: FAŁSZ, FAŁSZ, PRAWDA, PRAWDA, PRAWDA. Polska funkcja: LICZ.JEŻELI.",
        "explanation": [
          "Rozszerzający się zakres liczy dotychczasowe wystąpienia.",
          "Liczba większa od jednego oznacza powtórzenie; pierwsze wystąpienie nie jest oznaczane."
        ]
      },
      "ru": {
        "title": "Только повторы",
        "question": "A2:A6 содержит Ada, Ben, Ada, Ada, Ben. Напиши в B2 формулу для копирования вниз, возвращающую TRUE начиная со второго появления имени.",
        "hints": [
          "Считай от первой строки данных до текущей.",
          "Закрепи начало диапазона, но не конец."
        ],
        "answer": "=COUNTIF($A$2:A2,A2)>1\nРезультаты: FALSE, FALSE, TRUE, TRUE, TRUE.",
        "explanation": [
          "Растущий диапазон считает уже встреченные имена.",
          "Число больше единицы отмечает повтор, но не первое появление."
        ]
      },
      "zh": {
        "title": "仅标记重复项",
        "question": "A2:A6 为 Ada、Ben、Ada、Ada、Ben。在 B2 写一个向下复制的公式，仅从某个名字的第二次出现起返回 TRUE。",
        "hints": [
          "只统计首行数据到当前行。",
          "固定区域起点，让终点移动。"
        ],
        "answer": "=COUNTIF($A$2:A2,A2)>1\n结果：FALSE、FALSE、TRUE、TRUE、TRUE。",
        "explanation": [
          "扩展区域统计到目前为止的出现次数。",
          "次数大于1则为重复，首次出现不会被标记。"
        ]
      }
    }
  },
  {
    "id": "excel-filter",
    "category": "constraints",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "A clean live list",
        "question": "Excel Microsoft 365: A2:A7 contains Ben, Ada, Ben, Cara, Ada, Dan; B2:B7 contains Paid, Open, Paid, Paid, Paid, Open. Return a spilling, alphabetically sorted list of unique paid customers. Exclude blank names.",
        "hints": [
          "Filter before removing duplicates.",
          "Multiply Boolean arrays to require both conditions."
        ],
        "answer": "=SORT(UNIQUE(FILTER(A2:A7,(B2:B7=\"Paid\")*(A2:A7<>\"\"))))\nThe result spills as Ada, Ben, Cara.",
        "explanation": [
          "FILTER keeps paid rows with nonblank names; UNIQUE removes repeats.",
          "SORT orders the resulting list alphabetically. The destination needs empty cells below it."
        ]
      },
      "pl": {
        "title": "Żywa lista bez duplikatów",
        "question": "Excel Microsoft 365: A2:A7 to Ben, Ada, Ben, Cara, Ada, Dan; B2:B7 to Paid, Open, Paid, Paid, Paid, Open. Zwróć rozlaną, alfabetyczną listę unikalnych opłaconych klientów. Pomiń puste imiona.",
        "hints": [
          "Najpierw filtruj, potem usuwaj duplikaty.",
          "Pomnóż tablice warunków, aby wymagać obu naraz."
        ],
        "answer": "=SORT(UNIQUE(FILTER(A2:A7,(B2:B7=\"Paid\")*(A2:A7<>\"\"))))\nWynik rozleje się jako Ada, Ben, Cara. Polskie funkcje: SORTUJ, UNIKATOWE, FILTRUJ.",
        "explanation": [
          "FILTER zostawia opłacone wiersze z niepustym imieniem; UNIQUE usuwa powtórzenia.",
          "SORT porządkuje listę alfabetycznie. Pod komórką wyniku musi być wolne miejsce."
        ]
      },
      "ru": {
        "title": "Динамический список",
        "question": "Excel Microsoft 365: A2:A7 — Ben, Ada, Ben, Cara, Ada, Dan; B2:B7 — Paid, Open, Paid, Paid, Paid, Open. Получи разливающийся алфавитный список уникальных оплативших клиентов без пустых имён.",
        "hints": [
          "Сначала фильтруй, затем убирай повторы.",
          "Умножение массивов условий требует выполнения обоих."
        ],
        "answer": "=SORT(UNIQUE(FILTER(A2:A7,(B2:B7=\"Paid\")*(A2:A7<>\"\"))))\nРезультат: Ada, Ben, Cara.",
        "explanation": [
          "FILTER оставляет оплаченные строки с непустыми именами; UNIQUE убирает повторы.",
          "SORT сортирует список. Ячейки под результатом должны быть свободны."
        ]
      },
      "zh": {
        "title": "动态去重名单",
        "question": "Excel Microsoft 365：A2:A7 为 Ben、Ada、Ben、Cara、Ada、Dan；B2:B7 为 Paid、Open、Paid、Paid、Paid、Open。返回按字母排序且不重复的已付款客户溢出列表，排除空名字。",
        "hints": [
          "先筛选，再去重。",
          "将布尔数组相乘可要求两个条件同时成立。"
        ],
        "answer": "=SORT(UNIQUE(FILTER(A2:A7,(B2:B7=\"Paid\")*(A2:A7<>\"\"))))\n结果依次为 Ada、Ben、Cara。",
        "explanation": [
          "FILTER 保留已付款且名字非空的行；UNIQUE 去重。",
          "SORT 按字母排序。结果下方需要有空白单元格。"
        ]
      }
    }
  },
  {
    "id": "excel-weighted",
    "category": "constraints",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "The misleading average",
        "question": "B2:B4 contains scores 60, 80, 100. C2:C4 contains their weights 1, 2, 7. Calculate the weighted mean without helper columns.",
        "hints": [
          "A plain average treats all scores equally.",
          "Multiply each score by its weight, then divide by total weight."
        ],
        "answer": "=SUMPRODUCT(B2:B4,C2:C4)/SUM(C2:C4) → 92\nWeighted mean: 92.",
        "explanation": [
          "The weighted sum is 60×1+80×2+100×7=920.",
          "The weights total 10, so the result is 920/10=92."
        ]
      },
      "pl": {
        "title": "Myląca średnia",
        "question": "B2:B4 zawiera wyniki 60, 80, 100. C2:C4 zawiera ich wagi 1, 2, 7. Oblicz średnią ważoną bez kolumn pomocniczych.",
        "hints": [
          "Zwykła średnia traktuje wyniki jednakowo.",
          "Pomnóż każdy wynik przez wagę, a sumę podziel przez sumę wag."
        ],
        "answer": "=SUMPRODUCT(B2:B4,C2:C4)/SUM(C2:C4) → 92\nŚrednia ważona: 92. Polskie funkcje: SUMA.ILOCZYNÓW oraz SUMA.",
        "explanation": [
          "Suma ważona to 60×1+80×2+100×7=920.",
          "Suma wag to 10, więc średnia wynosi 920/10=92."
        ]
      },
      "ru": {
        "title": "Обманчивое среднее",
        "question": "B2:B4 содержит оценки 60, 80, 100; C2:C4 — веса 1, 2, 7. Вычисли взвешенное среднее без вспомогательных столбцов.",
        "hints": [
          "Обычное среднее приравнивает все оценки.",
          "Умножь оценки на веса и раздели сумму на сумму весов."
        ],
        "answer": "=SUMPRODUCT(B2:B4,C2:C4)/SUM(C2:C4) → 92\nВзвешенное среднее: 92.",
        "explanation": [
          "Взвешенная сумма: 60×1+80×2+100×7=920.",
          "Сумма весов равна 10, значит результат 92."
        ]
      },
      "zh": {
        "title": "容易误判的平均值",
        "question": "B2:B4 为分数60、80、100，C2:C4 为权重1、2、7。不用辅助列计算加权平均值。",
        "hints": [
          "普通平均值给每个分数相同权重。",
          "分数乘以权重后求和，再除以权重总和。"
        ],
        "answer": "=SUMPRODUCT(B2:B4,C2:C4)/SUM(C2:C4) → 92\n加权平均值：92。",
        "explanation": [
          "加权和为60×1+80×2+100×7=920。",
          "权重之和为10，所以结果为92。"
        ]
      }
    }
  },
  {
    "id": "excel-sum-error",
    "category": "constraints",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "One error in the column",
        "question": "Excel Microsoft 365: A2:A5 contains 10, #N/A, 20, 5. Sum the numeric values while treating errors as zero, without changing the source cells.",
        "hints": [
          "Wrapping the entire sum catches the error too late.",
          "Replace errors in the array before summing."
        ],
        "answer": "=SUM(IFERROR(A2:A5,0)) → 35\nResult: 35.",
        "explanation": [
          "IFERROR transforms the array into 10, 0, 20, 5.",
          "SUM then returns 35. IFERROR(SUM(A2:A5),0) would instead return zero and lose valid values."
        ]
      },
      "pl": {
        "title": "Jeden błąd w kolumnie",
        "question": "Excel Microsoft 365: A2:A5 zawiera 10, #N/A, 20, 5. Zsumuj liczby, traktując błędy jak zero, bez zmiany komórek źródłowych.",
        "hints": [
          "Obsłużenie błędu dopiero wokół całej sumy jest za późne.",
          "Zamień błędy w tablicy przed sumowaniem."
        ],
        "answer": "=SUM(IFERROR(A2:A5,0)) → 35\nWynik: 35. Polskie funkcje: SUMA i JEŻELI.BŁĄD.",
        "explanation": [
          "IFERROR zmienia tablicę na 10, 0, 20, 5.",
          "SUM zwraca 35. IFERROR(SUM(A2:A5),0) zwróciłoby zero, gubiąc poprawne wartości."
        ]
      },
      "ru": {
        "title": "Одна ошибка в столбце",
        "question": "Excel Microsoft 365: A2:A5 содержит 10, #N/A, 20, 5. Сложи числа, считая ошибки нулями, без изменения исходных ячеек.",
        "hints": [
          "Обрабатывать ошибку вокруг всей суммы уже поздно.",
          "Замени ошибки внутри массива до сложения."
        ],
        "answer": "=SUM(IFERROR(A2:A5,0)) → 35\nРезультат: 35.",
        "explanation": [
          "IFERROR превращает массив в 10, 0, 20, 5.",
          "SUM возвращает 35. IFERROR(SUM(A2:A5),0) вернуло бы ноль и потеряло верные значения."
        ]
      },
      "zh": {
        "title": "列中的一个错误",
        "question": "Excel Microsoft 365：A2:A5 为10、#N/A、20、5。不改源单元格，将错误视为零并求数字之和。",
        "hints": [
          "对整个求和结果处理错误为时已晚。",
          "求和前先替换数组内的错误。"
        ],
        "answer": "=SUM(IFERROR(A2:A5,0)) → 35\n结果：35。",
        "explanation": [
          "IFERROR 将数组变成10、0、20、5。",
          "SUM 得到35。IFERROR(SUM(A2:A5),0) 则返回零，丢掉有效数值。"
        ]
      }
    }
  }
] satisfies Puzzle[];

export const excelPuzzles = [...foundations,...practicalPuzzles];
