import type {Puzzle} from '../types';

export const combinatorics = [
  {
    "id": "grid-paths",
    "category": "combinatorics",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Across the grid",
        "question": "A grid journey requires exactly 3 right steps and 2 up steps. No left or down moves. How many distinct step sequences reach the destination?",
        "hints": [
          "Each route is an ordering of five symbols.",
          "Choose where the two up steps go."
        ],
        "answer": "10.",
        "explanation": [
          "There are five step positions, with two occupied by up steps.",
          "Choosing these positions determines the route: C(5,2)=10."
        ]
      },
      "pl": {
        "title": "Przez siatkę",
        "question": "Trasa wymaga dokładnie 3 kroków w prawo i 2 w górę. Nie wolno iść w lewo ani w dół. Ile sekwencji prowadzi do celu?",
        "hints": [
          "Trasa to kolejność pięciu symboli.",
          "Wybierz pozycje dwóch kroków w górę."
        ],
        "answer": "10.",
        "explanation": [
          "Jest pięć pozycji kroków, dwie zajmują kroki w górę.",
          "Wybór tych pozycji ustala trasę: C(5,2)=10."
        ]
      },
      "ru": {
        "title": "Через сетку",
        "question": "Путь требует ровно 3 шага вправо и 2 вверх. Влево и вниз нельзя. Сколько последовательностей ведут к цели?",
        "hints": [
          "Путь — порядок пяти символов.",
          "Выберите места двух шагов вверх."
        ],
        "answer": "10.",
        "explanation": [
          "Из пяти мест два заняты шагами вверх.",
          "Их выбор определяет маршрут: C(5,2)=10."
        ]
      },
      "zh": {
        "title": "穿过网格",
        "question": "路线恰需向右3步、向上2步，不可左或下，有多少种步骤序列到终点？",
        "hints": [
          "路线是五个符号的排列。",
          "选择两个向上步骤的位置。"
        ],
        "answer": "10种。",
        "explanation": [
          "五个位置中两个向上。",
          "选定它们便确定路线，C(5,2)=10。"
        ]
      }
    }
  },
  {
    "id": "forbidden-point",
    "category": "combinatorics",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Avoid the fountain",
        "question": "Move from (0,0) to (3,3) using only unit right and up steps. The point (1,1) is forbidden. How many routes remain?",
        "hints": [
          "Subtract routes through the forbidden point.",
          "A forbidden route splits into a prefix and a suffix."
        ],
        "answer": "8.",
        "explanation": [
          "Total routes: C(6,3)=20. To (1,1) there are 2 routes; from there to (3,3) there are C(4,2)=6.",
          "Exactly 2×6=12 routes pass through it, leaving 20−12=8."
        ]
      },
      "pl": {
        "title": "Omiń fontannę",
        "question": "Idź z (0,0) do (3,3) jednostkowymi krokami w prawo i w górę. Punkt (1,1) jest zakazany. Ile tras zostaje?",
        "hints": [
          "Odejmij trasy przez zakazany punkt.",
          "Zakazana trasa dzieli się na początek i koniec."
        ],
        "answer": "8.",
        "explanation": [
          "Wszystkich tras jest C(6,3)=20. Do (1,1) są 2, a stamtąd do (3,3) C(4,2)=6.",
          "Przez ten punkt idzie 2×6=12, więc zostaje 20−12=8."
        ]
      },
      "ru": {
        "title": "Обойти фонтан",
        "question": "Идите из (0,0) в (3,3) единичными шагами вправо и вверх. Точка (1,1) запрещена. Сколько путей осталось?",
        "hints": [
          "Вычтите пути через запретную точку.",
          "Такой путь делится на начало и конец."
        ],
        "answer": "8.",
        "explanation": [
          "Всего C(6,3)=20. До (1,1) два пути, оттуда до (3,3) C(4,2)=6.",
          "Через точку проходят 2×6=12, остаётся 20−12=8."
        ]
      },
      "zh": {
        "title": "绕开喷泉",
        "question": "从(0,0)到(3,3)，每步向右或向上一个单位，禁止经过(1,1)。剩几条路线？",
        "hints": [
          "减去经过禁点的路线。",
          "经过禁点的路线可拆成前后两段。"
        ],
        "answer": "8条。",
        "explanation": [
          "总路线C(6,3)=20，到(1,1)有2条，此后到(3,3)有C(4,2)=6条。",
          "经过禁点共2×6=12条，剩20−12=8条。"
        ]
      }
    }
  },
  {
    "id": "derangements",
    "category": "combinatorics",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Nobody’s own envelope",
        "question": "Four distinct letters are placed one per envelope into four addressed envelopes. How many assignments put no letter in its correct envelope?",
        "hints": [
          "Use inclusion–exclusion on letters placed correctly.",
          "Start with 4!, then alternate corrections for one, two, three and four fixed letters."
        ],
        "answer": "9.",
        "explanation": [
          "There are 24 assignments. Subtract 4×3!=24 with a specified fixed letter, add C(4,2)×2!=12 for pairs.",
          "Subtract C(4,3)×1!=4, then add 1: 24−24+12−4+1=9."
        ]
      },
      "pl": {
        "title": "Nie ta koperta",
        "question": "Cztery różne listy trafiają po jednym do czterech zaadresowanych kopert. Ile przydziałów nie umieszcza żadnego listu poprawnie?",
        "hints": [
          "Użyj zasady włączeń i wyłączeń dla poprawnych listów.",
          "Zacznij od 4! i poprawiaj dla jednego, dwóch, trzech, czterech trafień."
        ],
        "answer": "9.",
        "explanation": [
          "Jest 24 przydziałów. Odejmij 4×3!=24 z wybranym trafieniem, dodaj C(4,2)×2!=12 za pary.",
          "Odejmij C(4,3)×1!=4, dodaj 1: 24−24+12−4+1=9."
        ]
      },
      "ru": {
        "title": "Не свой конверт",
        "question": "Четыре разных письма кладут по одному в четыре подписанных конверта. Сколько размещений не дают ни одного правильного?",
        "hints": [
          "Используйте включения–исключения по правильно размещённым письмам.",
          "Начните с 4! и чередуйте поправки для одного, двух, трёх, четырёх совпадений."
        ],
        "answer": "9.",
        "explanation": [
          "Всего 24. Вычтите 4×3!=24 с заданным правильно размещённым письмом, добавьте C(4,2)×2!=12 за пары.",
          "Вычтите C(4,3)×1!=4, добавьте 1: 24−24+12−4+1=9."
        ]
      },
      "zh": {
        "title": "都装错信封",
        "question": "四封不同信分别装入四个写好地址的信封，每封一个。没有任何信装对的分配有多少？",
        "hints": [
          "对“某封装对”用容斥。",
          "从4!开始，对一、二、三、四个固定点交替修正。"
        ],
        "answer": "9种。",
        "explanation": [
          "总24种，减4×3!=24，再加C(4,2)×2!=12。",
          "再减C(4,3)×1!=4，最后加1，得24−24+12−4+1=9。"
        ]
      }
    }
  },
  {
    "id": "binary-strings",
    "category": "combinatorics",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "No adjacent lights",
        "question": "Five lamps in a row are each on or off. Adjacent lamps may not both be on. How many allowed configurations, including all off?",
        "hints": [
          "Classify by the first lamp.",
          "If it is on, the next must be off."
        ],
        "answer": "13.",
        "explanation": [
          "Let f(n) count length n. An off first lamp leaves f(n−1); an on first lamp forces the next off, leaving f(n−2).",
          "With f(0)=1, f(1)=2, the values are 3,5,8,13 through n=5."
        ]
      },
      "pl": {
        "title": "Bez sąsiednich świateł",
        "question": "Pięć lamp w rzędzie jest włączonych lub wyłączonych. Sąsiednie nie mogą obie świecić. Ile układów, wliczając wszystkie wyłączone?",
        "hints": [
          "Podziel według pierwszej lampy.",
          "Jeśli świeci, następna musi być wyłączona."
        ],
        "answer": "13.",
        "explanation": [
          "Niech f(n) liczy układy. Wyłączona pierwsza zostawia f(n−1), włączona wymusza wyłączenie następnej i zostawia f(n−2).",
          "Dla f(0)=1, f(1)=2 kolejne wartości to 3,5,8,13 do n=5."
        ]
      },
      "ru": {
        "title": "Без соседних огней",
        "question": "Пять ламп в ряд включены или выключены. Две соседние не могут гореть вместе. Сколько схем, включая все выключенные?",
        "hints": [
          "Разделите случаи по первой лампе.",
          "Если она включена, следующая выключена."
        ],
        "answer": "13.",
        "explanation": [
          "Пусть f(n) считает схемы. Выключенная первая оставляет f(n−1); включённая вынуждает следующую быть выключенной и оставляет f(n−2).",
          "При f(0)=1, f(1)=2 дальше идут 3,5,8,13 до n=5."
        ]
      },
      "zh": {
        "title": "不相邻的灯",
        "question": "五盏灯排成一排，每盏开或关，相邻不可同时开，包括全关在内有几种合法配置？",
        "hints": [
          "按第一盏状态分类。",
          "第一盏开则第二盏必须关。"
        ],
        "answer": "13种。",
        "explanation": [
          "设f(n)为长度n配置数，首灯关留下f(n−1)，首灯开迫使次灯关，留下f(n−2)。",
          "f(0)=1、f(1)=2，之后依次3、5、8、13，到n=5为13。"
        ]
      }
    }
  },
  {
    "id": "catalan",
    "category": "combinatorics",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Balanced brackets",
        "question": "Using three opening and three closing parentheses, how many strings are properly balanced, so no prefix has more closings than openings?",
        "hints": [
          "Fix the closing bracket that matches the first opening.",
          "The inside and the remainder must each be balanced."
        ],
        "answer": "5.",
        "explanation": [
          "Let C0=1 and Cn=sum of Ci×C(n−1−i) over i=0…n−1, splitting around the first matching pair.",
          "C1=1, C2=2, so C3=1×2+1×1+2×1=5: ((())), (()()), (())(), ()(()), ()()()."
        ]
      },
      "pl": {
        "title": "Zrównoważone nawiasy",
        "question": "Używając trzech nawiasów otwierających i trzech zamykających, ile poprawnych ciągów można utworzyć? Żaden prefiks nie może mieć więcej zamknięć.",
        "hints": [
          "Ustal zamknięcie pasujące do pierwszego otwarcia.",
          "Wnętrze i reszta muszą być poprawne."
        ],
        "answer": "5.",
        "explanation": [
          "Niech C0=1, a Cn będzie sumą Ci×C(n−1−i) dla i=0…n−1, według pierwszej pary.",
          "C1=1, C2=2, więc C3=2+1+2=5: ((())), (()()), (())(), ()(()), ()()()."
        ]
      },
      "ru": {
        "title": "Правильные скобки",
        "question": "Из трёх открывающих и трёх закрывающих скобок сколько правильных строк, где ни в одном префиксе закрывающих не больше?",
        "hints": [
          "Выберите закрывающую для первой открывающей.",
          "Внутри и после пары должны быть правильные строки."
        ],
        "answer": "5.",
        "explanation": [
          "Пусть C0=1, Cn — сумма Ci×C(n−1−i) для i=0…n−1 по первой паре.",
          "C1=1, C2=2, значит C3=2+1+2=5: ((())), (()()), (())(), ()(()), ()()()."
        ]
      },
      "zh": {
        "title": "平衡括号",
        "question": "用三个左括号和三个右括号，能组成多少合法括号串，即任何前缀右括号不多于左括号？",
        "hints": [
          "确定与首个左括号匹配的右括号。",
          "配对内部与后续部分都必须平衡。"
        ],
        "answer": "5种。",
        "explanation": [
          "令C0=1，按首对括号内含i对拆分，Cn为i=0至n−1的Ci×C(n−1−i)之和。",
          "C1=1、C2=2，所以C3=2+1+2=5：((()))、(()())、(())()、()(())、()()()。"
        ]
      }
    }
  },
  {
    "id": "pigeonhole",
    "category": "combinatorics",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "A shared birthday month",
        "question": "How many people guarantee that at least three share a birth month? Assume twelve months and make no probability assumptions.",
        "hints": [
          "To avoid three in a month, cap every month at two.",
          "Fill all months to that cap before adding one more."
        ],
        "answer": "25.",
        "explanation": [
          "At most 24 people can occupy twelve months with two in each, so 24 does not guarantee a triple.",
          "The 25th forces some month to contain at least three by the pigeonhole principle."
        ]
      },
      "pl": {
        "title": "Wspólny miesiąc urodzenia",
        "question": "Ile osób gwarantuje, że co najmniej trzy urodziły się w tym samym miesiącu? Jest dwanaście miesięcy, bez założeń probabilistycznych.",
        "hints": [
          "Aby uniknąć trójki, każdy miesiąc może mieć najwyżej dwie osoby.",
          "Wypełnij wszystkie miesiące do limitu i dodaj jedną."
        ],
        "answer": "25.",
        "explanation": [
          "24 osoby można rozłożyć po dwie na miesiąc, więc nie gwarantują trójki.",
          "Osoba 25 wymusza co najmniej trzy w jednym miesiącu, zgodnie z zasadą szufladkową."
        ]
      },
      "ru": {
        "title": "Общий месяц рождения",
        "question": "Сколько людей гарантируют хотя бы троих с одним месяцем рождения? Месяцев двенадцать, вероятностных допущений нет.",
        "hints": [
          "Чтобы избежать тройки, в месяце максимум двое.",
          "Заполните все месяцы до предела и добавьте одного."
        ],
        "answer": "25.",
        "explanation": [
          "24 человека могут распределиться по двое на месяц, не гарантируя тройки.",
          "25-й вынуждает хотя бы один месяц содержать троих по принципу Дирихле."
        ]
      },
      "zh": {
        "title": "同一出生月份",
        "question": "十二个月，不作概率假设。多少人能保证至少三人出生月份相同？",
        "hints": [
          "避免三人同月时，每月最多两人。",
          "填满每月上限，再加一人。"
        ],
        "answer": "25人。",
        "explanation": [
          "24人可每月两人，不保证三人同月。",
          "第25人必使某月至少三人，即抽屉原理。"
        ]
      }
    }
  },
  {
    "id": "subsets-sum",
    "category": "combinatorics",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A guaranteed pair",
        "question": "Choose six distinct integers from 1 through 10. Must two chosen numbers sum to 11?",
        "hints": [
          "Partition the whole set into complementary pairs.",
          "How many pairs can you touch without taking both members?"
        ],
        "answer": "Yes.",
        "explanation": [
          "The five pairs are (1,10), (2,9), (3,8), (4,7), (5,6).",
          "Choosing six numbers forces two from one pair, so their sum is 11."
        ]
      },
      "pl": {
        "title": "Gwarantowana para",
        "question": "Wybierz sześć różnych liczb całkowitych 1–10. Czy dwie wybrane muszą sumować się do 11?",
        "hints": [
          "Podziel cały zbiór na pary dopełniające.",
          "Ile par można dotknąć bez wybrania obu elementów?"
        ],
        "answer": "Tak.",
        "explanation": [
          "Pięć par to (1,10), (2,9), (3,8), (4,7), (5,6).",
          "Sześć wyborów wymusza dwa z jednej pary, więc ich suma wynosi 11."
        ]
      },
      "ru": {
        "title": "Гарантированная пара",
        "question": "Выберите шесть разных целых чисел 1–10. Обязательно ли два дадут сумму 11?",
        "hints": [
          "Разбейте весь набор на дополняющие пары.",
          "Сколько пар можно затронуть, не взяв обеих частей?"
        ],
        "answer": "Да.",
        "explanation": [
          "Пять пар: (1,10), (2,9), (3,8), (4,7), (5,6).",
          "Шесть выбранных чисел вынуждают взять два из одной пары, дающей 11."
        ]
      },
      "zh": {
        "title": "必有一对",
        "question": "从1至10选六个不同整数，必有两个和为11吗？",
        "hints": [
          "将全部数字分成互补数对。",
          "每对最多取一个能取几个？"
        ],
        "answer": "必然。",
        "explanation": [
          "五对为(1,10)、(2,9)、(3,8)、(4,7)、(5,6)。",
          "取六个必从某对取两个，其和为11。"
        ]
      }
    }
  },
  {
    "id": "stars-bars",
    "category": "combinatorics",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Sharing identical tokens",
        "question": "Distribute 8 identical tokens among 3 named people, each receiving at least one. How many allocations?",
        "hints": [
          "Give everyone one token first.",
          "Represent the remainder with tokens and two separators."
        ],
        "answer": "21.",
        "explanation": [
          "After giving one each, distribute 5 freely. Encode with five token marks and two separators.",
          "Choose the two separator positions among seven: C(7,2)=21."
        ]
      },
      "pl": {
        "title": "Podział jednakowych żetonów",
        "question": "Rozdziel 8 jednakowych żetonów między 3 oznaczone osoby, każdej co najmniej jeden. Ile przydziałów?",
        "hints": [
          "Najpierw daj każdej po jednym.",
          "Resztę przedstaw żetonami i dwoma separatorami."
        ],
        "answer": "21.",
        "explanation": [
          "Po jednym dla każdego zostaje 5 do swobodnego podziału. Zapisz pięć znaków żetonów i dwa separatory.",
          "Wybierz miejsca separatorów spośród siedmiu: C(7,2)=21."
        ]
      },
      "ru": {
        "title": "Делим одинаковые жетоны",
        "question": "Распределите 8 одинаковых жетонов между 3 различимыми людьми, каждому хотя бы один. Сколько распределений?",
        "hints": [
          "Сначала дайте каждому один.",
          "Остаток представьте жетонами и двумя разделителями."
        ],
        "answer": "21.",
        "explanation": [
          "После выдачи по одному остаётся 5. Кодируем пятью знаками жетонов и двумя разделителями.",
          "Выберите два места разделителей из семи: C(7,2)=21."
        ]
      },
      "zh": {
        "title": "分相同代币",
        "question": "八枚相同代币分给三位指定的人，每人至少一枚，有多少分配？",
        "hints": [
          "先每人发一枚。",
          "余下用代币符号和两个分隔符表示。"
        ],
        "answer": "21种。",
        "explanation": [
          "先发三枚，剩五枚任意分，用五个代币符号与两个分隔符编码。",
          "七个位置选两个放分隔符，C(7,2)=21。"
        ]
      }
    }
  },
  {
    "id": "regions-lines",
    "category": "combinatorics",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Four straight cuts",
        "question": "What is the maximum number of regions four infinite straight lines can divide a plane into?",
        "hints": [
          "Each new line is cut into segments by earlier lines.",
          "Make all intersections distinct and avoid parallel lines."
        ],
        "answer": "11.",
        "explanation": [
          "With k−1 earlier lines, line k meets at most k−1 points, making at most k segments and adding k regions.",
          "Starting from one region gives 1+1+2+3+4=11, attained with no parallels and no triple intersections."
        ]
      },
      "pl": {
        "title": "Cztery proste",
        "question": "Na ile obszarów maksymalnie cztery nieskończone proste dzielą płaszczyznę?",
        "hints": [
          "Poprzednie proste tną nową na odcinki.",
          "Unikaj równoległości i wspólnych przecięć trzech prostych."
        ],
        "answer": "11.",
        "explanation": [
          "Przy k−1 wcześniejszych prostych nowa ma najwyżej k−1 przecięć, k części i dodaje najwyżej k obszarów.",
          "Od jednego obszaru: 1+1+2+3+4=11. Osiągamy to bez równoległych i potrójnych przecięć."
        ]
      },
      "ru": {
        "title": "Четыре прямые",
        "question": "На сколько областей максимум четыре бесконечные прямые делят плоскость?",
        "hints": [
          "Предыдущие прямые делят новую на части.",
          "Избегайте параллелей и общих точек трёх прямых."
        ],
        "answer": "11.",
        "explanation": [
          "При k−1 прежних прямых новая имеет максимум k−1 пересечений и k частей, добавляя максимум k областей.",
          "С одной начальной областью: 1+1+2+3+4=11. Граница достигается без параллелей и тройных пересечений."
        ]
      },
      "zh": {
        "title": "四条直线",
        "question": "四条无限直线最多把平面分成几个区域？",
        "hints": [
          "已有直线将新直线切成若干段。",
          "避免平行及三线共点。"
        ],
        "answer": "11个。",
        "explanation": [
          "第k条最多与此前k−1条交于k−1点，形成k段，增加至多k区。",
          "从一个区域开始，1+1+2+3+4=11，无平行、无三线共点时达到。"
        ]
      }
    }
  },
  {
    "id": "necklaces",
    "category": "combinatorics",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "A four-bead loop",
        "question": "Color each of four positions on a circular necklace black or white. Rotations count as identical, reflections remain distinct. How many color patterns?",
        "hints": [
          "Group by the number of black beads.",
          "Two black beads can be adjacent or opposite."
        ],
        "answer": "6.",
        "explanation": [
          "There is one pattern each with 0,1,3,4 black beads.",
          "With two black beads, adjacent and opposite give two patterns. Total 1+1+2+1+1=6; for four positions each reflected pattern happens also to be a rotation."
        ]
      },
      "pl": {
        "title": "Pętla czterech koralików",
        "question": "Cztery miejsca na okrągłym naszyjniku są czarne lub białe. Obroty liczą się jako to samo, odbicia pozostają różne. Ile wzorów?",
        "hints": [
          "Podziel według liczby czarnych koralików.",
          "Dwa czarne mogą sąsiadować albo leżeć naprzeciw."
        ],
        "answer": "6.",
        "explanation": [
          "Po jednym wzorze ma 0,1,3,4 czarne koraliki.",
          "Przy dwóch są dwa układy: sąsiednie i przeciwległe. Suma 1+1+2+1+1=6; tutaj każde odbicie jest też obrotem."
        ]
      },
      "ru": {
        "title": "Петля из четырёх бусин",
        "question": "Четыре места круглого ожерелья чёрные или белые. Повороты одинаковы, отражения различаются. Сколько узоров?",
        "hints": [
          "Разбейте по числу чёрных бусин.",
          "Две чёрные могут быть рядом или напротив."
        ],
        "answer": "6.",
        "explanation": [
          "По одному узору имеют 0,1,3,4 чёрные бусины.",
          "При двух есть соседний и противоположный варианты. Всего 1+1+2+1+1=6; здесь каждое отражение совпадает и с некоторым поворотом."
        ]
      },
      "zh": {
        "title": "四珠圆环",
        "question": "圆形项链四个位置各涂黑或白，旋转算相同，镜像不合并。有多少图案？",
        "hints": [
          "按黑珠数量分类。",
          "两黑珠可相邻或相对。"
        ],
        "answer": "6种。",
        "explanation": [
          "0、1、3、4黑珠各一种。",
          "两黑珠分相邻与相对两种，共1+1+2+1+1=6；四位置的这些图案恰好都与自身镜像旋转等价。"
        ]
      }
    }
  }
] satisfies Puzzle[];
