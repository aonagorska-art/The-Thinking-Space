import type {Puzzle} from '../types';

export const lateral = [
  {
    "id": "ropes",
    "category": "lateral",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "An uneven hour",
        "question": "Two ropes each take exactly 60 minutes to burn from one end, but burn unevenly along their length. Flames do not alter the unburned rope’s local burn rate, and lighting both ends consumes it from both directions. With only a lighter, measure 45 minutes.",
        "hints": [
          "Length is not a reliable clock here.",
          "Two burning ends consume a rope’s remaining burn-time at twice the rate."
        ],
        "answer": "Light rope A at both ends and B at one; when A ends, light B’s other end.",
        "explanation": [
          "A finishes in 30 minutes even with uneven burning. B then has 30 minutes of one-ended burn-time left.",
          "Lighting its other end consumes that remainder in 15 minutes, totaling 45."
        ]
      },
      "pl": {
        "title": "Nierówna godzina",
        "question": "Dwa sznury spalają się każdy w dokładnie 60 minut od jednego końca, ale nierównomiernie wzdłuż długości. Płomienie nie zmieniają lokalnego tempa niespalonej części, a zapalenie obu końców spala z dwóch stron. Mając tylko zapalniczkę, odmierz 45 minut.",
        "hints": [
          "Długość nie jest tu dobrym zegarem.",
          "Dwa końce zużywają pozostały czas spalania dwa razy szybciej."
        ],
        "answer": "Zapal A z obu końców, B z jednego; gdy A zgaśnie, zapal drugi koniec B.",
        "explanation": [
          "A kończy po 30 minutach mimo nierówności. B ma wtedy 30 minut jednostronnego spalania.",
          "Drugi płomień zużyje resztę w 15 minut, dając razem 45."
        ]
      },
      "ru": {
        "title": "Неравномерный час",
        "question": "Две верёвки каждая сгорают за 60 минут с одного конца, но неравномерно по длине. Пламя не меняет местную скорость несгоревшей части; два конца горят навстречу. Только с зажигалкой отмерьте 45 минут.",
        "hints": [
          "Длина здесь ненадёжные часы.",
          "Два конца расходуют оставшееся время горения вдвое быстрее."
        ],
        "answer": "Зажгите A с двух концов, B с одного; когда A сгорит, зажгите второй конец B.",
        "explanation": [
          "A сгорит за 30 минут при любой неравномерности. У B останется 30 минут одностороннего горения.",
          "Второй огонь израсходует остаток за 15 минут: всего 45."
        ]
      },
      "zh": {
        "title": "不均匀的一小时",
        "question": "两根绳各从一端烧完恰需60分钟，但沿长度燃烧不均。火焰不会改变未燃部分的局部燃烧速率，两端点燃则相向燃烧。只有打火机，如何量45分钟？",
        "hints": [
          "长度不能可靠计时。",
          "两端燃烧以双倍速率消耗剩余燃烧时间。"
        ],
        "answer": "A点两端，B点一端；A烧完时点B另一端。",
        "explanation": [
          "A即使燃烧不均也在30分钟烧完，此时B还余30分钟单端燃烧量。",
          "再点B另一端，余量15分钟烧完，总计45分钟。"
        ]
      }
    }
  },
  {
    "id": "switches",
    "category": "lateral",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "One visit upstairs",
        "question": "Three switches downstairs control three incandescent bulbs upstairs, one-to-one. All bulbs start off and cool. You may manipulate switches, then visit upstairs once and inspect light and safely sense residual warmth. How identify the mapping?",
        "hints": [
          "A bulb can communicate more than on or off.",
          "Create three distinguishable physical states."
        ],
        "answer": "Leave one on, warm then turn off another, never turn on the third.",
        "explanation": [
          "Turn A on long enough to warm its bulb, then off. Turn B on and leave C off.",
          "Upstairs the lit bulb is B, the unlit warm bulb A, and the unlit cool bulb C. The stated incandescent and warmth assumptions are essential."
        ]
      },
      "pl": {
        "title": "Jedna wizyta na górze",
        "question": "Trzy przełączniki na dole sterują trzema żarowymi żarówkami na górze, jeden do jednej. Wszystkie są wyłączone i zimne. Możesz przełączać, potem raz wejść i sprawdzić światło oraz bezpiecznie wyczuć ciepło. Jak ustalić połączenia?",
        "hints": [
          "Żarówka przekazuje więcej niż świeci/nie świeci.",
          "Utwórz trzy różne stany fizyczne."
        ],
        "answer": "Jedną zostaw włączoną, drugą rozgrzej i wyłącz, trzeciej nie włączaj.",
        "explanation": [
          "Włącz A do rozgrzania, potem wyłącz. Włącz B, C zostaw wyłączony.",
          "Świecąca to B, zgaszona ciepła A, zgaszona zimna C. Założenia o żarówkach i cieple są kluczowe."
        ]
      },
      "ru": {
        "title": "Один визит наверх",
        "question": "Три выключателя внизу управляют тремя лампами накаливания наверху, один к одной. Все выключены и холодные. Можно переключать, затем один раз подняться, осмотреть свет и безопасно ощутить остаточное тепло. Как узнать связи?",
        "hints": [
          "Лампа передаёт больше, чем включено/выключено.",
          "Создайте три различимых физических состояния."
        ],
        "answer": "Одну оставьте включённой, другую прогрейте и выключите, третью не включайте.",
        "explanation": [
          "Включите A до нагрева, затем выключите. Включите B, C не трогайте.",
          "Горящая — B, тёплая погасшая — A, холодная погасшая — C. Допущения о накаливании и тепле существенны."
        ]
      },
      "zh": {
        "title": "只能上楼一次",
        "question": "楼下三个开关一一控制楼上三只白炽灯，起初全灭且冷。可操作开关，然后只上楼一次，观察亮灭并安全感知余温。如何确定对应关系？",
        "hints": [
          "灯能传递的不止亮或灭。",
          "制造三种可区分的物理状态。"
        ],
        "answer": "一只保持亮，一只加热后关，第三只从不打开。",
        "explanation": [
          "开A足够久使灯变暖后关，开B，C不动。",
          "楼上亮的是B，灭而暖的是A，灭而冷的是C。题设白炽灯和可感温条件不可缺。"
        ]
      }
    }
  },
  {
    "id": "blind-coins",
    "category": "lateral",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Equal heads, unseen",
        "question": "There are 20 coins, exactly 7 heads up. Blindfolded, you cannot distinguish faces by touch but can count, separate and flip coins. Make two groups with equal numbers of heads. Group sizes need not match.",
        "hints": [
          "You do not need to know which coins are heads.",
          "Take a group whose size matches the known total of heads."
        ],
        "answer": "Separate any 7 coins and flip all of those 7.",
        "explanation": [
          "If the selected seven contain h heads, the other group contains 7−h heads.",
          "Flipping the selected group changes its heads count from h to 7−h, matching the other group."
        ]
      },
      "pl": {
        "title": "Równe orły bez patrzenia",
        "question": "Jest 20 monet, dokładnie 7 orłem do góry. Z opaską nie rozróżniasz stron dotykiem, ale możesz liczyć, dzielić i odwracać. Utwórz dwie grupy o równej liczbie orłów; rozmiary mogą się różnić.",
        "hints": [
          "Nie musisz znać położenia orłów.",
          "Wybierz grupę wielkości znanej liczby orłów."
        ],
        "answer": "Oddziel dowolne 7 monet i odwróć wszystkie te 7.",
        "explanation": [
          "Jeśli wybrane siedem ma h orłów, reszta ma 7−h.",
          "Odwrócenie wybranych zmienia ich liczbę orłów z h na 7−h, wyrównując grupy."
        ]
      },
      "ru": {
        "title": "Равные орлы вслепую",
        "question": "Есть 20 монет, ровно 7 орлом вверх. С повязкой нельзя различать стороны на ощупь, но можно считать, разделять и переворачивать. Сделайте две группы с равным числом орлов; размеры могут отличаться.",
        "hints": [
          "Не нужно знать, где орлы.",
          "Возьмите группу размером с известное число орлов."
        ],
        "answer": "Отделите любые 7 монет и переверните все семь.",
        "explanation": [
          "Если в выбранных семи h орлов, в остальных 7−h.",
          "Переворот меняет число орлов выбранной группы с h на 7−h, уравнивая их."
        ]
      },
      "zh": {
        "title": "看不见的等量正面",
        "question": "20枚硬币恰有7枚正面朝上。蒙眼且摸不出正反，但能数、分组、翻面。分成两组，使正面数相等，组大小可不同。",
        "hints": [
          "不需要知道哪些是正面。",
          "选一组，大小等于已知正面总数。"
        ],
        "answer": "任取7枚，全部翻面。",
        "explanation": [
          "若所选七枚有h个正面，其余有7−h个。",
          "翻转所选组后，正面数从h变成7−h，与另一组相等。"
        ]
      }
    }
  },
  {
    "id": "boat-rock",
    "category": "lateral",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A stone overboard",
        "question": "A boat floats in a closed pond while carrying a stone denser than water. The stone is dropped into the pond and sinks. Ignore splashing, absorption and boat changes. Does the water level rise, fall or stay?",
        "hints": [
          "The stone displaces water differently in the boat and underwater.",
          "Compare water of equal weight with water of equal volume."
        ],
        "answer": "It falls.",
        "explanation": [
          "In the boat, the stone adds displacement equal to its mass divided by water density.",
          "Submerged, it displaces only its own smaller volume, since its density exceeds water’s. Total displaced volume decreases, so the level falls."
        ]
      },
      "pl": {
        "title": "Kamień za burtą",
        "question": "Łódź pływa w zamkniętym stawie z kamieniem gęstszym od wody. Kamień wrzucono i zatonął. Pomijamy rozpryski, nasiąkanie i zmiany łodzi. Poziom wody rośnie, maleje czy bez zmian?",
        "hints": [
          "Kamień inaczej wypiera wodę w łodzi i pod wodą.",
          "Porównaj wodę o równej masie z wodą o równej objętości."
        ],
        "answer": "Maleje.",
        "explanation": [
          "W łodzi kamień zwiększa wyparcie o swoją masę podzieloną przez gęstość wody.",
          "Pod wodą wypiera tylko własną mniejszą objętość, bo jest gęstszy. Łączne wyparcie maleje, więc poziom opada."
        ]
      },
      "ru": {
        "title": "Камень за бортом",
        "question": "Лодка плавает в закрытом пруду с камнем плотнее воды. Камень выбросили, и он утонул. Без брызг, впитывания и изменений лодки. Уровень поднимется, упадёт или не изменится?",
        "hints": [
          "В лодке и под водой камень вытесняет по-разному.",
          "Сравните воду равной массы и равного объёма."
        ],
        "answer": "Упадёт.",
        "explanation": [
          "В лодке камень добавляет вытеснение, равное своей массе, делённой на плотность воды.",
          "Под водой он вытесняет лишь собственный меньший объём, так как плотнее воды. Общее вытеснение уменьшается, уровень падает."
        ]
      },
      "zh": {
        "title": "石头落水",
        "question": "船载着比水密度大的石头漂在封闭池塘里。把石头丢入池中沉底，忽略溅水、吸水及船变化。水位升、降还是不变？",
        "hints": [
          "石头在船上与水下排水方式不同。",
          "比较等质量的水和等体积的水。"
        ],
        "answer": "下降。",
        "explanation": [
          "在船上，石头增加的排水体积为其质量除以水密度。",
          "沉入水后只排自身较小体积，因为它比水密。总排水体积减少，水位下降。"
        ]
      }
    }
  },
  {
    "id": "missing-money",
    "category": "lateral",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The missing unit",
        "question": "Three guests pay 30 total for a room. The correct price is 25; a clerk returns 3 and keeps 2. Each guest has paid 9, totaling 27; adding the clerk’s 2 gives 29. Where is the missing unit?",
        "hints": [
          "Check which quantities already include others.",
          "The 27 already contains the clerk’s money."
        ],
        "answer": "Nothing is missing; the addition double-counts the 2.",
        "explanation": [
          "The guests’ net payment is 27=25 for the room+2 kept by the clerk.",
          "To reconstruct the original 30, add the returned 3 to 27, not the already-included 2."
        ]
      },
      "pl": {
        "title": "Zaginiona jednostka",
        "question": "Trzech gości płaci razem 30 za pokój. Cena to 25; pracownik oddaje 3 i zatrzymuje 2. Każdy zapłacił netto 9, razem 27; dodanie 2 pracownika daje 29. Gdzie brakująca jednostka?",
        "hints": [
          "Sprawdź, które kwoty już zawierają inne.",
          "Kwota 27 już obejmuje pieniądze pracownika."
        ],
        "answer": "Nic nie brakuje; dodanie 2 liczy je podwójnie.",
        "explanation": [
          "Płatność netto to 27=25 za pokój+2 zatrzymane.",
          "Aby odtworzyć 30, dodaj zwrócone 3 do 27, nie zawarte już 2."
        ]
      },
      "ru": {
        "title": "Пропавшая единица",
        "question": "Трое гостей платят 30 за комнату. Верная цена 25; служащий возвращает 3 и оставляет 2. Каждый заплатил чистыми 9, всего 27; прибавив 2 служащего, получаем 29. Где единица?",
        "hints": [
          "Проверьте, какие суммы уже включают другие.",
          "27 уже содержит деньги служащего."
        ],
        "answer": "Ничего не пропало: 2 посчитаны дважды.",
        "explanation": [
          "Чистая плата 27=25 за комнату+2 у служащего.",
          "Для исходных 30 прибавьте возвращённые 3 к 27, а не уже включённые 2."
        ]
      },
      "zh": {
        "title": "少的一元",
        "question": "三位客人共付30住店，正确房价25，店员退3、留2。每人净付9，共27，再加店员2等于29。少的一元在哪？",
        "hints": [
          "检查哪些金额已包含其他金额。",
          "27已经包含店员的钱。"
        ],
        "answer": "没有少，错误加法重复算了2。",
        "explanation": [
          "净付款27=房价25+店员留2。",
          "要还原30，应加退回的3，而不是已包含的2。"
        ]
      }
    }
  },
  {
    "id": "average-speed",
    "category": "lateral",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Too late to average",
        "question": "You travel the first half of a fixed distance at 30 km/h. What finite speed on the second half would make the overall average 60 km/h? Ignore stops.",
        "hints": [
          "Average speed uses total time, not the average of speeds.",
          "Compare the time already spent with the entire allowed time."
        ],
        "answer": "No finite speed can do it.",
        "explanation": [
          "For total distance D, averaging 60 allows D/60 hours.",
          "The first half already takes (D/2)/30=D/60 hours. Any positive time on the remainder makes the average below 60."
        ]
      },
      "pl": {
        "title": "Za późno na średnią",
        "question": "Pierwszą połowę ustalonej trasy jedziesz 30 km/h. Jaka skończona prędkość na drugiej da średnią 60 km/h? Bez postojów.",
        "hints": [
          "Średnia prędkość zależy od całego czasu, nie średniej prędkości odcinków.",
          "Porównaj czas zużyty z całym dozwolonym."
        ],
        "answer": "Żadna skończona prędkość.",
        "explanation": [
          "Dla trasy D średnia 60 dopuszcza D/60 godzin.",
          "Pierwsza połowa już trwa (D/2)/30=D/60. Każdy dodatni czas reszty obniża średnią poniżej 60."
        ]
      },
      "ru": {
        "title": "Поздно усреднять",
        "question": "Первую половину расстояния вы едете 30 км/ч. Какая конечная скорость на второй даст среднюю 60 км/ч? Без остановок.",
        "hints": [
          "Средняя скорость зависит от всего времени, не от среднего скоростей.",
          "Сравните потраченное время со всем допустимым."
        ],
        "answer": "Никакая конечная скорость.",
        "explanation": [
          "Для расстояния D средняя 60 допускает D/60 часов.",
          "Первая половина уже заняла (D/2)/30=D/60. Любое положительное время на остаток снизит среднюю ниже 60."
        ]
      },
      "zh": {
        "title": "来不及的平均速度",
        "question": "一段固定路程，前半以30千米/小时行驶。后半用什么有限速度能使全程平均60？不计停留。",
        "hints": [
          "平均速度取决于总时间，不是速度的算术平均。",
          "已花时间与全部允许时间比较。"
        ],
        "answer": "任何有限速度都做不到。",
        "explanation": [
          "总路程D，平均60允许时间D/60。",
          "前半已花(D/2)/30=D/60，后半任何正时间都会使平均低于60。"
        ]
      }
    }
  },
  {
    "id": "bird-trains",
    "category": "lateral",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "The tireless bird",
        "question": "Two trains start 120 km apart and approach each other at 40 and 20 km/h. A bird flies between them at 90 km/h, instantly reversing at each train until they meet. How far does the bird fly?",
        "hints": [
          "You do not need to count the trips.",
          "Find how long the trains take to meet."
        ],
        "answer": "180 km.",
        "explanation": [
          "The trains close at 40+20=60 km/h, so they meet in 120/60=2 hours.",
          "The bird flies continuously for two hours at 90 km/h: 180 km."
        ]
      },
      "pl": {
        "title": "Niestrudzony ptak",
        "question": "Dwa pociągi ruszają ku sobie z odległości 120 km z prędkościami 40 i 20 km/h. Ptak lata między nimi 90 km/h, natychmiast zawracając przy każdym aż do spotkania. Jaki dystans przeleci?",
        "hints": [
          "Nie musisz liczyć przelotów.",
          "Oblicz czas do spotkania pociągów."
        ],
        "answer": "180 km.",
        "explanation": [
          "Zbliżają się z prędkością 40+20=60 km/h, więc spotkają po 120/60=2 godzinach.",
          "Ptak leci przez dwie godziny z prędkością 90: 180 km."
        ]
      },
      "ru": {
        "title": "Неутомимая птица",
        "question": "Два поезда в 120 км друг от друга едут навстречу со скоростями 40 и 20 км/ч. Птица летает между ними 90 км/ч, мгновенно разворачиваясь у каждого до встречи. Какой путь пролетит?",
        "hints": [
          "Не нужно считать перелёты.",
          "Найдите время встречи поездов."
        ],
        "answer": "180 км.",
        "explanation": [
          "Сближение 40+20=60 км/ч, встреча через 120/60=2 часа.",
          "Птица летит два часа по 90 км/ч: 180 км."
        ]
      },
      "zh": {
        "title": "不停飞的鸟",
        "question": "两列火车相距120千米，以40和20千米/小时相向而行。鸟以90千米/小时在两车间飞，到车即瞬间折返，直到相遇。鸟飞多远？",
        "hints": [
          "不用数往返次数。",
          "求火车相遇时间。"
        ],
        "answer": "180千米。",
        "explanation": [
          "接近速度40+20=60，相遇需120/60=2小时。",
          "鸟连续飞2小时，路程90×2=180千米。"
        ]
      }
    }
  },
  {
    "id": "painted-cube",
    "category": "lateral",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Paint on the outside",
        "question": "A solid cube is painted on all six faces, then cut into 27 equal small cubes in a 3×3×3 arrangement. How many small cubes have exactly two painted faces?",
        "hints": [
          "Separate corners, edge interiors and face interiors.",
          "Cubes with two painted faces lie on edges but not at corners."
        ],
        "answer": "12.",
        "explanation": [
          "The large cube has 12 edges. Each edge has one non-corner small cube when divided into three.",
          "Those 12 have exactly two painted faces; corners have three, face centers one, and the center none."
        ]
      },
      "pl": {
        "title": "Farba na zewnątrz",
        "question": "Sześcian pomalowano na sześciu ścianach i przecięto na 27 równych kostek 3×3×3. Ile ma dokładnie dwie pomalowane ściany?",
        "hints": [
          "Oddziel rogi, wnętrza krawędzi i wnętrza ścian.",
          "Dwie pomalowane ściany mają kostki na krawędziach, poza rogami."
        ],
        "answer": "12.",
        "explanation": [
          "Duży sześcian ma 12 krawędzi. Na każdej jest jedna kostka nienarożna przy podziale na trzy.",
          "Te 12 mają po dwie malowane ściany; narożniki trzy, środki ścian jedną, środek zero."
        ]
      },
      "ru": {
        "title": "Краска снаружи",
        "question": "Куб окрашен по всем шести граням и разрезан на 27 равных кубиков 3×3×3. У скольких ровно две окрашенные грани?",
        "hints": [
          "Разделите углы, внутренности рёбер и граней.",
          "Две окраски у кубиков на рёбрах вне углов."
        ],
        "answer": "12.",
        "explanation": [
          "У большого куба 12 рёбер. На каждом один неугловой кубик при делении на три.",
          "Эти 12 имеют по две окрашенные грани; углы три, центры граней одну, центр ноль."
        ]
      },
      "zh": {
        "title": "外层油漆",
        "question": "实心立方体六面涂漆后切成3×3×3的27个等大小方块。恰有两面涂漆的小块有几个？",
        "hints": [
          "区分角、棱内部、面内部。",
          "两面涂漆者在棱上但不在角上。"
        ],
        "answer": "12个。",
        "explanation": [
          "大立方体有12条棱，每条分三段后有一个非角小块。",
          "这12个各有两面漆，角块三面，面中心一面，内部中心零面。"
        ]
      }
    }
  },
  {
    "id": "floating-ice",
    "category": "lateral",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "When the ice melts",
        "question": "A pure-water ice cube floats freely in fresh water in a straight-sided container. It melts completely. Ignoring evaporation and thermal expansion, does the water level change?",
        "hints": [
          "Floating displacement is determined by weight.",
          "Compare displaced water mass with the mass of meltwater."
        ],
        "answer": "It stays the same.",
        "explanation": [
          "Floating ice displaces water of the same mass as itself.",
          "After melting it becomes exactly that mass of water, occupying the same volume it previously displaced. The level is unchanged."
        ]
      },
      "pl": {
        "title": "Gdy lód topnieje",
        "question": "Kostka lodu z czystej wody swobodnie pływa w słodkiej wodzie w naczyniu o prostych ścianach. Topnieje całkowicie. Pomijając parowanie i rozszerzalność cieplną, czy poziom się zmieni?",
        "hints": [
          "Wyparcie pływającego ciała zależy od ciężaru.",
          "Porównaj masę wypartej wody z masą wody z lodu."
        ],
        "answer": "Pozostaje taki sam.",
        "explanation": [
          "Pływający lód wypiera wodę o masie równej swojej.",
          "Po stopieniu daje dokładnie tę masę wody, zajmując objętość wcześniej wypartą. Poziom się nie zmienia."
        ]
      },
      "ru": {
        "title": "Когда лёд растает",
        "question": "Кубик льда из чистой воды свободно плавает в пресной воде в сосуде с прямыми стенками. Он полностью тает. Без испарения и теплового расширения меняется ли уровень?",
        "hints": [
          "Вытеснение плавающего тела определяется весом.",
          "Сравните массу вытесненной воды с талой."
        ],
        "answer": "Не меняется.",
        "explanation": [
          "Плавающий лёд вытесняет воду равной себе массы.",
          "Растаяв, он даёт ровно эту массу воды, занимая ранее вытесненный объём. Уровень тот же."
        ]
      },
      "zh": {
        "title": "冰融化之后",
        "question": "纯水冰块自由漂浮在直壁容器的淡水中，完全融化，忽略蒸发与热膨胀。水位改变吗？",
        "hints": [
          "漂浮排水量由重量决定。",
          "比较排开水的质量与融水质量。"
        ],
        "answer": "不变。",
        "explanation": [
          "浮冰排开与自身等质量的水。",
          "融化后形成同质量水，占据此前排开的同一体积，故水位不变。"
        ]
      }
    }
  },
  {
    "id": "cork-bottle",
    "category": "lateral",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "The cork problem",
        "question": "An empty, unbreakable bottle has a cork in its neck. The cork can slide inward and fit entirely inside; the neck is too narrow for your fingers to grip it. Without tools or damaging anything, how can you open the bottle?",
        "hints": [
          "Opening does not necessarily mean removing the cork outward.",
          "The bottle has empty space on the other side of the cork."
        ],
        "answer": "Push the cork into the bottle.",
        "explanation": [
          "The requirement is to clear the opening, not extract the cork.",
          "Because the cork can slide inward and fits inside, pushing it in opens the neck while leaving everything intact."
        ]
      },
      "pl": {
        "title": "Problem z korkiem",
        "question": "Pusta nietłukąca butelka ma korek w szyjce. Korek może przesunąć się do środka i w całości się tam zmieścić; szyjka jest za wąska, by chwycić go palcami. Jak otworzyć bez narzędzi i uszkodzeń?",
        "hints": [
          "Otwarcie nie musi oznaczać wyciągnięcia korka.",
          "Po drugiej stronie korka jest wolne miejsce."
        ],
        "answer": "Wepchnij korek do butelki.",
        "explanation": [
          "Celem jest odsłonięcie otworu, nie wyjęcie korka.",
          "Skoro korek przesuwa się do środka i tam mieści, wepchnięcie otwiera szyjkę bez uszkodzeń."
        ]
      },
      "ru": {
        "title": "Задача с пробкой",
        "question": "В горлышке пустой небьющейся бутылки пробка. Она может скользить внутрь и целиком там помещается; горлышко слишком узкое, чтобы ухватить её пальцами. Как открыть без инструментов и повреждений?",
        "hints": [
          "Открыть не обязательно значит вытянуть пробку наружу.",
          "За пробкой внутри свободное место."
        ],
        "answer": "Протолкните пробку внутрь.",
        "explanation": [
          "Нужно освободить отверстие, не извлечь пробку.",
          "Она может двигаться внутрь и помещается там, поэтому проталкивание открывает горлышко без повреждений."
        ]
      },
      "zh": {
        "title": "瓶塞问题",
        "question": "空的不可打碎瓶子，瓶颈塞着软木塞。塞子可向内滑动并完全容纳在瓶内，瓶颈太窄无法用手指抓住塞子。不用工具、不损坏任何东西，如何打开？",
        "hints": [
          "打开不一定是向外取出塞子。",
          "塞子另一侧瓶内有空间。"
        ],
        "answer": "把塞子推入瓶内。",
        "explanation": [
          "目标是清空开口，并非取出塞子。",
          "题设允许塞子向内滑且容得下，推入即可打开瓶口并保持完整。"
        ]
      }
    }
  }
] satisfies Puzzle[];
