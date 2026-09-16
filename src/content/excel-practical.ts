import type {Puzzle} from '../types';
export const practicalPuzzles = [
  {
    "id": "excel-invoice",
    "category": "constraints",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Invoice line",
        "question": "B2 is the unit price (35), C2 the quantity (4). Calculate the line total in D2, then copy down.",
        "hints": [
          "Combine price and quantity.",
          "Use multiplication, not addition."
        ],
        "answer": "=B2*C2\nThe first line totals 140.",
        "explanation": [
          "B2*C2 multiplies unit price by quantity.",
          "Relative references make the next row use B3 and C3."
        ]
      },
      "pl": {
        "title": "Pozycja na fakturze",
        "question": "B2 to cena sztuki (35), C2 to liczba sztuk (4). Oblicz wartość pozycji w D2, a potem skopiuj formułę w dół.",
        "hints": [
          "Połącz cenę i liczbę sztuk.",
          "Użyj mnożenia, nie dodawania."
        ],
        "answer": "=B2*C2\nPierwsza pozycja ma wartość 140.",
        "explanation": [
          "B2*C2 mnoży cenę jednostkową przez liczbę sztuk.",
          "Adresy względne sprawią, że kolejny wiersz użyje B3 i C3."
        ]
      },
      "ru": {
        "title": "Строка счёта",
        "question": "B2 — цена (35), C2 — количество (4). Вычисли стоимость в D2 и скопируй формулу вниз.",
        "hints": [
          "Соедини цену и количество.",
          "Нужно умножение, а не сложение."
        ],
        "answer": "=B2*C2\nПервая строка: 140.",
        "explanation": [
          "B2*C2 умножает цену на количество.",
          "Относительные ссылки в следующей строке станут B3 и C3."
        ]
      },
      "zh": {
        "title": "发票明细",
        "question": "B2 是单价35，C2 是数量4。在 D2 计算总价，并向下复制公式。",
        "hints": [
          "将单价和数量结合起来。",
          "使用乘法而非加法。"
        ],
        "answer": "=B2*C2\n第一行金额为140。",
        "explanation": [
          "B2*C2 将单价乘以数量。",
          "相对引用在下一行变成 B3 和 C3。"
        ]
      }
    }
  },
  {
    "id": "excel-discount",
    "category": "constraints",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "After the discount",
        "question": "B2 contains a price of 200 and C2 a discount of 15%. Calculate the final price in D2 and copy down.",
        "hints": [
          "The discount is the part you do not pay.",
          "Subtract the discount rate from 1."
        ],
        "answer": "=B2*(1-C2)\nThe first final price is 170.",
        "explanation": [
          "1-C2 gives the remaining share of the price.",
          "Multiplying B2 by that share gives the amount payable."
        ]
      },
      "pl": {
        "title": "Cena po rabacie",
        "question": "B2 zawiera cenę 200, a C2 rabat 15%. Oblicz cenę końcową w D2 i skopiuj formułę w dół.",
        "hints": [
          "Rabat to część ceny, której nie płacisz.",
          "Odejmij stopę rabatu od 1."
        ],
        "answer": "=B2*(1-C2)\nPierwsza cena końcowa to 170.",
        "explanation": [
          "1-C2 daje część ceny pozostałą do zapłaty.",
          "Pomnożenie B2 przez tę część daje cenę końcową."
        ]
      },
      "ru": {
        "title": "Цена со скидкой",
        "question": "B2 содержит цену 200, C2 — скидку 15%. Вычисли итоговую цену в D2 и скопируй вниз.",
        "hints": [
          "Скидка — часть цены, которую не платят.",
          "Вычти ставку скидки из 1."
        ],
        "answer": "=B2*(1-C2)\nПервая итоговая цена: 170.",
        "explanation": [
          "1-C2 даёт оставшуюся долю цены.",
          "Умножение B2 на эту долю даёт сумму к оплате."
        ]
      },
      "zh": {
        "title": "折后价格",
        "question": "B2 是原价200，C2 是15%的优惠比例。在 D2 计算折后价并向下复制。",
        "hints": [
          "优惠是不用支付的那一部分。",
          "用1减去优惠比例。"
        ],
        "answer": "=B2*(1-C2)\n第一个折后价为170。",
        "explanation": [
          "1-C2 是剩余应付比例。",
          "B2 乘以这个比例就是折后价。"
        ]
      }
    }
  },
  {
    "id": "excel-bonus",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Sales bonus",
        "question": "Sales are in B2:B4. Each person earns 5% of their sales if sales are at least 10000; otherwise zero. Write C2 and copy down.",
        "hints": [
          "The threshold is inclusive.",
          "IF chooses between a commission and zero."
        ],
        "answer": "=IF(B2>=10000,B2*5%,0)\nFor 12000, 8000, 10000 the bonuses are 600, 0, 500.",
        "explanation": [
          "B2>=10000 includes sales exactly at the threshold.",
          "The true branch multiplies sales by 5%; the false branch returns zero."
        ]
      },
      "pl": {
        "title": "Premia sprzedażowa",
        "question": "Sprzedaż jest w B2:B4. Premia to 5% sprzedaży, jeśli wynosi ona co najmniej 10000; w przeciwnym razie zero. Wpisz formułę w C2 i skopiuj w dół.",
        "hints": [
          "Próg obejmuje również wartość równą limitowi.",
          "JEŻELI wybiera między premią a zerem."
        ],
        "answer": "=IF(B2>=10000,B2*5%,0)\nDla 12000, 8000, 10000 premie wynoszą 600, 0, 500. Polska funkcja: JEŻELI.",
        "explanation": [
          "B2>=10000 uwzględnia także sprzedaż dokładnie równą progowi.",
          "Prawdziwy warunek daje 5% sprzedaży, fałszywy daje zero."
        ]
      },
      "ru": {
        "title": "Премия за продажи",
        "question": "Продажи в B2:B4. Премия — 5% продаж при сумме не менее 10000, иначе ноль. Напиши C2 и скопируй вниз.",
        "hints": [
          "Граничное значение тоже подходит.",
          "IF выбирает премию или ноль."
        ],
        "answer": "=IF(B2>=10000,B2*5%,0)\nДля 12000, 8000, 10000 премии: 600, 0, 500.",
        "explanation": [
          "B2>=10000 включает точное равенство порогу.",
          "При выполнении условия берётся 5% продаж, иначе ноль."
        ]
      },
      "zh": {
        "title": "销售奖金",
        "question": "B2:B4 是销售额。销售额至少10000时，奖金为销售额的5%，否则为零。填写 C2 并向下复制。",
        "hints": [
          "等于门槛也应计入。",
          "IF 在奖金和零之间选择。"
        ],
        "answer": "=IF(B2>=10000,B2*5%,0)\n12000、8000、10000 对应600、0、500。",
        "explanation": [
          "B2>=10000 包含正好等于门槛的情况。",
          "条件为真时乘以5%，为假时返回零。"
        ]
      }
    }
  },
  {
    "id": "excel-invoice-repeat",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Duplicate invoices",
        "question": "Invoice IDs are in A2:A6. Mark only repeated occurrences in B2:B6 with TRUE, leaving the first occurrence FALSE. Start in B2.",
        "hints": [
          "Count from the first invoice to the current one.",
          "Lock the start, not the end, of your range."
        ],
        "answer": "=COUNTIF($A$2:A2,A2)>1\nExpected flags: FALSE, FALSE, TRUE, FALSE, TRUE.",
        "explanation": [
          "The expanding range counts how often the current ID has appeared.",
          "A count greater than one identifies a repeat."
        ]
      },
      "pl": {
        "title": "Powtórzone faktury",
        "question": "Numery faktur są w A2:A6. Oznacz tylko kolejne wystąpienia jako PRAWDA w B2:B6, pozostawiając pierwsze jako FAŁSZ. Zacznij w B2.",
        "hints": [
          "Licz od pierwszej faktury do bieżącej.",
          "Zablokuj początek zakresu, ale nie koniec."
        ],
        "answer": "=COUNTIF($A$2:A2,A2)>1\nWyniki: FAŁSZ, FAŁSZ, PRAWDA, FAŁSZ, PRAWDA. Polska funkcja: LICZ.JEŻELI.",
        "explanation": [
          "Rozszerzający się zakres liczy dotychczasowe wystąpienia numeru.",
          "Liczba większa od jednego oznacza powtórzenie."
        ]
      },
      "ru": {
        "title": "Повторные счета",
        "question": "Номера счетов в A2:A6. Отметь в B2:B6 только повторы как TRUE, первое появление — FALSE. Начни с B2.",
        "hints": [
          "Считай от первого счёта до текущего.",
          "Закрепи начало диапазона, но не конец."
        ],
        "answer": "=COUNTIF($A$2:A2,A2)>1\nРезультат: FALSE, FALSE, TRUE, FALSE, TRUE.",
        "explanation": [
          "Расширяющийся диапазон считает предыдущие появления номера.",
          "Число больше единицы означает повтор."
        ]
      },
      "zh": {
        "title": "重复发票",
        "question": "A2:A6 是发票号。在 B2:B6 仅把重复出现标记为 TRUE，首次出现为 FALSE。从 B2 开始。",
        "hints": [
          "统计第一张发票到当前发票。",
          "固定区域起点而非终点。"
        ],
        "answer": "=COUNTIF($A$2:A2,A2)>1\n结果：FALSE、FALSE、TRUE、FALSE、TRUE。",
        "explanation": [
          "扩展区域统计当前编号的出现次数。",
          "次数大于1表示重复。"
        ]
      }
    }
  },
  {
    "id": "excel-paid-report",
    "category": "constraints",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "A collection report",
        "question": "Microsoft 365: A has customer, B payment status, C invoice amount. From rows 2–7, list unique customers with a Paid invoice of at least 500, sorted alphabetically. Return the list in E2.",
        "hints": [
          "Filter individual invoices before deduplicating customers.",
          "Combine the status and amount conditions with multiplication."
        ],
        "answer": "=SORT(UNIQUE(FILTER(A2:A7,(B2:B7=\"Paid\")*(C2:C7>=500))))\nThe list is Ada, Cara.",
        "explanation": [
          "FILTER keeps invoices meeting both conditions.",
          "UNIQUE removes repeated customers and SORT orders their names."
        ]
      },
      "pl": {
        "title": "Raport opłaconych faktur",
        "question": "Microsoft 365: A to klient, B status płatności, C kwota faktury. Z wierszy 2–7 wypisz unikalnych klientów z fakturą Paid na co najmniej 500, alfabetycznie. Umieść listę w E2.",
        "hints": [
          "Filtruj pojedyncze faktury, zanim usuniesz duplikaty klientów.",
          "Połącz warunki statusu i kwoty przez mnożenie."
        ],
        "answer": "=SORT(UNIQUE(FILTER(A2:A7,(B2:B7=\"Paid\")*(C2:C7>=500))))\nLista: Ada, Cara. Polskie funkcje: SORTUJ, UNIKATOWE, FILTRUJ.",
        "explanation": [
          "FILTER zostawia faktury spełniające oba warunki.",
          "UNIQUE usuwa powtórzonych klientów, a SORT sortuje ich imiona."
        ]
      },
      "ru": {
        "title": "Отчёт по оплатам",
        "question": "Microsoft 365: A — клиент, B — статус оплаты, C — сумма счёта. Из строк 2–7 выведи в E2 уникальных клиентов со счётом Paid не менее 500, по алфавиту.",
        "hints": [
          "Сначала фильтруй счета, потом убирай повторы клиентов.",
          "Соедини условия статуса и суммы умножением."
        ],
        "answer": "=SORT(UNIQUE(FILTER(A2:A7,(B2:B7=\"Paid\")*(C2:C7>=500))))\nСписок: Ada, Cara.",
        "explanation": [
          "FILTER оставляет счета с обоими условиями.",
          "UNIQUE убирает повторы, SORT сортирует имена."
        ]
      },
      "zh": {
        "title": "已付款发票报告",
        "question": "Microsoft 365：A 是客户，B 是付款状态，C 是发票金额。从第2到7行筛选出至少有一张金额不低于500且状态为 Paid 的发票的客户，去重并按字母排序，在 E2 输出。",
        "hints": [
          "先筛选单张发票，再对客户去重。",
          "相乘可组合状态和金额条件。"
        ],
        "answer": "=SORT(UNIQUE(FILTER(A2:A7,(B2:B7=\"Paid\")*(C2:C7>=500))))\n名单为 Ada、Cara。",
        "explanation": [
          "FILTER 保留同时满足条件的发票。",
          "UNIQUE 去重，SORT 对客户名排序。"
        ]
      }
    }
  },
  {
    "id": "excel-order-price",
    "category": "constraints",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Orders meet the price list",
        "question": "Microsoft 365: order codes are in A2:A4, quantities in B2:B4. E2:F4 is the price list. Calculate order totals in C2:C4; an unknown code should give zero. Start in C2.",
        "hints": [
          "Find a unit price, then multiply by quantity.",
          "Fix the price-list ranges before copying down."
        ],
        "answer": "=B2*XLOOKUP(A2,$E$2:$E$4,$F$2:$F$4,0)\nThe totals are 36, 50, 0.",
        "explanation": [
          "XLOOKUP matches each order code to its unit price; missing codes return zero.",
          "Absolute ranges keep the lookup table fixed while A2 and B2 move down."
        ]
      },
      "pl": {
        "title": "Zamówienia i cennik",
        "question": "Microsoft 365: kody zamówień są w A2:A4, ilości w B2:B4. E2:F4 to cennik. Oblicz wartości zamówień w C2:C4; nieznany kod ma dać zero. Zacznij w C2.",
        "hints": [
          "Znajdź cenę sztuki i pomnóż przez ilość.",
          "Zablokuj zakresy cennika przed kopiowaniem w dół."
        ],
        "answer": "=B2*XLOOKUP(A2,$E$2:$E$4,$F$2:$F$4,0)\nWyniki: 36, 50, 0. Polska funkcja: X.WYSZUKAJ.",
        "explanation": [
          "XLOOKUP dopasowuje kod do ceny jednostkowej; brak kodu daje zero.",
          "Stałe adresy utrzymują zakres cennika, a A2 i B2 przesuwają się w dół."
        ]
      },
      "ru": {
        "title": "Заказы и прайс-лист",
        "question": "Microsoft 365: коды заказов в A2:A4, количества в B2:B4. E2:F4 — прайс-лист. Вычисли суммы в C2:C4; неизвестный код должен дать ноль. Начни с C2.",
        "hints": [
          "Найди цену единицы и умножь на количество.",
          "Закрепи диапазоны прайс-листа перед копированием."
        ],
        "answer": "=B2*XLOOKUP(A2,$E$2:$E$4,$F$2:$F$4,0)\nРезультаты: 36, 50, 0.",
        "explanation": [
          "XLOOKUP находит цену по коду; отсутствующий код даёт ноль.",
          "Абсолютные ссылки закрепляют прайс-лист, а A2 и B2 смещаются вниз."
        ]
      },
      "zh": {
        "title": "订单与价目表",
        "question": "Microsoft 365：A2:A4 是订单代码，B2:B4 是数量。E2:F4 是价目表。在 C2:C4 计算订单总价，未知代码返回零。从 C2 开始。",
        "hints": [
          "查找单价，再乘以数量。",
          "向下复制前固定价目表区域。"
        ],
        "answer": "=B2*XLOOKUP(A2,$E$2:$E$4,$F$2:$F$4,0)\n结果为36、50、0。",
        "explanation": [
          "XLOOKUP 按代码查找单价，未找到时返回零。",
          "绝对引用固定价目表，A2 和 B2 则随行移动。"
        ]
      }
    }
  }
] satisfies Puzzle[];
