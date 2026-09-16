import type {Puzzle} from '../types';

export const deduction = [
  {
    "id": "horses",
    "category": "deduction",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "The quiet racetrack",
        "question": "There are 25 horses with fixed, distinct speeds. Each always performs consistently. At most 5 can race at once. Without a stopwatch, a race reveals only finishing order. What is the minimum number of races needed to identify the three fastest, in order?",
        "hints": [
          "First find the order within separate groups.",
          "After racing the group winners, eliminate any horse already known to have three horses ahead of it."
        ],
        "answer": "7 races.",
        "explanation": [
          "Race five groups of five, then race their winners. Relabel groups so A1 > B1 > C1 > D1 > E1, with subscripts giving within-group rank.",
          "A1 is fastest. Only A2, A3, B1, B2 and C1 can be second or third. Race these five; the first two finishers complete the podium.",
          "Six races cannot guarantee success. All 25 horses must be connected by comparisons. One race can reduce the number of disconnected components by at most four; going from 25 to one in six races therefore requires every race to merge five previously separate components. To identify a fastest horse, each component must enter its unbeaten champion. In the last merge, an adversary can make the champion of a non-singleton component win; such a component must exist. Its best earlier opponent and the runner-up of the last race have never been compared, and neither is known faster than the other. Either could be second overall. Thus an additional race is needed in the worst case."
        ]
      },
      "pl": {
        "title": "Cichy tor wyścigowy",
        "question": "25 koni ma stałe, różne prędkości i zawsze biegnie jednakowo. Naraz może ścigać się najwyżej 5 koni. Nie ma stopera: wyścig ujawnia tylko kolejność. Ile wyścigów potrzeba co najmniej, aby ustalić trzy najszybsze konie w kolejności?",
        "hints": [
          "Najpierw ustal kolejność w osobnych grupach.",
          "Po wyścigu zwycięzców grup odrzuć konie, przed którymi na pewno są co najmniej trzy inne."
        ],
        "answer": "7 wyścigów.",
        "explanation": [
          "Przeprowadź pięć wyścigów grupowych, potem wyścig zwycięzców. Nazwij grupy tak, aby A1 > B1 > C1 > D1 > E1; numer oznacza miejsce w grupie.",
          "A1 jest najszybszy. O drugie i trzecie miejsce mogą walczyć tylko A2, A3, B1, B2 i C1. Pierwsze dwa konie z ich wyścigu uzupełniają podium.",
          "Sześć wyścigów nie gwarantuje wyniku. Porównania muszą połączyć wszystkie 25 koni. Jeden wyścig zmniejsza liczbę rozłącznych grup najwyżej o cztery; sześć wyścigów musi więc za każdym razem łączyć pięć wcześniej rozłącznych grup. Aby ustalić najszybszego konia, każda grupa musi wystawić niepokonanego mistrza. W ostatnim scaleniu przeciwnik może wybrać wynik, w którym wygrywa mistrz grupy zawierającej więcej niż jednego konia; taka grupa musi istnieć. Jego najlepszy wcześniejszy rywal i drugi koń ostatniego wyścigu nie zostali porównani, a ich względna szybkość pozostaje nieznana. Każdy może być drugi ogółem. W najgorszym przypadku potrzeba więc kolejnego wyścigu."
        ]
      },
      "ru": {
        "title": "Тихий ипподром",
        "question": "У 25 лошадей постоянные, различные скорости; они всегда бегут одинаково. В забеге участвуют не более 5 лошадей. Секундомера нет: известен только порядок финиша. Каково минимальное число забегов для определения трёх самых быстрых по порядку?",
        "hints": [
          "Сначала упорядочьте отдельные группы.",
          "После забега победителей исключите лошадей, у которых заведомо есть три более быстрых соперника."
        ],
        "answer": "7 забегов.",
        "explanation": [
          "Проведите пять групповых забегов, затем забег победителей. Назовите группы так, чтобы A1 > B1 > C1 > D1 > E1; индекс означает место в группе.",
          "A1 — самая быстрая. На второе и третье места претендуют только A2, A3, B1, B2 и C1. Первые две в их забеге дополнят тройку.",
          "Шесть забегов не гарантируют результат. Сравнения должны связать всех 25 лошадей. Забег уменьшает число несвязанных групп максимум на четыре, поэтому все шесть обязаны каждый раз объединять пять ранее отдельных групп. Для определения самой быстрой каждая группа должна выставить своего непобеждённого чемпиона. При последнем объединении противник может выбрать исход, в котором победит чемпион группы из нескольких лошадей; такая группа обязательно есть. Его сильнейший прежний соперник и второй в последнем забеге не сравнивались, их относительная скорость неизвестна. Любой может быть вторым в целом. Поэтому в худшем случае нужен ещё один забег."
        ]
      },
      "zh": {
        "title": "安静的赛马场",
        "question": "25匹马的速度固定、互不相同，且每次表现一致。每场最多5匹马参赛，没有秒表，只能知道名次。确定最快的三匹马及其顺序，最少需要几场比赛？",
        "hints": [
          "先在各个小组内部排出顺序。",
          "让各组冠军比赛后，排除那些已知至少有三匹马比它快的马。"
        ],
        "answer": "7场。",
        "explanation": [
          "先分成五组各赛一场，再让五个冠军比赛。按结果将组命名为A至E，使A1 > B1 > C1 > D1 > E1；下标表示组内名次。",
          "A1最快。第二、第三名只可能是A2、A3、B1、B2、C1。让这五匹赛一场，前两名就是总第二和第三名。",
          "六场无法保证成功。比较关系必须连通全部25匹马；每场最多使连通组数量减少四，所以六场中的每一场都必须合并此前独立的五组。为确定最快者，各组须派出未败冠军。在最后合并时，对手可安排一个非单匹组的冠军获胜，这样的组必然存在。该冠军此前最强的对手与最后比赛第二名从未比较，也无法由已有关系确定谁更快，两者都可能是总第二。因此最坏情况下还需一场。"
        ]
      }
    }
  },
  {
    "id": "mislabeled",
    "category": "deduction",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "Labels with confidence",
        "question": "Three sealed boxes contain only apples, only oranges, and a mixture of both. Their labels say Apples, Oranges, Mixed, and every label is wrong. You may draw one fruit without looking inside. Which box should you draw from to identify all three?",
        "hints": [
          "Use the label that rules out a mixture.",
          "The fruit you draw identifies a pure box; then use the two remaining wrong labels."
        ],
        "answer": "Draw from Mixed.",
        "explanation": [
          "Mixed cannot contain a mixture, so its fruit identifies its pure contents.",
          "If it is an apple, the box labeled Oranges must be mixed and Apples must hold oranges. Reverse the fruits for an orange draw."
        ]
      },
      "pl": {
        "title": "Pewne siebie etykiety",
        "question": "Trzy zamknięte pudełka zawierają same jabłka, same pomarańcze i mieszankę obu. Etykiety Jabłka, Pomarańcze, Mieszanka są wszystkie błędne. Możesz wyjąć jeden owoc bez zaglądania. Z którego pudełka, aby rozpoznać wszystkie?",
        "hints": [
          "Wybierz etykietę wykluczającą mieszankę.",
          "Wyjęty owoc rozpozna czystą zawartość; potem wykorzystaj pozostałe błędne etykiety."
        ],
        "answer": "Z pudełka Mieszanka.",
        "explanation": [
          "Mieszanka nie może zawierać mieszanki, więc owoc wskazuje jej jednolitą zawartość.",
          "Jeśli to jabłko, Pomarańcze zawierają mieszankę, a Jabłka pomarańcze. Dla pomarańczy zamień owoce rolami."
        ]
      },
      "ru": {
        "title": "Уверенные этикетки",
        "question": "В трёх закрытых коробках лежат только яблоки, только апельсины и смесь обоих фруктов. Все надписи Яблоки, Апельсины, Смесь неверны. Можно достать один фрукт, не заглядывая. Из какой коробки, чтобы определить всё содержимое?",
        "hints": [
          "Выберите надпись, исключающую смесь.",
          "Достав фрукт, вы определите однородную коробку; затем используйте остальные неверные надписи."
        ],
        "answer": "Из коробки Смесь.",
        "explanation": [
          "В ней не смесь, поэтому фрукт определяет всё её содержимое.",
          "Если это яблоко, в коробке Апельсины смесь, а в коробке Яблоки апельсины. Для апельсина поменяйте фрукты местами."
        ]
      },
      "zh": {
        "title": "自信的标签",
        "question": "三个封闭盒子分别装纯苹果、纯橙子和两者混合物。标签为“苹果”“橙子”“混合”，且全部贴错。只能不看内部取出一个水果，应从哪个盒子取，才能确定全部内容？",
        "hints": [
          "利用那个排除了混合物的标签。",
          "取出的水果能确定一个纯水果盒，再利用另外两个错误标签。"
        ],
        "answer": "从“混合”盒取。",
        "explanation": [
          "它不可能装混合物，所以取出的水果确定其全部内容。",
          "若取出苹果，“橙子”盒必须装混合物，“苹果”盒装橙子。若取出橙子，则交换两种水果的角色。"
        ]
      }
    }
  },
  {
    "id": "cards",
    "category": "deduction",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Turn the right cards",
        "question": "Four cards show A, D, 4, 7. Each has a letter on one side and an integer on the other. Which cards must you turn to test: if a card has a vowel, its number is even?",
        "hints": [
          "A rule can fail only when its condition holds but its conclusion does not.",
          "An even number does not require a vowel."
        ],
        "answer": "A and 7.",
        "explanation": [
          "Turn A to look for an odd number; turn 7 to look for a vowel.",
          "D cannot violate the rule. Either letter behind 4 is allowed."
        ]
      },
      "pl": {
        "title": "Odwróć właściwe karty",
        "question": "Cztery karty pokazują A, D, 4, 7. Każda ma literę z jednej strony i liczbę całkowitą z drugiej. Które trzeba odwrócić, aby sprawdzić regułę: jeśli jest samogłoska, liczba jest parzysta?",
        "hints": [
          "Regułę obala spełniony warunek i niespełniony wniosek.",
          "Liczba parzysta nie wymaga samogłoski."
        ],
        "answer": "A i 7.",
        "explanation": [
          "Sprawdź, czy za A jest liczba nieparzysta, a za 7 samogłoska.",
          "D nie obala reguły. Za 4 może być dowolna litera."
        ]
      },
      "ru": {
        "title": "Нужные карты",
        "question": "Четыре карты показывают A, D, 4, 7. На каждой с одной стороны латинская буква, с другой целое число. Какие перевернуть для проверки правила: если буква гласная, число чётное?",
        "hints": [
          "Правило нарушается, когда условие выполнено, а вывод нет.",
          "Чётное число не требует гласной."
        ],
        "answer": "A и 7.",
        "explanation": [
          "За A ищите нечётное число, за 7 — гласную.",
          "D не нарушает правило. За 4 допустима любая буква."
        ]
      },
      "zh": {
        "title": "翻对卡片",
        "question": "四张卡片显示A、D、4、7。每张一面是英文字母，一面是整数。要检验“若字母是元音，则数字为偶数”，必须翻哪几张？",
        "hints": [
          "只有前提成立而结论不成立时，规则才被违反。",
          "偶数背面不一定要是元音。"
        ],
        "answer": "A和7。",
        "explanation": [
          "翻A检查是否为奇数，翻7检查是否为元音。",
          "D不会违反规则，4背面是什么字母都允许。"
        ]
      }
    }
  },
  {
    "id": "muddy",
    "category": "deduction",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "A shared observation",
        "question": "Three perfectly logical people all have ink on their foreheads. Each sees the others but not themselves. They know the rules and everyone’s rationality. A host publicly says at least one has ink. Each round, everyone simultaneously states whether they know they have ink, hearing earlier rounds. In which round do all know?",
        "hints": [
          "Imagine only one marked person, then two.",
          "Silence in an earlier round carries information."
        ],
        "answer": "Round three.",
        "explanation": [
          "One marked person would know in round one by seeing no others.",
          "With two, each would deduce their own mark after no one knew in round one. With three, each sees two; their failure to know in round two rules out being unmarked."
        ]
      },
      "pl": {
        "title": "Wspólna obserwacja",
        "question": "Trzy idealnie logiczne osoby mają atrament na czole. Każda widzi pozostałe, lecz nie siebie. Zasady i racjonalność wszystkich są wspólnie znane. Prowadzący publicznie mówi, że ktoś ma atrament. W każdej rundzie wszyscy jednocześnie mówią, czy wiedzą, że go mają, znając odpowiedzi wcześniejszych rund. Kiedy wszyscy wiedzą?",
        "hints": [
          "Rozważ najpierw jedną oznaczoną osobę, potem dwie.",
          "Brak wiedzy w poprzedniej rundzie to informacja."
        ],
        "answer": "W trzeciej rundzie.",
        "explanation": [
          "Jedna oznaczona osoba wiedziałaby w pierwszej rundzie, nie widząc innych oznaczonych.",
          "Przy dwóch każda wywnioskowałaby swój znak po pierwszej rundzie. Przy trzech każda widzi dwie; ich niewiedza w drugiej rundzie wyklucza brak własnego znaku."
        ]
      },
      "ru": {
        "title": "Общее наблюдение",
        "question": "У трёх идеально логичных людей чернила на лбу. Каждый видит других, но не себя. Правила и рациональность всех общеизвестны. Ведущий публично говорит, что чернила есть хотя бы у одного. В каждом раунде все одновременно сообщают, знают ли о своих чернилах, слыша предыдущие раунды. Когда узнают все?",
        "hints": [
          "Рассмотрите сначала одного отмеченного, затем двух.",
          "Незнание в прошлом раунде тоже даёт информацию."
        ],
        "answer": "В третьем раунде.",
        "explanation": [
          "Один отмеченный понял бы всё в первом раунде, не видя других отметок.",
          "При двух каждый понял бы после первого раунда. При трёх каждый видит двоих; их незнание во втором раунде исключает отсутствие собственной отметки."
        ]
      },
      "zh": {
        "title": "共同的观察",
        "question": "三位完全理性的人额头上都有墨迹。每人看得到别人，看不到自己。规则及所有人的理性是共同知识。主持人公开说至少一人有墨迹。每轮大家同时说是否知道自己有墨迹，并听到此前各轮回答。第几轮大家都会知道？",
        "hints": [
          "先考虑只有一人有墨迹，再考虑两人。",
          "上一轮的“不知道”也提供信息。"
        ],
        "answer": "第三轮。",
        "explanation": [
          "只有一人有墨迹时，他看不到其他墨迹，会在第一轮知道。",
          "若有两人，第一轮无人知道后，两人都会推出自己有墨迹。实际有三人，每人看到两人；那两人第二轮仍不知道，就排除了自己没有墨迹的可能。"
        ]
      }
    }
  },
  {
    "id": "ages",
    "category": "deduction",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The older child",
        "question": "Two children have positive integer ages. Their ages add to 11 and multiply to 30. How old is the older child?",
        "hints": [
          "Look for factor pairs, not guesses about birthdays.",
          "Both the sum and product must hold."
        ],
        "answer": "6 years old.",
        "explanation": [
          "The positive factor pairs of 30 are (1,30), (2,15), (3,10), (5,6).",
          "Only (5,6) sums to 11, so the older is 6."
        ]
      },
      "pl": {
        "title": "Starsze dziecko",
        "question": "Wiek dwojga dzieci to dodatnie liczby całkowite. Suma wieku wynosi 11, a iloczyn 30. Ile lat ma starsze?",
        "hints": [
          "Szukaj par dzielników, nie dat urodzin.",
          "Muszą zgadzać się suma i iloczyn."
        ],
        "answer": "6 lat.",
        "explanation": [
          "Pary dodatnich czynników 30 to (1,30), (2,15), (3,10), (5,6).",
          "Tylko (5,6) ma sumę 11, więc starsze ma 6 lat."
        ]
      },
      "ru": {
        "title": "Старший ребёнок",
        "question": "Возраст двух детей выражен положительными целыми числами. Сумма возрастов 11, произведение 30. Сколько лет старшему?",
        "hints": [
          "Ищите пары множителей, а не даты рождения.",
          "Должны совпасть и сумма, и произведение."
        ],
        "answer": "6 лет.",
        "explanation": [
          "Пары положительных множителей 30: (1,30), (2,15), (3,10), (5,6).",
          "Только (5,6) даёт сумму 11, значит старшему 6."
        ]
      },
      "zh": {
        "title": "年长的孩子",
        "question": "两个孩子的年龄都是正整数，年龄和为11，积为30。年长的孩子几岁？",
        "hints": [
          "找因数对，不必猜生日。",
          "和与积两个条件都要满足。"
        ],
        "answer": "6岁。",
        "explanation": [
          "30的正因数对为(1,30)、(2,15)、(3,10)、(5,6)。",
          "只有(5,6)的和为11，因此年长者6岁。"
        ]
      }
    }
  },
  {
    "id": "suspects",
    "category": "deduction",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Exactly one true clue",
        "question": "Exactly one of A, B, C took a key. Three clues read: “A took it”; “B did not take it”; “A did not take it”. Exactly one clue is true. Who took the key?",
        "hints": [
          "Two clues contradict each other directly.",
          "Those two already account for the single true clue."
        ],
        "answer": "B.",
        "explanation": [
          "“A took it” and “A did not take it” contain exactly one truth.",
          "Therefore “B did not take it” must be false, so B took it."
        ]
      },
      "pl": {
        "title": "Jedna prawdziwa wskazówka",
        "question": "Dokładnie jedna osoba z A, B, C zabrała klucz. Wskazówki brzmią: „A zabrała klucz”, „B nie zabrała klucza”, „A nie zabrała klucza”. Dokładnie jedna jest prawdziwa. Kto zabrał klucz?",
        "hints": [
          "Dwie wskazówki są sprzeczne.",
          "Wśród nich jest już jedyna prawda."
        ],
        "answer": "B.",
        "explanation": [
          "Zdania o A zawierają dokładnie jedną prawdę.",
          "„B nie zabrała klucza” musi być fałszem, więc klucz zabrała B."
        ]
      },
      "ru": {
        "title": "Одна верная улика",
        "question": "Ровно один из A, B, C взял ключ. Улики: «Ключ взял A»; «B не брал ключ»; «A не брал ключ». Ровно одна верна. Кто взял ключ?",
        "hints": [
          "Две улики прямо противоречат друг другу.",
          "В них уже содержится единственная истина."
        ],
        "answer": "B.",
        "explanation": [
          "Из двух утверждений об A ровно одно истинно.",
          "Поэтому «B не брал ключ» ложно: ключ взял B."
        ]
      },
      "zh": {
        "title": "唯一真线索",
        "question": "A、B、C中恰有一人拿走钥匙。三条线索是：“A拿了”“B没拿”“A没拿”。恰有一条为真。谁拿了钥匙？",
        "hints": [
          "其中两条直接矛盾。",
          "这两条已经包含了唯一真话。"
        ],
        "answer": "B。",
        "explanation": [
          "关于A的两句话恰有一句为真。",
          "所以“B没拿”必须为假，即B拿了。"
        ]
      }
    }
  },
  {
    "id": "hats-line",
    "category": "deduction",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Three hats in a line",
        "question": "Three people wear hats selected from three black and two white hats. Rear sees both others, middle sees front, front sees none. All know the supply and reason perfectly. Rear says “I do not know my color”; middle then says the same. What color can front deduce?",
        "hints": [
          "What pair would let the rear person know immediately?",
          "The middle person has heard the rear person’s answer."
        ],
        "answer": "Black.",
        "explanation": [
          "Rear would know they were black if both others were white, so front and middle are not both white.",
          "If front were white, middle would now know they were black. Middle does not know, so front is black."
        ]
      },
      "pl": {
        "title": "Kapelusze w szeregu",
        "question": "Trzy osoby noszą kapelusze wybrane spośród trzech czarnych i dwóch białych. Tylna widzi dwie pozostałe, środkowa przednią, przednia żadnej. Wszyscy znają zapas i rozumują idealnie. Tylna mówi „Nie znam koloru”, a potem środkowa mówi to samo. Jaki kolor ustala przednia?",
        "hints": [
          "Jaka para dałaby tylnej natychmiastową pewność?",
          "Środkowa słyszała odpowiedź tylnej."
        ],
        "answer": "Czarny.",
        "explanation": [
          "Gdyby obie przed nią miały białe kapelusze, tylna wiedziałaby, że ma czarny. Zatem nie są obie białe.",
          "Gdyby przednia miała biały, środkowa wiedziałaby teraz, że ma czarny. Nie wie, więc przednia ma czarny."
        ]
      },
      "ru": {
        "title": "Шляпы в ряд",
        "question": "Трое носят шляпы, выбранные из трёх чёрных и двух белых. Задний видит двоих, средний переднего, передний никого. Все знают запас и рассуждают идеально. Задний говорит «Не знаю свой цвет», затем средний говорит то же. Какой цвет определит передний?",
        "hints": [
          "Какая пара сразу дала бы заднему ответ?",
          "Средний слышал ответ заднего."
        ],
        "answer": "Чёрный.",
        "explanation": [
          "Если бы впереди были две белые шляпы, задний знал бы, что у него чёрная. Значит обе белыми быть не могут.",
          "Если бы у переднего была белая, средний теперь знал бы, что у него чёрная. Он не знает, значит у переднего чёрная."
        ]
      },
      "zh": {
        "title": "排成一列的帽子",
        "question": "三人戴着从三顶黑帽、两顶白帽中选出的帽子。后面的人看到前两人，中间的人看到最前者，最前者谁也看不到。大家知道帽子总量且完全理性。后者说“不知道自己的颜色”，随后中间者也这样说。最前者能推出什么颜色？",
        "hints": [
          "后者看到哪种组合就会立即知道？",
          "中间者已经听到了后者的回答。"
        ],
        "answer": "黑色。",
        "explanation": [
          "若前两顶都白，后者会知道自己是黑帽。因此前两顶不全白。",
          "若最前者戴白帽，中间者现在就会知道自己戴黑帽。中间者仍不知道，故最前者戴黑帽。"
        ]
      }
    }
  },
  {
    "id": "sets",
    "category": "deduction",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "The overlapping clubs",
        "question": "In a group of 30 people, 18 belong to a chess club and 17 to a music club. Everyone belongs to at least one. How many belong to both?",
        "hints": [
          "Adding the club sizes counts some people twice.",
          "Compare the sum with the actual group size."
        ],
        "answer": "5.",
        "explanation": [
          "The sum 18 + 17 = 35 includes each dual member twice.",
          "Subtract the 30 distinct people: 5 are in both clubs."
        ]
      },
      "pl": {
        "title": "Dwa kluby",
        "question": "W grupie 30 osób 18 należy do klubu szachowego, a 17 do muzycznego. Każda należy do co najmniej jednego. Ile należy do obu?",
        "hints": [
          "Dodając rozmiary klubów, niektórych liczysz dwa razy.",
          "Porównaj sumę z liczbą osób."
        ],
        "answer": "5.",
        "explanation": [
          "Suma 18 + 17 = 35 liczy podwójnie członków obu klubów.",
          "Po odjęciu 30 różnych osób zostaje 5."
        ]
      },
      "ru": {
        "title": "Два клуба",
        "question": "Из 30 человек 18 состоят в шахматном клубе, 17 — в музыкальном. Каждый состоит хотя бы в одном. Сколько состоят в обоих?",
        "hints": [
          "При сложении некоторых учитывают дважды.",
          "Сравните сумму с числом людей."
        ],
        "answer": "5.",
        "explanation": [
          "Сумма 18 + 17 = 35 дважды учитывает участников обоих клубов.",
          "Вычитая 30 разных людей, получаем 5."
        ]
      },
      "zh": {
        "title": "重叠的社团",
        "question": "30人中，18人参加棋社，17人参加音乐社。每人至少参加一个。多少人两个都参加？",
        "hints": [
          "相加时，有些人被数了两遍。",
          "将总和与实际人数比较。"
        ],
        "answer": "5人。",
        "explanation": [
          "18 + 17 = 35，其中双社团成员被重复计算。",
          "减去30个不同的人，得到5人。"
        ]
      }
    }
  },
  {
    "id": "conditional",
    "category": "deduction",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The silent alarm",
        "question": "A device obeys: if its sensor is active, its lamp is on; if its lamp is on, its alarm sounds. The alarm is silent. Must the sensor be inactive? Assume the rules always hold.",
        "hints": [
          "Follow implications backward by denying their conclusions.",
          "An active sensor would force a whole chain."
        ],
        "answer": "Yes.",
        "explanation": [
          "An active sensor would turn on the lamp, which would sound the alarm.",
          "That contradicts silence. Therefore the sensor is inactive; no reverse implication was assumed."
        ]
      },
      "pl": {
        "title": "Cichy alarm",
        "question": "Urządzenie spełnia reguły: aktywny czujnik oznacza świecącą lampę; świecąca lampa oznacza dźwięk alarmu. Alarm milczy. Czy czujnik musi być nieaktywny? Reguły zawsze obowiązują.",
        "hints": [
          "Idź wstecz, zaprzeczając wnioskom.",
          "Aktywny czujnik wymusiłby cały łańcuch."
        ],
        "answer": "Tak.",
        "explanation": [
          "Aktywny czujnik włączyłby lampę, a ta alarm.",
          "To przeczy ciszy. Czujnik jest więc nieaktywny; nie zakładaliśmy odwrotnych implikacji."
        ]
      },
      "ru": {
        "title": "Тихая тревога",
        "question": "Правила устройства: если датчик активен, лампа горит; если лампа горит, звучит тревога. Тревога молчит. Обязательно ли датчик неактивен? Правила выполняются всегда.",
        "hints": [
          "Идите назад, отрицая следствия.",
          "Активный датчик запустил бы всю цепочку."
        ],
        "answer": "Да.",
        "explanation": [
          "Активный датчик означал бы горящую лампу, а она — тревогу.",
          "Это противоречит тишине. Значит датчик неактивен; обратные импликации не предполагались."
        ]
      },
      "zh": {
        "title": "无声警报",
        "question": "设备始终遵守：若传感器开启，则灯亮；若灯亮，则警报响。现在警报没响，传感器一定没开启吗？",
        "hints": [
          "可以通过否定结论向后推。",
          "传感器开启会触发一整条逻辑链。"
        ],
        "answer": "一定没开启。",
        "explanation": [
          "若传感器开启，则灯亮，继而警报响。",
          "这与警报没响矛盾，所以传感器没开启，无须假设逆命题。"
        ]
      }
    }
  },
  {
    "id": "handshakes",
    "category": "deduction",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "The host’s question",
        "question": "Five married couples attend a party. Nobody shakes their own or their spouse’s hand, and no pair shakes twice. The host asks the other nine people their handshake counts; all nine answers differ. How many hands did the host’s spouse shake?",
        "hints": [
          "The answers must range from 0 to 8.",
          "The person with 8 must be married to the person with 0. Remove that pair and repeat."
        ],
        "answer": "4.",
        "explanation": [
          "The counts are 0 through 8. The person with 8 shook everyone except their spouse, who must be the person with 0.",
          "Removing them pairs 1 with 7, then 2 with 6, then 3 with 5 by the same argument.",
          "The remaining respondent, with count 4, must be the host’s spouse."
        ]
      },
      "pl": {
        "title": "Pytanie gospodarza",
        "question": "Na przyjęciu jest pięć małżeństw. Nikt nie ściska własnej dłoni ani dłoni współmałżonka; żadna para nie wita się dwa razy. Gospodarz pyta pozostałe dziewięć osób o liczbę uścisków i otrzymuje różne odpowiedzi. Ile dłoni uścisnął współmałżonek gospodarza?",
        "hints": [
          "Odpowiedzi to liczby od 0 do 8.",
          "Osoba z 8 uściskami jest małżonkiem osoby z 0. Usuń tę parę i powtórz."
        ],
        "answer": "4.",
        "explanation": [
          "Wyniki to 0–8. Osoba z 8 powitała wszystkich poza małżonkiem, którym musi być osoba z 0.",
          "Po usunięciu tej pary analogicznie łączymy 1 z 7, 2 z 6 oraz 3 z 5.",
          "Pozostały respondent z wynikiem 4 jest współmałżonkiem gospodarza."
        ]
      },
      "ru": {
        "title": "Вопрос хозяина",
        "question": "На вечеринке пять супружеских пар. Никто не пожимает руку себе или супругу; каждая пара людей здоровается не более раза. Хозяин спрашивает остальных девятерых о числе рукопожатий и получает разные ответы. Сколько рукопожатий у супруга хозяина?",
        "hints": [
          "Ответы должны быть от 0 до 8.",
          "Человек с 8 — супруг человека с 0. Уберите пару и повторите."
        ],
        "answer": "4.",
        "explanation": [
          "Ответы — 0–8. Человек с 8 пожал руки всем, кроме супруга, которым должен быть человек с 0.",
          "Убирая их, аналогично получаем пары 1 и 7, 2 и 6, 3 и 5.",
          "Оставшийся отвечавший с числом 4 — супруг хозяина."
        ]
      },
      "zh": {
        "title": "主人的问题",
        "question": "五对夫妻参加聚会。没人和自己或配偶握手，每两人最多握一次。主人问其余九人各握了几次，九个回答互不相同。主人的配偶握了几次？",
        "hints": [
          "回答必然是0到8。",
          "握8次者必与握0次者成婚。移去这一对，再重复推理。"
        ],
        "answer": "4次。",
        "explanation": [
          "次数为0到8。握8次者与配偶以外所有人都握了手，所以配偶必是0次者。",
          "移去这对后，同理配对1与7、2与6、3与5。",
          "剩下回答4次的人就是主人的配偶。"
        ]
      }
    }
  }
] satisfies Puzzle[];
