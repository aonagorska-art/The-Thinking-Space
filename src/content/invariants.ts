import type {Puzzle} from '../types';

export const invariants = [
  {
    "id": "domino-board",
    "category": "invariants",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Two missing corners",
        "question": "Remove two diagonally opposite corner squares from an 8×8 chessboard. Can the rest be tiled by 1×2 dominoes, each covering two edge-adjacent squares?",
        "hints": [
          "Color the board like a chessboard.",
          "Every domino covers one square of each color."
        ],
        "answer": "No.",
        "explanation": [
          "Opposite corners have the same color. Removing them leaves 30 squares of that color and 32 of the other.",
          "Each domino covers one of each, so any tiling would require equal color counts, impossible here."
        ]
      },
      "pl": {
        "title": "Dwa brakujące rogi",
        "question": "Usuń dwa przeciwległe po przekątnej narożniki szachownicy 8×8. Czy resztę pokryją domina 1×2, każde na dwóch polach stykających się bokiem?",
        "hints": [
          "Pokoloruj szachownicę naprzemiennie.",
          "Każde domino pokrywa po jednym polu każdego koloru."
        ],
        "answer": "Nie.",
        "explanation": [
          "Przeciwległe narożniki mają ten sam kolor. Usunięcie zostawia 30 tego koloru i 32 drugiego.",
          "Domino pokrywa po jednym z każdego, więc wymaga równych liczebności. To niemożliwe."
        ]
      },
      "ru": {
        "title": "Два пропавших угла",
        "question": "Удалите диагонально противоположные угловые клетки доски 8×8. Можно ли замостить остаток домино 1×2 по двум соседним по стороне клеткам?",
        "hints": [
          "Раскрасьте доску шахматно.",
          "Каждое домино покрывает по клетке каждого цвета."
        ],
        "answer": "Нет.",
        "explanation": [
          "Противоположные углы одного цвета. После удаления остаются 30 клеток этого цвета и 32 другого.",
          "Домино покрывает по одной каждого цвета, требуя равных количеств, чего нет."
        ]
      },
      "zh": {
        "title": "缺失的两角",
        "question": "8×8棋盘移去对角的两个角格，剩余能用1×2骨牌铺满吗？每块覆盖共边两格。",
        "hints": [
          "按棋盘黑白着色。",
          "每块骨牌覆盖一黑一白。"
        ],
        "answer": "不能。",
        "explanation": [
          "对角角格同色，移去后该色30格，另一色32格。",
          "骨牌各盖一黑一白，铺满要求两色数量相等，因此不可能。"
        ]
      }
    }
  },
  {
    "id": "coin-flips",
    "category": "invariants",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Flip exactly two",
        "question": "Seven coins start heads up. A move flips exactly two distinct coins. Can all seven become tails up?",
        "hints": [
          "Track the parity of the number of tails.",
          "A move changes the number of tails by −2, 0 or 2."
        ],
        "answer": "No.",
        "explanation": [
          "The tails count starts at zero, an even number.",
          "Every move preserves its parity. Seven tails is odd and therefore unreachable."
        ]
      },
      "pl": {
        "title": "Odwróć dokładnie dwie",
        "question": "Siedem monet zaczyna orłem do góry. Ruch odwraca dokładnie dwie różne monety. Czy wszystkie mogą pokazać reszkę?",
        "hints": [
          "Śledź parzystość liczby reszek.",
          "Ruch zmienia liczbę reszek o −2, 0 lub 2."
        ],
        "answer": "Nie.",
        "explanation": [
          "Liczba reszek zaczyna się od parzystego zera.",
          "Każdy ruch zachowuje parzystość. Siedem reszek jest nieparzyste i nieosiągalne."
        ]
      },
      "ru": {
        "title": "Перевернуть ровно две",
        "question": "Семь монет лежат орлом вверх. Ход переворачивает ровно две разные монеты. Можно ли получить семь решек?",
        "hints": [
          "Следите за чётностью числа решек.",
          "Ход меняет число решек на −2, 0 или 2."
        ],
        "answer": "Нет.",
        "explanation": [
          "Сначала решек ноль, чётное число.",
          "Каждый ход сохраняет чётность, а семь нечётно и недостижимо."
        ]
      },
      "zh": {
        "title": "每次翻两枚",
        "question": "七枚硬币开始全正面，每步翻恰好两枚不同硬币。能全变反面吗？",
        "hints": [
          "追踪反面数量的奇偶性。",
          "每步使反面数改变−2、0或2。"
        ],
        "answer": "不能。",
        "explanation": [
          "反面数从偶数0开始。",
          "每步保持奇偶，七个反面为奇数，不可达。"
        ]
      }
    }
  },
  {
    "id": "take-stones",
    "category": "invariants",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Leave a multiple",
        "question": "A pile has 21 stones. Two players alternate taking 1, 2 or 3; taking the last wins. What first move and strategy guarantee the first player victory?",
        "hints": [
          "Look for losing pile sizes.",
          "Pair your move with the opponent’s so each pair removes a constant total."
        ],
        "answer": "Take 1, then always bring each pair of moves to 4.",
        "explanation": [
          "Leave 20, a multiple of 4. If the opponent takes k, take 4−k, which is always legal while stones remain.",
          "You keep leaving multiples of 4; from 4, the opponent leaves 1–3 and you take the rest."
        ]
      },
      "pl": {
        "title": "Zostaw wielokrotność",
        "question": "Stos ma 21 kamieni. Gracze na zmianę biorą 1, 2 lub 3; ostatni wygrywa. Jaki pierwszy ruch i strategia gwarantują wygraną pierwszego?",
        "hints": [
          "Szukaj przegrywających rozmiarów stosu.",
          "Dopełniaj ruch rywala do stałej sumy."
        ],
        "answer": "Weź 1, potem dopełniaj parę ruchów do 4.",
        "explanation": [
          "Zostaw 20, wielokrotność 4. Gdy rywal bierze k, weź 4−k, co jest legalne, dopóki gra trwa.",
          "Zawsze zostawiasz wielokrotność 4. Z 4 rywal zostawia 1–3, które zabierasz."
        ]
      },
      "ru": {
        "title": "Оставить кратное",
        "question": "В куче 21 камень. Игроки по очереди берут 1, 2 или 3; взявший последний выигрывает. Какой первый ход и стратегия гарантируют победу первому?",
        "hints": [
          "Ищите проигрышные размеры кучи.",
          "Дополняйте ход соперника до постоянной суммы."
        ],
        "answer": "Возьмите 1, затем дополняйте каждую пару ходов до 4.",
        "explanation": [
          "Оставьте 20, кратное 4. Если соперник берёт k, берите 4−k: это допустимо, пока игра идёт.",
          "Вы оставляете кратные 4. Из 4 соперник оставит 1–3, которые вы заберёте."
        ]
      },
      "zh": {
        "title": "留下倍数",
        "question": "一堆21颗石子，两人轮流取1、2或3颗，取最后者胜。先手怎样首步并保证获胜？",
        "hints": [
          "寻找必败的石子数。",
          "把对方与你的两步总取数补成固定值。"
        ],
        "answer": "先取1，以后每轮补足共4颗。",
        "explanation": [
          "留下20，为4的倍数。对方取k，你取4−k，只要游戏继续这总合法。",
          "始终留下4的倍数，最后对方从4取走1至3，你取完剩余获胜。"
        ]
      }
    }
  },
  {
    "id": "nim",
    "category": "invariants",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Three piles",
        "question": "Normal-play Nim has piles of 3, 4 and 5 stones. Each turn removes any positive number from exactly one pile; taking the last wins. Give a winning first move with a strategy principle.",
        "hints": [
          "Write pile sizes in binary and use XOR.",
          "Aim to make the XOR zero."
        ],
        "answer": "Reduce the pile of 3 to 1.",
        "explanation": [
          "3 XOR 4 XOR 5=2, while 1 XOR 4 XOR 5=0.",
          "Any legal move changes one pile and makes a zero XOR nonzero. From nonzero XOR, reduce a pile carrying its highest set bit to restore zero. Repeating this leaves the opponent no move at the end."
        ]
      },
      "pl": {
        "title": "Trzy stosy",
        "question": "W Nim są stosy 3, 4, 5 kamieni. Ruch usuwa dodatnią liczbę z jednego stosu; ostatni wygrywa. Podaj zwycięski pierwszy ruch i zasadę strategii.",
        "hints": [
          "Zapisz liczby binarnie i użyj XOR.",
          "Dąż do zerowego XOR."
        ],
        "answer": "Zmniejsz stos 3 do 1.",
        "explanation": [
          "3 XOR 4 XOR 5=2, a 1 XOR 4 XOR 5=0.",
          "Każdy ruch z zerowego XOR czyni go niezerowym. Z niezerowego zmniejsz stos z najwyższym ustawionym bitem XOR, aby wrócić do zera. Powtarzanie zostawia rywala bez ruchu na końcu."
        ]
      },
      "ru": {
        "title": "Три кучи",
        "question": "В обычном Ниме кучи 3, 4, 5 камней. Ход убирает положительное число из одной кучи; последний камень выигрывает. Дайте выигрышный первый ход и принцип.",
        "hints": [
          "Запишите размеры двоично и используйте XOR.",
          "Стремитесь к нулевому XOR."
        ],
        "answer": "Уменьшите кучу 3 до 1.",
        "explanation": [
          "3 XOR 4 XOR 5=2, а 1 XOR 4 XOR 5=0.",
          "Любой ход из нулевого XOR делает его ненулевым. Из ненулевого уменьшите кучу с высшим установленным битом XOR, восстановив ноль. Повторение оставит соперника без хода в конце."
        ]
      },
      "zh": {
        "title": "三堆石子",
        "question": "普通Nim游戏有3、4、5颗三堆，每步从恰好一堆取任意正数颗，取最后者胜。给出获胜首步及策略原理。",
        "hints": [
          "用二进制异或。",
          "目标是使异或为零。"
        ],
        "answer": "把3颗那堆减至1颗。",
        "explanation": [
          "3 XOR 4 XOR 5=2，而1 XOR 4 XOR 5=0。",
          "任意合法一步都会把零异或变成非零；非零时可减小含其最高置位的某堆恢复零。反复如此，最终把无可走局面留给对方。"
        ]
      }
    }
  },
  {
    "id": "chocolate",
    "category": "invariants",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Breaking the bar",
        "question": "A chocolate bar has 4×6 squares. One move breaks exactly one existing piece into two along a grid line; stacking is forbidden. How many breaks make all individual squares?",
        "hints": [
          "Count pieces rather than lengths.",
          "Every break increases the piece count by exactly one."
        ],
        "answer": "23.",
        "explanation": [
          "There is initially one piece and finally 24.",
          "Every legal break adds one piece, so exactly 24−1=23 breaks are required, whatever valid order is used."
        ]
      },
      "pl": {
        "title": "Łamanie tabliczki",
        "question": "Czekolada ma 4×6 kostek. Ruch łamie jeden istniejący kawałek na dwa wzdłuż linii; nie wolno układać w stos. Ile złamań daje pojedyncze kostki?",
        "hints": [
          "Licz kawałki zamiast długości.",
          "Każde złamanie zwiększa liczbę kawałków o jeden."
        ],
        "answer": "23.",
        "explanation": [
          "Początkowo jest jeden kawałek, docelowo 24.",
          "Każde złamanie dodaje jeden, więc potrzeba dokładnie 24−1=23 w dowolnej poprawnej kolejności."
        ]
      },
      "ru": {
        "title": "Ломаем плитку",
        "question": "Шоколадка 4×6 клеток. Ход ломает один существующий кусок на два по линии сетки; складывать стопкой нельзя. Сколько разломов до отдельных клеток?",
        "hints": [
          "Считайте куски, а не длины.",
          "Разлом увеличивает число кусков на один."
        ],
        "answer": "23.",
        "explanation": [
          "Сначала один кусок, в конце 24.",
          "Каждый разлом добавляет один, поэтому нужно ровно 24−1=23 в любом допустимом порядке."
        ]
      },
      "zh": {
        "title": "掰巧克力",
        "question": "巧克力为4×6格，每步将一个现有块沿格线掰成两块，不可叠放。分成所有单格需几次？",
        "hints": [
          "数块数而非长度。",
          "每次恰好增加一块。"
        ],
        "answer": "23次。",
        "explanation": [
          "起初1块，最终24块。",
          "每次加1，故无论合法顺序如何都恰需24−1=23次。"
        ]
      }
    }
  },
  {
    "id": "number-reduction",
    "category": "invariants",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Replace two numbers",
        "question": "Start with the numbers 1,2,3,4. Repeatedly replace any two numbers a,b with a+b+ab until one remains. What is the final number, regardless of choices?",
        "hints": [
          "Try adding 1 to the replacement expression.",
          "a+b+ab+1 factors neatly."
        ],
        "answer": "119.",
        "explanation": [
          "The identity (a+b+ab)+1=(a+1)(b+1) preserves the product of one plus every number in the list.",
          "Initially the product is 2×3×4×5=120. Finally x+1=120, so x=119."
        ]
      },
      "pl": {
        "title": "Zastąp dwie liczby",
        "question": "Zacznij od 1,2,3,4. Zastępuj dowolne a,b liczbą a+b+ab, aż zostanie jedna. Jaki wynik niezależnie od wyborów?",
        "hints": [
          "Dodaj 1 do wyrażenia zastępującego.",
          "a+b+ab+1 łatwo rozłożyć na czynniki."
        ],
        "answer": "119.",
        "explanation": [
          "Tożsamość (a+b+ab)+1=(a+1)(b+1) zachowuje iloczyn liczb powiększonych o jeden.",
          "Początkowo to 2×3×4×5=120. Na końcu x+1=120, więc x=119."
        ]
      },
      "ru": {
        "title": "Заменить два числа",
        "question": "Начните с 1,2,3,4. Заменяйте любые a,b на a+b+ab, пока не останется одно. Каков итог независимо от выбора?",
        "hints": [
          "Добавьте 1 к новому выражению.",
          "a+b+ab+1 раскладывается на множители."
        ],
        "answer": "119.",
        "explanation": [
          "Равенство (a+b+ab)+1=(a+1)(b+1) сохраняет произведение всех чисел, увеличенных на один.",
          "Вначале оно 2×3×4×5=120. В конце x+1=120, значит x=119."
        ]
      },
      "zh": {
        "title": "替换两个数",
        "question": "从1、2、3、4开始，每次把任意a、b替换为a+b+ab，直到剩一个。不管选择如何，最终数是多少？",
        "hints": [
          "给替换表达式加1。",
          "a+b+ab+1可以因式分解。"
        ],
        "answer": "119。",
        "explanation": [
          "(a+b+ab)+1=(a+1)(b+1)，所以所有数各加1后的乘积不变。",
          "初始乘积2×3×4×5=120，最终x+1=120，故x=119。"
        ]
      }
    }
  },
  {
    "id": "euclid-game",
    "category": "invariants",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Subtract the smaller",
        "question": "Start with positive integers 84 and 30. Repeatedly subtract the smaller from the larger, stopping when they are equal. What equal value results?",
        "hints": [
          "Common divisors survive subtraction.",
          "The process decreases the sum while preserving a familiar quantity."
        ],
        "answer": "6.",
        "explanation": [
          "gcd(a,b)=gcd(a−b,b) for a>b, so every step preserves the greatest common divisor.",
          "The positive sum decreases until the values match; their common value is then their gcd. gcd(84,30)=6."
        ]
      },
      "pl": {
        "title": "Odejmij mniejszą",
        "question": "Zacznij od dodatnich liczb 84 i 30. Odejmuj mniejszą od większej, aż będą równe. Jaka wartość zostanie?",
        "hints": [
          "Wspólne dzielniki przetrwają odejmowanie.",
          "Suma maleje, pewna znana wielkość pozostaje."
        ],
        "answer": "6.",
        "explanation": [
          "NWD(a,b)=NWD(a−b,b) dla a>b, więc każdy krok zachowuje największy wspólny dzielnik.",
          "Dodatnia suma maleje aż do równości; wspólna wartość to NWD. NWD(84,30)=6."
        ]
      },
      "ru": {
        "title": "Вычесть меньшее",
        "question": "Начните с положительных чисел 84 и 30. Вычитайте меньшее из большего до равенства. Какое значение останется?",
        "hints": [
          "Общие делители сохраняются при вычитании.",
          "Сумма уменьшается, известная величина сохраняется."
        ],
        "answer": "6.",
        "explanation": [
          "НОД(a,b)=НОД(a−b,b) при a>b, поэтому шаг сохраняет наибольший общий делитель.",
          "Положительная сумма убывает до равенства; общее значение тогда равно НОД. НОД(84,30)=6."
        ]
      },
      "zh": {
        "title": "减去较小者",
        "question": "从正整数84、30开始，反复用较大数减去较小数，直到相等。最终共同值？",
        "hints": [
          "减法保留公约数。",
          "总和下降，但某个熟悉量不变。"
        ],
        "answer": "6。",
        "explanation": [
          "a>b时gcd(a,b)=gcd(a−b,b)，每步保持最大公约数。",
          "正整数总和不断下降直至相等，共同值即最大公约数，gcd(84,30)=6。"
        ]
      }
    }
  },
  {
    "id": "knight-return",
    "category": "invariants",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "An odd journey",
        "question": "A chess knight makes exactly 15 legal moves on an ordinary board. Can it finish on its starting square?",
        "hints": [
          "Color the board alternately.",
          "Each knight move changes color."
        ],
        "answer": "No.",
        "explanation": [
          "A knight moves two squares in one direction and one perpendicular, changing the parity of row+column.",
          "Thus it changes color each move. After 15 moves it is on the opposite color from its start."
        ]
      },
      "pl": {
        "title": "Nieparzysta podróż",
        "question": "Skoczek wykonuje dokładnie 15 legalnych ruchów na zwykłej szachownicy. Czy wróci na pole startowe?",
        "hints": [
          "Pokoloruj pola naprzemiennie.",
          "Każdy ruch skoczka zmienia kolor."
        ],
        "answer": "Nie.",
        "explanation": [
          "Skoczek przesuwa się o dwa w jednym kierunku i jeden prostopadle, zmieniając parzystość sumy współrzędnych.",
          "Zmienia więc kolor w każdym ruchu. Po 15 jest na kolorze przeciwnym niż na starcie."
        ]
      },
      "ru": {
        "title": "Нечётное путешествие",
        "question": "Шахматный конь делает ровно 15 законных ходов. Может ли закончить на исходной клетке?",
        "hints": [
          "Раскрасьте доску по цветам.",
          "Каждый ход меняет цвет."
        ],
        "answer": "Нет.",
        "explanation": [
          "Конь сдвигается на два по одной оси и на один по другой, меняя чётность суммы координат.",
          "Цвет меняется каждый ход. После 15 он противоположен исходному."
        ]
      },
      "zh": {
        "title": "奇数旅程",
        "question": "国际象棋马恰走15个合法步，能回到起点吗？",
        "hints": [
          "按棋盘双色着色。",
          "每次马步改变颜色。"
        ],
        "answer": "不能。",
        "explanation": [
          "马一轴走二、一轴走一，使行列和奇偶改变。",
          "每步换色，15步后颜色与起点相反。"
        ]
      }
    }
  },
  {
    "id": "ants",
    "category": "invariants",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Ants that turn around",
        "question": "Point-like ants walk at 1 cm/s on a 100 cm stick. At a collision both reverse instantly; at an end they fall off. Initial positions and directions are arbitrary. What is the smallest universal upper bound on the time until all fall?",
        "hints": [
          "Ignore the ants’ identities at a collision.",
          "Two reversing ants are indistinguishable from two passing through each other."
        ],
        "answer": "100 seconds.",
        "explanation": [
          "Relabel the ants at every collision; trajectories then look like straight walks through each other. Each such path reaches an end within 100 seconds.",
          "An ant starting arbitrarily close to one end and moving toward the other takes arbitrarily close to 100 seconds, so no smaller universal bound works."
        ]
      },
      "pl": {
        "title": "Mrówki zawracają",
        "question": "Punktowe mrówki idą 1 cm/s po patyku długości 100 cm. Przy zderzeniu obie natychmiast zawracają, na końcu spadają. Pozycje i kierunki są dowolne. Jaka najmniejsza uniwersalna granica czasu do spadnięcia wszystkich?",
        "hints": [
          "Pomijaj tożsamości przy zderzeniach.",
          "Zawracanie wygląda jak przechodzenie przez siebie po zamianie nazw."
        ],
        "answer": "100 sekund.",
        "explanation": [
          "Zamień nazwy mrówek przy każdym zderzeniu; tory wyglądają jak proste przejścia. Każdy taki tor dociera do końca w najwyżej 100 sekund.",
          "Mrówka zaczynająca dowolnie blisko jednego końca i idąca ku drugiemu potrzebuje czasu dowolnie bliskiego 100 sekund, więc żadna mniejsza uniwersalna granica nie działa."
        ]
      },
      "ru": {
        "title": "Муравьи разворачиваются",
        "question": "Точечные муравьи идут 1 см/с по палочке 100 см. При встрече оба мгновенно разворачиваются, на конце падают. Начальные места и направления произвольны. Какова наименьшая универсальная верхняя граница времени?",
        "hints": [
          "Игнорируйте личности при столкновении.",
          "Разворот неотличим от прохождения насквозь со сменой имён."
        ],
        "answer": "100 секунд.",
        "explanation": [
          "Меняя имена при столкновениях, получаем прямые траектории сквозь друг друга. Каждая достигает конца за максимум 100 секунд.",
          "Муравей, начинающий сколь угодно близко к одному концу и идущий к другому, тратит время сколь угодно близкое к 100 секундам, поэтому меньшая универсальная граница не подходит."
        ]
      },
      "zh": {
        "title": "掉头的蚂蚁",
        "question": "点状蚂蚁在100厘米木棒上以1厘米/秒走，碰撞时双方瞬间掉头，走出末端即落下。初始位置与方向任意。全部落下时间的最小统一上界？",
        "hints": [
          "碰撞时忽略蚂蚁身份。",
          "双方掉头等价于交换身份后穿过彼此。"
        ],
        "answer": "100秒。",
        "explanation": [
          "每次碰撞交换身份，轨迹就像直线穿过彼此，每条到末端都不超过100秒。",
          "单只蚂蚁若从任意接近一端的位置走向另一端，所需时间可任意接近100秒，因此任何更小的统一上界都不成立。"
        ]
      }
    }
  },
  {
    "id": "gossip",
    "category": "invariants",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "A connected rumor",
        "question": "Ten people each know a different fact. A phone call between two people exchanges all facts they currently know. What is the minimum number of calls needed for at least one person to know every fact?",
        "hints": [
          "Track which people have been linked by calls.",
          "A call can merge at most two disconnected information groups."
        ],
        "answer": "9.",
        "explanation": [
          "Nine calls from one collector to each of the others suffice.",
          "For anyone to know all facts, the graph of calls must connect all ten people; each call adds at most one edge, and a connected graph on ten vertices needs at least nine edges."
        ]
      },
      "pl": {
        "title": "Połączona wiadomość",
        "question": "Dziesięć osób zna po innym fakcie. Rozmowa telefoniczna dwóch wymienia wszystkie znane im fakty. Ile rozmów potrzeba co najmniej, aby choć jedna osoba znała wszystkie?",
        "hints": [
          "Śledź osoby połączone rozmowami.",
          "Rozmowa łączy najwyżej dwie rozłączne grupy informacji."
        ],
        "answer": "9.",
        "explanation": [
          "Kolekcjoner dzwoni do pozostałych dziewięciu i poznaje wszystkie fakty.",
          "Aby ktoś znał wszystko, graf rozmów musi łączyć dziesięć osób. Każda rozmowa dodaje najwyżej jedną krawędź, a spójny graf dziesięciu wierzchołków potrzebuje dziewięciu."
        ]
      },
      "ru": {
        "title": "Связанный слух",
        "question": "Десять человек знают по одному разному факту. Звонок двоих обменивает все известные им факты. Сколько минимум звонков, чтобы хотя бы один знал всё?",
        "hints": [
          "Следите за связями между людьми.",
          "Звонок объединяет не более двух несвязанных информационных групп."
        ],
        "answer": "9.",
        "explanation": [
          "Один собиратель звонит каждому из остальных девяти и узнаёт всё.",
          "Чтобы кто-то знал все факты, граф звонков должен соединять десятерых. Звонок добавляет не более ребра, связному графу из десяти вершин нужно минимум девять."
        ]
      },
      "zh": {
        "title": "连通的消息",
        "question": "十人各知一个不同事实，每次两人通话互相告知当前知道的全部事实。至少让一人知道全部，最少几次通话？",
        "hints": [
          "追踪通话连接了哪些人。",
          "一次通话最多合并两个不连通的信息群。"
        ],
        "answer": "9次。",
        "explanation": [
          "一位收集者分别给其余九人打电话即可。",
          "要有人知道全部事实，通话图必须连通十人；每次最多增加一条边，十点连通图至少九边，因此至少九次。"
        ]
      }
    }
  }
] satisfies Puzzle[];
