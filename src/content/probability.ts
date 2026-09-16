import type {Puzzle} from '../types';

export const probability = [
  {
    "id": "monty",
    "category": "probability",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "An informed host",
        "question": "A prize is uniformly placed behind one of three doors. You choose one. A host who knows its location always opens an unchosen empty door, choosing uniformly if two are available, and always offers a switch. What win probability does switching give?",
        "hints": [
          "Your first choice is right only one time in three.",
          "Switching wins exactly when the original choice was wrong."
        ],
        "answer": "2/3.",
        "explanation": [
          "The initial choice contains the prize with probability 1/3. Switching loses in those cases.",
          "With probability 2/3 the prize is elsewhere; the host must open the other empty door, so switching wins."
        ]
      },
      "pl": {
        "title": "Poinformowany prowadzący",
        "question": "Nagroda jest losowo, równomiernie za jednymi z trzech drzwi. Wybierasz jedne. Prowadzący zna położenie, zawsze otwiera niewybrane puste drzwi, losując równomiernie, gdy ma wybór, i zawsze proponuje zmianę. Jaka jest szansa wygranej po zmianie?",
        "hints": [
          "Pierwszy wybór jest trafny raz na trzy.",
          "Zmiana wygrywa dokładnie wtedy, gdy pierwszy wybór był błędny."
        ],
        "answer": "2/3.",
        "explanation": [
          "Pierwszy wybór trafia z prawdopodobieństwem 1/3; w tych przypadkach zmiana przegrywa.",
          "Z prawdopodobieństwem 2/3 nagroda jest gdzie indziej, a prowadzący musi odsłonić inne puste drzwi, więc zmiana wygrywa."
        ]
      },
      "ru": {
        "title": "Осведомлённый ведущий",
        "question": "Приз равновероятно за одной из трёх дверей. Вы выбираете одну. Ведущий знает место, всегда открывает невыбранную пустую дверь, выбирая равновероятно при двух вариантах, и всегда предлагает смену. Какова вероятность победы при смене?",
        "hints": [
          "Первый выбор верен лишь в одном случае из трёх.",
          "Смена выигрывает тогда и только тогда, когда первый выбор неверен."
        ],
        "answer": "2/3.",
        "explanation": [
          "Первый выбор содержит приз с вероятностью 1/3; смена тогда проигрывает.",
          "С вероятностью 2/3 приз в другом месте; ведущий обязан открыть другую пустую дверь, и смена выигрывает."
        ]
      },
      "zh": {
        "title": "知情的主持人",
        "question": "奖品等概率藏在三扇门之一。你选一扇，知道位置的主持人总会打开一扇未选的空门，有两个可选时等概率选择，并总提供换门机会。换门获胜概率？",
        "hints": [
          "第一次选择只有三分之一正确。",
          "换门恰在最初选错时获胜。"
        ],
        "answer": "2/3。",
        "explanation": [
          "初选中奖概率1/3，这些情况换门失败。",
          "其余2/3奖品在别处，主持人必须打开另一扇空门，换门获胜。"
        ]
      }
    }
  },
  {
    "id": "dice-sum",
    "category": "probability",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Given a seven",
        "question": "Roll two independent fair six-sided dice, distinguished as red and blue. Given their sum is 7, what is the probability the red die shows 4?",
        "hints": [
          "List ordered outcomes, not unordered pairs.",
          "All outcomes summing to 7 have equal probability."
        ],
        "answer": "1/6.",
        "explanation": [
          "The conditional outcomes are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
          "Only (4,3) has a red 4, giving one of six equally likely outcomes."
        ]
      },
      "pl": {
        "title": "Wiadomo, że siedem",
        "question": "Rzucasz niezależnymi uczciwymi kostkami sześciennymi: czerwoną i niebieską. Wiadomo, że suma wynosi 7. Jaka jest szansa, że czerwona pokazuje 4?",
        "hints": [
          "Wypisz uporządkowane wyniki.",
          "Wyniki o sumie 7 są jednakowo prawdopodobne."
        ],
        "answer": "1/6.",
        "explanation": [
          "Wyniki warunkowe to (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
          "Tylko (4,3) ma czerwone 4: jeden z sześciu równych przypadków."
        ]
      },
      "ru": {
        "title": "Известно, что семь",
        "question": "Бросают независимые честные шестигранные кубики: красный и синий. Известно, что сумма 7. Какова вероятность красной 4?",
        "hints": [
          "Перечислите упорядоченные исходы.",
          "Все исходы с суммой 7 равновероятны."
        ],
        "answer": "1/6.",
        "explanation": [
          "Условные исходы: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
          "Только (4,3) имеет красную 4: один из шести исходов."
        ]
      },
      "zh": {
        "title": "已知和为七",
        "question": "独立掷公平的红、蓝两颗六面骰子。已知和为7，红骰为4的概率？",
        "hints": [
          "列有序结果，不是无序数对。",
          "和为7的结果等概率。"
        ],
        "answer": "1/6。",
        "explanation": [
          "条件结果为(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)。",
          "只有(4,3)红骰为4，六个等可能结果中占一个。"
        ]
      }
    }
  },
  {
    "id": "two-children",
    "category": "probability",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "At least one",
        "question": "In a toy model, each of two children is independently a boy or girl with equal probability. A family is sampled uniformly from families with at least one girl. What is the probability both are girls?",
        "hints": [
          "The sampling rule matters; no child was selected to introduce themselves.",
          "Condition the four equally likely ordered sex pairs."
        ],
        "answer": "1/3.",
        "explanation": [
          "The original ordered pairs are BB, BG, GB, GG.",
          "Conditioning removes BB and retains three equally likely pairs. Only GG qualifies."
        ]
      },
      "pl": {
        "title": "Co najmniej jedno",
        "question": "W modelu każde z dwojga dzieci niezależnie jest chłopcem lub dziewczynką z równą szansą. Rodzinę losuje się równomiernie spośród rodzin z co najmniej jedną dziewczynką. Jaka szansa na dwie?",
        "hints": [
          "Sposób losowania ma znaczenie; nie wybrano dziecka do przedstawienia.",
          "Ogranicz cztery równoprawdopodobne uporządkowane pary."
        ],
        "answer": "1/3.",
        "explanation": [
          "Pary to CC, CD, DC, DD, gdzie C to chłopiec, D dziewczynka.",
          "Warunek usuwa CC, zostawiając trzy równe przypadki. Tylko DD spełnia cel."
        ]
      },
      "ru": {
        "title": "Хотя бы одна",
        "question": "В модели каждый из двух детей независимо мальчик или девочка с равной вероятностью. Семью равномерно выбирают среди семей хотя бы с одной девочкой. Вероятность двух девочек?",
        "hints": [
          "Важен способ отбора; ребёнка для знакомства не выбирали.",
          "Ограничьте четыре равновероятные упорядоченные пары."
        ],
        "answer": "1/3.",
        "explanation": [
          "Пары: ММ, МД, ДМ, ДД.",
          "Условие исключает ММ, оставляя три равновероятных случая. Подходит лишь ДД."
        ]
      },
      "zh": {
        "title": "至少一个",
        "question": "简化模型中，两个孩子各自独立且等概率为男或女。从至少有一个女孩的家庭中均匀抽取一家，两人都是女孩的概率？",
        "hints": [
          "抽样规则很重要，并没有随机选一个孩子出面。",
          "对四种等概率有序组合施加条件。"
        ],
        "answer": "1/3。",
        "explanation": [
          "原组合为男男、男女、女男、女女。",
          "排除男男后剩三种等概率组合，仅女女符合。"
        ]
      }
    }
  },
  {
    "id": "biased-coin",
    "category": "probability",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Fairness from an unfair coin",
        "question": "Independent flips of a coin have a fixed unknown heads probability p, with 0<p<1. How can you produce an exactly fair binary result, allowing retries?",
        "hints": [
          "Compare the order of two different outcomes.",
          "HT and TH have the same probability even when p is unknown."
        ],
        "answer": "Flip twice; use HT for one result, TH for the other; discard HH and TT and retry.",
        "explanation": [
          "P(HT)=p(1−p)=P(TH), so accepted pairs split equally.",
          "Acceptance probability 2p(1−p)>0; independent retries terminate with probability one, though no fixed finite bound is guaranteed."
        ]
      },
      "pl": {
        "title": "Uczciwość z nieuczciwej monety",
        "question": "Niezależne rzuty mają stałe nieznane prawdopodobieństwo orła p, 0<p<1. Jak otrzymać dokładnie uczciwy wynik binarny, dopuszczając powtórki?",
        "hints": [
          "Porównaj kolejność dwóch różnych wyników.",
          "OR i RO mają równe prawdopodobieństwa niezależnie od p."
        ],
        "answer": "Rzuć dwa razy; OR oznacza jeden wynik, RO drugi; OO i RR odrzuć i powtórz.",
        "explanation": [
          "P(OR)=p(1−p)=P(RO), więc zaakceptowane pary dzielą się po równo.",
          "Szansa akceptacji 2p(1−p)>0; powtórki kończą się z prawdopodobieństwem jeden, ale bez stałej skończonej granicy czasu."
        ]
      },
      "ru": {
        "title": "Честность из нечестной монеты",
        "question": "Независимые броски имеют постоянную неизвестную вероятность орла p, 0<p<1. Как получить точно равновероятный двоичный результат с повторами?",
        "hints": [
          "Сравните порядок двух разных исходов.",
          "ОР и РО равновероятны при любом p."
        ],
        "answer": "Бросьте дважды; ОР — один результат, РО — другой; ОО и РР отбросьте и повторите.",
        "explanation": [
          "P(ОР)=p(1−p)=P(РО), принятые пары делятся поровну.",
          "Вероятность принятия 2p(1−p)>0; повторы заканчиваются с вероятностью один, но без фиксированной конечной границы."
        ]
      },
      "zh": {
        "title": "用偏币造公平",
        "question": "硬币独立抛掷，正面概率固定但未知，为0<p<1。允许重试，如何产生完全公平的二元结果？",
        "hints": [
          "比较两个不同结果的顺序。",
          "正反与反正概率相同，即使p未知。"
        ],
        "answer": "抛两次，正反对应一种结果，反正对应另一种；同面则丢弃重试。",
        "explanation": [
          "P(正反)=p(1−p)=P(反正)，所以接受后的两种结果等概率。",
          "接受概率2p(1−p)>0，独立重试以概率1终止，但没有固定有限次数保证。"
        ]
      }
    }
  },
  {
    "id": "bayes-box",
    "category": "probability",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A red draw",
        "question": "Choose one of two boxes with equal probability. Box A has 2 red and 1 blue ball; B has 1 red and 2 blue. Draw one ball uniformly; it is red. Probability you chose A?",
        "hints": [
          "Weight each box by how likely it was to produce red.",
          "Compare (1/2)(2/3) with (1/2)(1/3)."
        ],
        "answer": "2/3.",
        "explanation": [
          "The joint probability of A and red is 1/3; B and red is 1/6.",
          "Total red probability is 1/2, so P(A given red)=(1/3)/(1/2)=2/3."
        ]
      },
      "pl": {
        "title": "Czerwone losowanie",
        "question": "Wybierasz jeden z dwóch pojemników z równą szansą. A ma 2 czerwone i 1 niebieską kulę; B ma 1 czerwoną i 2 niebieskie. Losujesz równomiernie kulę: czerwona. Szansa, że wybrano A?",
        "hints": [
          "Zważ pojemniki szansą uzyskania czerwonej.",
          "Porównaj (1/2)(2/3) z (1/2)(1/3)."
        ],
        "answer": "2/3.",
        "explanation": [
          "Łączna szansa A i czerwonej to 1/3; B i czerwonej 1/6.",
          "Łączna szansa czerwonej to 1/2, więc warunkowo (1/3)/(1/2)=2/3."
        ]
      },
      "ru": {
        "title": "Красный шар",
        "question": "Выберите одну из двух коробок с равными шансами. В A два красных и один синий шар; в B один красный и два синих. Равномерно вынутый шар красный. Вероятность коробки A?",
        "hints": [
          "Взвесьте коробки вероятностью красного результата.",
          "Сравните (1/2)(2/3) и (1/2)(1/3)."
        ],
        "answer": "2/3.",
        "explanation": [
          "Совместная вероятность A и красного 1/3; B и красного 1/6.",
          "Всего красный выпадает с вероятностью 1/2, значит условно (1/3)/(1/2)=2/3."
        ]
      },
      "zh": {
        "title": "抽到红球",
        "question": "等概率选两盒之一。A盒2红1蓝，B盒1红2蓝，均匀抽一球发现是红球。选中A的条件概率？",
        "hints": [
          "按每盒产生红球的概率加权。",
          "比较(1/2)(2/3)与(1/2)(1/3)。"
        ],
        "answer": "2/3。",
        "explanation": [
          "A且红的联合概率1/3，B且红为1/6。",
          "红球总概率1/2，所以P(A在已知红球时)=(1/3)/(1/2)=2/3。"
        ]
      }
    }
  },
  {
    "id": "replacement",
    "category": "probability",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Two matching socks",
        "question": "A drawer has 3 red and 2 blue socks. Draw two uniformly without replacement. Probability they match?",
        "hints": [
          "Count unordered pairs.",
          "Matching pairs come in two colors."
        ],
        "answer": "2/5.",
        "explanation": [
          "There are C(5,2)=10 equally likely pairs.",
          "Matching pairs: C(3,2)+C(2,2)=3+1=4, giving 4/10=2/5."
        ]
      },
      "pl": {
        "title": "Dwie pasujące skarpety",
        "question": "Szuflada ma 3 czerwone i 2 niebieskie skarpety. Losujesz dwie równomiernie bez zwracania. Szansa na zgodny kolor?",
        "hints": [
          "Policz nieuporządkowane pary.",
          "Pasujące pary mają dwa możliwe kolory."
        ],
        "answer": "2/5.",
        "explanation": [
          "Jest C(5,2)=10 jednakowo prawdopodobnych par.",
          "Pasujące: C(3,2)+C(2,2)=3+1=4, więc 4/10=2/5."
        ]
      },
      "ru": {
        "title": "Два одинаковых носка",
        "question": "В ящике 3 красных и 2 синих носка. Равномерно берут два без возвращения. Вероятность одного цвета?",
        "hints": [
          "Считайте неупорядоченные пары.",
          "Совпадающие пары бывают двух цветов."
        ],
        "answer": "2/5.",
        "explanation": [
          "Всего C(5,2)=10 равновероятных пар.",
          "Совпадающих C(3,2)+C(2,2)=3+1=4, значит 4/10=2/5."
        ]
      },
      "zh": {
        "title": "同色袜子",
        "question": "抽屉有3只红袜、2只蓝袜，均匀无放回抽两只，同色概率？",
        "hints": [
          "数无序对。",
          "同色对分两种颜色。"
        ],
        "answer": "2/5。",
        "explanation": [
          "共有C(5,2)=10个等可能对。",
          "同色对C(3,2)+C(2,2)=3+1=4，概率4/10=2/5。"
        ]
      }
    }
  },
  {
    "id": "first-six",
    "category": "probability",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Waiting for a six",
        "question": "Repeatedly roll a fair six-sided die independently until the first 6. What is the expected number of rolls, counting the successful roll?",
        "hints": [
          "After failure, the remaining problem starts over.",
          "Write an equation for the expectation E."
        ],
        "answer": "6 rolls.",
        "explanation": [
          "One roll is always used. With probability 5/6 it fails, leaving expected additional wait E.",
          "Thus E=1+(5/6)E, so E=6. This is an average, not a deadline."
        ]
      },
      "pl": {
        "title": "Czekanie na szóstkę",
        "question": "Rzucaj uczciwą kostką sześcienną niezależnie do pierwszej 6. Jaka jest oczekiwana liczba rzutów, z udanym włącznie?",
        "hints": [
          "Po niepowodzeniu problem zaczyna się od nowa.",
          "Zapisz równanie dla wartości oczekiwanej E."
        ],
        "answer": "6 rzutów.",
        "explanation": [
          "Jeden rzut jest zawsze. Z prawdopodobieństwem 5/6 nie udaje się i zostaje oczekiwane E.",
          "Zatem E=1+(5/6)E, więc E=6. To średnia, nie termin gwarantowany."
        ]
      },
      "ru": {
        "title": "В ожидании шестёрки",
        "question": "Независимо бросайте честный шестигранный кубик до первой 6. Каково ожидаемое число бросков, включая успешный?",
        "hints": [
          "После неудачи задача начинается заново.",
          "Запишите уравнение для ожидания E."
        ],
        "answer": "6 бросков.",
        "explanation": [
          "Один бросок нужен всегда. С вероятностью 5/6 он неудачен и остаётся ожидание E.",
          "E=1+(5/6)E, откуда E=6. Это среднее, не гарантированный срок."
        ]
      },
      "zh": {
        "title": "等待六点",
        "question": "独立反复掷公平六面骰，直到首次6点。包括成功那次，期望掷几次？",
        "hints": [
          "失败后剩余问题重新开始。",
          "为期望E写方程。"
        ],
        "answer": "6次。",
        "explanation": [
          "总要先掷一次，以5/6概率失败后还需期望E次。",
          "E=1+(5/6)E，解得E=6。这是平均值，不是保证期限。"
        ]
      }
    }
  },
  {
    "id": "two-heads",
    "category": "probability",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Two heads together",
        "question": "Flip a fair coin independently until two consecutive heads first appear. Expected number of flips?",
        "hints": [
          "Track whether the latest flip was a head.",
          "Use one expectation from a fresh start and another after one head."
        ],
        "answer": "6 flips.",
        "explanation": [
          "Let E0 be the fresh expectation and E1 the expectation after one head. E0=1+(E0+E1)/2.",
          "E1=1+E0/2, because a head ends the process and a tail resets it. Solving gives E0=6."
        ]
      },
      "pl": {
        "title": "Dwa orły z rzędu",
        "question": "Rzucaj uczciwą monetą niezależnie do pierwszych dwóch kolejnych orłów. Oczekiwana liczba rzutów?",
        "hints": [
          "Pamiętaj, czy ostatnio wypadł orzeł.",
          "Użyj dwóch wartości: od początku i po jednym orle."
        ],
        "answer": "6 rzutów.",
        "explanation": [
          "Niech E0 oznacza oczekiwanie od początku, E1 po orle. E0=1+(E0+E1)/2.",
          "E1=1+E0/2, bo orzeł kończy, a reszka resetuje. Rozwiązanie daje E0=6."
        ]
      },
      "ru": {
        "title": "Два орла подряд",
        "question": "Независимо бросайте честную монету до первых двух орлов подряд. Ожидаемое число бросков?",
        "hints": [
          "Помните, был ли последний бросок орлом.",
          "Возьмите два ожидания: с начала и после орла."
        ],
        "answer": "6 бросков.",
        "explanation": [
          "Пусть E0 — ожидание с начала, E1 — после орла. E0=1+(E0+E1)/2.",
          "E1=1+E0/2: орёл завершает, решка сбрасывает. Решение даёт E0=6."
        ]
      },
      "zh": {
        "title": "连续两个正面",
        "question": "独立抛公平硬币，直到首次连续两个正面，期望抛几次？",
        "hints": [
          "记录最近一次是否正面。",
          "设从头开始与已有一个正面的两种期望。"
        ],
        "answer": "6次。",
        "explanation": [
          "设E0为初始期望，E1为刚出现正面后的期望，则E0=1+(E0+E1)/2。",
          "E1=1+E0/2，因为正面结束、反面重置。解得E0=6。"
        ]
      }
    }
  },
  {
    "id": "broken-stick",
    "category": "probability",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "A stick, twice cut",
        "question": "Choose two independent uniformly random points on a unit stick and cut there. Probability the three pieces form a nondegenerate triangle?",
        "hints": [
          "The longest piece must be shorter than half the stick.",
          "Use the unit square of the two cut positions; endpoint coincidences have probability zero."
        ],
        "answer": "1/4.",
        "explanation": [
          "Failure occurs if both cuts lie below 1/2 (area 1/4), both above 1/2 (area 1/4), or their distance exceeds 1/2 (two triangles totaling 1/4).",
          "These regions are disjoint apart from boundaries. Success occupies the remaining area 1−3/4=1/4."
        ]
      },
      "pl": {
        "title": "Patyk przecięty dwa razy",
        "question": "Wybierz dwa niezależne, jednostajnie losowe punkty na jednostkowym patyku i przetnij. Szansa, że trzy części tworzą niedegenerowany trójkąt?",
        "hints": [
          "Najdłuższa część musi być krótsza niż połowa.",
          "Użyj kwadratu jednostkowego pozycji cięć; zbieżności mają prawdopodobieństwo zero."
        ],
        "answer": "1/4.",
        "explanation": [
          "Porażka: oba cięcia poniżej 1/2 (pole 1/4), oba powyżej (1/4), albo odległość między nimi ponad 1/2 (dwa trójkąty o łącznym polu 1/4).",
          "Obszary są rozłączne poza granicami. Sukces ma pole 1−3/4=1/4."
        ]
      },
      "ru": {
        "title": "Палочка, два разреза",
        "question": "На единичной палочке независимо и равномерно выбирают две точки и режут. Вероятность невырожденного треугольника из трёх частей?",
        "hints": [
          "Самая длинная часть должна быть короче половины.",
          "Рассмотрите единичный квадрат позиций разрезов; совпадения имеют нулевую вероятность."
        ],
        "answer": "1/4.",
        "explanation": [
          "Неудача: оба разреза ниже 1/2 (площадь 1/4), оба выше (1/4), либо расстояние между ними больше 1/2 (два треугольника общей площади 1/4).",
          "Области не пересекаются вне границ. Успех занимает остаток 1−3/4=1/4."
        ]
      },
      "zh": {
        "title": "两刀断棒",
        "question": "在单位长棒上独立均匀选择两点切开，三段能组成非退化三角形的概率？",
        "hints": [
          "最长一段必须小于整棒一半。",
          "用两切点组成的单位正方形；边界巧合概率为零。"
        ],
        "answer": "1/4。",
        "explanation": [
          "失败包括：两点都小于1/2，面积1/4；都大于1/2，面积1/4；两点间距大于1/2，两个三角区域总面积1/4。",
          "这些区域除边界外互不重叠，成功占剩余面积1−3/4=1/4。"
        ]
      }
    }
  },
  {
    "id": "random-seats",
    "category": "probability",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "The last seat",
        "question": "A plane has n≥2 assigned passengers boarding in order. The first chooses uniformly among all seats. Each later passenger takes their assigned seat if free, otherwise chooses uniformly among free seats. Probability the last passenger gets their assigned seat?",
        "hints": [
          "Only seats 1 and n end the chain of displaced passengers.",
          "Until one is chosen, those two seats are symmetric."
        ],
        "answer": "1/2.",
        "explanation": [
          "The displacement chain continues when a passenger’s seat is taken and they select another seat.",
          "Choosing seat 1 resolves the chain and preserves seat n; choosing n makes the last passenger lose. Both special seats stay equally likely at each unresolved selection, so each is reached first with probability 1/2."
        ]
      },
      "pl": {
        "title": "Ostatnie miejsce",
        "question": "Samolot ma n≥2 pasażerów z miejscami, wchodzących w kolejności. Pierwszy losuje równomiernie dowolne miejsce. Następni siadają na swoim, jeśli wolne, inaczej losują wolne równomiernie. Szansa, że ostatni usiądzie na swoim?",
        "hints": [
          "Tylko miejsca 1 i n kończą łańcuch przesiedleń.",
          "Do wyboru jednego z nich są symetryczne."
        ],
        "answer": "1/2.",
        "explanation": [
          "Łańcuch trwa, gdy komuś zajęto miejsce i wybiera inne.",
          "Wybór 1 kończy łańcuch i chroni n; wybór n odbiera ostatniemu miejsce. Oba szczególne miejsca są jednakowo prawdopodobne przy każdym nierozstrzygniętym wyborze, więc każde jest pierwsze z szansą 1/2."
        ]
      },
      "ru": {
        "title": "Последнее место",
        "question": "В самолёт по порядку входят n≥2 пассажиров с назначенными местами. Первый выбирает любое равномерно. Остальные садятся на своё, если свободно, иначе равномерно выбирают свободное. Вероятность своего места у последнего?",
        "hints": [
          "Только места 1 и n заканчивают цепочку вытеснения.",
          "Пока одно не выбрано, они симметричны."
        ],
        "answer": "1/2.",
        "explanation": [
          "Цепочка продолжается, когда место пассажира занято и он выбирает другое.",
          "Выбор 1 завершает цепочку, сохраняя n; выбор n лишает последнего своего места. Два особых места равновероятны при каждом нерешённом выборе, поэтому каждое выбирается первым с вероятностью 1/2."
        ]
      },
      "zh": {
        "title": "最后的座位",
        "question": "n≥2位旅客按编号登机，各有指定座位。第一人从全部座位均匀随机选，后续若自己座位空就坐，否则从空座中均匀选。最后一人坐自己座位的概率？",
        "hints": [
          "只有1号与n号座位会终止被挤走的链。",
          "在其中一个被选中前，两座对称。"
        ],
        "answer": "1/2。",
        "explanation": [
          "座位被占的旅客另选座位，延续挤占链。",
          "选到1号便结束链并保住n号，选到n号则最后一人失去座位。每次链未结束时两个特殊座位机会相同，因此各以1/2概率先被选中。"
        ]
      }
    }
  }
] satisfies Puzzle[];
