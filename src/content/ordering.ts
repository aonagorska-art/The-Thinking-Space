import type {Puzzle} from '../types';

export const ordering = [
  {
    "id": "queue",
    "category": "ordering",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "A very orderly queue",
        "question": "A, B, C and D stand in a line. A is before B; C is immediately after B; D is before A. What is the order?",
        "hints": [
          "Treat B and C as one block.",
          "Place the remaining people using the two before relations."
        ],
        "answer": "D, A, B, C.",
        "explanation": [
          "B must be followed by C.",
          "A precedes that block and D precedes A, fixing all four positions."
        ]
      },
      "pl": {
        "title": "Bardzo uporządkowana kolejka",
        "question": "A, B, C i D stoją w kolejce. A jest przed B, C bezpośrednio za B, a D przed A. Jaka jest kolejność?",
        "hints": [
          "Potraktuj B i C jako jeden blok.",
          "Ustaw pozostałe osoby według relacji „przed”."
        ],
        "answer": "D, A, B, C.",
        "explanation": [
          "Po B musi bezpośrednio stać C.",
          "A poprzedza ten blok, a D poprzedza A, co ustala całą kolejność."
        ]
      },
      "ru": {
        "title": "Очень аккуратная очередь",
        "question": "A, B, C и D стоят в очереди. A перед B; C сразу за B; D перед A. Каков порядок?",
        "hints": [
          "Считайте B и C одним блоком.",
          "Разместите остальных по отношениям «перед»."
        ],
        "answer": "D, A, B, C.",
        "explanation": [
          "За B обязательно идёт C.",
          "A стоит перед блоком, D перед A: все места определены."
        ]
      },
      "zh": {
        "title": "整齐的队伍",
        "question": "A、B、C、D排队。A在B前面，C紧跟B后面，D在A前面。顺序是什么？",
        "hints": [
          "把B和C看成一个整体。",
          "用两个“在前面”的条件安排剩下的人。"
        ],
        "answer": "D、A、B、C。",
        "explanation": [
          "B后面必须紧接C。",
          "A在这个整体之前，D又在A之前，顺序唯一。"
        ]
      }
    }
  },
  {
    "id": "race-rank",
    "category": "ordering",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Passing someone",
        "question": "In a race with no ties or lapped runners, you overtake the runner currently in second place. What place are you in immediately afterward, before any other pass?",
        "hints": [
          "You take the position of the person you pass.",
          "Someone was still ahead of that runner."
        ],
        "answer": "Second.",
        "explanation": [
          "The overtaken runner was behind only the leader.",
          "You replace them in second place; you have not passed the leader."
        ]
      },
      "pl": {
        "title": "Wyprzedzanie",
        "question": "W biegu bez remisów i zdublowanych zawodników wyprzedzasz osobę na drugim miejscu. Które miejsce zajmujesz od razu potem, przed kolejnym wyprzedzeniem?",
        "hints": [
          "Zajmujesz miejsce wyprzedzonej osoby.",
          "Przed nią nadal ktoś biegł."
        ],
        "answer": "Drugie.",
        "explanation": [
          "Wyprzedzona osoba była tylko za liderem.",
          "Zajmujesz jej drugie miejsce, bo lidera nie wyprzedzasz."
        ]
      },
      "ru": {
        "title": "Обгон",
        "question": "В забеге без ничьих и отставших на круг вы обгоняете бегуна на втором месте. Какое место вы занимаете сразу после этого, до других обгонов?",
        "hints": [
          "Вы занимаете место обогнанного.",
          "Кто-то всё ещё был перед ним."
        ],
        "answer": "Второе.",
        "explanation": [
          "Обогнанный уступал только лидеру.",
          "Вы занимаете его второе место, не обогнав лидера."
        ]
      },
      "zh": {
        "title": "超越一人",
        "question": "一场比赛没有并列，也没有被套圈者。你超过了当时第二名的选手。紧接着，在其他超越发生前，你是第几名？",
        "hints": [
          "你接替了被超越者的位置。",
          "原本还有人在他前面。"
        ],
        "answer": "第二名。",
        "explanation": [
          "被超越者前面只有领跑者。",
          "你取代了第二名，但没有超过领跑者。"
        ]
      }
    }
  },
  {
    "id": "books",
    "category": "ordering",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A shelf with conditions",
        "question": "Five distinct books A–E fill a shelf. C is in the middle. A is left of C. B is immediately right of A. E is right of D. Find the order.",
        "hints": [
          "Can A occupy the second position?",
          "Once A and B are placed, only two slots remain."
        ],
        "answer": "A, B, C, D, E.",
        "explanation": [
          "A cannot be second because B would collide with C in third, so A is first and B second.",
          "D and E take fourth and fifth, in that order."
        ]
      },
      "pl": {
        "title": "Półka z warunkami",
        "question": "Pięć książek A–E zajmuje półkę. C jest pośrodku. A stoi na lewo od C, B bezpośrednio na prawo od A, E na prawo od D. Ustal kolejność.",
        "hints": [
          "Czy A może być na drugim miejscu?",
          "Po ustawieniu A i B pozostają dwa miejsca."
        ],
        "answer": "A, B, C, D, E.",
        "explanation": [
          "A nie może być druga, bo B zajęłaby miejsce C. Zatem A jest pierwsza, B druga.",
          "D i E zajmują czwarte i piąte miejsce w tej kolejności."
        ]
      },
      "ru": {
        "title": "Полка с условиями",
        "question": "Пять книг A–E стоят на полке. C посередине. A левее C, B сразу справа от A, E правее D. Найдите порядок.",
        "hints": [
          "Может ли A стоять второй?",
          "После A и B останутся два места."
        ],
        "answer": "A, B, C, D, E.",
        "explanation": [
          "A не вторая, иначе B заняла бы место C. Значит A первая, B вторая.",
          "D и E стоят четвёртой и пятой в указанном порядке."
        ]
      },
      "zh": {
        "title": "有条件的书架",
        "question": "五本不同的书A至E排一排。C在中间，A在C左边，B紧靠A右边，E在D右边。顺序是什么？",
        "hints": [
          "A能在第二个位置吗？",
          "排好A和B后只剩两个位置。"
        ],
        "answer": "A、B、C、D、E。",
        "explanation": [
          "若A第二，B就与第三位的C冲突，所以A第一，B第二。",
          "D和E只能依次位于第四、第五。"
        ]
      }
    }
  },
  {
    "id": "median-comparisons",
    "category": "ordering",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The middle weight",
        "question": "Three objects have distinct weights. A comparison tells which of two is heavier. What is the minimum worst-case number of comparisons to find the middle-weight object?",
        "hints": [
          "Compare two, then compare their heavier member with the third.",
          "One branch leaves the lighter pair unresolved."
        ],
        "answer": "3.",
        "explanation": [
          "Compare A and B, naming the heavier B. Compare B and C. If C is heavier, B is the middle; otherwise compare A and C and choose the heavier.",
          "Two comparisons cannot always suffice: an outcome with one object above both others leaves those two unordered, so either could be the middle."
        ]
      },
      "pl": {
        "title": "Środkowa waga",
        "question": "Trzy przedmioty mają różne masy. Porównanie wskazuje cięższy z dwóch. Ile porównań potrzeba co najmniej w najgorszym przypadku, by znaleźć środkową masę?",
        "hints": [
          "Porównaj dwa, potem cięższy z trzecim.",
          "W jednej gałęzi lżejsza para pozostaje nierozstrzygnięta."
        ],
        "answer": "3.",
        "explanation": [
          "Porównaj A i B, nazywając cięższy B. Porównaj B i C. Jeśli C jest cięższy, B jest środkowy; inaczej porównaj A z C i wybierz cięższy.",
          "Dwa porównania nie zawsze wystarczą: gdy jeden przedmiot przewyższa oba pozostałe, ich kolejność pozostaje nieznana."
        ]
      },
      "ru": {
        "title": "Средний вес",
        "question": "У трёх предметов разные веса. Сравнение показывает, какой из двух тяжелее. Каково минимальное число сравнений в худшем случае для поиска среднего по весу?",
        "hints": [
          "Сравните два, затем более тяжёлый с третьим.",
          "В одной ветви лёгкая пара останется неупорядоченной."
        ],
        "answer": "3.",
        "explanation": [
          "Сравните A и B, назвав более тяжёлый B. Сравните B с C. Если C тяжелее, средний B; иначе сравните A с C и выберите более тяжёлый.",
          "Двух сравнений не всегда хватает: если один тяжелее обоих, порядок двух оставшихся неизвестен."
        ]
      },
      "zh": {
        "title": "中间重量",
        "question": "三个物体重量各不相同，每次可比较两个谁更重。找出重量居中的物体，最坏情况下最少需要比较几次？",
        "hints": [
          "先比较两个，再将较重者与第三个比较。",
          "某个分支中，较轻的两个仍未比较。"
        ],
        "answer": "3次。",
        "explanation": [
          "比较A与B，将较重者命名为B。再比B与C；若C更重，B居中，否则比较A与C，较重者居中。",
          "两次无法保证：若一个物体比另外两个都重，那两个的顺序仍未知，都可能居中。"
        ]
      }
    }
  },
  {
    "id": "tournament",
    "category": "ordering",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "The runner-up certificate",
        "question": "Eight players have distinct fixed strengths; the stronger always wins. A balanced knockout finds the strongest. How many further matches suffice, and are necessary in the worst case, to find the second strongest?",
        "hints": [
          "Only someone beaten directly by the champion can be second.",
          "How many direct opponents did the champion face?"
        ],
        "answer": "2 further matches.",
        "explanation": [
          "The champion beat three opponents, one per round. Every other player lost to a non-champion and cannot be second.",
          "Find the strongest of those three with two matches. They have not played one another, so fewer than two cannot eliminate two candidates."
        ]
      },
      "pl": {
        "title": "Certyfikat wicemistrza",
        "question": "Ośmiu graczy ma stałe, różne siły; silniejszy zawsze wygrywa. Zrównoważony turniej pucharowy wyłania mistrza. Ile dodatkowych meczów wystarcza i jest konieczne w najgorszym przypadku, aby znaleźć drugiego najlepszego?",
        "hints": [
          "Drugi mógł przegrać tylko bezpośrednio z mistrzem.",
          "Ilu rywali mistrz pokonał osobiście?"
        ],
        "answer": "2 dodatkowe mecze.",
        "explanation": [
          "Mistrz pokonał trzech rywali, po jednym w rundzie. Pozostali przegrali z kimś innym, więc nie są drudzy.",
          "Najsilniejszego z tej trójki wyłonią dwa mecze. Nie grali ze sobą, więc mniej niż dwa nie wyeliminuje dwóch kandydatów."
        ]
      },
      "ru": {
        "title": "Сертификат второго места",
        "question": "У восьми игроков постоянные разные силы; сильнейший всегда побеждает. Сбалансированный турнир на выбывание находит чемпиона. Сколько дополнительных матчей достаточно и необходимо в худшем случае для второго места?",
        "hints": [
          "Вторым может быть лишь проигравший самому чемпиону.",
          "Сколько прямых соперников было у чемпиона?"
        ],
        "answer": "2 дополнительных матча.",
        "explanation": [
          "Чемпион победил троих, по одному в раунде. Остальные проиграли не чемпиону и не могут быть вторыми.",
          "Сильнейшего из троих определят два матча. Они не встречались друг с другом, поэтому менее двух не исключат двух кандидатов."
        ]
      },
      "zh": {
        "title": "亚军的证明",
        "question": "八位选手实力固定且互不相同，强者必胜。平衡的单败淘汰赛已找出冠军。为确定真正的第二强者，最坏情况下还需要且只需几场？",
        "hints": [
          "第二强者只能直接输给冠军。",
          "冠军直接战胜了几人？"
        ],
        "answer": "再赛2场。",
        "explanation": [
          "冠军每轮赢一人，共赢三人。其他人曾输给非冠军，不可能第二强。",
          "用两场找出这三人中最强者。他们互未交手，少于两场无法排除两个候选者。"
        ]
      }
    }
  },
  {
    "id": "partial-order",
    "category": "ordering",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Two independent pairs",
        "question": "Four tasks A, B, C, D must be done one at a time. A must precede B and C must precede D; there are no other restrictions. How many orders are valid?",
        "hints": [
          "Choose the two slots occupied by the A–B pair.",
          "Within each chosen pair of slots the order is fixed."
        ],
        "answer": "6.",
        "explanation": [
          "Choose 2 of 4 slots for A and B: C(4,2)=6.",
          "A takes the earlier chosen slot, B the later; C and D fill the others in order."
        ]
      },
      "pl": {
        "title": "Dwie niezależne pary",
        "question": "Cztery zadania A, B, C, D wykonuje się kolejno. A musi poprzedzać B, a C poprzedzać D. Innych ograniczeń nie ma. Ile kolejności jest poprawnych?",
        "hints": [
          "Wybierz dwa miejsca dla pary A–B.",
          "Kolejność wewnątrz każdej pary jest ustalona."
        ],
        "answer": "6.",
        "explanation": [
          "Wybieramy 2 z 4 miejsc dla A i B: C(4,2)=6.",
          "A zajmuje wcześniejsze wybrane miejsce, B późniejsze, a C i D pozostałe w swojej kolejności."
        ]
      },
      "ru": {
        "title": "Две независимые пары",
        "question": "Четыре задачи A, B, C, D выполняют по одной. A раньше B, C раньше D; других ограничений нет. Сколько допустимых порядков?",
        "hints": [
          "Выберите два места для пары A–B.",
          "Внутри каждой пары порядок фиксирован."
        ],
        "answer": "6.",
        "explanation": [
          "Выбираем 2 из 4 мест для A и B: C(4,2)=6.",
          "A занимает раннее, B позднее выбранное место; C и D заполняют остальные по порядку."
        ]
      },
      "zh": {
        "title": "两对独立任务",
        "question": "A、B、C、D四项任务逐一完成。A必须早于B，C必须早于D，无其他限制。有多少合法顺序？",
        "hints": [
          "选择A、B占据的两个位置。",
          "每对内部顺序已固定。"
        ],
        "answer": "6种。",
        "explanation": [
          "从四个位置选两个给A、B，组合数C(4,2)=6。",
          "A占较早位置，B占较晚位置，C、D按顺序填剩下位置。"
        ]
      }
    }
  },
  {
    "id": "circular-seats",
    "category": "ordering",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Around the small table",
        "question": "Four people A, B, C, D sit around a circular table. Rotations count as the same arrangement; reflections differ. A must sit opposite B. How many arrangements are possible?",
        "hints": [
          "Fix A’s seat to remove rotations.",
          "Only the two seats beside A remain free."
        ],
        "answer": "2.",
        "explanation": [
          "Fix A anywhere and place B opposite.",
          "C and D can occupy the remaining seats in either order, producing two reflected arrangements."
        ]
      },
      "pl": {
        "title": "Przy małym stole",
        "question": "A, B, C i D siedzą przy okrągłym stole. Obroty uznajemy za ten sam układ, odbicia za różne. A musi siedzieć naprzeciw B. Ile jest układów?",
        "hints": [
          "Ustal miejsce A, aby usunąć obroty.",
          "Zostają dwa miejsca obok A."
        ],
        "answer": "2.",
        "explanation": [
          "Ustaw A w dowolnym miejscu, a B naprzeciw.",
          "C i D mogą zająć pozostałe miejsca w dwóch kolejnościach, będących odbiciami."
        ]
      },
      "ru": {
        "title": "За маленьким столом",
        "question": "A, B, C, D сидят за круглым столом. Повороты считаются одинаковыми, отражения разными. A должен быть напротив B. Сколько расстановок?",
        "hints": [
          "Зафиксируйте место A, исключив повороты.",
          "Свободны только два места рядом с A."
        ],
        "answer": "2.",
        "explanation": [
          "Посадите A где угодно, B напротив.",
          "C и D занимают оставшиеся места двумя способами, зеркальными друг другу."
        ]
      },
      "zh": {
        "title": "小圆桌旁",
        "question": "A、B、C、D围坐圆桌，旋转视为同一排法，镜像视为不同。A必须与B相对，有多少种排法？",
        "hints": [
          "固定A的位置，消除旋转重复。",
          "只剩A两侧的两个座位。"
        ],
        "answer": "2种。",
        "explanation": [
          "固定A，再把B放在对面。",
          "C和D以两种顺序填入剩余座位，得到互为镜像的两种排法。"
        ]
      }
    }
  },
  {
    "id": "rank-sum",
    "category": "ordering",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Ranks in two trials",
        "question": "Three runners A, B, C finish two trials with no ties. Each trial awards rank 1, 2 or 3. Their rank sums are A=2, B=5, C=5. What must be true about the two trials?",
        "hints": [
          "A’s sum is the smallest possible.",
          "After placing A, examine how B and C can each total 5."
        ],
        "answer": "A wins both; B and C exchange second and third.",
        "explanation": [
          "Only 1+1 gives A a sum of 2.",
          "The remaining ranks in each trial are 2 and 3. Each of B and C must receive one of each to sum to 5."
        ]
      },
      "pl": {
        "title": "Suma miejsc",
        "question": "A, B i C kończą dwa biegi bez remisów. Każdy bieg daje miejsca 1, 2, 3. Sumy miejsc wynoszą A=2, B=5, C=5. Co musi być prawdą?",
        "hints": [
          "Suma A jest najmniejsza z możliwych.",
          "Po ustawieniu A sprawdź, jak uzyskać po 5 dla B i C."
        ],
        "answer": "A wygrywa oba; B i C zamieniają się miejscami drugim i trzecim.",
        "explanation": [
          "Tylko 1+1 daje A sumę 2.",
          "W każdym biegu zostają miejsca 2 i 3. B i C muszą dostać po jednym z każdego, aby uzyskać 5."
        ]
      },
      "ru": {
        "title": "Суммы мест",
        "question": "A, B, C пробежали два забега без ничьих. В каждом места 1, 2, 3. Суммы мест: A=2, B=5, C=5. Что обязательно верно?",
        "hints": [
          "Сумма A минимальна.",
          "После A подумайте, как B и C получить по 5."
        ],
        "answer": "A выиграл оба; B и C поменялись вторым и третьим.",
        "explanation": [
          "Только 1+1 даёт A сумму 2.",
          "Остаются места 2 и 3 в каждом забеге. B и C должны получить по одному из каждого."
        ]
      },
      "zh": {
        "title": "两轮名次之和",
        "question": "A、B、C参加两轮比赛，都无并列，每轮名次为1、2、3。两轮名次和为A=2、B=5、C=5。必然发生了什么？",
        "hints": [
          "A的总和已经最小。",
          "确定A后，想想B、C怎样各得到5。"
        ],
        "answer": "A两轮都第一，B、C交换第二和第三。",
        "explanation": [
          "只有1+1能让A总和为2。",
          "每轮剩下2、3名，B、C各需得到一次第二、一次第三，总和才为5。"
        ]
      }
    }
  },
  {
    "id": "minmax",
    "category": "ordering",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Both ends of the list",
        "question": "Six values are distinct. Find both minimum and maximum using pairwise comparisons. What minimum number guarantees success?",
        "hints": [
          "Pair values first, separating potential minima and maxima.",
          "Three initial comparisons create two groups of three."
        ],
        "answer": "7.",
        "explanation": [
          "Compare three disjoint pairs. Find the minimum of the three losers in two comparisons and maximum of the three winners in two more: 3+2+2=7.",
          "An adversary answers consistently with known winners above known losers. Each element must lose maximum candidacy or minimum candidacy; only a first comparison between two untouched elements can remove both at once. At most three comparisons save a step this way. Removing 10 candidacies thus needs at least 10−3=7."
        ]
      },
      "pl": {
        "title": "Oba końce listy",
        "question": "Sześć wartości jest różnych. Znajdź minimum i maksimum przez porównania parami. Jaka najmniejsza liczba gwarantuje wynik?",
        "hints": [
          "Najpierw utwórz pary, dzieląc kandydatów na minima i maksima.",
          "Trzy porównania tworzą dwie grupy po trzy."
        ],
        "answer": "7.",
        "explanation": [
          "Porównaj trzy rozłączne pary. Minimum trzech mniejszych znajdziesz w dwóch porównaniach, maksimum trzech większych w dwóch: 3+2+2=7.",
          "Przeciwnik może odpowiadać zgodnie z zasadą, że znani zwycięzcy przewyższają znanych przegranych. Tylko porównanie dwóch nietkniętych elementów może usunąć naraz dwie kandydatury. Takich oszczędności jest najwyżej trzy; usunięcie 10 kandydatur wymaga co najmniej 10−3=7 porównań."
        ]
      },
      "ru": {
        "title": "Оба конца списка",
        "question": "Шесть значений различны. Найдите минимум и максимум попарными сравнениями. Какое минимальное число гарантирует результат?",
        "hints": [
          "Сначала разбейте значения на пары, отделив кандидатов в минимум от максимума.",
          "Три сравнения создадут две тройки."
        ],
        "answer": "7.",
        "explanation": [
          "Сравните три непересекающиеся пары. Найдите минимум среди трёх проигравших за два сравнения, максимум среди победителей ещё за два: всего 7.",
          "Противник может отвечать так, что известные победители выше известных проигравших. Лишь сравнение двух ещё не тронутых элементов убирает сразу две кандидатуры. Таких экономий не более трёх; устранение 10 кандидатур требует хотя бы 10−3=7 сравнений."
        ]
      },
      "zh": {
        "title": "列表的两端",
        "question": "六个数互不相同，只能两两比较。要同时找到最小值和最大值，最少几次能保证成功？",
        "hints": [
          "先分对，分开最小值候选者和最大值候选者。",
          "三次比较会形成两组三个候选者。"
        ],
        "answer": "7次。",
        "explanation": [
          "将六数分三对比较，再用两次找出三个较小者的最小值，两次找出三个较大者的最大值，共3+2+2=7。",
          "对手可始终让已知胜者高于已知败者。只有两个尚未比较过的数相遇，才会同时消除两个资格；这种节省最多三次。总共要消除10个最大或最小资格，至少需10−3=7次。"
        ]
      }
    }
  },
  {
    "id": "adjacent-swaps",
    "category": "ordering",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "One neighboring swap at a time",
        "question": "The list is 3, 1, 4, 2. One move swaps adjacent entries. What is the minimum number of moves to put it in increasing order?",
        "hints": [
          "Count pairs currently in the wrong relative order.",
          "An adjacent swap changes that count by exactly one."
        ],
        "answer": "3.",
        "explanation": [
          "The inversions are (3,1), (3,2), (4,2), so at least three swaps are needed.",
          "Use 3142 → 1342 → 1324 → 1234, attaining three."
        ]
      },
      "pl": {
        "title": "Zamiana sąsiadów",
        "question": "Lista to 3, 1, 4, 2. Ruch zamienia dwa sąsiednie elementy. Ile ruchów potrzeba co najmniej do uporządkowania rosnąco?",
        "hints": [
          "Policz pary o błędnej kolejności.",
          "Zamiana sąsiadów zmienia ten licznik dokładnie o jeden."
        ],
        "answer": "3.",
        "explanation": [
          "Inwersje to (3,1), (3,2), (4,2), więc potrzeba co najmniej trzech zamian.",
          "Sekwencja 3142 → 1342 → 1324 → 1234 osiąga ten wynik."
        ]
      },
      "ru": {
        "title": "Только соседние обмены",
        "question": "Список: 3, 1, 4, 2. За ход меняют местами соседей. Сколько минимум ходов нужно для возрастающего порядка?",
        "hints": [
          "Посчитайте пары в неверном относительном порядке.",
          "Обмен соседей меняет это число ровно на один."
        ],
        "answer": "3.",
        "explanation": [
          "Инверсии: (3,1), (3,2), (4,2), значит нужно хотя бы три обмена.",
          "3142 → 1342 → 1324 → 1234 достигает границы."
        ]
      },
      "zh": {
        "title": "只交换相邻项",
        "question": "列表是3、1、4、2。每步交换相邻两项，最少几步能按升序排列？",
        "hints": [
          "数一数相对顺序错误的数对。",
          "一次相邻交换使这个数量恰好改变一。"
        ],
        "answer": "3步。",
        "explanation": [
          "逆序对是(3,1)、(3,2)、(4,2)，至少需要三次交换。",
          "3142 → 1342 → 1324 → 1234，正好三步。"
        ]
      }
    }
  }
] satisfies Puzzle[];
