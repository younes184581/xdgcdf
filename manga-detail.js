document.addEventListener('DOMContentLoaded', function() {
    // Data for different mangas
    const mangaData = {
        'spy-x-family': {
            title: 'Spy x Family',
            cover: 'pics/spy-x-family-Manga.webp',
            description: 'تدور أحداث مانغا سباي إكس فاميلي حول عميل سري يُدعى لويد فورجر الذي يُكلف بمهمة سرية تتطلب تشكيل عائلة وهمية. لتلبية هذه المهمة، يبحث لويد عن زوجة وطفلة، لكن الأمور تتعقد عندما يكتشف أن زوجته هي قاتلة ماهرة وطفلته تمتلك قوى خارقة المانغا تجمع بين الأكشن والكوميديا والدراما، وتستعرض مغامرات هذه العائلة غير العادية وهي تواجه تحديات حياتهم السرية واليومية. العمل يتناول مواضيع مثل الأسرة والتضحية والهوية، ويقدم مزيجًا ممتعًا من الإثارة واللحظات العاطفية.',
            chapters: [
                { name: 'Chapter 1: Mission 1', link: 'chapter.html?manga=spy-x-family&chapter=1' },
                { name: 'Chapter 2: Mission 2', link: 'chapter.html?manga=spy-x-family&chapter=2' },
                { name: 'Chapter 3: Mission 3', link: 'chapter.html?manga=spy-x-family&chapter=3' }
            ]
        },
        'takahashi': {
            title: 'Oversleeping Takahashi',
            cover: 'pics/takahashi.jpg',
            description: 'تدور قصة مانغا "Takahashi المبالغة في النوم" حول شخصية رئيسية تُدعى تاكاهشي، الذي يواجه مشكلة النوم المفرط. يجد تاكاهشي نفسه في موقف مليء بالتحديات اليومية بسبب عادات النوم الغريبة التي تؤثر على حياته الشخصية والمهنية. مع مرور الوقت، يتعرف تاكاهشي على أشخاص جدد ويخوض تجارب مختلفة تساعده على فهم نفسه بشكل أفضل والتعامل مع مشاكله. المانغا تقدم مزيجًا من الكوميديا والدراما، مع تسليط الضوء على أهمية الصحة النفسية وكيفية التغلب على الصعوبات التي قد يواجهها الفرد في حياته اليومية.',
            chapters: [
                { name: 'Chapter 1: Beginning', link: 'chapter.html?manga=takahashi&chapter=1' },
                { name: 'Chapter 2: Mystery Unfolds', link: 'chapter.html?manga=takahashi&chapter=2' }
            ]
        },
        'beatM': {
            title: 'Beat & Motion',
            cover: 'pics/beatM.jpg',
            description: 'تدور أحداث مانغا "بيات موشن" حول عالم مليء بالموسيقى والإيقاع، حيث يتبع القصة مجموعة من الشباب الموهوبين الذين يسعون لتحقيق أحلامهم في عالم الفن والموسيقى. تركز المانغا على التحديات والصعوبات التي يواجهها الأبطال أثناء سعيهم للتميز والنجاح في مجالهم، وتستعرض أيضًا العلاقات الشخصية والتعاون بينهم المانغا تجمع بين عناصر الدراما والموسيقى، وتعرض قصصًا ملهمة عن الإصرار والعزيمة لتحقيق الأهداف والطموحات. من خلال تجاربهم ومغامراتهم، يقدم العمل نظرة عميقة على كيفية تأثير الموسيقى على حياة الأفراد والعلاقات بينهم.',
            chapters: [
                { name: 'Chapter 1: The Challenge', link: 'chapter.html?manga=beatM&chapter=1' },
                { name: 'Chapter 2: The Training', link: 'chapter.html?manga=beatM&chapter=2' }
            ]
        },
        'juujikanorokunin': {
            title: 'Juujika no rokunin',
            cover: 'pics/juujika_no_rokunin-1450754-264-432.jpg',
            description: 'جوجيكا نو روكونين قصة مثيرة حول الانتقام والعدالة. تدور أحداثها حول بطل يسعى للثأر من أولئك الذين ظلموه. يواجه تحديات كبيرة ويكشف أسرارًا مدمرة أثناء سعيه لتحقيق هدفه.',
            chapters: [
                { name: 'Chapter 1', link: 'chapter.html?manga=kka&chapter=1' },
                { name: 'Chapter 2', link: 'chapter.html?manga=kka&chapter=2' },
                { name: 'Chapter 3', link: 'chapter.html?manga=kka&chapter=3' },
                { name: 'Chapter 4', link: 'chapter.html?manga=kka&chapter=4' },
                { name: 'Chapter 5', link: 'chapter.html?manga=kka&chapter=5' },
                { name: 'Chapter 6', link: 'chapter.html?manga=kka&chapter=6' },
                { name: 'Chapter 7', link: 'chapter.html?manga=kka&chapter=7' },
                { name: 'Chapter 8', link: 'chapter.html?manga=kka&chapter=8' },
                { name: 'Chapter 9', link: 'chapter.html?manga=kka&chapter=9' },
                { name: 'Chapter 10', link: 'chapter.html?manga=kka&chapter=10' },
                { name: 'Chapter 11', link: 'chapter.html?manga=kka&chapter=11' },
                { name: 'Chapter 12', link: 'chapter.html?manga=kka&chapter=12' },
                { name: 'Chapter 13', link: 'chapter.html?manga=kka&chapter=13' },
                { name: 'Chapter 14', link: 'chapter.html?manga=kka&chapter=14' },
                { name: 'Chapter 15', link: 'chapter.html?manga=kka&chapter=15' },
                { name: 'Chapter 16', link: 'chapter.html?manga=kka&chapter=16' },
                { name: 'Chapter 17', link: 'chapter.html?manga=kka&chapter=17' },
                { name: 'Chapter 18', link: 'chapter.html?manga=kka&chapter=18' },
                { name: 'Chapter 19', link: 'chapter.html?manga=kka&chapter=19' },
                { name: 'Chapter 20', link: 'chapter.html?manga=kka&chapter=20' },
                { name: 'Chapter 21', link: 'chapter.html?manga=kka&chapter=21' },
                { name: 'Chapter 22', link: 'chapter.html?manga=kka&chapter=22' },
                { name: 'Chapter 23', link: 'chapter.html?manga=kka&chapter=23' },
                { name: 'Chapter 24', link: 'chapter.html?manga=kka&chapter=24' },
                { name: 'Chapter 25', link: 'chapter.html?manga=kka&chapter=25' },
                { name: 'Chapter 26', link: 'chapter.html?manga=kka&chapter=26' },
                { name: 'Chapter 28', link: 'chapter.html?manga=kka&chapter=28' },
                { name: 'Chapter 29', link: 'chapter.html?manga=kka&chapter=29' },
                { name: 'Chapter 30', link: 'chapter.html?manga=kka&chapter=30' },
            ]
        },
        'kagura': {
            title: 'Kagurabachi',
            cover: 'pics/kagura.jpg',
            description: 'تدور أحداث مانغا "كاجوراباشي" حول بطل يُدعى "شين" الذي يسعى للانتقام لموت والده. يعيش شين في عالم يعج بالسيوف والفنون القتالية، ويبدأ رحلته للعثور على القتلة الذين دمروا حياته. خلال رحلته، يكتشف شين قوى جديدة ويواجه تحديات كبيرة، بينما يتعرف على أصدقاء وأعداء جدد. المانغا تجمع بين عناصر الأكشن والدراما، وتعرض قصة مثيرة عن الشجاعة والانتقام والتحدي. تسلط الضوء على رحلته الشخصية وصراعاته الداخلية، مما يجعلها قراءة مشوقة ومؤثرة.',
            chapters: [
                { name: 'Chapter 1: The Dance Begins', link: 'chapter.html?manga=kagura&chapter=1' },
                { name: 'Chapter 2: The Battle', link: 'chapter.html?manga=kagura&chapter=2' }
            ]
        },
        'cipher': {
            title: 'Cipher Academy',
            cover: 'pics/cipher.jpg',
            description: 'تدور أحداث مانغا "أكاديمية التشفير" في أكاديمية متخصصة في فنون التشفير وفك الشيفرات، حيث يتبع القصة طالبًا يُدعى "تاكوما" الذي يلتحق بالأكاديمية لتعلم أسرار التشفير وحل الألغاز المعقدة. تواجه تاكوما تحديات متعددة أثناء تعليمه، ويكتشف مع مرور الوقت أن الأكاديمية ليست كما تبدو، وأن هناك مؤامرات وأسرار خفية تهدد الجميع المانغا تجمع بين عناصر الإثارة والغموض والذكاء، وتعرض قصة مشوقة عن كيفية استخدام المهارات العقلية لحل الألغاز وتفكيك الشيفرات. تسلط الضوء على أهمية التفكير الاستراتيجي والعمل الجماعي في مواجهة التحديات.',
            chapters: [
                { name: 'Chapter 1: The Code', link: 'chapter.html?manga=cipher&chapter=1' },
                { name: 'Chapter 2: Breaking It', link: 'chapter.html?manga=cipher&chapter=2' }
            ]
        },
        'bloods-of-the-tracks': {
            title: 'Blood on the Tracks',
            cover: 'pics/bloods of thetracks.jpg',
            description: 'تدور أحداث مانغا "دماء على القضبان" حول حياة شخصية رئيسية تُدعى "شين" الذي يعيش حياة هادئة مع عائلته حتى يتعرض لحادث مروع يغير مجرى حياته. القصة تستعرض التحولات النفسية والعاطفية التي يمر بها شين بعد الحادث، وتكشف عن جوانب مظلمة وصراعات داخلية تعصف به المانغا تتناول موضوعات مثل الصدمة النفسية والعلاقات العائلية، وتقدم سردًا مشوقًا يعكس تأثير الأحداث المؤلمة على حياة الأفراد وكيفية تعاملهم معها. تجمع بين عناصر الدراما والإثارة، مما يجعلها تجربة قراءة مؤثرة ومليئة بالتفاصيل المعقدة.',
            chapters: [
                { name: 'Chapter 1: The Beginning of the End', link: 'chapter.html?manga=bloods-of-the-tracks&chapter=1' },
                { name: 'Chapter 2: Blood on the Tracks', link: 'chapter.html?manga=bloods-of-the-tracks&chapter=2' }
            ]
        },
        'punpun': {
            title: 'Goodnight Punpun',
            cover: 'pics/punpun.jpg',
            description: 'تدور أحداث مانغا "تصبحون على خير بون بون" حول حياة شخصية رئيسية تُدعى "بون بون"، وهو صبي صغير يواجه تحديات وصراعات متعددة في حياته. تتناول القصة مراحل نمو بون بون من الطفولة إلى مرحلة البلوغ، وتستعرض التغيرات النفسية والعاطفية التي يمر بها المانغا تقدم تصويرًا عميقًا ومعقدًا للحياة اليومية، وتستعرض قضايا مثل الاكتئاب، العلاقات العائلية، وتحديات النمو الشخصي. يجمع العمل بين عناصر الدراما والواقع، مما يجعله قراءة مؤثرة تعكس تجارب الحياة بصدق وحساسية.',
            chapters: [
                { name: 'Chapter 1: Innocence Lost', link: 'chapter.html?manga=punpun&chapter=1' },
                { name: 'Chapter 2: Growing Pains', link: 'chapter.html?manga=punpun&chapter=2' }
            ]
        },
        'firepunch': {
            title: 'Fire Punch',
            cover: 'pics/firepunch.webp',
            description: 'تدور أحداث مانغا "فاير بانش" في عالم دمرته كارثة غامضة وأصبح تحت سيطرة قوى خارقة. القصة تركز على شخصية رئيسية تُدعى "أغيرو" الذي يمتلك قدرة نارية مدمرة تجعله قادراً على إشعال النار دون توقف. بعد أن يقتل عائلته، يبدأ أغيرو رحلة انتقامية للعثور على المسؤولين واستعادة عائلته المانغا تقدم مزيجاً من الأكشن والخيال الداكن، مع استكشاف عميق للانتقام والألم والتحديات النفسية. تعكس القصة صراع الشخصية الرئيسية في عالم قاسٍ، وتعرض جوانب مثيرة ومؤثرة من تجاربها.',
            chapters: [
                { name: 'Chapter 1: The Flame', link: 'chapter.html?manga=firepunch&chapter=1' },
                { name: 'Chapter 2: Burning Desire', link: 'chapter.html?manga=firepunch&chapter=2' }
            ]
        },
        'homunculus': {
            title: 'Homunculus',
            cover: 'pics/homonuclus.webp',
            description: 'تدور أحداث مانغا "هومونكولوس" حول طبيب شاب يُدعى "ناكاهارا" الذي يقوم بإجراء تجارب على قدراته النفسية باستخدام تقنية فريدة. تبدأ القصة عندما يتعرض ناكاهارا لموقف يجعله يكتسب القدرة على رؤية العوالم الداخلية لعقول الناس، مما يكشف عن أعمق أسرارهم ومخاوفهم المانغا تستعرض موضوعات مثل الصحة النفسية، الهوية، والجنون، وتقدم مزيجاً من الإثارة والدراما النفسية. تسلط الضوء على الصراعات الداخلية للشخصيات وكيف تؤثر القوى النفسية على حياتهم وحياة من حولهم.',
            chapters: [
                { name: 'Chapter 1: The Experiment', link: 'chapter.html?manga=homunculus&chapter=1' },
                { name: 'Chapter 2: Awakening', link: 'chapter.html?manga=homunculus&chapter=2' }
            ]
        },
        'nagumo': {
            title: 'Sakamoto Days',
            cover: 'pics/Nagumo.jpg',
            description: 'تدور أحداث مانغا "أيام ساكاموتو" حول شخصية رئيسية تُدعى "ساكاموتو"، وهو قاتل محترف سابق قرر التقاعد للعيش حياة هادئة مع عائلته. لكن حياته الهادئة تنقلب رأسًا على عقب عندما يجد نفسه مجددًا في عالم الجريمة، حيث يُجبر على استخدام مهاراته السابقة لمواجهة تهديدات جديدة المانغا تجمع بين الأكشن والكوميديا، وتستعرض مغامرات ساكاموتو وهو يحاول التوازن بين حياته القديمة كقاتل والحياة الأسرية التي يسعى للحفاظ عليها. القصة تقدم مزيجًا من الإثارة والفكاهة، مع شخصيات متنوعة وتحديات مثيرة.',
            chapters: [
                { name: 'Chapter 1: The Journey Begins', link: 'chapter.html?manga=nagumo&chapter=1' },
                { name: 'Chapter 2: Trials and Tribulations', link: 'chapter.html?manga=nagumo&chapter=2' }
            ]
        },
        'pumpkin-night': {
            title: 'Pumpkin Night',
            cover: 'pics/Pumpkin night.jpg',
            description: 'تدور أحداث مانغا "ليلة اليقطين" حول فتاة تُدعى "كاجوري" التي تحولت إلى قاتلة متعطشة للانتقام بعد تعرضها للظلم والإيذاء. تعود كاجوري إلى بلدتها القديمة في عيد الهالوين، حيث تبدأ في تنفيذ خطة انتقامها ضد أولئك الذين ظلموها المانغا تجمع بين عناصر الرعب والإثارة، وتستعرض صراعات كاجوري الداخلية والخارجية بينما تسعى لتحقيق هدفها. تركز القصة على القضايا النفسية والعاطفية، وتعرض أحداثًا مشوقة ومؤثرة تجذب القارئ في عالم مظلم ومرعب.',
            chapters: [
                { name: 'Chapter 1: The Night Begins', link: 'chapter.html?manga=pumpkin-night&chapter=1' },
                { name: 'Chapter 2: The Terror', link: 'chapter.html?manga=pumpkin-night&chapter=2' }
            ]
        },
        'record-of-ragnarok': {
            title: 'Record of Ragnarok',
            cover: 'pics/Record Of Ragnarok Vol_ 1 by Shinya Umemura Paperback _ Indigo Chapters.jpg',
            description: 'تدور أحداث مانغا "سجل راجناروك" حول معركة ملحمية بين الآلهة والبشر. تبدأ القصة عندما تقرر الآلهة إنهاء البشرية بسبب ما يعتبرونه فسادًا وسوء تصرف. ولكن، قبل تنفيذ حكم الإعدام على البشر، تقرر الآلهة أن يمنحوا البشر فرصة أخيرة لإنقاذ أنفسهم من خلال سلسلة من المبارزات القتالية بين الآلهة والمحاربين البشريين من مختلف العصور المانغا تجمع بين الأكشن والتشويق، حيث تقدم معارك مثيرة ومهارات قتالية متفجرة. تستعرض القصة الشجاعة والإرادة البشرية ضد القوى الإلهية، مما يجعلها قراءة مشوقة لمحبي الأساطير والمعارك الكبيرة.',
            chapters: [
                { name: 'Chapter 1: The Call', link: 'chapter.html?manga=record-of-ragnarok&chapter=1' },
                { name: 'Chapter 2: The Battle', link: 'chapter.html?manga=record-of-ragnarok&chapter=2' }
            ]
        },
        'jjk': {
            title: 'Jujutsu Kaisen',
            cover: 'pics/jjk.jpg',
            description: 'تدور أحداث مانغا "جوجوتسو كايسن" حول شخصية رئيسية تُدعى "يوجي إيتادوري"، وهو طالب في المدرسة الثانوية يعيش حياة طبيعية حتى يكتشف وجود قوى شريرة تعرف بـ"اللعنات". بعد أن يتناول يوجي أصبعًا ملعونًا، يصبح مضطراً لدخول عالم الجوجوتسو، وهو فن قتال يستخدم لمواجهة اللعنات وحمايتهم المانغا تجمع بين الأكشن والخيال، حيث تقدم معارك مثيرة ومهارات قتالية رائعة ضد قوى الشر. تركز القصة على تدريب يوجي وتطوره كطالب جوجوتسو، وتستعرض مواضيع مثل الشجاعة والتضحية والصداقة. تجذب "جوجوتسو كايسن" محبي الأثارة والخيال بعالمها الغني والمعقد.',
            chapters: [
                { name: 'Chapter 1: The Curse', link: 'chapter.html?manga=jjk&chapter=1' },
                { name: 'Chapter 2: The Sorcerer', link: 'chapter.html?manga=jjk&chapter=2' }
            ]
        },
        '20th-century-boys': {
            title: '20th Century Boys',
            cover: 'pics/20th Century Boys (vol_ 20) by Naoki Urasawa, with the cooperation of Takashi Nagasaki, English adaptation by Akemi Wegmüller - BookDragon.jpg',
            description: 'تدور أحداث مانغا "أولاد القرن العشرين" حول مجموعة من الأصدقاء الذين كانوا يلعبون لعبة خيالية في طفولتهم، حيث خلقوا سيناريوهات لمستقبل مليء بالمغامرات والأحداث المدهشة. لكن مع مرور الوقت، يبدأون في اكتشاف أن هذه اللعبة الخيالية تتحقق تدريجيًا في الواقع، مما يهدد مستقبل البشرية تجمع المانغا بين عناصر الإثارة والغموض، حيث تقدم قصة معقدة مليئة بالمفاجآت والتوتر. تركز على مواضيع مثل الصداقة، المؤامرات، والتحديات التي تواجه الأبطال بينما يسعون لإيقاف التهديدات التي تواجه عالمهم. "أولاد القرن العشرين" تعرض سردًا مثيرًا ومؤثرًا يجذب القارئ في عالم مليء بالغموض والأحداث المثيرة.',
            chapters: [
                { name: 'Chapter 1: The Beginning', link: 'chapter.html?manga=20th-century-boys&chapter=1' },
                { name: 'Chapter 2: The Plot', link: 'chapter.html?manga=20th-century-boys&chapter=2' }
            ]
        },
        'dandadan': {
            title: 'Dandadan',
            cover: 'pics/dandadan.jpg',
            description: 'تدور أحداث مانغا "دانادان" حول مغامرات شخصيتين رئيسيتين: "أوهارا" و"كوسوكي". يلتقيان في ظروف غير عادية ويكتشفان أنهما يملكان قوى خارقة. القصة تستعرض رحلاتهما المثيرة بينما يتعاملان مع كائنات خارقة وأحداث غامضة تحدث في عالم مليء بالأساطير والخرافات المانغا تجمع بين الأكشن والخيال والفانتازيا، حيث تقدم معارك مثيرة ومواقف كوميدية مثيرة. تركز على التحديات التي يواجهها الأبطال وكيفية استخدام قواهما لمواجهة الأعداء وحل الألغاز. "دانادان" تقدم تجربة قراءة ممتعة تجمع بين الإثارة والمرح في عالم مليء بالغرائب.',
            chapters: [
                { name: 'Chapter 1: The Encounter', link: 'chapter.html?manga=dandadan&chapter=1' },
                { name: 'Chapter 2: The Truth', link: 'chapter.html?manga=dandadan&chapter=2' }
            ]
        },
        'vagabond': {
            title: 'Vagabond',
            cover: 'pics/Vagabond, Vol_ 1.jpg',
            description: 'ستكون هذه المانغا متاحة قريبًا!',
            chapters: [
              
            ]
        },
        'csm': {
            title: 'Chainsaw Man',
            cover: 'pics/csm.jpg',
            description: 'ستكون هذه المانغا متاحة قريبًا!',
            chapters: [
               
            ]
        },
        'tomodachi-game': {
            title: 'Tomodachi Game',
            cover: 'pics/tmg.jpg',
            description: 'تدور أحداث مانغا "لعبة الأصدقاء" حول مجموعة من الأصدقاء الذين يتم اختطافهم وإجبارهم على المشاركة في لعبة نفسية خطيرة. في هذه اللعبة، يُطلب منهم مواجهة تحديات نفسية ومعنوية تتطلب منهم التعاون والتلاعب ببعضهم البعض. الهدف من اللعبة هو كشف خبايا العلاقات والصراعات الداخلية بين الأصدقاء المانغا تجمع بين الإثارة والتشويق، حيث تقدم قصة مليئة بالألغاز والتوترات النفسية. تستعرض القصة كيفية تأثير الضغط والتحديات على العلاقات بين الأصدقاء، وتطرح أسئلة حول الثقة والخيانة والتضحية. "لعبة الأصدقاء" تقدم تجربة قراءة مثيرة ومعقدة تكشف عن جوانب مختلفة من النفس البشرية.',
            chapters: [
                { name: 'Chapter 1: The Game Begins', link: 'chapter.html?manga=tomodachi-game&chapter=1' },
                { name: 'Chapter 2: Friend or Foe', link: 'chapter.html?manga=tomodachi-game&chapter=2' }
            ]
        },
        'tokyo-ghoul': {
            title: 'Tokyo Ghoul',
            cover: 'pics/tokyoghoul.jpg',
            description: 'تدور أحداث مانغا "طوكيو غول" حول "كنيكي كين"، طالب جامعي يتحول إلى نصف غول بعد تعرضه لهجوم من أحد الغول. يجد كنيكي نفسه في عالم خفي حيث يعيش الغول، وهم كائنات تتغذى على البشر وتخفي وجودها عن المجتمع. يجب على كنيكي الآن التكيف مع حياته الجديدة والعيش بين الغول، بينما يتعامل مع صراعاته الداخلية ومخاوفه المانغا تجمع بين عناصر الرعب، الإثارة والدراما، وتستعرض معاناة كنيكي وتطوره في عالم مليء بالتهديدات والقلق. تقدم "طوكيو غول" قصة غنية بالعمق والتوتر، وتستكشف قضايا الهوية والبقاء في عالم معقد ومظلم.',
            chapters: [
                { name: 'Chapter 1: The Ghoul', link: 'chapter.html?manga=tokyo-ghoul&chapter=1' },
                { name: 'Chapter 2: The Struggle', link: 'chapter.html?manga=tokyo-ghoul&chapter=2' }
            ]
        },
    };
    
    // Get URL parameters to determine which manga to display
    const urlParams = new URLSearchParams(window.location.search);
    const selectedManga = urlParams.get('manga');

    if (selectedManga && mangaData[selectedManga]) {
        const manga = mangaData[selectedManga];
        document.getElementById('manga-title').textContent = manga.title;
        document.getElementById('manga-cover').src = manga.cover;
        document.getElementById('manga-description').textContent = manga.description;

        const chaptersDiv = document.getElementById('manga-chapters');
        manga.chapters.forEach(chapter => {
            const chapterLink = document.createElement('a');
            chapterLink.href = chapter.link;
            chapterLink.textContent = chapter.name;
            chaptersDiv.appendChild(chapterLink);
            chaptersDiv.appendChild(document.createElement('br'));
        });
    } else {
        document.getElementById('manga-title').textContent = 'Manga Not Found';
        document.getElementById('manga-description').textContent = 'Sorry, the manga you are looking for does not exist.';
    }
});

