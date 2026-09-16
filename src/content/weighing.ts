import type {Puzzle} from '../types';

export const weighing = [
  {
    "id": "heavy-nine",
    "category": "weighing",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "One heavy coin",
        "question": "Nine coins look identical. Exactly one is heavier; all others weigh the same. A balance has three outcomes. Find the coin in the minimum worst-case weighings.",
        "hints": [
          "Divide the candidates into equal groups.",
          "A balanced result is just as informative as a tilt."
        ],
        "answer": "2 weighings.",
        "explanation": [
          "Weigh three against three. The heavy coin is in the heavier group, or in the untouched three if balanced.",
          "Weigh one against one from that group; tilt identifies the heavy coin, balance identifies the third. One weighing has only three outcomes for nine candidates, so two are necessary."
        ]
      },
      "pl": {
        "title": "Cięższa moneta",
        "question": "Dziewięć monet wygląda identycznie. Jedna jest cięższa, pozostałe ważą tyle samo. Waga szalkowa daje trzy wyniki. Ile ważeń potrzeba co najmniej w najgorszym przypadku?",
        "hints": [
          "Podziel kandydatów na równe grupy.",
          "Równowaga też dostarcza informacji."
        ],
        "answer": "2 ważenia.",
        "explanation": [
          "Zważ trzy przeciw trzem. Cięższa jest w cięższej grupie albo w nietkniętej trójce przy równowadze.",
          "Z tej trójki zważ jedną przeciw jednej. Przechył wskazuje cięższą, równowaga trzecią. Jedno ważenie ma tylko trzy wyniki dla dziewięciu kandydatów."
        ]
      },
      "ru": {
        "title": "Тяжёлая монета",
        "question": "Девять монет выглядят одинаково. Ровно одна тяжелее, остальные равны по весу. У весов три исхода. Каково минимальное число взвешиваний в худшем случае?",
        "hints": [
          "Разделите кандидатов поровну.",
          "Равновесие тоже информативно."
        ],
        "answer": "2 взвешивания.",
        "explanation": [
          "Взвесьте три против трёх. Искомая монета в тяжёлой тройке, либо в нетронутой при равновесии.",
          "Сравните две монеты выбранной тройки. Наклон укажет тяжёлую, равновесие — третью. Одно взвешивание различает лишь три исхода, а кандидатов девять."
        ]
      },
      "zh": {
        "title": "一枚重硬币",
        "question": "九枚外观相同的硬币中，恰有一枚较重，其余等重。天平有三种结果。最坏情况下最少称几次能找出重币？",
        "hints": [
          "将候选硬币均分。",
          "平衡也能提供信息。"
        ],
        "answer": "2次。",
        "explanation": [
          "三枚对三枚称。重币在较重一组；若平衡，则在未称的三枚中。",
          "从该组三枚中取两枚相称，倾斜指出重币，平衡则第三枚是重币。一次只有三种结果，无法区分九个候选，所以至少两次。"
        ]
      }
    }
  },
  {
    "id": "unknown-three",
    "category": "weighing",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The unknown direction",
        "question": "Three suspect coins include exactly one counterfeit, which may be heavier or lighter. Two genuine reference coins are available. How can two balance weighings identify the coin and its direction of difference?",
        "hints": [
          "A pan can hold two suspects together.",
          "Comparing two suspects against two genuine coins reveals a shared direction if they differ."
        ],
        "answer": "Weigh A+B against two genuine coins, then weigh one suspect against a genuine coin.",
        "explanation": [
          "If the first weighing balances, C is counterfeit; compare C with a genuine coin to determine its direction.",
          "If it tilts, either A or B is counterfeit and the tilt reveals whether it is heavy or light. Compare A with a genuine coin: a tilt identifies A, balance identifies B, with direction already known."
        ]
      },
      "pl": {
        "title": "Nieznany kierunek",
        "question": "Wśród trzech podejrzanych monet jedna jest fałszywa, cięższa lub lżejsza. Masz dwie prawdziwe monety wzorcowe. Jak w dwóch ważeniach wskazać monetę i kierunek różnicy?",
        "hints": [
          "Na szalce mogą leżeć dwie podejrzane monety razem.",
          "Porównanie ich z dwiema prawdziwymi ujawni wspólny kierunek różnicy."
        ],
        "answer": "Zważ A+B przeciw dwóm prawdziwym, potem jedną podejrzaną przeciw prawdziwej.",
        "explanation": [
          "Przy równowadze pierwszego ważenia fałszywa jest C; porównaj ją z prawdziwą, aby poznać kierunek.",
          "Przy przechyle fałszywa jest A lub B, a kierunek przechyłu mówi, czy jest cięższa czy lżejsza. Porównaj A z prawdziwą: przechył wskazuje A, równowaga B. Kierunek już znasz."
        ]
      },
      "ru": {
        "title": "Неизвестное направление",
        "question": "Среди трёх подозрительных монет одна фальшивая, тяжелее или легче. Есть две настоящие эталонные монеты. Как за два взвешивания найти монету и направление отличия?",
        "hints": [
          "На чашу можно положить две подозрительные монеты вместе.",
          "Сравнение их с двумя настоящими укажет направление отличия."
        ],
        "answer": "Взвесьте A+B против двух настоящих, затем одну подозрительную против настоящей.",
        "explanation": [
          "При равновесии первого взвешивания фальшивая C; сравните её с настоящей для определения направления.",
          "При наклоне фальшивая A или B, а направление уже известно. Сравните A с настоящей: наклон укажет A, равновесие B. Направление известно из первого взвешивания."
        ]
      },
      "zh": {
        "title": "未知的轻重",
        "question": "三枚可疑硬币中恰有一枚假币，可能偏重或偏轻。另有两枚真币。如何两次称量确定假币及其轻重？",
        "hints": [
          "可以把两枚可疑币一起放在一边。",
          "将它们与两枚真币比较，若不平衡便能知道轻重方向。"
        ],
        "answer": "先称A+B对两枚真币，再称一枚可疑币对真币。",
        "explanation": [
          "若首次平衡，C是假币，再将C与真币比较以确定轻重。",
          "若首次倾斜，假币在A、B中，且轻重方向已知。再比A与真币：倾斜则A是假币，平衡则B是假币，方向由首次结果确定。"
        ]
      }
    }
  },
  {
    "id": "bags",
    "category": "weighing",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A single digital reading",
        "question": "Ten bags each contain at least ten coins. Genuine coins weigh 10 g. Exactly one entire bag contains 9 g coins. With one exact digital-scale reading and unrestricted capacity, identify the bag.",
        "hints": [
          "Make each bag’s contribution distinguishable.",
          "Take a different number of coins from each bag."
        ],
        "answer": "Take i coins from bag i; the gram deficit identifies the bag.",
        "explanation": [
          "Take 1 through 10 coins from bags 1 through 10. Genuine total would be 55×10=550 g.",
          "If bag i is light, the total is 550−i g, uniquely revealing i."
        ]
      },
      "pl": {
        "title": "Jeden odczyt cyfrowy",
        "question": "Dziesięć worków ma po co najmniej dziesięć monet. Prawdziwe ważą 10 g. Dokładnie jeden worek zawiera wyłącznie monety 9 g. Jeden dokładny odczyt wagi cyfrowej bez limitu udźwigu ma wskazać worek.",
        "hints": [
          "Nadaj wkładowi każdego worka odrębne znaczenie.",
          "Weź różne liczby monet z worków."
        ],
        "answer": "Weź i monet z worka i; niedobór gramów wskaże worek.",
        "explanation": [
          "Z worków 1–10 weź odpowiednio 1–10 monet. Prawidłowa masa to 55×10=550 g.",
          "Lekki worek i daje wynik 550−i g, jednoznacznie wskazujący i."
        ]
      },
      "ru": {
        "title": "Одно цифровое показание",
        "question": "В десяти мешках не менее десяти монет в каждом. Настоящие весят 10 г. Ровно один мешок целиком состоит из монет по 9 г. Найдите его одним точным цифровым взвешиванием без ограничения нагрузки.",
        "hints": [
          "Сделайте вклад каждого мешка различимым.",
          "Возьмите разное число монет из мешков."
        ],
        "answer": "Возьмите i монет из мешка i; недостача граммов укажет мешок.",
        "explanation": [
          "Из мешков 1–10 возьмите 1–10 монет. Нормальный итог 55×10=550 г.",
          "Если лёгкий мешок i, итог 550−i г, что однозначно указывает i."
        ]
      },
      "zh": {
        "title": "一次电子秤读数",
        "question": "十袋硬币，每袋至少十枚。真币重10克，恰有一袋全是9克硬币。电子秤精确且载重不限，一次称量如何找出那袋？",
        "hints": [
          "让每袋的贡献各不相同。",
          "从每袋取不同数量。"
        ],
        "answer": "第i袋取i枚，缺少的克数即袋号。",
        "explanation": [
          "从1至10号袋分别取1至10枚，全真时重55×10=550克。",
          "若第i袋偏轻，读数为550−i克，唯一确定袋号。"
        ]
      }
    }
  },
  {
    "id": "four-weights",
    "category": "weighing",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Weights on either pan",
        "question": "You need to weigh every whole-number mass from 1 to 40 g with a balance. Standard weights may go on either pan. Give four positive integer weights that work, and explain why three cannot.",
        "hints": [
          "Each weight can contribute positively, negatively, or not at all.",
          "Powers of three make the reachable interval grow without gaps."
        ],
        "answer": "1, 3, 9, 27 g.",
        "explanation": [
          "Using 1 and 3 reaches every integer from −4 to 4; adding 9 extends to −13…13, then 27 to −40…40.",
          "Three weights have at most 3³=27 signed sums, but covering 1…40 also requires their negatives and zero: 81 sums. Thus three cannot suffice."
        ]
      },
      "pl": {
        "title": "Odważniki po obu stronach",
        "question": "Chcesz odważać każdą całkowitą masę od 1 do 40 g. Odważniki mogą leżeć na obu szalkach. Podaj cztery dodatnie całkowite odważniki i wyjaśnij, czemu trzy nie wystarczą.",
        "hints": [
          "Każdy odważnik ma wkład dodatni, ujemny lub zerowy.",
          "Potęgi trójki rozszerzają przedział bez luk."
        ],
        "answer": "1, 3, 9, 27 g.",
        "explanation": [
          "1 i 3 dają wszystkie liczby od −4 do 4. Dodanie 9 rozszerza zakres do −13…13, a 27 do −40…40.",
          "Trzy odważniki dają najwyżej 3³=27 sum ze znakami. Pokrycie 1…40 wymaga też przeciwnych i zera, czyli 81 sum."
        ]
      },
      "ru": {
        "title": "Гири на обеих чашах",
        "question": "Нужно взвешивать любую целую массу от 1 до 40 г. Гири можно класть на обе чаши. Назовите четыре положительные целые гири и объясните, почему трёх мало.",
        "hints": [
          "Каждая гиря даёт положительный, отрицательный или нулевой вклад.",
          "Степени тройки расширяют интервал без пробелов."
        ],
        "answer": "1, 3, 9, 27 г.",
        "explanation": [
          "Гири 1 и 3 дают все числа от −4 до 4; с 9 получаем −13…13, с 27 — −40…40.",
          "Три гири имеют не более 3³=27 знаковых сумм. Для 1…40 нужны также противоположные суммы и ноль: 81 значение."
        ]
      },
      "zh": {
        "title": "两边都能放砝码",
        "question": "要用天平称出1至40克的每个整数重量，砝码可放两边。给出四个正整数克数的砝码，并说明为何三个不够。",
        "hints": [
          "每个砝码可正向、反向或不用。",
          "三的幂能无空隙地扩展范围。"
        ],
        "answer": "1、3、9、27克。",
        "explanation": [
          "1和3可表示−4至4所有整数；加9扩展为−13至13，加27扩展为−40至40。",
          "三个砝码至多有3³=27种带符号和，而覆盖1至40也必须能表示其相反数和零，共81个值，所以三个不够。"
        ]
      }
    }
  },
  {
    "id": "one-pan",
    "category": "weighing",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Weights on one side",
        "question": "Standard weights may be placed only opposite the object. What is the fewest weights needed to measure every integer mass from 1 to 31 g, and one working set?",
        "hints": [
          "A weight is either used or omitted.",
          "Count subsets, then use powers of two."
        ],
        "answer": "5 weights: 1, 2, 4, 8, 16 g.",
        "explanation": [
          "Binary expansion expresses every integer 0…31 as a subset sum of these weights.",
          "Four weights have at most 16 subsets including the empty one; 32 distinct totals are needed, so five are necessary."
        ]
      },
      "pl": {
        "title": "Odważniki po jednej stronie",
        "question": "Odważniki można kłaść tylko naprzeciw przedmiotu. Jaka najmniejsza liczba pozwala zmierzyć każdą całkowitą masę 1–31 g? Podaj zestaw.",
        "hints": [
          "Odważnik jest użyty albo pominięty.",
          "Policz podzbiory, a potem użyj potęg dwójki."
        ],
        "answer": "5: 1, 2, 4, 8, 16 g.",
        "explanation": [
          "Zapis binarny przedstawia każdą liczbę 0…31 jako sumę podzbioru tych odważników.",
          "Cztery odważniki dają najwyżej 16 podzbiorów z pustym, a potrzeba 32 sum. Pięć jest konieczne."
        ]
      },
      "ru": {
        "title": "Гири с одной стороны",
        "question": "Гири можно класть только напротив предмета. Сколько минимум гирь нужно для всех целых масс 1–31 г? Приведите набор.",
        "hints": [
          "Гирю либо используют, либо нет.",
          "Посчитайте подмножества и вспомните степени двойки."
        ],
        "answer": "5: 1, 2, 4, 8, 16 г.",
        "explanation": [
          "Двоичная запись выражает каждое число 0…31 суммой подмножества этих гирь.",
          "У четырёх гирь не более 16 подмножеств с пустым, а нужны 32 суммы. Поэтому необходимы пять."
        ]
      },
      "zh": {
        "title": "砝码只能放一边",
        "question": "砝码只能放在物体对面的秤盘。要称出1至31克每个整数重量，最少几个砝码？给出一组。",
        "hints": [
          "每个砝码只有使用或不用两种状态。",
          "数子集，再考虑二的幂。"
        ],
        "answer": "5个：1、2、4、8、16克。",
        "explanation": [
          "二进制可将0至31各整数表示为这些砝码的子集和。",
          "四个砝码包括空集最多16个子集，却需要32个不同总和，因此五个必要。"
        ]
      }
    }
  },
  {
    "id": "unequal-loads",
    "category": "weighing",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Three pair readings",
        "question": "Three packages A, B, C weigh positive amounts. A+B=11 kg, B+C=13 kg, A+C=12 kg. Find each weight.",
        "hints": [
          "Adding the readings counts each package twice.",
          "Find the total before finding individuals."
        ],
        "answer": "A=5 kg, B=6 kg, C=7 kg.",
        "explanation": [
          "Adding gives 2(A+B+C)=36, so the total is 18.",
          "Subtract each pair from 18: C=7, A=5, B=6."
        ]
      },
      "pl": {
        "title": "Trzy pomiary par",
        "question": "Paczki A, B, C mają dodatnie masy. A+B=11 kg, B+C=13 kg, A+C=12 kg. Znajdź masy.",
        "hints": [
          "Suma pomiarów liczy każdą paczkę dwa razy.",
          "Najpierw znajdź masę całkowitą."
        ],
        "answer": "A=5 kg, B=6 kg, C=7 kg.",
        "explanation": [
          "Suma daje 2(A+B+C)=36, więc razem ważą 18.",
          "Odejmij każdą parę od 18: C=7, A=5, B=6."
        ]
      },
      "ru": {
        "title": "Три парных измерения",
        "question": "Посылки A, B, C имеют положительные массы. A+B=11 кг, B+C=13 кг, A+C=12 кг. Найдите массы.",
        "hints": [
          "Сумма показаний учитывает каждую посылку дважды.",
          "Сначала найдите общий вес."
        ],
        "answer": "A=5 кг, B=6 кг, C=7 кг.",
        "explanation": [
          "Сложение даёт 2(A+B+C)=36, общий вес 18.",
          "Вычитая пары из 18, получаем C=7, A=5, B=6."
        ]
      },
      "zh": {
        "title": "三次成对称量",
        "question": "包裹A、B、C重量为正。A+B=11千克，B+C=13千克，A+C=12千克。各重多少？",
        "hints": [
          "相加时每个包裹都算两遍。",
          "先求总重量。"
        ],
        "answer": "A=5、B=6、C=7千克。",
        "explanation": [
          "相加得2(A+B+C)=36，总重18。",
          "用18减去各对重量，得C=7、A=5、B=6。"
        ]
      }
    }
  },
  {
    "id": "faulty-scale",
    "category": "weighing",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The uneven balance",
        "question": "A balance has unequal arm lengths but works otherwise perfectly. An object balances against 9 g on the right when it is on the left; it balances against 16 g on the left when on the right. What is its mass?",
        "hints": [
          "Equal torques, not equal masses, balance the pans.",
          "Multiply the two torque equations to cancel arm lengths."
        ],
        "answer": "12 g.",
        "explanation": [
          "Let arm lengths be L and R and mass m. Then mL=9R and mR=16L.",
          "Multiply and cancel LR: m²=144. Positive mass gives m=12."
        ]
      },
      "pl": {
        "title": "Nierówne ramiona",
        "question": "Waga ma nierówne ramiona, poza tym działa idealnie. Przedmiot na lewej szalce równoważy 9 g na prawej; na prawej równoważy 16 g na lewej. Ile waży?",
        "hints": [
          "Równoważą się momenty, nie masy.",
          "Pomnóż równania, aby usunąć długości ramion."
        ],
        "answer": "12 g.",
        "explanation": [
          "Dla ramion L, R i masy m mamy mL=9R oraz mR=16L.",
          "Po pomnożeniu i skróceniu LR: m²=144, więc dodatnie m=12."
        ]
      },
      "ru": {
        "title": "Неравные плечи",
        "question": "У весов разные длины плеч, иных дефектов нет. Предмет слева уравновешивает 9 г справа; предмет справа уравновешивает 16 г слева. Какова масса?",
        "hints": [
          "Равны моменты сил, не массы.",
          "Перемножьте уравнения, убрав длины плеч."
        ],
        "answer": "12 г.",
        "explanation": [
          "Для плеч L, R и массы m: mL=9R, mR=16L.",
          "Умножая и сокращая LR, получаем m²=144, значит m=12."
        ]
      },
      "zh": {
        "title": "不等长的天平臂",
        "question": "天平两臂长度不同，其他方面完全正常。物体放左盘时与右盘9克平衡，放右盘时与左盘16克平衡。物体多重？",
        "hints": [
          "平衡的是力矩，不是质量。",
          "将两个力矩方程相乘，消去臂长。"
        ],
        "answer": "12克。",
        "explanation": [
          "设臂长L、R，质量m，则mL=9R，mR=16L。",
          "相乘并消去LR，得m²=144，质量为正，故m=12。"
        ]
      }
    }
  },
  {
    "id": "pair-heavy",
    "category": "weighing",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Two heavy coins, together",
        "question": "Four coins A–D contain exactly two heavy coins of equal mass; the other two share a lighter mass. How can you identify the heavy pair in at most two balance weighings?",
        "hints": [
          "Start with A against B, not two against two.",
          "A tie tells you the pair is homogeneous."
        ],
        "answer": "Compare A:B, then use the outcome to choose the second comparison.",
        "explanation": [
          "If A and B differ, the heavier is one heavy coin. Compare C:D to find the other.",
          "If A=B, compare A:C. If A is heavier, A and B are heavy; otherwise C and D are heavy. A=C cannot occur in this branch."
        ]
      },
      "pl": {
        "title": "Dwie cięższe monety",
        "question": "Cztery monety A–D zawierają dokładnie dwie równie ciężkie; pozostałe dwie są jednakowo lżejsze. Jak znaleźć ciężką parę w najwyżej dwóch ważeniach?",
        "hints": [
          "Zacznij od A przeciw B, nie dwóch przeciw dwóm.",
          "Równowaga oznacza jednorodną parę."
        ],
        "answer": "Porównaj A:B i dostosuj drugie ważenie.",
        "explanation": [
          "Jeśli A i B się różnią, cięższa jest jedną z szukanych. Porównaj C:D, aby znaleźć drugą.",
          "Jeśli A=B, porównaj A:C. Gdy A jest cięższa, ciężkie są A i B; inaczej C i D. Równość w tej gałęzi nie wystąpi."
        ]
      },
      "ru": {
        "title": "Две тяжёлые монеты",
        "question": "Среди четырёх монет A–D две одинаково тяжёлые, две другие одинаково лёгкие. Как найти тяжёлую пару не более чем за два взвешивания?",
        "hints": [
          "Начните с A против B, а не двух против двух.",
          "Равновесие означает однородную пару."
        ],
        "answer": "Сравните A:B, затем выберите второе сравнение по результату.",
        "explanation": [
          "Если A и B различаются, более тяжёлая — одна искомая. Сравните C:D для второй.",
          "Если A=B, сравните A:C. Если A тяжелее, искомые A и B; иначе C и D. Равенство здесь невозможно."
        ]
      },
      "zh": {
        "title": "两枚重币",
        "question": "A至D四枚硬币中恰有两枚等重的重币，另两枚等重且较轻。如何至多两次称量找出重币对？",
        "hints": [
          "先称A对B，而不是两枚对两枚。",
          "平衡说明这两枚属于同一类。"
        ],
        "answer": "先比A、B，再依结果选择第二次比较。",
        "explanation": [
          "若A、B不等，较重者是一枚重币，再比C、D确定另一枚。",
          "若A=B，比A、C。A较重则A、B是重币，否则C、D是重币。这个分支不可能再次平衡。"
        ]
      }
    }
  },
  {
    "id": "continuous-mass",
    "category": "weighing",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Dividing the grain",
        "question": "You have 24 kg of grain, an empty balance with two pans, and no weights. You may freely transfer grain. How can you obtain exactly 9 kg using three balanced divisions? Ignore container mass.",
        "hints": [
          "Equal divisions do not need calibrated weights.",
          "Keep half of 24 and then make smaller halves from one portion."
        ],
        "answer": "Make 12, then 6, then 3 kg portions; combine 6 and 3.",
        "explanation": [
          "Balance all grain into two 12 kg portions. Divide one 12 into two 6 kg portions.",
          "Divide one 6 into two 3 kg portions. Combine an untouched 6 with one 3 to obtain 9."
        ]
      },
      "pl": {
        "title": "Podział ziarna",
        "question": "Masz 24 kg ziarna i pustą wagę szalkową bez odważników. Możesz swobodnie przesypywać. Jak uzyskać dokładnie 9 kg w trzech równych podziałach? Pomijamy masę pojemników.",
        "hints": [
          "Równe podziały nie wymagają odważników.",
          "Dziel kolejno część na połowy."
        ],
        "answer": "Utwórz porcje 12, 6 i 3 kg; połącz 6 i 3.",
        "explanation": [
          "Podziel całe ziarno na dwie równe porcje po 12. Jedną podziel na dwie po 6.",
          "Jedną szóstkę podziel na dwie trójki. Połącz nienaruszoną szóstkę i jedną trójkę."
        ]
      },
      "ru": {
        "title": "Делим зерно",
        "question": "Есть 24 кг зерна, пустые чашечные весы и нет гирь. Зерно можно пересыпать. Как получить ровно 9 кг тремя равными делениями? Массу ёмкостей не учитывайте.",
        "hints": [
          "Равные деления не требуют гирь.",
          "Последовательно делите одну часть пополам."
        ],
        "answer": "Получите 12, 6 и 3 кг; соедините 6 и 3.",
        "explanation": [
          "Разделите всё зерно поровну на две части по 12. Одну разделите на две по 6.",
          "Одну шестёрку разделите на две тройки. Соедините нетронутые 6 и одну тройку."
        ]
      },
      "zh": {
        "title": "分谷物",
        "question": "有24千克谷物和无砝码的双盘天平，可自由转移谷物，不计容器重量。如何通过三次平分得到恰好9千克？",
        "hints": [
          "平分不需要标准砝码。",
          "逐步将一份再分成两半。"
        ],
        "answer": "分出12、6、3千克，合并6和3。",
        "explanation": [
          "先把全部平分为两份12千克，再将一份12平分为两份6。",
          "将一份6平分为两份3，再将未动的6与一份3合并，得到9。"
        ]
      }
    }
  },
  {
    "id": "weigh-coding",
    "category": "weighing",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Two readings, no adapting",
        "question": "Nine coins contain one heavier coin. Plan both balance weighings in advance. How can you identify it without changing the second weighing based on the first?",
        "hints": [
          "Give each coin a distinct pair of pan positions.",
          "Use the nine ordered pairs from left, absent, right."
        ],
        "answer": "Assign coins the nine pairs (L,L), (L,O), …, (R,R).",
        "explanation": [
          "In weighing one use each coin’s first coordinate; in weighing two use its second. Each pan has three coins in each weighing.",
          "The two outcomes reproduce the heavy coin’s unique coordinate pair, where balance means O. Thus all nine are distinguished."
        ]
      },
      "pl": {
        "title": "Dwa ważenia bez dostosowania",
        "question": "Wśród dziewięciu monet jedna jest cięższa. Zaplanuj oba ważenia z góry. Jak wskazać monetę bez zmiany drugiego ważenia po pierwszym?",
        "hints": [
          "Nadaj każdej monecie inną parę położeń.",
          "Użyj dziewięciu par: lewo, poza wagą, prawo."
        ],
        "answer": "Przypisz dziewięć par (L,L), (L,O), …, (R,R).",
        "explanation": [
          "Pierwsze ważenie używa pierwszej współrzędnej, drugie drugiej. Każda szalka ma po trzy monety.",
          "Dwa wyniki odtwarzają parę ciężkiej monety; równowaga oznacza O. Wszystkie monety mają różne kody."
        ]
      },
      "ru": {
        "title": "Два взвешивания без адаптации",
        "question": "Среди девяти монет одна тяжелее. Заранее спланируйте оба взвешивания. Как определить монету, не меняя второй план по первому результату?",
        "hints": [
          "Дайте каждой монете уникальную пару положений.",
          "Используйте девять пар: слева, вне весов, справа."
        ],
        "answer": "Назначьте девять пар (L,L), (L,O), …, (R,R).",
        "explanation": [
          "В первом взвешивании используйте первую координату, во втором вторую. На каждой чаше всегда по три монеты.",
          "Два исхода воспроизведут пару тяжёлой монеты; равновесие означает O. Все коды различны."
        ]
      },
      "zh": {
        "title": "预先安排的两次称量",
        "question": "九枚硬币中一枚较重。两次称量都要提前安排，不能根据第一次结果修改第二次。如何找出重币？",
        "hints": [
          "给每枚硬币一对独特的放置位置。",
          "使用左、外、右的九种有序对。"
        ],
        "answer": "分配九个坐标对：(左,左)、(左,外)……(右,右)。",
        "explanation": [
          "第一次按第一坐标放，第二次按第二坐标放。每次每盘都正好三枚。",
          "两次倾斜方向给出重币的坐标；平衡对应“外”。九种坐标互异，因此能识别全部硬币。"
        ]
      }
    }
  }
] satisfies Puzzle[];
