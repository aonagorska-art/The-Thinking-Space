import type {Puzzle} from '../types';

export const scheduling = [
  {
    "id": "bridge",
    "category": "scheduling",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "A narrow bridge",
        "question": "Four people take 1, 2, 7 and 10 minutes to cross a bridge. At most two cross together, at the slower speed. A torch must accompany every crossing; it cannot be thrown. All start on one bank. What is the minimum total time?",
        "hints": [
          "The fastest need not escort every person.",
          "Use the two fastest to shuttle the torch while the slowest cross together."
        ],
        "answer": "17 minutes.",
        "explanation": [
          "Send 1 and 2 (2), return 1 (1), send 7 and 10 (10), return 2 (2), send 1 and 2 (2): total 17.",
          "For four sorted times a≤b≤c≤d, an optimal transfer either pairs c,d, costing at least a+3b+d overall, or sends them separately with fastest escort, costing at least 2a+b+c+d. Extra returns cannot improve either bound. Here the bounds are 17 and 21; the first is attained."
        ]
      },
      "pl": {
        "title": "Wąski most",
        "question": "Cztery osoby przechodzą most w 1, 2, 7 i 10 minut. Naraz idą najwyżej dwie, w tempie wolniejszej. Latarka musi towarzyszyć każdemu przejściu; nie wolno jej rzucać. Wszyscy zaczynają po jednej stronie. Jaki jest najkrótszy czas?",
        "hints": [
          "Najszybsza osoba nie musi eskortować każdej.",
          "Dwie najszybsze obsługują latarkę, gdy najwolniejsze idą razem."
        ],
        "answer": "17 minut.",
        "explanation": [
          "1 i 2 idą (2), 1 wraca (1), 7 i 10 idą (10), 2 wraca (2), 1 i 2 idą (2): razem 17.",
          "Dla a≤b≤c≤d optymalny plan albo łączy c,d, co kosztuje łącznie co najmniej a+3b+d, albo przenosi ich osobno z najszybszą eskortą, co wymaga co najmniej 2a+b+c+d. Dodatkowe powroty nie poprawiają granic. Tu to 17 i 21; osiągamy 17."
        ]
      },
      "ru": {
        "title": "Узкий мост",
        "question": "Четверо переходят мост за 1, 2, 7 и 10 минут. Идут не более двух со скоростью медленного. Фонарь сопровождает каждый переход, бросать его нельзя. Все на одном берегу. Каково минимальное время?",
        "hints": [
          "Самый быстрый не обязан сопровождать каждого.",
          "Двое быстрых перевозят фонарь, пока медленные идут вместе."
        ],
        "answer": "17 минут.",
        "explanation": [
          "1 и 2 идут (2), 1 назад (1), 7 и 10 идут (10), 2 назад (2), 1 и 2 идут (2): всего 17.",
          "Для a≤b≤c≤d оптимальная схема либо ведёт c,d вместе, требуя суммарно хотя бы a+3b+d, либо отдельно с быстрейшим сопровождающим, требуя 2a+b+c+d. Лишние возвраты границы не улучшают. Здесь это 17 и 21; первая достигнута."
        ]
      },
      "zh": {
        "title": "窄桥",
        "question": "四人过桥分别需1、2、7、10分钟。每次最多两人，以较慢者速度走。每次过桥必须带手电，不能抛掷。起初都在一岸。最短总时间？",
        "hints": [
          "不必每个人都由最快者陪同。",
          "让最快两人运送手电，最慢两人一起过。"
        ],
        "answer": "17分钟。",
        "explanation": [
          "1与2过(2)，1返(1)，7与10过(10)，2返(2)，1与2过(2)，共17。",
          "对a≤b≤c≤d，最优方案要么让c、d一起过，总成本至少a+3b+d；要么分别由最快者陪同，总成本至少2a+b+c+d。额外返回不会改善下界。这里两界为17和21，第一种达到17。"
        ]
      }
    }
  },
  {
    "id": "parallel-jobs",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Two identical machines",
        "question": "Jobs last 8, 7, 6, 5 and 4 hours. Two identical machines each run one job at a time; jobs cannot be split or interrupted. All are ready at time zero. Minimum completion time?",
        "hints": [
          "Total workload supplies a lower bound.",
          "Can you partition the work into equal totals?"
        ],
        "answer": "15 hours.",
        "explanation": [
          "The workload is 30, so two machines need at least 15 hours.",
          "Assign 8+7 to one, 6+5+4 to the other. Both finish at 15."
        ]
      },
      "pl": {
        "title": "Dwie identyczne maszyny",
        "question": "Zadania trwają 8, 7, 6, 5 i 4 godziny. Dwie identyczne maszyny wykonują po jednym zadaniu; nie wolno dzielić ani przerywać. Wszystko gotowe od chwili zero. Najkrótszy czas?",
        "hints": [
          "Suma pracy daje dolną granicę.",
          "Czy można podzielić pracę na równe sumy?"
        ],
        "answer": "15 godzin.",
        "explanation": [
          "Pracy jest 30 godzin, więc dwie maszyny potrzebują co najmniej 15.",
          "Jedna robi 8+7, druga 6+5+4. Obie kończą po 15."
        ]
      },
      "ru": {
        "title": "Две одинаковые машины",
        "question": "Задачи длятся 8, 7, 6, 5, 4 часа. Две одинаковые машины выполняют по одной задаче; делить и прерывать нельзя. Всё готово в момент ноль. Минимальное время?",
        "hints": [
          "Общая работа даёт нижнюю границу.",
          "Можно ли разделить её поровну?"
        ],
        "answer": "15 часов.",
        "explanation": [
          "Всего 30 часов работы, две машины требуют хотя бы 15.",
          "Одной дайте 8+7, другой 6+5+4. Обе закончат за 15."
        ]
      },
      "zh": {
        "title": "两台相同机器",
        "question": "任务时长8、7、6、5、4小时。两台相同机器各同时只做一项，任务不可分割或中断，零时刻全部就绪。最短完工时间？",
        "hints": [
          "总工作量给出下界。",
          "能否分成相等总时长？"
        ],
        "answer": "15小时。",
        "explanation": [
          "总工作量30，两机至少15小时。",
          "一机做8+7，另一机做6+5+4，都在15小时完成。"
        ]
      }
    }
  },
  {
    "id": "critical-path",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The dependency chain",
        "question": "A takes 3 h and B takes 5 h, both initially ready. C takes 4 h after A. D takes 2 h after both B and C. With unlimited workers, when can all work finish earliest?",
        "hints": [
          "More workers cannot shorten a dependency chain.",
          "Compare the two arrival times at D."
        ],
        "answer": "9 hours.",
        "explanation": [
          "A finishes at 3 and C at 7; B finishes at 5. D waits until 7 and ends at 9.",
          "The chain A→C→D itself lasts 9, proving no earlier finish is possible."
        ]
      },
      "pl": {
        "title": "Łańcuch zależności",
        "question": "A trwa 3 h, B 5 h, oba gotowe na początku. C trwa 4 h po A. D trwa 2 h po B i C. Przy dowolnej liczbie pracowników kiedy najwcześniej koniec?",
        "hints": [
          "Więcej pracowników nie skraca łańcucha zależności.",
          "Porównaj dwa momenty gotowości do D."
        ],
        "answer": "9 godzin.",
        "explanation": [
          "A kończy w 3, C w 7, B w 5. D czeka do 7 i kończy w 9.",
          "Łańcuch A→C→D trwa sam 9, więc wcześniej się nie da."
        ]
      },
      "ru": {
        "title": "Цепочка зависимостей",
        "question": "A длится 3 ч, B 5 ч, оба готовы сразу. C длится 4 ч после A. D длится 2 ч после B и C. Работников сколько угодно. Самое раннее завершение?",
        "hints": [
          "Лишние работники не сокращают цепочку зависимостей.",
          "Сравните два момента готовности D."
        ],
        "answer": "9 часов.",
        "explanation": [
          "A заканчивается в 3, C в 7, B в 5. D начинается в 7 и заканчивается в 9.",
          "Сама цепочка A→C→D длится 9, раньше невозможно."
        ]
      },
      "zh": {
        "title": "依赖链",
        "question": "A需3小时、B需5小时，起初都可做。C需4小时且在A后做；D需2小时且在B、C都完成后做。工人数不限，最早何时全完成？",
        "hints": [
          "更多工人无法缩短依赖链。",
          "比较D两个前置条件的就绪时间。"
        ],
        "answer": "9小时。",
        "explanation": [
          "A在3完成，C在7完成，B在5完成。D从7做到9。",
          "A→C→D本身长9小时，证明不能更早。"
        ]
      }
    }
  },
  {
    "id": "meeting-rooms",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Room to meet",
        "question": "Meetings occupy intervals [9,11), [10,12), [11,13), [12,14). Endpoints are hours; a room is reusable exactly when a meeting ends. Minimum rooms?",
        "hints": [
          "Count simultaneous meetings using half-open intervals.",
          "A meeting starting at 11 can reuse the room freed at 11."
        ],
        "answer": "2.",
        "explanation": [
          "At 10:30 two meetings overlap, requiring two rooms.",
          "Assign [9,11) then [11,13) to one room; [10,12) then [12,14) to the other."
        ]
      },
      "pl": {
        "title": "Miejsce na spotkania",
        "question": "Spotkania zajmują przedziały [9,11), [10,12), [11,13), [12,14). To godziny; salę można użyć od chwili końca spotkania. Ile sal potrzeba?",
        "hints": [
          "Policz jednoczesne spotkania w przedziałach półotwartych.",
          "O 11 można użyć sali zwolnionej o 11."
        ],
        "answer": "2.",
        "explanation": [
          "O 10:30 trwają dwa spotkania, więc potrzeba dwóch sal.",
          "Pierwsza obsłuży [9,11) i [11,13), druga [10,12) i [12,14)."
        ]
      },
      "ru": {
        "title": "Место для встреч",
        "question": "Встречи занимают интервалы [9,11), [10,12), [11,13), [12,14). Границы — часы; комнату можно использовать сразу после окончания встречи. Минимум комнат?",
        "hints": [
          "Считайте пересечения полуоткрытых интервалов.",
          "В 11 можно занять освободившуюся в 11 комнату."
        ],
        "answer": "2.",
        "explanation": [
          "В 10:30 идут две встречи, нужны две комнаты.",
          "Одна обслужит [9,11) и [11,13), другая [10,12) и [12,14)."
        ]
      },
      "zh": {
        "title": "会议空间",
        "question": "会议占用[9,11)、[10,12)、[11,13)、[12,14)这些小时区间，结束时刻即可复用房间。最少几间？",
        "hints": [
          "按左闭右开区间数同时会议。",
          "11点开始的可用11点腾出的房间。"
        ],
        "answer": "2间。",
        "explanation": [
          "10:30有两场同时进行，至少两间。",
          "一间安排[9,11)和[11,13)，另一间安排[10,12)和[12,14)，两间足够。"
        ]
      }
    }
  },
  {
    "id": "cooldown",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A machine that needs a pause",
        "question": "Tasks A,A,A,B,B,B each take one slot. A machine runs one per slot. Between identical letters there must be at least two intervening slots, filled by other tasks or idle time. Minimum slots?",
        "hints": [
          "Look at the required separation of the three A tasks.",
          "The B tasks must also finish after their own third appearance."
        ],
        "answer": "8.",
        "explanation": [
          "Use A B idle A B idle A B.",
          "The first occurrence of one of the two letters is no earlier than slot 2; its third occurrence is at least six slots later, at slot 8. Thus seven slots cannot work."
        ]
      },
      "pl": {
        "title": "Maszyna potrzebuje przerwy",
        "question": "Zadania A,A,A,B,B,B trwają po jednym slocie. Maszyna robi jedno naraz. Między identycznymi literami muszą być co najmniej dwa sloty z innymi zadaniami lub bezczynnością. Minimum slotów?",
        "hints": [
          "Zobacz odstępy między trzema A.",
          "B też musi doczekać trzeciego wykonania."
        ],
        "answer": "8.",
        "explanation": [
          "Użyj A B przerwa A B przerwa A B.",
          "Jedna z liter pojawia się pierwszy raz najwcześniej w slocie 2, a trzeci raz co najmniej sześć slotów później, czyli w 8. Siedem nie wystarczy."
        ]
      },
      "ru": {
        "title": "Машине нужна пауза",
        "question": "Задачи A,A,A,B,B,B длятся по одному слоту. Машина делает одну за раз. Между одинаковыми буквами минимум два слота других задач или простоя. Минимум слотов?",
        "hints": [
          "Посмотрите на интервалы между тремя A.",
          "B тоже должна появиться трижды."
        ],
        "answer": "8.",
        "explanation": [
          "План: A B простой A B простой A B.",
          "Одна буква впервые появляется не раньше слота 2, а в третий раз минимум через шесть слотов, то есть в 8. Семь невозможно."
        ]
      },
      "zh": {
        "title": "需要冷却的机器",
        "question": "任务A,A,A,B,B,B各占一格，机器每格做一个。同字母任务之间至少隔两格其他任务或空闲。最少几格？",
        "hints": [
          "看三个A之间所需间隔。",
          "B也必须出现第三次。"
        ],
        "answer": "8格。",
        "explanation": [
          "安排A B 空 A B 空 A B。",
          "两字母中至少一种首次不早于第2格，第三次至少再晚6格，即第8格，因此7格不够。"
        ]
      }
    }
  },
  {
    "id": "shortest-first",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Waiting for the whole batch",
        "question": "Three jobs take 2, 5 and 8 minutes on one machine, all ready at zero. No interruption. Which order minimizes the sum of completion times, and what is that sum?",
        "hints": [
          "An early long job makes every later job wait.",
          "Compare swapping two adjacent jobs."
        ],
        "answer": "2, 5, 8; sum 24 minutes.",
        "explanation": [
          "Completion times are 2, 7, 15, summing to 24.",
          "For adjacent lengths x>y, putting y first reduces their combined completion time by x−y and leaves later completion times unchanged. Removing such inversions proves shortest first is optimal."
        ]
      },
      "pl": {
        "title": "Czekanie na całą partię",
        "question": "Trzy zadania trwają 2, 5 i 8 minut na jednej maszynie, gotowe od zera, bez przerw. Która kolejność minimalizuje sumę czasów zakończenia i ile ona wynosi?",
        "hints": [
          "Długie zadanie na początku opóźnia wszystkie następne.",
          "Porównaj zamianę dwóch sąsiednich zadań."
        ],
        "answer": "2, 5, 8; suma 24 minuty.",
        "explanation": [
          "Końce to 2, 7, 15, suma 24.",
          "Dla sąsiadów x>y ustawienie y pierwszego zmniejsza sumę ich końców o x−y, bez wpływu na późniejsze. Usuwanie takich inwersji dowodzi optymalności."
        ]
      },
      "ru": {
        "title": "Ожидание всей партии",
        "question": "Три задачи длятся 2, 5, 8 минут на одной машине, готовы с нуля, без прерываний. Какой порядок минимизирует сумму времён завершения и чему она равна?",
        "hints": [
          "Длинная ранняя задача задерживает все последующие.",
          "Сравните обмен соседних задач."
        ],
        "answer": "2, 5, 8; сумма 24 минуты.",
        "explanation": [
          "Завершения: 2, 7, 15, сумма 24.",
          "Для соседей x>y перестановка y вперёд уменьшает сумму их завершений на x−y, не меняя последующие. Удаление таких инверсий доказывает оптимальность."
        ]
      },
      "zh": {
        "title": "整批等待",
        "question": "三项任务需2、5、8分钟，同一机器处理，零时刻就绪，不可中断。哪种顺序使完成时刻之和最小？最小和多少？",
        "hints": [
          "早做长任务会让所有后续任务等待。",
          "比较交换两个相邻任务。"
        ],
        "answer": "2、5、8；总和24分钟。",
        "explanation": [
          "完成时刻为2、7、15，总和24。",
          "相邻时长x>y时，把y放前面会使两者完成时刻之和减少x−y，后续不变。消除这种逆序证明短任务优先最优。"
        ]
      }
    }
  },
  {
    "id": "round-robin",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Everyone plays everyone",
        "question": "Six teams must each play every other team once. A team plays at most once per round; three fields are available. Minimum rounds? Give a schedule.",
        "hints": [
          "Each team has five opponents.",
          "Keep one team fixed and rotate the others, or construct five disjoint matchings."
        ],
        "answer": "5 rounds.",
        "explanation": [
          "Each team needs five matches, so at least five rounds.",
          "A schedule is AB/CD/EF; AC/BE/DF; AD/BF/CE; AE/BD/CF; AF/BC/DE. Each pair appears once, with no team repeated in a round."
        ]
      },
      "pl": {
        "title": "Każdy z każdym",
        "question": "Sześć drużyn gra każda z każdą raz. Drużyna gra najwyżej raz w rundzie, są trzy boiska. Minimum rund? Podaj plan.",
        "hints": [
          "Każda drużyna ma pięciu rywali.",
          "Szukaj pięciu zestawów rozłącznych par."
        ],
        "answer": "5 rund.",
        "explanation": [
          "Każda potrzebuje pięciu meczów, więc co najmniej pięciu rund.",
          "Plan: AB/CD/EF; AC/BE/DF; AD/BF/CE; AE/BD/CF; AF/BC/DE. Każda para występuje raz, bez powtórzeń drużyn w rundzie."
        ]
      },
      "ru": {
        "title": "Каждый с каждым",
        "question": "Шесть команд играют друг с другом по разу. Команда играет максимум раз за раунд, полей три. Минимум раундов? Дайте план.",
        "hints": [
          "У каждой команды пять соперников.",
          "Постройте пять наборов непересекающихся пар."
        ],
        "answer": "5 раундов.",
        "explanation": [
          "Каждой нужны пять матчей, значит минимум пять раундов.",
          "План: AB/CD/EF; AC/BE/DF; AD/BF/CE; AE/BD/CF; AF/BC/DE. Каждая пара встречается раз, команда не повторяется в раунде."
        ]
      },
      "zh": {
        "title": "每队都交手",
        "question": "六队两两各赛一次，每队每轮最多一场，有三块场地。最少几轮？给出赛程。",
        "hints": [
          "每队有五个对手。",
          "构造五组互不重叠的配对。"
        ],
        "answer": "5轮。",
        "explanation": [
          "每队需五场，至少五轮。",
          "赛程：AB/CD/EF；AC/BE/DF；AD/BF/CE；AE/BD/CF；AF/BC/DE。每对恰一次，每轮无人重复。"
        ]
      }
    }
  },
  {
    "id": "cooking",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Two sides of breakfast",
        "question": "Three slices need each side toasted for one minute. A pan holds two slices, each with only one side touching it. Flipping and swapping take no time. Minimum time to toast all six sides?",
        "hints": [
          "Count the pan’s total side capacity.",
          "Avoid finishing two slices before starting the third."
        ],
        "answer": "3 minutes.",
        "explanation": [
          "Minute 1: first sides of A and B. Minute 2: second side of A and first side of C. Minute 3: second sides of B and C.",
          "Six side-minutes on capacity two require at least three minutes, attained by this schedule."
        ]
      },
      "pl": {
        "title": "Dwie strony śniadania",
        "question": "Trzy kromki wymagają po minucie opiekania każdej strony. Patelnia mieści dwie kromki, każda dotyka jej jedną stroną. Obracanie i wymiana są natychmiastowe. Najkrótszy czas?",
        "hints": [
          "Policz łączną pojemność patelni.",
          "Nie kończ dwóch kromek przed rozpoczęciem trzeciej."
        ],
        "answer": "3 minuty.",
        "explanation": [
          "Minuta 1: pierwsze strony A i B. Minuta 2: druga A i pierwsza C. Minuta 3: drugie B i C.",
          "Sześć stron-minut przy pojemności dwóch wymaga co najmniej trzech minut; plan osiąga granicę."
        ]
      },
      "ru": {
        "title": "Две стороны завтрака",
        "question": "Три ломтика нужно поджарить по минуте с каждой стороны. Сковорода вмещает два ломтика, каждый касается её одной стороной. Перевороты и замены мгновенны. Минимальное время?",
        "hints": [
          "Посчитайте общую вместимость сковороды.",
          "Не заканчивайте два ломтика до начала третьего."
        ],
        "answer": "3 минуты.",
        "explanation": [
          "Минута 1: первые стороны A и B. Минута 2: вторая A и первая C. Минута 3: вторые B и C.",
          "Шесть стороно-минут при вместимости два требуют минимум три минуты; план достигает границы."
        ]
      },
      "zh": {
        "title": "早餐的两面",
        "question": "三片面包，每面需煎一分钟。锅放两片，每片只能一面接触锅。翻面、换片不耗时。煎完最少多久？",
        "hints": [
          "计算锅的总容量。",
          "不要先煎完两片才开始第三片。"
        ],
        "answer": "3分钟。",
        "explanation": [
          "第1分钟：A、B第一面；第2分钟：A第二面、C第一面；第3分钟：B、C第二面。",
          "六个面各一分钟，容量两面，至少三分钟，上述安排达到下界。"
        ]
      }
    }
  },
  {
    "id": "deadlines",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A profitable afternoon",
        "question": "Four one-hour jobs are available at time zero. A pays 40, deadline 1; B pays 30, deadline 2; C pays 25, deadline 2; D pays 20, deadline 3. One worker; jobs must finish by their deadlines for payment. Maximum earnings?",
        "hints": [
          "Only two jobs can finish by time 2.",
          "Which of A, B, C should occupy those two slots?"
        ],
        "answer": "90: A then B then D.",
        "explanation": [
          "A and B earn the most among pairs from A,B,C and fit in slots ending 1 and 2.",
          "D adds 20 in slot 3. No schedule can earn more than 40+30 from the first three jobs, plus 20 from D."
        ]
      },
      "pl": {
        "title": "Dochodowe popołudnie",
        "question": "Cztery godzinne zadania są gotowe od zera. A płaci 40, termin 1; B 30, termin 2; C 25, termin 2; D 20, termin 3. Jeden pracownik, płatność tylko za ukończenie w terminie. Maksymalny zarobek?",
        "hints": [
          "Do chwili 2 skończą się najwyżej dwa zadania.",
          "Które dwa z A,B,C warto wybrać?"
        ],
        "answer": "90: A, potem B, potem D.",
        "explanation": [
          "A i B są najdroższą parą z A,B,C i mieszczą się w slotach kończących się w 1 i 2.",
          "D dodaje 20 w slocie 3. Z pierwszych trzech nie da się zarobić więcej niż 40+30, plus 20 za D."
        ]
      },
      "ru": {
        "title": "Прибыльный день",
        "question": "Четыре часовые задачи готовы с нуля. A платит 40, срок 1; B 30, срок 2; C 25, срок 2; D 20, срок 3. Один работник, платят только за завершение в срок. Максимум дохода?",
        "hints": [
          "К моменту 2 можно закончить лишь две задачи.",
          "Какие две из A,B,C выгоднее?"
        ],
        "answer": "90: A, затем B, затем D.",
        "explanation": [
          "A и B — самая дорогая пара из A,B,C, подходящая к слотам завершения 1 и 2.",
          "D добавляет 20 в слоте 3. Из первых трёх нельзя получить больше 40+30, плюс 20 от D."
        ]
      },
      "zh": {
        "title": "有收益的下午",
        "question": "四个一小时任务从零时刻可做。A收益40、截止1；B收益30、截止2；C收益25、截止2；D收益20、截止3。一个工人，按时完成才付费。最大收益？",
        "hints": [
          "时刻2前最多完成两项。",
          "A、B、C中哪两项占这两个位置？"
        ],
        "answer": "90：依次A、B、D。",
        "explanation": [
          "A、B是前三项中收益最高的一对，可在1、2时刻完成。",
          "D在第3小时增加20。前三项至多赚40+30，再加D的20，不可能更高。"
        ]
      }
    }
  },
  {
    "id": "pipeline",
    "category": "scheduling",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Wash, then dry",
        "question": "Three identical loads each need 2 h in one washer then 3 h in one dryer. Each machine handles one load at a time; loads cannot be split. Minimum total time?",
        "hints": [
          "The dryer is the slower stage.",
          "When can it first start, and how long must it work?"
        ],
        "answer": "11 hours.",
        "explanation": [
          "Wash loads during 0–2, 2–4, 4–6. Dry during 2–5, 5–8, 8–11.",
          "The dryer cannot begin before 2 and must work nine hours, so finishing before 11 is impossible."
        ]
      },
      "pl": {
        "title": "Wypierz i wysusz",
        "question": "Trzy jednakowe wsady wymagają po 2 h w jednej pralce, potem 3 h w jednej suszarce. Każda maszyna obsługuje jeden wsad; nie dzielimy wsadów. Najkrótszy czas?",
        "hints": [
          "Suszarka jest wolniejszym etapem.",
          "Kiedy może zacząć i ile musi pracować?"
        ],
        "answer": "11 godzin.",
        "explanation": [
          "Pranie: 0–2, 2–4, 4–6. Suszenie: 2–5, 5–8, 8–11.",
          "Suszarka zacznie najwcześniej w 2 i musi pracować dziewięć godzin, więc wcześniej niż w 11 się nie da."
        ]
      },
      "ru": {
        "title": "Сначала стирка",
        "question": "Три одинаковые партии требуют по 2 ч в одной стиральной машине, затем 3 ч в одной сушилке. Каждая обрабатывает одну партию; делить нельзя. Минимальное время?",
        "hints": [
          "Сушилка — более медленный этап.",
          "Когда она начнёт и сколько должна работать?"
        ],
        "answer": "11 часов.",
        "explanation": [
          "Стирка: 0–2, 2–4, 4–6. Сушка: 2–5, 5–8, 8–11.",
          "Сушилка не начнёт раньше 2 и должна работать девять часов, значит раньше 11 закончить нельзя."
        ]
      },
      "zh": {
        "title": "先洗后烘",
        "question": "三批相同衣物，每批先在唯一洗衣机洗2小时，再在唯一烘干机烘3小时。每机同时只处理一批，不可分批。最短总时间？",
        "hints": [
          "烘干是较慢阶段。",
          "烘干机最早何时开工，需要工作多久？"
        ],
        "answer": "11小时。",
        "explanation": [
          "洗涤安排0–2、2–4、4–6；烘干安排2–5、5–8、8–11。",
          "烘干最早2开始且必须工作9小时，故不可能早于11结束。"
        ]
      }
    }
  }
] satisfies Puzzle[];
