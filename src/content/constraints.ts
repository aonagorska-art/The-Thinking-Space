import type {Puzzle} from '../types';

export const constraints = [
  {
    "id": "jugs",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "An unmarked measure",
        "question": "You have empty 3 L and 5 L jugs, a tap and a drain. Fill fully, empty fully, or pour until source empties or destination fills. How can you leave exactly 4 L in the 5 L jug?",
        "hints": [
          "A full small jug can remove a known quantity.",
          "Use a remainder to partly fill the small jug before the next large fill."
        ],
        "answer": "Fill 5, pour into 3, empty 3, transfer 2, fill 5, top up 3.",
        "explanation": [
          "After the first pour, 2 L remain in the large jug. Empty the small jug and transfer those 2 L into it.",
          "Refill the large jug and pour 1 L into the small jug until full. Exactly 4 L remain in the large jug."
        ]
      },
      "pl": {
        "title": "Miarka bez podziałki",
        "question": "Masz puste dzbanki 3 l i 5 l, kran i odpływ. Wolno napełniać lub opróżniać całkowicie oraz przelewać do opróżnienia źródła lub zapełnienia celu. Jak zostawić 4 l w dużym dzbanku?",
        "hints": [
          "Pełny mały dzbanek odmierza znaną ilość.",
          "Resztką częściowo napełnij mały przed kolejnym pełnym dużym."
        ],
        "answer": "Napełnij 5, przelej do 3, opróżnij 3, przelej 2, napełnij 5, dopełnij 3.",
        "explanation": [
          "Po pierwszym przelaniu w dużym zostają 2 l. Opróżnij mały i przelej do niego te 2 l.",
          "Napełnij duży i dolej z niego 1 l do pełnego małego. W dużym zostają 4 l."
        ]
      },
      "ru": {
        "title": "Мера без делений",
        "question": "Есть пустые кувшины 3 л и 5 л, кран и слив. Можно наполнять или опустошать полностью, переливать до опустошения источника или заполнения приёмника. Как оставить 4 л в большом?",
        "hints": [
          "Полный малый кувшин отмеряет известное количество.",
          "Остатком частично заполните малый перед новым наполнением большого."
        ],
        "answer": "Наполните 5, перелейте в 3, опустошите 3, перенесите 2, наполните 5, дополните 3.",
        "explanation": [
          "После первого переливания в большом 2 л. Опустошите малый и перенесите в него эти 2 л.",
          "Наполните большой и долейте из него 1 л в малый. В большом останется 4 л."
        ]
      },
      "zh": {
        "title": "无刻度量水",
        "question": "有空的3升、5升壶及水龙头、排水口。只能装满、倒空，或倒到来源空了或目标满了。如何让5升壶留下恰好4升？",
        "hints": [
          "装满小壶可移走已知体积。",
          "用余水先部分填满小壶，再装满大壶。"
        ],
        "answer": "装满5升，倒入3升，倒空3升，转入余下2升，再装满5升并补满3升。",
        "explanation": [
          "首次倒后大壶余2升，将小壶倒空并转入这2升。",
          "再装满大壶，向小壶补1升至满，大壶恰余4升。"
        ]
      }
    }
  },
  {
    "id": "river",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "An awkward ferry",
        "question": "A farmer must ferry a wolf, a goat and a cabbage across a river. The boat takes the farmer and at most one item; only the farmer can row. Unsupervised, wolf eats goat and goat eats cabbage. Give a safe crossing sequence.",
        "hints": [
          "The goat causes trouble on either unattended bank.",
          "Sometimes a passenger has to come back."
        ],
        "answer": "Goat over; back alone; wolf over; goat back; cabbage over; back alone; goat over.",
        "explanation": [
          "Taking the goat first leaves wolf with cabbage safely. After bringing the wolf over, return the goat to avoid leaving it with the wolf.",
          "Bring cabbage to the wolf, return alone, then fetch the goat. Every unattended pair is safe."
        ]
      },
      "pl": {
        "title": "Kłopotliwy prom",
        "question": "Rolnik przewozi wilka, kozę i kapustę przez rzekę. Łódź mieści rolnika i najwyżej jedną rzecz; tylko rolnik wiosłuje. Bez nadzoru wilk zjada kozę, a koza kapustę. Podaj bezpieczną sekwencję.",
        "hints": [
          "Koza stwarza problem na obu brzegach.",
          "Czasem pasażer musi wrócić."
        ],
        "answer": "Koza tam; sam wraca; wilk tam; koza wraca; kapusta tam; sam wraca; koza tam.",
        "explanation": [
          "Koza jako pierwsza zostawia bezpiecznie wilka z kapustą. Po wilku trzeba zabrać kozę z powrotem.",
          "Kapusta trafia do wilka, rolnik wraca sam i zabiera kozę. Żadna pozostawiona para nie jest niebezpieczna."
        ]
      },
      "ru": {
        "title": "Неудобная переправа",
        "question": "Фермер перевозит волка, козу и капусту. Лодка вмещает фермера и один предмет; грести может только он. Без надзора волк ест козу, коза капусту. Дайте безопасную последовательность.",
        "hints": [
          "Коза создаёт проблему на обоих берегах.",
          "Иногда пассажиру приходится вернуться."
        ],
        "answer": "Коза туда; назад один; волк туда; коза назад; капуста туда; назад один; коза туда.",
        "explanation": [
          "Сначала коза: волк с капустой безопасны. После перевозки волка козу надо вернуть.",
          "Капуста едет к волку, фермер возвращается один и забирает козу. Все оставленные пары безопасны."
        ]
      },
      "zh": {
        "title": "棘手的渡河",
        "question": "农夫要运狼、羊和白菜过河。船只能载农夫及至多一件，只有农夫能划船。无人看管时狼吃羊，羊吃白菜。给出安全顺序。",
        "hints": [
          "羊在两岸都可能造成问题。",
          "有时乘客必须返回。"
        ],
        "answer": "运羊；独返；运狼；带羊返；运白菜；独返；运羊。",
        "explanation": [
          "先运羊留下狼与白菜，安全。运狼后把羊带回，避免羊与狼独处。",
          "运白菜与狼放一起，再独自回来接羊，所有无人看管组合都安全。"
        ]
      }
    }
  },
  {
    "id": "sudoku-cell",
    "category": "constraints",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "One missing cell",
        "question": "In a 4×4 Sudoku, each row, column and 2×2 block contains 1–4 once. Row 1 is [1, blank, 3, blank]. Column 2 already contains 1 and 2 elsewhere. What must row 1, column 2 contain?",
        "hints": [
          "Intersect the candidates allowed by row and column.",
          "The row leaves two values; the column excludes one."
        ],
        "answer": "4.",
        "explanation": [
          "Row 1 lacks 2 and 4.",
          "Column 2 already has 2, so its blank in row 1 must be 4."
        ]
      },
      "pl": {
        "title": "Jedno puste pole",
        "question": "W sudoku 4×4 każdy wiersz, kolumna i blok 2×2 zawiera 1–4 raz. Wiersz 1 to [1, puste, 3, puste]. Kolumna 2 ma już gdzie indziej 1 i 2. Co musi być w wierszu 1, kolumnie 2?",
        "hints": [
          "Przetnij zbiory kandydatów wiersza i kolumny.",
          "Wiersz zostawia dwie wartości, kolumna jedną wyklucza."
        ],
        "answer": "4.",
        "explanation": [
          "W wierszu 1 brakuje 2 i 4.",
          "Kolumna 2 ma już 2, więc szukane pole musi zawierać 4."
        ]
      },
      "ru": {
        "title": "Одна пустая клетка",
        "question": "В судоку 4×4 каждая строка, столбец и блок 2×2 содержат 1–4 по разу. Строка 1: [1, пусто, 3, пусто]. В столбце 2 уже есть 1 и 2 в других местах. Что стоит в строке 1, столбце 2?",
        "hints": [
          "Пересеките кандидатов строки и столбца.",
          "Строка оставляет два числа, столбец исключает одно."
        ],
        "answer": "4.",
        "explanation": [
          "Строке 1 не хватает 2 и 4.",
          "В столбце 2 уже есть 2, значит искомое число 4."
        ]
      },
      "zh": {
        "title": "一个空格",
        "question": "4×4数独中，每行、每列及每个2×2宫都各含一次1至4。第一行为[1,空,3,空]，第二列其他位置已有1和2。第一行第二列必是什么？",
        "hints": [
          "取行与列允许候选数的交集。",
          "行留下两个数，列排除其中一个。"
        ],
        "answer": "4。",
        "explanation": [
          "第一行缺2和4。",
          "第二列已有2，因此该格只能是4。"
        ]
      }
    }
  },
  {
    "id": "magic-center",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The central number",
        "question": "A 3×3 magic square uses 1–9 exactly once, with each row, column and both diagonals summing to 15. What must the center be?",
        "hints": [
          "Add the four lines passing through the center.",
          "The center is counted more often than the other cells."
        ],
        "answer": "5.",
        "explanation": [
          "The two diagonals, middle row and middle column total 60. Together they count every outer cell once and the center four times.",
          "All cells sum to 45, so 60=45+3c, giving c=5."
        ]
      },
      "pl": {
        "title": "Środkowa liczba",
        "question": "Kwadrat magiczny 3×3 używa 1–9 po razie. Każdy wiersz, kolumna i obie przekątne sumują się do 15. Co musi być w środku?",
        "hints": [
          "Dodaj cztery linie przechodzące przez środek.",
          "Środek zostanie policzony częściej niż inne pola."
        ],
        "answer": "5.",
        "explanation": [
          "Przekątne, środkowy wiersz i kolumna dają 60. Każde zewnętrzne pole liczą raz, środek cztery razy.",
          "Wszystkie pola sumują się do 45, więc 60=45+3c, stąd c=5."
        ]
      },
      "ru": {
        "title": "Центральное число",
        "question": "Магический квадрат 3×3 использует 1–9 по разу. Каждая строка, столбец и обе диагонали дают 15. Что обязательно в центре?",
        "hints": [
          "Сложите четыре линии через центр.",
          "Центр учитывается чаще других клеток."
        ],
        "answer": "5.",
        "explanation": [
          "Диагонали, средняя строка и столбец дают 60, считая внешние клетки один раз, центр четыре.",
          "Сумма всех клеток 45, значит 60=45+3c и c=5."
        ]
      },
      "zh": {
        "title": "中心数字",
        "question": "3×3幻方使用1至9各一次，每行、列及两条对角线之和均为15。中心必为几？",
        "hints": [
          "将经过中心的四条线相加。",
          "中心比其他格被多算几次？"
        ],
        "answer": "5。",
        "explanation": [
          "两条对角线、中行、中列总和60，外围各算一次，中心算四次。",
          "九数总和45，所以60=45+3c，得到c=5。"
        ]
      }
    }
  },
  {
    "id": "four-queens",
    "category": "constraints",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Four quiet queens",
        "question": "Place four queens on a 4×4 chessboard so no two share a row, column or diagonal. Give the column numbers for rows 1–4.",
        "hints": [
          "Use one queen per row and column.",
          "Try placing the first queen in column 2 rather than a corner."
        ],
        "answer": "2, 4, 1, 3.",
        "explanation": [
          "All four columns differ. For each pair of rows, their column difference is unequal to their row difference, so no diagonal is shared.",
          "The pairs have absolute differences (1,2), (2,1), (3,1), (1,3), (2,1), (1,2) in (row,column), none equal."
        ]
      },
      "pl": {
        "title": "Cztery spokojne hetmany",
        "question": "Ustaw cztery hetmany na szachownicy 4×4 tak, by nie dzieliły wiersza, kolumny ani przekątnej. Podaj kolumny dla wierszy 1–4.",
        "hints": [
          "Użyj jednego hetmana w każdym wierszu i kolumnie.",
          "Zacznij od kolumny 2 zamiast rogu."
        ],
        "answer": "2, 4, 1, 3.",
        "explanation": [
          "Kolumny są różne. Dla każdej pary różnica kolumn jest inna niż różnica wierszy, więc nie dzielą przekątnej.",
          "Bezwzględne różnice (wiersz,kolumna) to (1,2), (2,1), (3,1), (1,3), (2,1), (1,2); żadna para nie ma równych współrzędnych."
        ]
      },
      "ru": {
        "title": "Четыре спокойных ферзя",
        "question": "Поставьте четырёх ферзей на доску 4×4 без общих строк, столбцов и диагоналей. Назовите столбцы для строк 1–4.",
        "hints": [
          "По одному ферзю на строку и столбец.",
          "Начните со столбца 2, не с угла."
        ],
        "answer": "2, 4, 1, 3.",
        "explanation": [
          "Все столбцы различны. У каждой пары разность столбцов не равна разности строк, поэтому общей диагонали нет.",
          "Абсолютные разности (строка,столбец): (1,2), (2,1), (3,1), (1,3), (2,1), (1,2); равных координат нет."
        ]
      },
      "zh": {
        "title": "四位安静的皇后",
        "question": "在4×4棋盘放四个皇后，使任意两个不同排、不同列、不同对角线。按第1至4排给出列号。",
        "hints": [
          "每排每列各放一个。",
          "第一排试试第二列，而不是角落。"
        ],
        "answer": "2、4、1、3。",
        "explanation": [
          "四个列号不同；任意两皇后的列差不等于排差，所以不共对角线。",
          "六对的绝对差(排,列)为(1,2)、(2,1)、(3,1)、(1,3)、(2,1)、(1,2)，没有坐标相等的一对。"
        ]
      }
    }
  },
  {
    "id": "cryptarithm",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A repeated sum",
        "question": "In the decimal addition TWO + TWO = FOUR, different letters mean different digits, T and F are nonzero. Find one solution. A solution is enough; uniqueness is not claimed.",
        "hints": [
          "The result is four digits, so consider the leading carry.",
          "Try T=7 and W=3, then use the remaining column constraints."
        ],
        "answer": "734 + 734 = 1468.",
        "explanation": [
          "Assign T=7, W=3, O=4, F=1, U=6, R=8; all six digits differ.",
          "Units 4+4=8, tens 3+3=6, hundreds 7+7=14, matching FOUR=1468."
        ]
      },
      "pl": {
        "title": "Powtórzona suma",
        "question": "W dziesiętnym dodawaniu TWO + TWO = FOUR różne litery oznaczają różne cyfry, T i F nie są zerem. Znajdź jedno rozwiązanie; nie zakładamy jedyności.",
        "hints": [
          "Wynik ma cztery cyfry, więc rozważ przeniesienie na początku.",
          "Spróbuj T=7 i W=3, potem sprawdź pozostałe kolumny."
        ],
        "answer": "734 + 734 = 1468.",
        "explanation": [
          "Przypisz T=7, W=3, O=4, F=1, U=6, R=8; cyfry są różne.",
          "Jedności: 4+4=8, dziesiątki: 3+3=6, setki: 7+7=14, dając FOUR=1468."
        ]
      },
      "ru": {
        "title": "Повторная сумма",
        "question": "В десятичном сложении TWO + TWO = FOUR разные буквы означают разные цифры, T и F не нули. Найдите одно решение; единственность не требуется.",
        "hints": [
          "Результат четырёхзначный: подумайте о старшем переносе.",
          "Попробуйте T=7 и W=3, затем проверьте остальные столбцы."
        ],
        "answer": "734 + 734 = 1468.",
        "explanation": [
          "T=7, W=3, O=4, F=1, U=6, R=8; все цифры различны.",
          "Единицы: 4+4=8, десятки: 3+3=6, сотни: 7+7=14, получаем FOUR=1468."
        ]
      },
      "zh": {
        "title": "重复的加法",
        "question": "十进制字母算式TWO + TWO = FOUR中，不同字母表示不同数字，T、F不为零。找一个解即可，不要求唯一。",
        "hints": [
          "结果有四位，考虑最高位进位。",
          "试T=7、W=3，再用其他列限制数字。"
        ],
        "answer": "734 + 734 = 1468。",
        "explanation": [
          "赋值T=7、W=3、O=4、F=1、U=6、R=8，六个数字互异。",
          "个位4+4=8，十位3+3=6，百位7+7=14，得到FOUR=1468。"
        ]
      }
    }
  },
  {
    "id": "integer-tickets",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Tickets at two prices",
        "question": "Exactly 20 tickets cost 146 units total. Adult tickets cost 9, child tickets 5. Can this receipt be correct?",
        "hints": [
          "Imagine paying the child price for everyone.",
          "Each adult ticket adds the same extra cost."
        ],
        "answer": "No; there is no valid purchase.",
        "explanation": [
          "Twenty child tickets would cost 100, leaving 46, which is not divisible by 4.",
          "Therefore the stated total cannot be obtained with 20 tickets at these prices; there is no valid purchase."
        ]
      },
      "pl": {
        "title": "Bilety w dwóch cenach",
        "question": "Dokładnie 20 biletów kosztuje 146 jednostek. Dorosły płaci 9, dziecko 5. Czy ten rachunek może być poprawny?",
        "hints": [
          "Wyobraź sobie cenę dziecięcą dla wszystkich.",
          "Każdy dorosły dodaje taki sam koszt."
        ],
        "answer": "Nie ma takiego zakupu.",
        "explanation": [
          "Dwadzieścia dziecięcych kosztuje 100, pozostaje 46.",
          "Każdy dorosły dodaje 4, a 46 nie dzieli się przez 4. Podana kwota jest niemożliwa."
        ]
      },
      "ru": {
        "title": "Билеты двух цен",
        "question": "Ровно 20 билетов стоят 146 единиц. Взрослый билет 9, детский 5. Может ли этот чек быть верным?",
        "hints": [
          "Сначала посчитайте всех по детской цене.",
          "Каждый взрослый добавляет одинаковую доплату."
        ],
        "answer": "Такой покупки не существует.",
        "explanation": [
          "Двадцать детских стоят 100, остаётся 46.",
          "Взрослый добавляет 4, а 46 не делится на 4. Указанный итог невозможен."
        ]
      },
      "zh": {
        "title": "两种票价",
        "question": "恰好20张票总价146。成人票9，儿童票5。这个账单可能正确吗？",
        "hints": [
          "先假设所有人都买儿童票。",
          "每张成人票增加相同差价。"
        ],
        "answer": "不存在这样的购买组合。",
        "explanation": [
          "20张儿童票总价100，还差46。",
          "每换一张成人票增加4，而46不能被4整除，因此总价不可能。"
        ]
      }
    }
  },
  {
    "id": "color-map",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Three neighboring regions",
        "question": "A map has four regions A–D. A, B, C each share a border with the other two; D borders only C. Adjacent regions must differ in color. What is the minimum number of colors?",
        "hints": [
          "The triangle of neighbors sets a lower bound.",
          "The fourth region need not introduce a new color."
        ],
        "answer": "3.",
        "explanation": [
          "A, B, C are pairwise adjacent, so need three different colors.",
          "Give D the same color as A, since it borders only C. Three colors suffice and fewer cannot."
        ]
      },
      "pl": {
        "title": "Sąsiadujące regiony",
        "question": "Mapa ma regiony A–D. A, B, C każdy graniczy z pozostałymi dwoma; D tylko z C. Sąsiedzi muszą mieć różne kolory. Ile kolorów potrzeba co najmniej?",
        "hints": [
          "Trójkąt sąsiadów daje dolną granicę.",
          "Czwarty region nie wymaga nowego koloru."
        ],
        "answer": "3.",
        "explanation": [
          "A, B, C są parami sąsiadami, więc potrzebują trzech różnych kolorów.",
          "D może mieć kolor A, bo graniczy tylko z C. Trzy wystarczą, mniej nie."
        ]
      },
      "ru": {
        "title": "Соседние области",
        "question": "На карте области A–D. A, B, C граничат друг с другом; D только с C. Соседи должны быть разных цветов. Сколько минимум цветов?",
        "hints": [
          "Треугольник соседей задаёт нижнюю границу.",
          "Четвёртой области новый цвет не обязателен."
        ],
        "answer": "3.",
        "explanation": [
          "A, B, C попарно соседствуют и требуют трёх цветов.",
          "D можно дать цвет A, ведь она граничит только с C. Три достаточно, меньше нельзя."
        ]
      },
      "zh": {
        "title": "相邻地区",
        "question": "地图有A至D四区。A、B、C两两接壤，D只与C接壤。相邻区域颜色不同，最少几种颜色？",
        "hints": [
          "三个两两相邻的区域给出下界。",
          "第四区无需新颜色。"
        ],
        "answer": "3种。",
        "explanation": [
          "A、B、C两两相邻，必须三色。",
          "D仅邻C，可与A同色，因此三种足够且必要。"
        ]
      }
    }
  },
  {
    "id": "assignment",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Three jobs to fill",
        "question": "A, B, C must each take one different job: design, coding, testing. A cannot code, B can only design or code, and C cannot design. List all valid assignments.",
        "hints": [
          "Separate the cases where A designs or tests.",
          "Once A is fixed, check B before C."
        ],
        "answer": "A design/B code/C test; A test/B design/C code.",
        "explanation": [
          "If A designs, B must code and C tests.",
          "If A tests, C cannot design and must code; B designs. These exhaust A’s two options."
        ]
      },
      "pl": {
        "title": "Trzy stanowiska",
        "question": "A, B, C mają po jednym różnym zadaniu: projektowanie, kodowanie, testowanie. A nie koduje, B tylko projektuje lub koduje, C nie projektuje. Wypisz wszystkie przydziały.",
        "hints": [
          "Rozdziel przypadki: A projektuje albo testuje.",
          "Po A sprawdź B, potem C."
        ],
        "answer": "A projektuje/B koduje/C testuje; A testuje/B projektuje/C koduje.",
        "explanation": [
          "Jeśli A projektuje, B musi kodować, C testować.",
          "Jeśli A testuje, C musi kodować, bo nie projektuje; B projektuje. To wszystkie opcje A."
        ]
      },
      "ru": {
        "title": "Три работы",
        "question": "A, B, C получают по разной работе: дизайн, код, тесты. A не пишет код, B может только дизайн или код, C не занимается дизайном. Перечислите все назначения.",
        "hints": [
          "Разберите A в дизайне или тестах.",
          "После A проверьте B, затем C."
        ],
        "answer": "A дизайн/B код/C тесты; A тесты/B дизайн/C код.",
        "explanation": [
          "Если A в дизайне, B пишет код, C тестирует.",
          "Если A тестирует, C не может дизайн и пишет код; B в дизайне. Это все варианты A."
        ]
      },
      "zh": {
        "title": "三项工作",
        "question": "A、B、C各做设计、编程、测试中的不同一项。A不能编程，B只能设计或编程，C不能设计。列出全部合法分配。",
        "hints": [
          "分别考虑A设计或测试。",
          "固定A后，先检查B再检查C。"
        ],
        "answer": "A设计/B编程/C测试；A测试/B设计/C编程。",
        "explanation": [
          "若A设计，B必须编程，C测试。",
          "若A测试，C不能设计所以编程，B设计。A只有这两种可能，因此列举完整。"
        ]
      }
    }
  },
  {
    "id": "nonconsecutive",
    "category": "constraints",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A separated selection",
        "question": "Choose three distinct integers from 1 through 7 so no two are consecutive. How many sets are possible?",
        "hints": [
          "Write them as a<b<c.",
          "Subtract 0, 1 and 2 from the sorted choices to remove the required gaps."
        ],
        "answer": "10.",
        "explanation": [
          "Map (a,b,c) to (a,b−1,c−2), three strictly increasing numbers from 1…5.",
          "This is reversible, so there are C(5,3)=10 sets."
        ]
      },
      "pl": {
        "title": "Wybór z odstępami",
        "question": "Wybierz trzy różne liczby całkowite 1–7 tak, aby żadne dwie nie były kolejne. Ile jest zbiorów?",
        "hints": [
          "Zapisz je jako a<b<c.",
          "Odejmij 0, 1 i 2, aby usunąć wymagane odstępy."
        ],
        "answer": "10.",
        "explanation": [
          "Przekształć (a,b,c) w (a,b−1,c−2), trzy rosnące liczby z 1…5.",
          "Przekształcenie jest odwracalne, więc zbiorów jest C(5,3)=10."
        ]
      },
      "ru": {
        "title": "Выбор с промежутками",
        "question": "Выберите три разных целых числа 1–7 без соседних чисел. Сколько наборов?",
        "hints": [
          "Запишите их a<b<c.",
          "Вычтите 0, 1, 2, убрав обязательные промежутки."
        ],
        "answer": "10.",
        "explanation": [
          "Преобразуйте (a,b,c) в (a,b−1,c−2): три строго возрастающих числа из 1…5.",
          "Преобразование обратимо, значит наборов C(5,3)=10."
        ]
      },
      "zh": {
        "title": "隔开的选择",
        "question": "从1至7中选三个不同整数，任意两个不相邻。有多少个集合？",
        "hints": [
          "写成a<b<c。",
          "分别减0、1、2，去掉强制间隔。"
        ],
        "answer": "10个。",
        "explanation": [
          "将(a,b,c)映射为(a,b−1,c−2)，得到1至5中三个严格递增数。",
          "映射可逆，因此有C(5,3)=10个。"
        ]
      }
    }
  }
] satisfies Puzzle[];
