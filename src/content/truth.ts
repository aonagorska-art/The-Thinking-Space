import type {Puzzle} from '../types';

export const truth = [
  {
    "id": "two-guards",
    "category": "truth",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The other guard",
        "question": "Two doors: one safe, one dangerous. Two guards know which is safe; one always tells the truth, the other always lies. You may ask one guard one yes/no question. How do you choose safely?",
        "hints": [
          "Make the answer pass through both guards’ truth rules.",
          "Ask about what the other would say about the left door."
        ],
        "answer": "Ask “Would the other guard say the left door is safe?” Choose right for yes, left for no.",
        "explanation": [
          "If left is safe, the liar would say no, so the truthful guard reports no; the liar also falsely reports no about the truthful guard.",
          "If left is unsafe, either guard answers yes. Therefore invert the indicated door."
        ]
      },
      "pl": {
        "title": "Drugi strażnik",
        "question": "Dwoje drzwi: bezpieczne i niebezpieczne. Dwaj strażnicy wiedzą które; jeden zawsze mówi prawdę, drugi zawsze kłamie. Możesz zadać jednemu jedno pytanie tak/nie. Jak wybrać bezpiecznie?",
        "hints": [
          "Przeprowadź odpowiedź przez reguły obu strażników.",
          "Zapytaj, co drugi powiedziałby o lewych drzwiach."
        ],
        "answer": "Zapytaj „Czy drugi powiedziałby, że lewe są bezpieczne?”. Dla tak wybierz prawe, dla nie lewe.",
        "explanation": [
          "Jeśli lewe są bezpieczne, kłamca powiedziałby nie; prawdomówny to zgłasza, a kłamca przekłamuje odpowiedź prawdomównego na nie.",
          "Jeśli lewe są niebezpieczne, obaj odpowiadają tak. Wybór odwrotny jest bezpieczny."
        ]
      },
      "ru": {
        "title": "Другой страж",
        "question": "Две двери: безопасная и опасная. Два стража знают какие; один всегда правдив, другой всегда лжёт. Можно задать одному один вопрос да/нет. Как выбрать безопасно?",
        "hints": [
          "Пропустите ответ через правила обоих стражей.",
          "Спросите, что другой сказал бы о левой двери."
        ],
        "answer": "Спросите «Другой сказал бы, что левая дверь безопасна?» При да выбирайте правую, при нет левую.",
        "explanation": [
          "Если левая безопасна, лжец сказал бы нет: правдивый передаст это, а лжец исказит правдивое да другого до нет.",
          "Если левая опасна, оба отвечают да. Значит нужно выбрать противоположно ответу."
        ]
      },
      "zh": {
        "title": "另一位守卫",
        "question": "两扇门，一扇安全，一扇危险。两位守卫都知道哪扇安全，一位永远说真话，一位永远说假话。只能向一位问一个是非问题，如何安全选择？",
        "hints": [
          "让回答经过两人的真假规则。",
          "问另一位会如何评价左门。"
        ],
        "answer": "问“另一位会说左门安全吗？”答是选右，答否选左。",
        "explanation": [
          "若左门安全，骗子会说否，诚实者转述否；骗子则把诚实者的“是”谎报成否。",
          "若左门危险，两人都会答是。因此反向选择即可。"
        ]
      }
    }
  },
  {
    "id": "both-liars",
    "category": "truth",
    "difficulty": "gentle",
    "translations": {
      "en": {
        "title": "A bold introduction",
        "question": "A and B each either always tell truth or always lie. A says “We are both liars.” What are their types?",
        "hints": [
          "Could a truthful A make that statement?",
          "If A lies, the statement must be false as a whole."
        ],
        "answer": "A lies; B tells truth.",
        "explanation": [
          "A cannot be truthful, because that would make A a liar.",
          "A is a liar, so they are not both liars. Therefore B is truthful."
        ]
      },
      "pl": {
        "title": "Śmiałe przedstawienie",
        "question": "A i B zawsze mówią prawdę albo zawsze kłamią. A mówi „Oboje jesteśmy kłamcami”. Jakie są ich typy?",
        "hints": [
          "Czy prawdomówna A mogłaby tak powiedzieć?",
          "Gdy A kłamie, całe zdanie musi być fałszywe."
        ],
        "answer": "A kłamie, B mówi prawdę.",
        "explanation": [
          "A nie może mówić prawdy, bo wtedy byłaby kłamcą.",
          "A kłamie, więc nie oboje są kłamcami. B mówi prawdę."
        ]
      },
      "ru": {
        "title": "Смелое представление",
        "question": "A и B каждый либо всегда правдив, либо всегда лжёт. A говорит «Мы оба лжецы». Кто они?",
        "hints": [
          "Мог бы правдивый A так сказать?",
          "Если A лжёт, всё утверждение ложно."
        ],
        "answer": "A лжец, B правдив.",
        "explanation": [
          "A не может быть правдивым: тогда он оказался бы лжецом.",
          "A лжёт, значит они не оба лжецы. Следовательно B правдив."
        ]
      },
      "zh": {
        "title": "大胆的介绍",
        "question": "A、B各自要么永远诚实，要么永远说谎。A说：“我们都是骗子。”两人分别是哪类？",
        "hints": [
          "诚实的A能这样说吗？",
          "若A说谎，整句话必须为假。"
        ],
        "answer": "A说谎，B诚实。",
        "explanation": [
          "A若诚实，话就为真，却又意味着A说谎，矛盾。",
          "所以A说谎，“两人都是骗子”为假，因此B诚实。"
        ]
      }
    }
  },
  {
    "id": "same-type",
    "category": "truth",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The same kind",
        "question": "A and B always tell truth or always lie. A says “We are the same type.” B says “A is a liar.” Determine both.",
        "hints": [
          "Test B’s claim first.",
          "If A lies, A’s statement requires different types."
        ],
        "answer": "A lies; B tells truth.",
        "explanation": [
          "If B lied, A would tell truth and assert they have the same type, contradicting B being a liar.",
          "So B tells truth and A lies. Their types differ, making A’s statement false as required."
        ]
      },
      "pl": {
        "title": "Tego samego rodzaju",
        "question": "A i B zawsze mówią prawdę albo kłamią. A mówi „Jesteśmy tego samego typu”. B mówi „A kłamie”. Ustal typy.",
        "hints": [
          "Najpierw sprawdź twierdzenie B.",
          "Jeśli A kłamie, ich typy muszą być różne."
        ],
        "answer": "A kłamie, B mówi prawdę.",
        "explanation": [
          "Gdyby B kłamała, A mówiłaby prawdę i twierdziła, że mają ten sam typ, co przeczy kłamliwości B.",
          "Zatem B mówi prawdę, a A kłamie. Różne typy czynią zdanie A fałszywym."
        ]
      },
      "ru": {
        "title": "Одного типа",
        "question": "A и B всегда правдивы или всегда лгут. A говорит «Мы одного типа». B говорит «A лжец». Определите типы.",
        "hints": [
          "Сначала проверьте слова B.",
          "Если A лжёт, его слова требуют разных типов."
        ],
        "answer": "A лжец, B правдив.",
        "explanation": [
          "Если B лжёт, A правдив и утверждает одинаковые типы, что противоречит лживости B.",
          "Значит B правдив, A лжец. Их типы различны, поэтому слова A ложны."
        ]
      },
      "zh": {
        "title": "同一种人",
        "question": "A、B各自永远诚实或永远说谎。A说“我们是同一类”，B说“A是骗子”。确定两人类型。",
        "hints": [
          "先检验B的话。",
          "若A说谎，他的话要求两人不同类。"
        ],
        "answer": "A说谎，B诚实。",
        "explanation": [
          "若B说谎，A便诚实并声称同类，这与B说谎矛盾。",
          "所以B诚实、A说谎，两人不同类，A的话确实为假。"
        ]
      }
    }
  },
  {
    "id": "three-chain",
    "category": "truth",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "A chain of accusations",
        "question": "A, B, C each always tell truth or always lie. A says “B lies”; B says “C lies”; C says “A and B are different types.” Determine all three.",
        "hints": [
          "A’s claim already forces A and B to differ.",
          "Then C’s statement has a fixed truth value."
        ],
        "answer": "A truthful, B liar, C truthful.",
        "explanation": [
          "If A is truthful, B lies; if A lies, B is truthful. Either way A and B differ.",
          "C therefore tells truth. B’s accusation is false, so B lies and A tells truth."
        ]
      },
      "pl": {
        "title": "Łańcuch oskarżeń",
        "question": "A, B, C zawsze mówią prawdę albo kłamią. A mówi „B kłamie”, B mówi „C kłamie”, C mówi „A i B mają różne typy”. Ustal typy.",
        "hints": [
          "Zdanie A wymusza różne typy A i B.",
          "Wtedy zdanie C ma stałą wartość."
        ],
        "answer": "A prawdomówna, B kłamliwa, C prawdomówna.",
        "explanation": [
          "Jeśli A mówi prawdę, B kłamie; jeśli A kłamie, B mówi prawdę. Zawsze się różnią.",
          "C mówi więc prawdę. Oskarżenie B jest fałszywe, zatem B kłamie, a A mówi prawdę."
        ]
      },
      "ru": {
        "title": "Цепочка обвинений",
        "question": "A, B, C всегда правдивы или всегда лгут. A: «B лжёт»; B: «C лжёт»; C: «A и B разных типов». Определите всех.",
        "hints": [
          "Слова A уже вынуждают A и B различаться.",
          "Тогда истинность слов C определена."
        ],
        "answer": "A правдив, B лжец, C правдив.",
        "explanation": [
          "Если A правдив, B лжёт; если A лжёт, B правдив. Они всегда различны.",
          "C правдив. Обвинение B ложно, поэтому B лжец, а A правдив."
        ]
      },
      "zh": {
        "title": "指责链",
        "question": "A、B、C各自永远诚实或说谎。A说“B说谎”，B说“C说谎”，C说“A和B不同类”。确定三人类型。",
        "hints": [
          "A的话已经迫使A、B不同类。",
          "于是C的话真假固定。"
        ],
        "answer": "A诚实，B说谎，C诚实。",
        "explanation": [
          "若A诚实，B说谎；若A说谎，B诚实，因此总是不同类。",
          "所以C诚实，B的指责为假，B说谎，A诚实。"
        ]
      }
    }
  },
  {
    "id": "number-statements",
    "category": "truth",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "One true description",
        "question": "An integer n is between 1 and 10 inclusive. Exactly one statement is true: n is even; n is greater than 5; n equals 7. Which values can n have?",
        "hints": [
          "If n=7, count all the true statements.",
          "Separate small even values from large odd ones."
        ],
        "answer": "2, 4 or 9.",
        "explanation": [
          "For n≤5, only even numbers 2 and 4 make exactly one statement true.",
          "For n>5, even values make two true; 7 also makes two true. Only 9 leaves just the middle statement true."
        ]
      },
      "pl": {
        "title": "Jeden prawdziwy opis",
        "question": "Liczba całkowita n jest od 1 do 10. Dokładnie jedno zdanie jest prawdziwe: n jest parzyste; n jest większe od 5; n równa się 7. Jakie wartości są możliwe?",
        "hints": [
          "Dla n=7 policz wszystkie prawdziwe zdania.",
          "Oddziel małe parzyste od dużych nieparzystych."
        ],
        "answer": "2, 4 lub 9.",
        "explanation": [
          "Dla n≤5 tylko 2 i 4 dają dokładnie jedną prawdę.",
          "Powyżej 5 parzyste dają dwie prawdy; 7 również. Tylko 9 pozostawia prawdziwe wyłącznie drugie zdanie."
        ]
      },
      "ru": {
        "title": "Одно верное описание",
        "question": "Целое n от 1 до 10. Ровно одно верно: n чётное; n больше 5; n равно 7. Какие n возможны?",
        "hints": [
          "При n=7 посчитайте все верные утверждения.",
          "Отделите малые чётные от больших нечётных."
        ],
        "answer": "2, 4 или 9.",
        "explanation": [
          "Для n≤5 ровно одну истину дают только 2 и 4.",
          "Выше 5 чётные дают две истины; 7 тоже. Только 9 оставляет верным лишь второе утверждение."
        ]
      },
      "zh": {
        "title": "唯一正确的描述",
        "question": "整数n在1至10之间，含端点。以下恰有一句为真：n是偶数；n大于5；n等于7。n可能是多少？",
        "hints": [
          "若n=7，数一数有几句真话。",
          "区分较小偶数与较大奇数。"
        ],
        "answer": "2、4或9。",
        "explanation": [
          "n≤5时，只有2、4恰有一句真话。",
          "n>5时，偶数让两句为真，7也让两句为真，只有9仅让第二句为真。"
        ]
      }
    }
  },
  {
    "id": "truth-count",
    "category": "truth",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Ten numbered claims",
        "question": "A page contains ten statements. Statement k says “Exactly k statements on this page are false,” for k=1,…,10. Each statement has its ordinary truth value. How many are false?",
        "hints": [
          "Different numbered claims cannot both be true.",
          "Test whether all ten could be false."
        ],
        "answer": "9 are false; statement 9 is true.",
        "explanation": [
          "At most one statement is true because they assert different totals.",
          "If all were false, statement 10 would be true, a contradiction. Thus exactly one is true, so nine are false, consistently making statement 9 true."
        ]
      },
      "pl": {
        "title": "Dziesięć ponumerowanych zdań",
        "question": "Na stronie jest dziesięć zdań. Zdanie k brzmi „Dokładnie k zdań na tej stronie jest fałszywych”, dla k=1,…,10. Każde ma zwykłą wartość logiczną. Ile jest fałszywych?",
        "hints": [
          "Dwa różnie ponumerowane zdania nie mogą być jednocześnie prawdziwe.",
          "Sprawdź, czy wszystkie mogą być fałszywe."
        ],
        "answer": "9 fałszywych; zdanie 9 prawdziwe.",
        "explanation": [
          "Najwyżej jedno jest prawdziwe, bo podają różne liczby fałszów.",
          "Gdyby wszystkie były fałszywe, zdanie 10 byłoby prawdziwe. Zatem jedno jest prawdziwe, dziewięć fałszywych; zgadza się zdanie 9."
        ]
      },
      "ru": {
        "title": "Десять пронумерованных фраз",
        "question": "На странице десять утверждений. Утверждение k гласит «Ровно k утверждений на этой странице ложны», k=1,…,10. Каждое имеет обычное истинностное значение. Сколько ложны?",
        "hints": [
          "Два разных номера не могут быть одновременно правы.",
          "Могут ли все десять быть ложными?"
        ],
        "answer": "9 ложны; утверждение 9 истинно.",
        "explanation": [
          "Не более одного истинно, ведь они называют разные количества.",
          "Если все ложны, утверждение 10 истинно: противоречие. Значит истинно одно, ложны девять, и утверждение 9 согласовано с этим."
        ]
      },
      "zh": {
        "title": "十句编号声明",
        "question": "纸上有十句话，第k句说“本页恰有k句话为假”，k=1至10。每句都有通常的真假值。几句为假？",
        "hints": [
          "不同编号的两句不可能同时为真。",
          "能否十句全假？"
        ],
        "answer": "9句假，第9句真。",
        "explanation": [
          "最多一句真，因为各句给出不同的假话总数。",
          "若全假，第10句反而为真，矛盾。因此恰有一句真，九句假，第9句与此一致。"
        ]
      }
    }
  },
  {
    "id": "alternator",
    "category": "truth",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "Alternating answers",
        "question": "A person strictly alternates truthful and false statements, starting in an unknown phase. They say: “The key is in A”; then “The key is in A or B.” Exactly one of boxes A, B, C holds it. Where is it?",
        "hints": [
          "The statements must have opposite truth values.",
          "Can the first be true while the second is false?"
        ],
        "answer": "B.",
        "explanation": [
          "If the key were in A, both statements would be true; in C, both would be false.",
          "Only B makes the first false and the second true, satisfying alternation."
        ]
      },
      "pl": {
        "title": "Naprzemienne odpowiedzi",
        "question": "Osoba mówi ściśle na przemian prawdę i fałsz, zaczynając od nieznanej fazy. Mówi „Klucz jest w A”, potem „Klucz jest w A lub B”. Klucz jest w dokładnie jednym z pudełek A, B, C. Gdzie?",
        "hints": [
          "Zdania muszą mieć przeciwne wartości logiczne.",
          "Czy pierwsze może być prawdziwe, a drugie fałszywe?"
        ],
        "answer": "B.",
        "explanation": [
          "W A oba zdania byłyby prawdziwe, w C oba fałszywe.",
          "Tylko B daje najpierw fałsz, potem prawdę, zgodnie z naprzemiennością."
        ]
      },
      "ru": {
        "title": "Чередующиеся ответы",
        "question": "Человек строго чередует правду и ложь, начальная фаза неизвестна. Он говорит «Ключ в A», затем «Ключ в A или B». Ключ ровно в одной из коробок A, B, C. Где?",
        "hints": [
          "Утверждения должны иметь противоположную истинность.",
          "Может ли первое быть истинным, а второе ложным?"
        ],
        "answer": "B.",
        "explanation": [
          "В A оба были бы истинны, в C оба ложны.",
          "Только B даёт сначала ложь, затем правду, соблюдая чередование."
        ]
      },
      "zh": {
        "title": "交替回答",
        "question": "某人严格交替说真话和假话，但起始阶段未知。他先说“钥匙在A”，再说“钥匙在A或B”。钥匙恰在A、B、C一盒中。在哪里？",
        "hints": [
          "两句话必须一真一假。",
          "第一句能真而第二句假吗？"
        ],
        "answer": "B。",
        "explanation": [
          "若在A，两句全真；若在C，两句全假。",
          "只有B让第一句假、第二句真，符合交替。"
        ]
      }
    }
  },
  {
    "id": "unknown-words",
    "category": "truth",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "Yes, in another language",
        "question": "A guard is either always truthful or always lying. Their language uses da and ja for yes and no, but you do not know which is which. They understand your language and know the facts. What single yes/no question tells you whether a door is safe?",
        "hints": [
          "Nest a question about the word they would use.",
          "Both lying and the unknown vocabulary can cancel through the nested question."
        ],
        "answer": "Ask “If I asked whether this door is safe, would you say da?” Da means safe in the resulting answer.",
        "explanation": [
          "Let the inner reply be determined by the guard’s type and their meaning of da.",
          "If da means yes, the nested lie cancels the inner lie. If da means no, reversing both the queried word and the final encoding has the same effect. In all four type/vocabulary cases the final word is da exactly when the door is safe."
        ]
      },
      "pl": {
        "title": "Tak w innym języku",
        "question": "Strażnik zawsze mówi prawdę albo zawsze kłamie. Słowa da i ja oznaczają tak i nie, lecz nie wiesz które. Rozumie Twój język i zna fakty. Jakie jedno pytanie tak/nie ustali, czy drzwi są bezpieczne?",
        "hints": [
          "Zagnieźdź pytanie o słowo, którego by użył.",
          "Kłamstwo i nieznane słownictwo mogą się znieść."
        ],
        "answer": "Zapytaj „Gdybym zapytał, czy te drzwi są bezpieczne, czy powiedziałbyś da?”. Odpowiedź da oznacza bezpieczne.",
        "explanation": [
          "Wewnętrzną odpowiedź wyznaczają typ strażnika i znaczenie da.",
          "Gdy da oznacza tak, zewnętrzne kłamstwo znosi wewnętrzne. Gdy da oznacza nie, odwrócenie pytanego słowa i końcowego kodowania daje ten sam efekt. W czterech kombinacjach da pada dokładnie dla bezpiecznych drzwi."
        ]
      },
      "ru": {
        "title": "Да на другом языке",
        "question": "Страж всегда правдив или всегда лжёт. Его слова da и ja означают да и нет, но неизвестно какое что. Он понимает ваш язык и знает факты. Какой один вопрос да/нет определит безопасность двери?",
        "hints": [
          "Вложите вопрос о слове, которое он произнёс бы.",
          "Ложь и неизвестный словарь могут взаимно отмениться."
        ],
        "answer": "Спросите «Если бы я спросил, безопасна ли дверь, ты сказал бы da?» Ответ da означает безопасность.",
        "explanation": [
          "Внутренний ответ зависит от типа стража и значения da.",
          "Если da означает да, внешняя ложь отменяет внутреннюю. Если da означает нет, обращение спрашиваемого слова и конечной кодировки даёт тот же эффект. Во всех четырёх случаях итоговое da означает безопасную дверь."
        ]
      },
      "zh": {
        "title": "另一种语言的是",
        "question": "守卫要么永远诚实，要么永远说谎。他用da和ja表示是与否，但你不知道对应关系。他懂你的语言且知道事实。问哪个是非问题能确定门是否安全？",
        "hints": [
          "嵌套询问他会使用哪个词。",
          "说谎和未知词义可通过嵌套抵消。"
        ],
        "answer": "问“如果我问这扇门是否安全，你会说da吗？”最终答da就表示安全。",
        "explanation": [
          "内层回答由守卫类型及da词义决定。",
          "若da表示是，外层谎言抵消内层谎言；若da表示否，所问词与最终编码同时反转，效果相同。四种类型与词义组合中，最终说da当且仅当门安全。"
        ]
      }
    }
  },
  {
    "id": "three-inscriptions",
    "category": "truth",
    "difficulty": "intermediate",
    "translations": {
      "en": {
        "title": "The inscription room",
        "question": "One of chests A, B, C holds a gem. A says “Not in B”; B says “In A”; C says “Not in A”. Exactly two inscriptions are true. Where can the gem be?",
        "hints": [
          "B and C always have opposite truth values.",
          "The inscription on A must supply the second truth."
        ],
        "answer": "A or C; the information does not distinguish them.",
        "explanation": [
          "B and C contribute exactly one truth, so A must be true and B cannot hold the gem.",
          "If the gem is in A, A and B are true. If in C, A and C are true. Both fit."
        ]
      },
      "pl": {
        "title": "Sala inskrypcji",
        "question": "Klejnot jest w jednej ze skrzyń A, B, C. A głosi „Nie w B”, B „W A”, C „Nie w A”. Dokładnie dwie inskrypcje są prawdziwe. Gdzie może być klejnot?",
        "hints": [
          "B i C zawsze mają przeciwne wartości.",
          "Napis A musi dostarczyć drugiej prawdy."
        ],
        "answer": "W A lub C; dane nie rozstrzygają.",
        "explanation": [
          "B i C dają dokładnie jedną prawdę, więc A musi być prawdziwe, wykluczając skrzynię B.",
          "Dla klejnotu w A prawdziwe są A i B, a dla C — A i C. Oba warianty pasują."
        ]
      },
      "ru": {
        "title": "Комната надписей",
        "question": "Самоцвет в одном из сундуков A, B, C. На A: «Не в B»; на B: «В A»; на C: «Не в A». Ровно две надписи верны. Где может быть самоцвет?",
        "hints": [
          "B и C всегда противоположны по истинности.",
          "A должна дать вторую истину."
        ],
        "answer": "В A или C; данных недостаточно для выбора.",
        "explanation": [
          "B и C дают ровно одну истину, значит A верна, исключая сундук B.",
          "В A верны надписи A и B; в C верны A и C. Оба варианта подходят."
        ]
      },
      "zh": {
        "title": "铭文室",
        "question": "宝石在A、B、C一箱中。A写“不在B”，B写“在A”，C写“不在A”。恰有两条铭文为真。宝石可能在哪？",
        "hints": [
          "B与C的真假始终相反。",
          "A的铭文必须提供第二句真话。"
        ],
        "answer": "A或C，无法区分。",
        "explanation": [
          "B、C恰有一句真，因此A必须真，排除B箱。",
          "若在A，则A、B铭文真；若在C，则A、C铭文真，两者均符合。"
        ]
      }
    }
  },
  {
    "id": "liar-circle",
    "category": "truth",
    "difficulty": "challenging",
    "translations": {
      "en": {
        "title": "An odd circle",
        "question": "Five people sit in a circle. Each either always tells truth or always lies. Each says “The person immediately to my right is a liar.” Is such an arrangement possible?",
        "hints": [
          "Neighbors must have opposite types.",
          "Follow the forced alternation around to the starting seat."
        ],
        "answer": "No.",
        "explanation": [
          "A truthful speaker requires a lying right neighbor; a lying speaker requires a truthful right neighbor.",
          "Thus types alternate. After five steps an odd cycle demands the starting person have the opposite of their own type, a contradiction."
        ]
      },
      "pl": {
        "title": "Nieparzysty krąg",
        "question": "Pięć osób siedzi w kręgu. Każda zawsze mówi prawdę albo kłamie. Każda mówi „Osoba bezpośrednio po mojej prawej jest kłamcą”. Czy to możliwe?",
        "hints": [
          "Sąsiedzi muszą mieć przeciwne typy.",
          "Prześledź wymuszoną przemienność do początku."
        ],
        "answer": "Nie.",
        "explanation": [
          "Prawdomówna osoba wymaga kłamcy po prawej, a kłamca prawdomównej osoby.",
          "Typy się przeplatają. Po pięciu krokach nieparzysty cykl wymaga od pierwszej osoby przeciwnego typu niż jej własny."
        ]
      },
      "ru": {
        "title": "Нечётный круг",
        "question": "Пятеро сидят по кругу. Каждый всегда правдив или всегда лжёт. Все говорят «Справа от меня лжец». Возможно ли это?",
        "hints": [
          "Соседи должны быть разных типов.",
          "Проследите чередование до начала."
        ],
        "answer": "Нет.",
        "explanation": [
          "Правдивый требует лжеца справа, а лжец — правдивого.",
          "Типы чередуются. Через пять шагов нечётный цикл требует от первого человека противоположного его собственному типа."
        ]
      },
      "zh": {
        "title": "奇数圆圈",
        "question": "五人围坐一圈，各自永远诚实或永远说谎。每人都说“我右边紧邻的人是骗子”。可能吗？",
        "hints": [
          "相邻者必须不同类。",
          "沿圆圈追踪交替，直到回到起点。"
        ],
        "answer": "不可能。",
        "explanation": [
          "诚实者要求右邻说谎，说谎者要求右邻诚实。",
          "类型必须交替，但五步回到起点时要求起点变成相反类型，矛盾。"
        ]
      }
    }
  }
] satisfies Puzzle[];
